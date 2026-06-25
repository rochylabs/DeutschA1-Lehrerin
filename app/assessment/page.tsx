"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ASSESSMENT_QUESTIONS, scoreToLevel } from "@/data/assessment";

type Phase = "intro" | "quiz" | "writing" | "submitting" | "done";

export default function AssessmentPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [writingText, setWritingText] = useState("");
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [level, setLevel] = useState<"A1.1" | "A1.2" | null>(null);

  const q = ASSESSMENT_QUESTIONS[current];
  const total = ASSESSMENT_QUESTIONS.length;

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
      const correct = ASSESSMENT_QUESTIONS.filter((q) => updated[q.id] === q.answer).length;
      const lvl = scoreToLevel(correct);
      setLevel(lvl);
      setPhase("writing");
    }
  }

  async function submitWriting() {
    setPhase("submitting");
    try {
      const correct = ASSESSMENT_QUESTIONS.filter((q) => answers[q.id] === q.answer).length;
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

  if (phase === "intro") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6">
        <h1 className="text-3xl font-bold text-foreground">Level Assessment</h1>
        <p className="text-muted max-w-sm leading-relaxed">
          15 quick questions to find your starting point. Takes about 5 minutes.
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
        {/* Progress bar */}
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((current) / total) * 100}%` }}
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
          Write 2–4 sentences about yourself in German (or English if you&apos;re a complete beginner). Our AI will personalize your plan further.
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

  // done
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
