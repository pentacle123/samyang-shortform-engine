"use client";
import { useState } from "react";
import { tangleOpportunityDetails } from "./tangleOpportunityDetails";
import { opportunityTargetProfiles, assetToProfileId } from "./opportunityTargetProfiles";

const G = "#1a1a1a";

const ctxColors = { WHO: "#22c55e", WHEN: "#f59e0b", WHERE: "#3b82f6", PAIN: "#ef4444", NEED: "#22c55e", INTEREST: "#a855f7" };

const changeBadge = (change) => {
  if (!change) return null;
  const v = parseFloat(change.replace(/[+%]/g, "")) || 0;
  let bg = "#f3f4f6", fg = "#9ca3af", icon = "—";
  if (v >= 10) { bg = "#dcfce7"; fg = "#16a34a"; icon = "▲"; }
  else if (v > 0) { bg = "#ecfccb"; fg = "#65a30d"; icon = "▲"; }
  else if (v <= -10) { bg = "#fee2e2"; fg = "#dc2626"; icon = "▼"; }
  else if (v < 0) { bg = "#ffedd5"; fg = "#ea580c"; icon = "▼"; }
  return { bg, fg, icon, label: change };
};

export default function TangleOpportunityDetail({ opp, brandColor, back }) {
  const detail = tangleOpportunityDetails[opp.asset];
  const [aiIdea, setAiIdea] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiErr, setAiErr] = useState(null);

  if (!detail) {
    return (
      <div style={{ animation: "fi .4s" }}>
        <button onClick={back} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: "8px 14px", fontSize: 10, fontWeight: 700, cursor: "pointer", marginBottom: 16 }}>← 기회 목록으로</button>
        <div style={{ background: "#fff", borderRadius: 12, padding: 24, textAlign: "center", color: "#999", fontSize: 11 }}>
          이 기회의 상세 분석 데이터가 아직 준비되지 않았습니다. ({opp.asset})
        </div>
      </div>
    );
  }

  const ctxColor = ctxColors[detail.badge] || "#999";
  const maxVol = Math.max(...detail.evidence.map((e) => e.vol));
  const profileId = assetToProfileId[opp.asset];
  const profile = profileId ? opportunityTargetProfiles[profileId] : null;

  const generateAiIdea = async () => {
    setAiLoading(true); setAiErr(null);
    try {
      const prompt = `당신은 한국 식품 브랜드 마케팅 전략가입니다.
탱글 (병아리콩 건면, 단백질 15g) 브랜드의 "${opp.asset}" 기회를 위한 숏폼 콘텐츠 아이디어 3개를 생성하세요.

## 기회 정보
- 자산: ${opp.asset}
- 맥락: ${detail.badge}
- 타겟: ${detail.persona.who}
- PAIN: ${detail.persona.pain}
- NEED: ${detail.persona.need}

## 검색 근거
${detail.evidence.slice(0, 5).map(e => `- ${e.kw}: ${e.vol.toLocaleString()}/mo${e.change ? ` (${e.change})` : ""}`).join('\n')}

## 검색 여정 GAP
${detail.journey.gap}

## 브랜드 연결
${detail.brandConnect.angle}

## 출력 (JSON only, 다른 텍스트/마크다운 금지)
{
  "ideas": [
    {
      "title": "콘텐츠 제목 (한국어, 후킹 강한 한 줄)",
      "format": "Shorts/Reels/TikTok 중 하나",
      "hook": "첫 3초 후킹 멘트",
      "scenes": ["장면1", "장면2", "장면3", "장면4"],
      "cta": "구매 유도 멘트",
      "creatorType": "추천 크리에이터 카테고리"
    }
  ]
}`;
      const r = await fetch("/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt }) });
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      const text = data.content?.[0]?.text || data.text || "";
      const cleaned = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      const m = cleaned.match(/\{[\s\S]*\}/);
      if (!m) throw new Error("AI 응답 파싱 실패");
      const parsed = JSON.parse(m[0]);
      setAiIdea(parsed.ideas || []);
    } catch (e) {
      setAiErr(e.message || "생성 실패");
    } finally {
      setAiLoading(false);
    }
  };

  const Sect = ({ id, title, children }) => (
    <div style={{ background: "#fff", borderRadius: 12, padding: "18px 22px", border: "1px solid #f0f0f0", marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 8, fontWeight: 800, color: brandColor, background: brandColor + "15", padding: "3px 8px", borderRadius: 4, letterSpacing: 1 }}>{id}</span>
        <div style={{ fontSize: 13, fontWeight: 900, color: G }}>{title}</div>
      </div>
      {children}
    </div>
  );

  return (
    <div style={{ animation: "fi .4s" }}>
      <button onClick={back} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: "8px 14px", fontSize: 10, fontWeight: 700, cursor: "pointer", marginBottom: 16 }}>← 기회 목록으로</button>

      {/* Header */}
      <div style={{ background: `linear-gradient(135deg,${brandColor},${brandColor}DD)`, color: "#fff", borderRadius: 14, padding: "22px 26px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 38 }}>{opp.assetIcon}</span>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 8, fontWeight: 800, background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: 4, letterSpacing: 1 }}>{detail.badge}</span>
                <span style={{ fontSize: 8, fontWeight: 700, opacity: 0.8 }}>확인된 기회 분석</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.3 }}>{opp.asset}</div>
              <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>{opp.contextDetail}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 01 타겟 페르소나 */}
      <Sect id="01" title="타겟 페르소나">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "WHO", color: "#22c55e", value: detail.persona.who },
            { label: "PAIN", color: "#ef4444", value: detail.persona.pain },
            { label: "NEED", color: "#22c55e", value: detail.persona.need },
            { label: "WHEN", color: "#f59e0b", value: detail.persona.when },
          ].map((p, i) => (
            <div key={i} style={{ background: "#fafafa", borderRadius: 8, padding: "12px 14px", borderLeft: `3px solid ${p.color}` }}>
              <div style={{ fontSize: 8, fontWeight: 800, color: p.color, letterSpacing: 1.5, marginBottom: 4 }}>{p.label}</div>
              <div style={{ fontSize: 10, color: "#444", lineHeight: 1.6 }}>{p.value}</div>
            </div>
          ))}
        </div>
        {detail.toneWarning && (
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "8px 12px", marginTop: 10, fontSize: 9, color: "#dc2626", fontWeight: 600 }}>
            {detail.toneWarning}
          </div>
        )}
      </Sect>

      {/* 02 타겟 분석 */}
      <Sect id="02" title="타겟 분석 (인구통계)">
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, color: "#db2777", minWidth: 60 }}>● 여성 {detail.analysis.female}%</span>
            <div style={{ flex: 1, height: 8, background: "#e0e7ff", borderRadius: 3, overflow: "hidden", display: "flex" }}>
              <div style={{ width: `${detail.analysis.female}%`, background: "#ec4899" }} />
              <div style={{ width: `${detail.analysis.male}%`, background: "#3b82f6" }} />
            </div>
            <span style={{ fontWeight: 700, color: "#2563eb", minWidth: 60, textAlign: "right" }}>남성 {detail.analysis.male}% ○</span>
          </div>
          {detail.analysis.maleHighlight && (
            <div style={{ fontSize: 8, fontWeight: 800, color: "#fff", background: "#3b82f6", padding: "2px 8px", borderRadius: 3, display: "inline-block" }}>♂ 남성 타겟 강조</div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {detail.analysis.ages.map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10 }}>
              <span style={{ fontWeight: 700, color: "#444", minWidth: 70 }}>{a.label}</span>
              <div style={{ flex: 1, height: 12, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${a.pct}%`, background: brandColor, opacity: 0.7 }} />
              </div>
              <span style={{ fontWeight: 900, color: brandColor, minWidth: 40, textAlign: "right" }}>{a.pct}%</span>
              {a.note && <span style={{ fontSize: 8, color: "#a16207", fontWeight: 700, background: "#fef3c7", padding: "1px 6px", borderRadius: 3 }}>{a.note}</span>}
            </div>
          ))}
        </div>
      </Sect>

      {/* 03 데이터 증명 */}
      <Sect id="03" title="데이터 증명 (검색량 + 트렌드)">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {detail.evidence.map((e, i) => {
            const pct = Math.max((e.vol / maxVol) * 100, 3);
            const cb = changeBadge(e.change);
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 180, fontSize: 10, fontWeight: 700, color: e.star ? brandColor : "#444", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {e.star && "★ "}{e.kw}
                </div>
                <div style={{ flex: 1, height: 14, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: brandColor, opacity: e.star ? 1 : 0.7 }} />
                </div>
                <div style={{ width: 70, textAlign: "right", fontSize: 10, fontWeight: 800, color: G }}>{e.vol.toLocaleString()}</div>
                {cb && <span style={{ fontSize: 8, background: cb.bg, color: cb.fg, padding: "1px 6px", borderRadius: 3, fontWeight: 800, minWidth: 56, textAlign: "center" }}>{cb.icon} {cb.label}</span>}
              </div>
            );
          })}
        </div>
      </Sect>

      {/* 04 소비자 여정 */}
      <Sect id="04" title="소비자 여정 (PathFinder)">
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 8, fontWeight: 800, color: "#16a34a", background: "#dcfce7", padding: "2px 8px", borderRadius: 4 }}>← INCOMING</span>
            <span style={{ fontSize: 9, color: "#666" }}>유입 경로</span>
          </div>
          {detail.journey.incoming.map((p, i) => (
            <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "6px 10px", marginBottom: 4, fontSize: 9, color: "#15803d" }}>{p}</div>
          ))}
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 8, fontWeight: 800, color: "#dc2626", background: "#fee2e2", padding: "2px 8px", borderRadius: 4 }}>→ OUTGOING</span>
            <span style={{ fontSize: 9, color: "#666" }}>이탈 경로</span>
          </div>
          {detail.journey.outgoing.map((p, i) => (
            <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "6px 10px", marginBottom: 4, fontSize: 9, color: "#991b1b" }}>{p}</div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg,#fef3c7,#fde68a)", border: "1px dashed #d97706", borderRadius: 8, padding: "10px 14px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#a16207", marginBottom: 4, letterSpacing: 1 }}>⚡ GAP — 탱글 진입 기회</div>
          <div style={{ fontSize: 10, color: "#92400e", lineHeight: 1.6, fontWeight: 600 }}>{detail.journey.gap}</div>
        </div>
      </Sect>

      {/* 05 경쟁 환경 */}
      <Sect id="05" title="경쟁 환경">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {detail.competitors.map((c, i) => {
            const isTangle = c.name === "탱글";
            return (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: isTangle ? brandColor + "08" : "#fafafa", border: isTangle ? `1px solid ${brandColor}30` : "1px solid #f0f0f0", borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ width: 100, fontSize: 11, fontWeight: 900, color: isTangle ? brandColor : "#444" }}>{c.name}</div>
                <div style={{ flex: 1, fontSize: 9, color: "#555", lineHeight: 1.6 }}>{c.note}</div>
              </div>
            );
          })}
        </div>
      </Sect>

      {/* 06 브랜드 연결 */}
      <Sect id="06" title="브랜드 연결">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#fafafa", borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#888", marginBottom: 4, letterSpacing: 1 }}>🎯 탱글 자산</div>
            <div style={{ fontSize: 11, color: "#333", fontWeight: 600 }}>{detail.brandConnect.asset}</div>
          </div>
          <div style={{ background: brandColor + "08", borderRadius: 8, padding: "12px 14px", border: `1px solid ${brandColor}20` }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: brandColor, marginBottom: 4, letterSpacing: 1 }}>💡 연결 각도</div>
            <div style={{ fontSize: 12, color: G, fontWeight: 700, lineHeight: 1.5 }}>{detail.brandConnect.angle}</div>
          </div>
          <div style={{ background: "#fafafa", borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#888", marginBottom: 4, letterSpacing: 1 }}>🎬 콘텐츠 방향</div>
            <div style={{ fontSize: 10, color: "#444" }}>{detail.brandConnect.direction}</div>
          </div>
        </div>
      </Sect>

      {/* 07 다음 단계 */}
      <Sect id="07" title="다음 단계 — HOOK 예시 + AI 아이디어 생성">
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: "#666", marginBottom: 8 }}>✍️ 기본 HOOK 예시</div>
          {detail.hooks.map((h, i) => (
            <div key={i} style={{ background: "#fafafa", borderLeft: `3px solid ${brandColor}`, borderRadius: 4, padding: "8px 12px", marginBottom: 6, fontSize: 11, fontWeight: 700, color: G }}>"{h}"</div>
          ))}
        </div>

        <button onClick={generateAiIdea} disabled={aiLoading} style={{ width: "100%", background: aiLoading ? "#ccc" : `linear-gradient(135deg,${brandColor},${brandColor}DD)`, color: "#fff", border: "none", borderRadius: 10, padding: "12px 0", fontSize: 12, fontWeight: 800, cursor: aiLoading ? "wait" : "pointer", marginBottom: 12 }}>
          {aiLoading ? "🤖 AI 아이디어 생성 중..." : aiIdea ? "↻ 다른 아이디어 생성하기" : "✨ AI 숏폼 아이디어 생성하기"}
        </button>

        {aiErr && <div style={{ background: "#fef2f2", borderRadius: 6, padding: "8px 12px", fontSize: 10, color: "#dc2626", marginBottom: 12 }}>❌ {aiErr}</div>}

        {aiLoading && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 30, gap: 10 }}>
            <div style={{ width: 30, height: 30, border: `3px solid ${brandColor}20`, borderTopColor: brandColor, borderRadius: "50%", animation: "sp .7s linear infinite" }} />
            <div style={{ fontSize: 10, color: brandColor, fontWeight: 700 }}>기회 데이터를 바탕으로 숏폼 아이디어를 생성합니다</div>
          </div>
        )}

        {aiIdea && aiIdea.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {aiIdea.map((idea, i) => (
              <div key={i} style={{ background: "#fff", border: `1px solid ${brandColor}30`, borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 7, fontWeight: 800, color: brandColor, background: brandColor + "15", padding: "2px 6px", borderRadius: 3, letterSpacing: 1 }}>IDEA {i + 1}</span>
                  <span style={{ fontSize: 8, fontWeight: 700, color: "#fff", background: "#1a1a1a", padding: "2px 8px", borderRadius: 3 }}>{idea.format}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 900, color: G, marginBottom: 6 }}>{idea.title}</div>
                <div style={{ fontSize: 10, color: brandColor, fontWeight: 700, marginBottom: 8 }}>🎬 HOOK: "{idea.hook}"</div>
                {idea.scenes && (
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ fontSize: 8, fontWeight: 700, color: "#888", marginBottom: 4 }}>SCENES</div>
                    {idea.scenes.map((s, si) => (
                      <div key={si} style={{ fontSize: 9, color: "#555", padding: "3px 0" }}>{si + 1}. {s}</div>
                    ))}
                  </div>
                )}
                {idea.cta && <div style={{ background: "#f0fdf4", borderRadius: 4, padding: "6px 10px", fontSize: 9, color: "#15803d", marginBottom: 6 }}>🛒 {idea.cta}</div>}
                {idea.creatorType && <div style={{ fontSize: 9, color: "#888" }}>👤 추천 크리에이터: {idea.creatorType}</div>}
              </div>
            ))}
          </div>
        )}
      </Sect>
    </div>
  );
}
