"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"sign_in" | "sign_up">("sign_in");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } =
      mode === "sign_in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else if (mode === "sign_up") {
      setSent(true);
    } else {
      router.push("/plan");
    }
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/plan` },
    });
  }

  if (sent) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4">
        <p className="text-center text-lg">
          Check your email for a confirmation link, then sign in.
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">
          {mode === "sign_in" ? "Sign in to Genau" : "Create your account"}
        </h1>

        <button
          onClick={handleGoogle}
          className="w-full border rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <hr className="flex-1" /> or <hr className="flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-lg px-4 py-2 text-sm font-medium disabled:opacity-50"
          >
            {loading ? "…" : mode === "sign_in" ? "Sign in" : "Sign up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          {mode === "sign_in" ? "No account?" : "Have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "sign_in" ? "sign_up" : "sign_in")}
            className="underline"
          >
            {mode === "sign_in" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </main>
  );
}
