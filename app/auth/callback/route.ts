import { createSupabaseServer } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");
  // Only allow same-origin redirects to prevent open redirect attacks
  const next = searchParams.get("next") ?? "/plan";
  const safePath = next.startsWith("/") && !next.startsWith("//") ? next : "/plan";

  if (code) {
    const supabase = await createSupabaseServer();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`${origin}${safePath}`);
}
