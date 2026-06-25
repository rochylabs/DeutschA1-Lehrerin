import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
        <Image src="/genau-logo.svg" alt="Genau" width={120} height={37} priority />

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center gap-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
          🇩🇪 Goethe A1–A2 curriculum
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-2xl">
          Learn German.<br />
          <span className="text-primary">At your own pace.</span>
        </h1>
        <p className="text-lg text-muted max-w-md leading-relaxed">
          Built for newcomers in Germany. Take a quick assessment, get a personalized learning plan, and stay motivated every day.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors text-base"
          >
            Start Learning →
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="grid sm:grid-cols-3 gap-4 px-6 pb-16 max-w-4xl mx-auto w-full">
        {[
          { icon: "🎯", title: "Placement test", desc: "Know your exact starting point in under 5 minutes." },
          { icon: "🗓️", title: "Structured plan", desc: "28 units covering all A1–A2 topics, tailored to your level." },
          { icon: "🔥", title: "Streaks & rewards", desc: "Daily goals, XP, and badges keep you coming back." },
        ].map((f) => (
          <div key={f.title} className="bg-surface rounded-2xl border border-border p-6 flex flex-col gap-3">
            <span className="text-3xl">{f.icon}</span>
            <h3 className="font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
