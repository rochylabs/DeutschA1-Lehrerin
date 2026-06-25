import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const VALID_LEVELS = ["A1.1", "A1.2"] as const;
type Level = (typeof VALID_LEVELS)[number];

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ feedback: null, level: "A1.1" });
  }

  const body = await req.json();
  const mcqLevel: Level = VALID_LEVELS.includes(body.mcqLevel) ? body.mcqLevel : "A1.1";
  const mcqScore = Math.min(15, Math.max(0, Number(body.mcqScore) || 0));
  // sanitize: cap length, strip backticks and quotes to prevent prompt injection
  const text = typeof body.text === "string"
    ? body.text.slice(0, 500).replace(/[`"\\]/g, "")
    : "";

  if (text.trim().length < 5) {
    return NextResponse.json({ feedback: null, level: mcqLevel });
  }

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `You are a German language teacher assessing a beginner learner (CEFR A1 level).

The learner wrote: "${text}"

Their MCQ quiz score placed them at ${mcqLevel} (A1.1 = total beginner, A1.2 = knows basics).
MCQ score: ${mcqScore}/15

Respond with JSON only, no markdown:
{
  "level": "A1.1" | "A1.2",
  "feedback": "2-3 encouraging sentences in simple English: what they did well, one specific thing to work on"
}

Rules:
- If the text is in English, still assess their German knowledge from context clues; default to MCQ level
- Never change the level by more than one step from MCQ level
- Be warm and encouraging`,
      },
    ],
  });

  try {
    const raw = (message.content[0] as { type: string; text: string }).text.trim();
    const parsed = JSON.parse(raw);
    const level: Level = VALID_LEVELS.includes(parsed.level) ? parsed.level : mcqLevel;
    return NextResponse.json({ level, feedback: parsed.feedback ?? null });
  } catch {
    return NextResponse.json({ level: mcqLevel, feedback: null });
  }
}
