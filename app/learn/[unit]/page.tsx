"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UNITS } from "@/lib/units";
import { Lesson, LessonScreen, FlashCard, FillBlankExercise, QuizQuestion } from "@/data/types";

const VALID_SLUGS = new Set(["guten-tag","ich-bin","meine-familie","artikel-nomen","wohnen","alltagsverben","zahlen-zeit","akkusativ","essen-trinken","modal-verben","in-der-stadt","a1-review"]);

async function loadLesson(slug: string): Promise<Lesson | null> {
  if (!VALID_SLUGS.has(slug)) return null;
  try {
    const mod = await import(`@/data/lessons/${slug}`);
    return mod.default as Lesson;
  } catch {
    return null;
  }
}

export default function LearnPage({ params }: { params: Promise<{ unit: string }> }) {
  const { unit: slug } = use(params);
  const router = useRouter();
  const unitMeta = UNITS.find((u) => u.slug === slug);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [screen, setScreen] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [fillAnswer, setFillAnswer] = useState("");
  const [fillResult, setFillResult] = useState<"correct" | "wrong" | null>(null);
  const [fillIdx, setFillIdx] = useState(0);
  const [quizSelected, setQuizSelected] = useState<string | null>(null);
  const [quizIdx, setQuizIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    loadLesson(slug).then(setLesson);
  }, [slug]);

  function advance() {
    if (!lesson) return;
    if (screen + 1 < lesson.screens.length) {
      setScreen(screen + 1);
      setCardIndex(0);
      setFlipped(false);
      setFillIdx(0);
      setFillAnswer("");
      setFillResult(null);
      setQuizIdx(0);
      setQuizSelected(null);
    } else {
      completeUnit();
    }
  }

  function completeUnit() {
    if (!unitMeta) return;
    const completed: number[] = JSON.parse(localStorage.getItem("genau_completed") ?? "[]");
    if (!completed.includes(unitMeta.id)) {
      completed.push(unitMeta.id);
      localStorage.setItem("genau_completed", JSON.stringify(completed));
      const xp = Number(localStorage.getItem("genau_xp") ?? 0) + unitMeta.xp;
      localStorage.setItem("genau_xp", String(xp));
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-6">
        <div className="text-6xl">🎉</div>
        <h1 className="text-2xl font-bold text-foreground">Unit complete!</h1>
        <p className="text-muted">You earned <span className="text-accent font-bold">+{unitMeta?.xp} XP</span></p>
        <button
          onClick={() => router.push("/plan")}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors"
        >
          Back to plan →
        </button>
      </div>
    );
  }

  if (!lesson) {
    // Placeholder for units without content yet
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-6">
        <div className="text-5xl">🚧</div>
        <h1 className="text-2xl font-bold text-foreground">{unitMeta?.title ?? slug}</h1>
        <p className="text-muted">This unit is coming soon. Content is being prepared.</p>
        <button
          onClick={() => router.push("/plan")}
          className="border border-border text-muted font-medium px-8 py-3.5 rounded-full hover:bg-border/30 transition-colors"
        >
          ← Back to plan
        </button>
      </div>
    );
  }

  const currentScreen: LessonScreen = lesson.screens[screen];

  if (currentScreen.type === "intro") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center gap-6 max-w-md mx-auto">
        <div className="text-5xl">📖</div>
        <h1 className="text-3xl font-bold text-foreground">{currentScreen.title}</h1>
        <p className="text-muted leading-relaxed">{currentScreen.body}</p>
        <button
          onClick={advance}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors"
        >
          Start →
        </button>
      </div>
    );
  }

  if (currentScreen.type === "flashcard") {
    const cards: FlashCard[] = currentScreen.cards;
    const card = cards[cardIndex];
    const isLast = cardIndex === cards.length - 1;
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 max-w-md mx-auto">
        <div className="text-sm text-muted">{cardIndex + 1} / {cards.length}</div>
        <button
          onClick={() => setFlipped(!flipped)}
          className="w-full bg-surface border border-border rounded-3xl p-10 text-center cursor-pointer hover:border-primary/40 transition-all min-h-48 flex flex-col items-center justify-center gap-3"
        >
          {!flipped ? (
            <>
              <p className="text-4xl font-bold text-foreground">{card.front}</p>
              <p className="text-xs text-muted mt-2">Tap to reveal</p>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-primary">{card.back}</p>
              <p className="text-sm text-muted italic mt-2">{card.example}</p>
            </>
          )}
        </button>
        <button
          onClick={() => {
            if (isLast) advance();
            else { setCardIndex(cardIndex + 1); setFlipped(false); }
          }}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors"
        >
          {isLast ? "Continue →" : "Next card →"}
        </button>
      </div>
    );
  }

  if (currentScreen.type === "fill_blank") {
    const exercises: FillBlankExercise[] = currentScreen.exercises;
    const ex = exercises[fillIdx];
    const isLast = fillIdx === exercises.length - 1;
    const parts = ex.sentence.split("___");
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 max-w-md mx-auto">
        <div className="text-sm text-muted">{fillIdx + 1} / {exercises.length}</div>
        <p className="text-xs text-muted">{ex.hint}</p>
        <div className="text-xl font-semibold text-foreground text-center">
          {parts[0]}
          <input
            type="text"
            value={fillAnswer}
            onChange={(e) => { setFillAnswer(e.target.value); setFillResult(null); }}
            disabled={fillResult !== null}
            placeholder="___"
            className={`inline-block w-28 border-b-2 text-center outline-none px-1 mx-1 ${
              fillResult === "correct" ? "border-green-500 text-green-600" :
              fillResult === "wrong" ? "border-red-500 text-red-600" : "border-primary"
            }`}
          />
          {parts[1]}
        </div>
        {fillResult === "wrong" && (
          <p className="text-sm text-red-500">Correct answer: <strong>{ex.answer}</strong></p>
        )}
        {fillResult === "correct" && <p className="text-sm text-green-600">Richtig! ✓</p>}
        <button
          onClick={() => {
            if (!fillResult) {
              const correct = fillAnswer.trim().toLowerCase() === ex.answer.toLowerCase();
              setFillResult(correct ? "correct" : "wrong");
              if (correct) setScore(score + 1);
            } else if (isLast) {
              advance();
            } else {
              setFillIdx(fillIdx + 1); setFillAnswer(""); setFillResult(null);
            }
          }}
          disabled={!fillAnswer.trim() && !fillResult}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors disabled:opacity-40"
        >
          {!fillResult ? "Check" : isLast ? "Continue →" : "Next →"}
        </button>
      </div>
    );
  }

  if (currentScreen.type === "quiz") {
    const questions: QuizQuestion[] = currentScreen.questions;
    const q = questions[quizIdx];
    const isLast = quizIdx === questions.length - 1;
    const revealed = quizSelected !== null;
    return (
      <div className="flex flex-col min-h-screen px-6 py-10 max-w-md mx-auto gap-6">
        <div className="text-sm text-muted">{quizIdx + 1} / {questions.length}</div>
        <h2 className="text-xl font-semibold text-foreground leading-snug">{q.question}</h2>
        <div className="flex flex-col gap-3">
          {q.options.map((opt) => {
            let style = "border-border bg-surface hover:border-primary/40";
            if (revealed) {
              if (opt === q.answer) style = "border-green-500 bg-green-50 text-green-700 font-medium";
              else if (opt === quizSelected) style = "border-red-400 bg-red-50 text-red-600";
            } else if (quizSelected === opt) {
              style = "border-primary bg-primary/10 text-primary font-medium";
            }
            return (
              <button
                key={opt}
                onClick={() => !revealed && setQuizSelected(opt)}
                className={`w-full text-left px-5 py-4 rounded-2xl border text-base transition-all ${style}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            if (!revealed) {
              if (quizSelected === q.answer) setScore(score + 1);
              // show reveal by keeping quizSelected set
            } else if (isLast) {
              advance();
            } else {
              setQuizIdx(quizIdx + 1); setQuizSelected(null);
            }
          }}
          disabled={!quizSelected}
          className="bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors disabled:opacity-40"
        >
          {!revealed ? "Check" : isLast ? "Finish unit →" : "Next →"}
        </button>
      </div>
    );
  }

  return null;
}
