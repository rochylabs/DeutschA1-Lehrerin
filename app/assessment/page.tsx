"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getQuestions, scoreToLevel, Picker } from "@/data/assessment";

type Phase = "picker" | "intro" | "quiz" | "writing" | "submitting" | "done";

export default function AssessmentPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("picker");
  const [picker, setPicker] = useState<Picker>("A1");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [writingText, setWritingText] = useState("");
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [level, setLevel] = useState<"A1.1" | "A1.2" | "A2.1" | "A2.2" | null>(null);

  const questions = getQuestions(picker);
  const q = questions[current];
  const total = questions.length;

  function pick(option: string) {
    setSelected(option);
  }

  function next() {
    if (!selected) return;
    const updated = { ...answers, [q.id]: selected };
    setAnswers(updated);
    setSelected(null);
    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      const correct = questions.filter((q) => updated[q.id] === q.answer).length;
      const lvl = scoreToLevel(correct, picker);
      setLevel(lvl);
      setPhase("writing");
    }
  }

  async function submitWriting() {
    setPhase("submitting");
    try {
      const correct = questions.filter((q) => answers[q.id] === q.answer).length;
      const res = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: writingText, mcqScore: correct, mcqLevel: level }),
      });
      const data = await res.json();
      setAiFeedback(data.feedback);
      if (data.level) setLevel(data.level);
    } catch {
      // ponytail: silently fall back to MCQ level if AI call fails
    }
    setPhase("done");
  }

  function finish() {
    if (level) {
      localStorage.setItem("genau_level", level);
      localStorage.setItem("genau_xp", "0");
      localStorage.setItem("genau_streak", "0");
    }
    router.push("/plan");
  }

  if (phase === "picker") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-8 max-w-lg mx-auto">
        <button onClick={() => router.push("/")} className="self-start text-sm text-muted hover:text-foreground transition-colors">← Home</button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Select your level</h1>
          <p className="text-muted mt-2">We'll tailor your assessment and learning plan to your level.</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {(["A1", "A2"] as Picker[]).map((p) => (
            <button
              key={p}
              onClick={() => setPicker(p)}
              className={`flex flex-col items-start gap-1 border-2 rounded-2xl px-6 py-5 transition-all text-left ${
                picker === p
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <span className="text-2xl">{p === "A1" ? "🌱" : "📖"}</span>
              <span className="font-bold text-foreground text-lg">
                {p === "A1" ? "Complete beginner" : "I know some German"}
              </span>
              <span className="text-sm text-muted">
                {p === "A1" ? "I'm new to German — start me at A1" : "I've studied before — assess me at A2"}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={() => setPhase("intro")}
          className="w-full bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors"
        >
          Start free assessment →
        </button>
        <button
          onClick={() => {
            localStorage.setItem("genau_level", picker === "A2" ? "A2.1" : "A1.1");
            localStorage.setItem("genau_xp", "0");
            localStorage.setItem("genau_streak", "0");
            router.push("/plan");
          }}
          className="text-sm text-muted underline decoration-dotted hover:text-foreground transition-colors"
        >
          Skip assessment — start at {picker === "A2" ? "A2.1" : "A1.1"}
        </button>
      </div>
    );
  }

  if (phase === "intro") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6">
        <button onClick={() => setPhase("picker")} className="self-start text-sm text-muted hover:text-foreground transition-colors">← Back</button>
        <h1 className="text-3xl font-bold text-foreground">Level Assessment</h1>
        <p className="text-muted max-w-sm leading-relaxed">
          15 quick {picker} questions to find your exact starting point. Takes about 5 minutes.
        </p>
        <button
          onClick={() => setPhase("quiz")}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors"
        >
          Let&apos;s go →
        </button>
      </div>
    );
  }

  if (phase === "quiz") {
    return (
      <div className="flex flex-col min-h-screen px-6 py-10 max-w-lg mx-auto gap-6">
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>
        <span className="text-sm text-muted">{current + 1} / {total}</span>

        <div className="flex-1 flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            {q.type === "vocab" ? "Vocabulary" : q.type === "grammar" ? "Grammar" : "Reading"}
          </span>
          <h2 className="text-xl font-semibold text-foreground leading-snug">{q.question}</h2>
          <div className="flex flex-col gap-3">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => pick(opt)}
                className={`w-full text-left px-5 py-4 rounded-2xl border text-base transition-all ${
                  selected === opt
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border bg-surface hover:border-primary/40"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={!selected}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {current + 1 === total ? "See results →" : "Next →"}
        </button>
      </div>
    );
  }

  if (phase === "writing") {
    return (
      <div className="flex flex-col min-h-screen px-6 py-10 max-w-lg mx-auto gap-6">
        <h2 className="text-2xl font-bold text-foreground">One more step</h2>
        <p className="text-muted leading-relaxed">
          Write 2–4 sentences about yourself in German. Our AI will personalize your plan further.
        </p>
        <textarea
          value={writingText}
          onChange={(e) => setWritingText(e.target.value)}
          placeholder="z.B. Ich heiße Maria. Ich komme aus Spanien. Ich lerne seit einem Monat Deutsch."
          className="w-full h-40 border border-border rounded-2xl p-4 text-base resize-none focus:outline-none focus:border-primary"
        />
        <div className="flex gap-3">
          <button
            onClick={submitWriting}
            disabled={writingText.trim().length < 5}
            className="flex-1 bg-primary text-white font-semibold py-3.5 rounded-full hover:bg-primary-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Analyse →
          </button>
          <button
            onClick={finish}
            className="flex-1 border border-border text-muted py-3.5 rounded-full hover:bg-border/30 transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    );
  }

  if (phase === "submitting") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-muted">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p>Analysing your German…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6 max-w-md mx-auto">
      <div className="text-5xl">🎉</div>
      <h1 className="text-3xl font-bold text-foreground">Your level: {level}</h1>
      {aiFeedback && (
        <p className="text-muted leading-relaxed bg-surface border border-border rounded-2xl p-5 text-left text-sm">
          {aiFeedback}
        </p>
      )}
      <button
        onClick={finish}
        className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors"
      >
        See my learning plan →
      </button>
    </div>
  );
}
