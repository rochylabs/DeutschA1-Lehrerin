# Copilot Instructions

This is **Genau** — a Next.js 16 App Router app for self-paced A1 German learning.

## Review focus
- TypeScript correctness — no `any`, no implicit `any`
- No A1.3 level references — only A1.1 and A1.2 are valid sub-levels
- Lesson data files in `data/lessons/` must export a default `Lesson` matching `data/types.ts`
- localStorage keys: `genau_level`, `genau_xp`, `genau_streak`, `genau_completed`
- No new dependencies without justification — prefer stdlib and already-installed packages
- API routes must handle errors gracefully and never expose stack traces
