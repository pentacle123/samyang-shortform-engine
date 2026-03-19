import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { resolve } from "path";

export const dynamic = "force-dynamic";

function getAnthropicKey() {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    const content = readFileSync(envPath, "utf-8");
    const match = content.match(/^ANTHROPIC_API_KEY=(.+)$/m);
    if (match) return match[1].trim();
  } catch (e) {}
  return null;
}

export async function POST(req) {
  const API_KEY = getAnthropicKey();
  if (!API_KEY) {
    return NextResponse.json({ error: "no_key" }, { status: 200 });
  }

  try {
    const { prompt } = await req.json();
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8192,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const d = await resp.json();
    if (d.error) {
      return NextResponse.json({ error: d.error.message }, { status: 200 });
    }
    const text = d.content?.map((c) => c.text || "").join("") || "";
    return NextResponse.json({ text, stop_reason: d.stop_reason });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 200 });
  }
}
