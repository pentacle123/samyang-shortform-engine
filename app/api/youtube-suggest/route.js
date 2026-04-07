import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "buldak";

  try {
    const res = await fetch(
      `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${encodeURIComponent(query)}&gl=us`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const text = await res.text();
    const match = text.match(/\[.*\]/s);
    if (match) {
      const data = JSON.parse(match[0]);
      const suggestions = (data[1] || []).map((item) => (Array.isArray(item) ? item[0] : item));
      return NextResponse.json({ ok: true, query, suggestions });
    }
    return NextResponse.json({ ok: false, error: "parse_failed" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  }
}
