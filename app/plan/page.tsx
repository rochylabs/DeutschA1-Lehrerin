"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UNITS, getStartUnit, Unit } from "@/lib/units";

const TYPE_ICON: Record<string, string> = {
  vocab: "📚",
  grammar: "✏️",
  practice: "🎯",
  review: "⭐",
};

export default function PlanPage() {
  const [level, setLevel] = useState<string | null>(null);
  const [xp, setXp] = useState(0);
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [startUnit, setStartUnit] = useState(1);

  useEffect(() => {
    const raw = localStorage.getItem("genau_level");
    const LEVELS = ["A1.1", "A1.2", "A2.1", "A2.2"] as const;
    const lvl = LEVELS.includes(raw as never) ? (raw as typeof LEVELS[number]) : null;
    const xpVal = Number(localStorage.getItem("genau_xp") ?? 0);
    const completed = JSON.parse(localStorage.getItem("genau_completed") ?? "[]") as number[];
    setLevel(lvl);
    setXp(xpVal);
    setCompletedIds(completed);
    if (lvl) setStartUnit(getStartUnit(lvl));
  }, []);

  const nextUnit = UNITS.find((u) => !completedIds.includes(u.id) && u.id >= startUnit) ?? UNITS[0];

  function isUnlocked(u: Unit) {
    return u.id === startUnit || completedIds.includes(u.id - 1) || completedIds.includes(u.id);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
        <Link href="/" className="text-xl font-bold text-primary">Genau</Link>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted">⚡ {xp} XP</span>
          {level && <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{level}</span>}
        </div>
      </nav>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-8 flex flex-col gap-8">
        {/* Continue CTA */}
        {nextUnit && (
          <Link
            href={`/learn/${nextUnit.slug}`}
            className="flex items-center justify-between bg-primary text-white rounded-2xl px-6 py-5 hover:bg-primary-light transition-colors"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-75">Continue learning</p>
              <p className="text-lg font-bold mt-0.5">{nextUnit.title}</p>
              <p className="text-sm opacity-75">{nextUnit.subtitle}</p>
            </div>
            <span className="text-3xl">→</span>
          </Link>
        )}

        {/* Unit list */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Your Learning Journey</h2>
          {UNITS.map((u) => {
            const done = completedIds.includes(u.id);
            const unlocked = isUnlocked(u);
            return (
              <div
                key={u.id}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-4 transition-all ${
                  done
                    ? "border-primary/30 bg-primary/5"
                    : unlocked
                    ? "border-border bg-surface hover:border-primary/30"
                    : "border-border bg-border/20 opacity-50"
                }`}
              >
                <span className="text-2xl w-8 shrink-0 text-center">{done ? "✅" : TYPE_ICON[u.type]}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{u.title}</p>
                  <p className="text-xs text-muted truncate">{u.subtitle}</p>
                  <p className="text-xs text-muted mt-0.5">
                    <span className="text-accent font-medium">+{u.xp} XP</span>
                    <span className="mx-1">·</span>
                    {u.estimatedMinutes} min
                  </p>
                </div>
                {unlocked && !done && (
                  <Link
                    href={`/learn/${u.slug}`}
                    className="shrink-0 text-xs font-semibold text-primary hover:underline"
                  >
                    Start →
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Exam link */}
        <div className="border border-border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-3 bg-surface">
          <span className="text-3xl">📝</span>
          <div className="flex-1">
            <p className="font-semibold text-foreground">Practice the Goethe A1 Exam</p>
            <p className="text-sm text-muted">Full exam simulator with listening, reading, writing & speaking.</p>
          </div>
          <a
            href="https://german-a1-prep.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Open →
          </a>
        </div>
      </main>
    </div>
  );
}
