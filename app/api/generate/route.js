import { NextResponse } from "next/server";

export async function POST(req) {
  const API_KEY = process.env.ANTHROPIC_API_KEY;
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
        max_tokens: 4000,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const d = await resp.json();
    if (d.error) {
      return NextResponse.json({ error: d.error.message }, { status: 200 });
    }
    const text = d.content?.map((c) => c.text || "").join("") || "";
    return NextResponse.json({ text });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 200 });
  }
}
