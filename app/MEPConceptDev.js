"use client";
import { useState } from "react";
import {
  productDNA,
  consumerLanguageLayers,
  competitorPositioning,
  scoringSystem,
  searchJourneys,
} from "./mep-concept-data";

const G = "#1a1a1a";
const MEP_COLOR = "#DC2626";

const TABS = [
  { id: "dna", label: "🧬 제품 DNA" },
  { id: "language", label: "🔍 소비자 언어 발견" },
  { id: "journey", label: "🛤️ 검색 여정" },
  { id: "competitor", label: "⚔️ 경쟁 포지셔닝" },
  { id: "concept", label: "✨ AI 컨셉 생성" },
];

const fmt = (n) => n.toLocaleString();
const growthBadge = (g) => {
  if (!g || g === "안정" || g === "N/A")
    return { bg: "#f3f4f6", fg: "#6b7280", label: g || "—" };
  if (g.startsWith("+")) {
    const v = parseInt(g.replace(/[+%]/g, "")) || 0;
    if (v >= 50) return { bg: "#fee2e2", fg: "#dc2626", label: g + " ★★" };
    if (v >= 20) return { bg: "#fef3c7", fg: "#d97706", label: g + " ★" };
    return { bg: "#dbeafe", fg: "#1d4ed8", label: g };
  }
  return { bg: "#f3f4f6", fg: "#6b7280", label: g };
};

// ─────────────────────────── TAB 1: PRODUCT DNA ───────────────────────────
const TabDNA = () => (
  <div style={{ animation: "fi .4s" }}>
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 16, fontWeight: 900, color: G, marginBottom: 4 }}>
        🧬 제품 DNA
      </div>
      <div style={{ fontSize: 11, color: "#888" }}>
        현재 클라이언트가 정의한 브랜드 스토리. 데이터 검증 전 상태.
      </div>
    </div>

    <div style={{ background: "linear-gradient(135deg,#fef2f2,#ffedd5)", border: `1px solid ${MEP_COLOR}30`, borderRadius: 12, padding: "20px 22px", marginBottom: 14 }}>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: MEP_COLOR, letterSpacing: 2 }}>CURRENT BRAND STORY</div>
      </div>
      <div style={{ fontSize: 22, fontWeight: 900, color: G, lineHeight: 1.4, marginBottom: 6 }}>
        "{productDNA.currentBrandStory.concept}"
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: MEP_COLOR, marginBottom: 12 }}>
        {productDNA.currentBrandStory.tagline}
      </div>
      <div style={{ fontSize: 11, color: "#666", lineHeight: 1.6, marginBottom: 8 }}>{productDNA.currentBrandStory.valueProposition}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span style={{ background: "#fff", border: "1px solid #fecaca", color: MEP_COLOR, fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>🎯 {productDNA.currentBrandStory.target}</span>
      </div>
    </div>

    <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid #f0f0f0", marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 900, color: G, marginBottom: 12 }}>🌶️ Kick 소스 라인업</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {productDNA.kickSauceLineup.map((k, i) => (
          <div key={i} style={{ background: "#fafafa", borderRadius: 8, padding: "12px 14px", borderTop: `3px solid ${k.color}` }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: "#999", letterSpacing: 1.5, marginBottom: 4 }}>{k.base.toUpperCase()}</div>
            <div style={{ fontSize: 13, fontWeight: 900, color: k.color, marginBottom: 4 }}>{k.name}</div>
            <div style={{ fontSize: 10, color: "#666" }}>{k.flavor}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, padding: "10px 12px", background: "#f9fafb", borderRadius: 6, fontSize: 10, color: "#555" }}>
        <strong>제품 구조:</strong> {productDNA.productStructure}
        <br />
        <strong>Kick 역할:</strong> {productDNA.kickSauceRole}
      </div>
    </div>

    <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid #f0f0f0" }}>
      <div style={{ fontSize: 13, fontWeight: 900, color: G, marginBottom: 12 }}>📚 Case Studies — 참조 브랜드</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {productDNA.caseStudies.map((cs, i) => (
          <div key={i} style={{ background: "#fafafa", borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: G }}>{cs.brand}</span>
            </div>
            <div style={{ fontSize: 10, color: "#666", marginBottom: 4 }}><strong>전략:</strong> {cs.strategy}</div>
            <div style={{ fontSize: 10, color: MEP_COLOR }}><strong>MEP 시사점:</strong> {cs.relevance}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─────────────────────────── TAB 2: CONSUMER LANGUAGE ───────────────────────────
const LayerCard = ({ id, layer }) => {
  const [open, setOpen] = useState(false);
  const maxVol = Math.max(...layer.keywords.map((k) => k.annual));
  return (
    <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${layer.color}25`, marginBottom: 10, overflow: "hidden" }}>
      <div onClick={() => setOpen(!open)} style={{ cursor: "pointer", padding: "14px 16px", background: layer.color + "08", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 24 }}>{layer.icon}</span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 8, fontWeight: 800, color: layer.color, letterSpacing: 1.5 }}>LAYER {id}</span>
              <span style={{ fontSize: 13, fontWeight: 900, color: G }}>{layer.title}</span>
            </div>
            <div style={{ fontSize: 10, color: "#666" }}>{layer.subtitle}</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: layer.color }}>연 {fmt(layer.totalAnnualVolume)}</div>
          <div style={{ fontSize: 8, color: "#999" }}>{open ? "▲ 접기" : "▼ 펼쳐보기"}</div>
        </div>
      </div>
      {open && (
        <div style={{ padding: "14px 16px" }}>
          <div style={{ background: layer.color + "08", borderLeft: `3px solid ${layer.color}`, padding: "10px 12px", borderRadius: 4, marginBottom: 12, fontSize: 11, color: "#444", lineHeight: 1.6 }}>
            💡 <strong>인사이트:</strong> {layer.insight}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {layer.keywords.map((kw, i) => {
              const w = (kw.annual / maxVol) * 100;
              const gb = growthBadge(kw.growth);
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10 }}>
                  <div style={{ width: 160, fontWeight: 700, color: G, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{kw.keyword}</div>
                  <div style={{ flex: 1, height: 14, background: "#f3f4f6", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                    <div style={{ height: "100%", width: `${w}%`, background: layer.color, opacity: 0.85 }} />
                  </div>
                  <div style={{ width: 70, textAlign: "right", fontWeight: 800, color: G, fontSize: 9 }}>연 {fmt(kw.annual)}</div>
                  <div style={{ width: 60, textAlign: "center" }}>
                    <span style={{ background: gb.bg, color: gb.fg, padding: "2px 6px", borderRadius: 3, fontSize: 8, fontWeight: 700 }}>{gb.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {layer.keyInsight && (
            <div style={{ marginTop: 12, background: "#fef3c7", border: "1px solid #fde68a", borderRadius: 6, padding: "8px 12px", fontSize: 10, color: "#a16207", fontWeight: 600 }}>
              ⚡ <strong>핵심 발견:</strong> {layer.keyInsight}
            </div>
          )}
          {layer.searchJourney && (
            <div style={{ marginTop: 12, fontSize: 9, color: "#888" }}>
              <div style={{ fontWeight: 700, color: "#555", marginBottom: 4 }}>🛤️ 검색 여정:</div>
              {layer.searchJourney.map((s, i) => <div key={i} style={{ marginBottom: 2 }}>{s}</div>)}
            </div>
          )}
          {layer.languageMap && (
            <div style={{ marginTop: 12, background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 6, padding: "10px 12px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#7c3aed", marginBottom: 6 }}>🗣️ 한↔미 언어 지도</div>
              <div style={{ fontSize: 10, color: "#444", marginBottom: 4 }}><strong>한국어:</strong> {layer.languageMap.koreanConcept}</div>
              <div style={{ fontSize: 10, color: "#444", marginBottom: 4 }}><strong>가까운 미국어:</strong> {layer.languageMap.closestUS.join(" / ")}</div>
              <div style={{ fontSize: 10, color: "#dc2626", marginBottom: 4 }}><strong>미국인이 안 쓰는 표현:</strong> {layer.languageMap.notUsed.join(" / ")}</div>
              <div style={{ fontSize: 9, color: "#666", fontStyle: "italic", marginTop: 6 }}>{layer.languageMap.note}</div>
            </div>
          )}
          {layer.tiktokImplication && (
            <div style={{ marginTop: 12, background: "#fdf2f8", border: "1px solid #fbcfe8", borderRadius: 6, padding: "8px 12px", fontSize: 10, color: "#be185d", fontWeight: 600 }}>
              📱 {layer.tiktokImplication}
            </div>
          )}
          {layer.occasionOptions && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#555", marginBottom: 6 }}>🌙 오케이션 옵션:</div>
              {layer.occasionOptions.map((o, i) => (
                <div key={i} style={{ background: "#f9fafb", borderRadius: 6, padding: "8px 10px", marginBottom: 4, fontSize: 9 }}>
                  <div style={{ fontWeight: 800, color: G, marginBottom: 2 }}>{o.name}</div>
                  <div style={{ color: "#16a34a" }}>✓ {o.fit}</div>
                  <div style={{ color: "#dc2626" }}>⚠ {o.risk}</div>
                </div>
              ))}
            </div>
          )}
          {layer.strategicImplication && (
            <div style={{ marginTop: 12, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 6, padding: "10px 12px", fontSize: 10, color: "#1e40af" }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>🎯 전략적 시사점</div>
              <div style={{ marginBottom: 3 }}><strong>긍정:</strong> {layer.strategicImplication.positive}</div>
              <div style={{ marginBottom: 3 }}><strong>리스크:</strong> {layer.strategicImplication.risk}</div>
              <div style={{ color: "#dc2626", fontWeight: 700 }}><strong>방향:</strong> {layer.strategicImplication.direction}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TabLanguage = () => {
  const layers = Object.values(consumerLanguageLayers);
  const totalSum = layers.reduce((s, l) => s + l.totalAnnualVolume, 0);
  return (
    <div style={{ animation: "fi .4s" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: G, marginBottom: 4 }}>🔍 소비자 언어 발견 — 7개 LAYER</div>
        <div style={{ fontSize: 11, color: "#888" }}>미국인이 '맛있는 것'을 찾을 때 사용하는 실제 언어</div>
      </div>
      <div style={{ background: `linear-gradient(135deg,${MEP_COLOR},#991b1b)`, color: "#fff", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
        <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7, letterSpacing: 2, marginBottom: 4 }}>7 LAYER TOTAL</div>
        <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>연 {fmt(totalSum)}회</div>
        <div style={{ fontSize: 10, opacity: 0.85 }}>이 데이터는 미국 소비자의 실제 검색 행동에 기반합니다</div>
      </div>
      {layers.map((layer, i) => (
        <LayerCard key={i} id={i + 1} layer={layer} />
      ))}
    </div>
  );
};

// ─────────────────────────── TAB 3: SEARCH JOURNEYS ───────────────────────────
const TabJourney = () => {
  const journeys = Object.values(searchJourneys);
  return (
    <div style={{ animation: "fi .4s" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: G, marginBottom: 4 }}>🛤️ 검색 여정 분석</div>
        <div style={{ fontSize: 11, color: "#888" }}>PathFinder 기반 소비자 여정 + MEP 삽입 포인트</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {journeys.map((j, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid #f0f0f0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: 8, fontWeight: 800, color: MEP_COLOR, letterSpacing: 1.5 }}>JOURNEY {i + 1}</div>
                <div style={{ fontSize: 13, fontWeight: 900, color: G }}>{j.name}</div>
                <div style={{ fontSize: 10, color: "#888" }}>{j.description}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: MEP_COLOR }}>연 {fmt(j.annualVolume)}</div>
                {j.growth && <div style={{ fontSize: 8, fontWeight: 700, color: "#dc2626" }}>{j.growth}</div>}
              </div>
            </div>
            <div style={{ background: "#f9fafb", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                {j.path.map((p, pi) => (
                  <span key={pi} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 5, padding: "4px 8px", fontSize: 9, fontWeight: 700, color: "#444" }}>{p}</span>
                    {pi < j.path.length - 1 && <span style={{ color: "#9ca3af" }}>→</span>}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ background: MEP_COLOR + "10", border: `1px solid ${MEP_COLOR}30`, borderRadius: 6, padding: "8px 12px", fontSize: 10, color: MEP_COLOR, fontWeight: 700 }}>
              🎯 MEP 삽입 포인트: {j.mepInsertionPoint}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────── TAB 4: COMPETITOR ───────────────────────────
const TabCompetitor = () => {
  const maxVol = Math.max(...competitorPositioning.competitors.map((c) => c.annual));
  const sortedSpaces = [...competitorPositioning.whiteSpaces].sort((a, b) => b.score - a.score);
  return (
    <div style={{ animation: "fi .4s" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: G, marginBottom: 4 }}>⚔️ 경쟁 포지셔닝</div>
        <div style={{ fontSize: 11, color: "#888" }}>경쟁 브랜드 검색량 + 빈 자리 분석</div>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid #f0f0f0", marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: G, marginBottom: 12 }}>📊 경쟁 브랜드 검색량 (연간)</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {competitorPositioning.competitors.map((c, i) => {
            const w = (c.annual / maxVol) * 100;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 100, fontSize: 10, fontWeight: 700, color: G }}>{c.brand}</div>
                <div style={{ flex: 1, height: 18, background: "#f3f4f6", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                  <div style={{ height: "100%", width: `${w}%`, background: i === 0 ? "#dc2626" : i === 1 ? "#ef4444" : "#94a3b8", display: "flex", alignItems: "center", paddingLeft: 6 }}>
                    <span style={{ fontSize: 8, color: "#fff", fontWeight: 700 }}>{c.position}</span>
                  </div>
                </div>
                <div style={{ width: 80, textAlign: "right", fontSize: 9, fontWeight: 800, color: G }}>연 {fmt(c.annual)}</div>
              </div>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
            <div style={{ width: 100, fontSize: 10, fontWeight: 900, color: MEP_COLOR }}>MEP</div>
            <div style={{ flex: 1, height: 18, background: "#fef2f2", borderRadius: 3, border: `1px dashed ${MEP_COLOR}`, display: "flex", alignItems: "center", paddingLeft: 6 }}>
              <span style={{ fontSize: 9, color: MEP_COLOR, fontWeight: 800 }}>?  데이터 미수집 — 시장 진입 전</span>
            </div>
            <div style={{ width: 80, textAlign: "right", fontSize: 9, fontWeight: 800, color: MEP_COLOR }}>???</div>
          </div>
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid #f0f0f0" }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: G, marginBottom: 4 }}>🎯 빈 자리 분석 (점수순)</div>
        <div style={{ fontSize: 10, color: "#888", marginBottom: 12 }}>점수가 높을수록 MEP이 점유할 수 있는 빈 영역</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sortedSpaces.map((s, i) => {
            const c = s.score >= 90 ? "#16a34a" : s.score >= 70 ? "#3b82f6" : s.score >= 50 ? "#f59e0b" : "#dc2626";
            const bg = s.score >= 90 ? "#dcfce7" : s.score >= 70 ? "#dbeafe" : s.score >= 50 ? "#fef3c7" : "#fee2e2";
            return (
              <div key={i} style={{ background: bg, borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ minWidth: 48, textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: c }}>{s.score}</div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: c, letterSpacing: 1 }}>SCORE</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 900, color: G, marginBottom: 2 }}>{s.status} {s.territory}</div>
                  <div style={{ fontSize: 9, color: "#555" }}>{s.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────── TAB 5: AI CONCEPT GENERATION ───────────────────────────
const ScoreGauge = ({ value, label, max = 100 }) => {
  const c = value >= 90 ? "#16a34a" : value >= 70 ? "#3b82f6" : value >= 50 ? "#f59e0b" : "#dc2626";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 9 }}>
      <div style={{ width: 100, color: "#555", fontWeight: 700 }}>{label}</div>
      <div style={{ flex: 1, height: 8, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${(value / max) * 100}%`, background: c }} />
      </div>
      <div style={{ width: 40, textAlign: "right", fontWeight: 900, color: c }}>{value}</div>
    </div>
  );
};

const ConceptCard = ({ concept }) => {
  const c = concept.totalScore >= 85 ? "#16a34a" : concept.totalScore >= 70 ? "#3b82f6" : "#f59e0b";
  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: "18px 22px", border: "1px solid #f0f0f0", marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 8, fontWeight: 800, color: MEP_COLOR, letterSpacing: 2 }}>{concept.id?.toUpperCase()}</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: G }}>"{concept.name}"</div>
          <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{concept.direction}</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 80 }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: c, lineHeight: 1 }}>{concept.totalScore}</div>
          <div style={{ fontSize: 8, fontWeight: 700, color: c, letterSpacing: 1 }}>/ 100</div>
        </div>
      </div>

      <div style={{ background: "#fafafa", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: "#888", marginBottom: 4 }}>💬 CONSUMER INSIGHT</div>
        <div style={{ fontSize: 11, color: "#444", lineHeight: 1.7 }}>{concept.consumerInsight}</div>
      </div>

      <div style={{ background: MEP_COLOR + "08", border: `1px solid ${MEP_COLOR}20`, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: MEP_COLOR, marginBottom: 4 }}>🎯 BRAND CONCEPT</div>
        <div style={{ fontSize: 13, fontWeight: 800, color: G, lineHeight: 1.5 }}>"{concept.brandConcept}"</div>
      </div>

      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: "#888", marginBottom: 6 }}>✍️ TAGLINES</div>
        {(concept.taglineOptions || []).map((t, i) => (
          <div key={i} style={{ fontSize: 12, fontWeight: 700, color: G, padding: "4px 0", borderBottom: i < concept.taglineOptions.length - 1 ? "1px dashed #f0f0f0" : "none" }}>
            • {t}
          </div>
        ))}
      </div>

      {concept.dataEvidence && (
        <div style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#888", marginBottom: 6 }}>📊 DATA EVIDENCE</div>
          {concept.dataEvidence.totalEvidenceVolume && (
            <div style={{ fontSize: 12, fontWeight: 900, color: MEP_COLOR, marginBottom: 4 }}>연 {fmt(concept.dataEvidence.totalEvidenceVolume)}회</div>
          )}
          {(concept.dataEvidence.primaryKeywords || []).slice(0, 3).map((k, i) => (
            <div key={i} style={{ fontSize: 9, color: "#666", marginBottom: 2 }}>
              <strong>{k.keyword}</strong> — 연 {fmt(k.annual)} <span style={{ color: "#dc2626" }}>{k.growth}</span>
            </div>
          ))}
          {concept.dataEvidence.keyTrend && (
            <div style={{ fontSize: 9, color: "#555", marginTop: 6, fontStyle: "italic" }}>{concept.dataEvidence.keyTrend}</div>
          )}
        </div>
      )}

      {concept.scores && (
        <div style={{ background: "#f9fafb", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#888", marginBottom: 8 }}>📈 SCORE BREAKDOWN</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <ScoreGauge value={concept.scores.search_evidence} label="검색량 근거" />
            <ScoreGauge value={concept.scores.trend_alignment} label="트렌드 정합성" />
            <ScoreGauge value={concept.scores.competitive_space} label="경쟁 차별화" />
            <ScoreGauge value={concept.scores.language_fit} label="언어 자연스러움" />
            <ScoreGauge value={concept.scores.scalability} label="확장 가능성" />
          </div>
        </div>
      )}

      {concept.whiteSpace && (
        <div style={{ background: "#dcfce7", border: "1px solid #bbf7d0", borderRadius: 6, padding: "8px 12px", marginBottom: 10, fontSize: 10, color: "#166534", fontWeight: 600 }}>
          🎯 White Space: {concept.whiteSpace}
        </div>
      )}

      {concept.tiktokTest && (
        <div style={{ background: "#fdf2f8", border: "1px solid #fbcfe8", borderRadius: 6, padding: "10px 12px", marginBottom: 10 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#be185d", marginBottom: 4 }}>📱 TIKTOK TEST</div>
          <div style={{ fontSize: 10, color: "#444", lineHeight: 1.6 }}>{concept.tiktokTest}</div>
        </div>
      )}

      {concept.copywriterNote && (
        <div style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: 6, padding: "8px 12px", marginBottom: 10, fontSize: 9, color: "#a16207" }}>
          ✍️ <strong>Copywriter Note:</strong> {concept.copywriterNote}
        </div>
      )}

      {concept.risks && (
        <div style={{ fontSize: 9, color: "#dc2626", padding: "6px 0" }}>
          ⚠️ <strong>Risks:</strong> {concept.risks}
        </div>
      )}
    </div>
  );
};

const TabConcept = () => {
  const [tone, setTone] = useState("Bold");
  const [emphasis, setEmphasis] = useState("Flexible");
  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [genCount, setGenCount] = useState(0);

  const handleGenerate = async () => {
    setLoading(true);
    setErr(null);
    try {
      const prompt = `You are a senior brand strategist with deep expertise in US food marketing.
You also write like a top American copywriter — bold, memorable, culturally fluent.

## YOUR TASK
Create 3-5 brand concept options for MEP, a new Korean instant ramen brand entering the US market.
Each concept must be grounded in real consumer search data and score well on our 5 evaluation criteria.

## PRODUCT DNA
${JSON.stringify(productDNA)}

## CONSUMER LANGUAGE DATA (7 LAYERS)
${JSON.stringify(consumerLanguageLayers)}

## COMPETITIVE POSITIONING
${JSON.stringify(competitorPositioning)}

## SEARCH JOURNEYS
${JSON.stringify(searchJourneys)}

## CONCEPT SEEDS (for reference, not mandatory)
${JSON.stringify(scoringSystem.conceptSeeds)}

## TONE PREFERENCE: ${tone}
## EMPHASIS PREFERENCE: ${emphasis}

## SCORING CRITERIA
${JSON.stringify(scoringSystem.criteria)}

## OUTPUT FORMAT (JSON only, no other text — start with { and end with })
{
  "concepts": [
    {
      "id": "concept_a",
      "name": "Concept Name",
      "direction": "One-line direction",
      "consumerInsight": "2-3 sentences in Korean explaining the insight, referencing specific data",
      "brandConcept": "One sentence brand concept statement in English",
      "taglineOptions": ["Tagline 1", "Tagline 2", "Tagline 3"],
      "dataEvidence": {
        "primaryKeywords": [{"keyword": "xxx", "annual": 123456, "growth": "+22%"}],
        "totalEvidenceVolume": 1234567,
        "keyTrend": "Korean description of supporting trend"
      },
      "whiteSpace": "Which competitive white space this occupies (Korean)",
      "scores": {
        "search_evidence": 85,
        "trend_alignment": 80,
        "competitive_space": 90,
        "language_fit": 85,
        "scalability": 80
      },
      "totalScore": 84,
      "tiktokTest": "Korean explanation of why this works as a TikTok caption",
      "risks": "Korean — potential limitations of this concept",
      "copywriterNote": "Korean — why this works from a US copywriting perspective"
    }
  ]
}

CRITICAL RULES:
- Generate exactly 3-5 concepts
- Every concept MUST cite specific search data with annual volume numbers
- Taglines must be in English and sound natural to a 25-39 year old American
- Do NOT use marketing jargon (curated, for foodies, flavor explorer)
- TikTok Test: imagine the tagline as a TikTok caption — must be shareable
- Avoid 'Korean ramen' positioning (Shin/Buldak own it)
- The Kick Sauce is MEP's unique differentiator
- Insight/analysis fields in Korean. Taglines/brandConcept in English.
- 출력은 JSON만. 다른 텍스트, 마크다운 코드블록(\`\`\`) 금지.
${genCount > 0 ? `- 이전 생성 결과와 다른 새로운 컨셉을 만드세요 (${genCount}회차 재생성)` : ""}`;

      const r = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      const text = data.content?.[0]?.text || data.text || "";
      const cleaned = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      const m = cleaned.match(/\{[\s\S]*\}/);
      if (!m) throw new Error("AI 응답을 파싱할 수 없습니다");
      const parsed = JSON.parse(m[0]);
      const sorted = (parsed.concepts || []).sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0));
      setConcepts(sorted);
      setGenCount((c) => c + 1);
    } catch (e) {
      setErr(e.message || "생성 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ animation: "fi .4s" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: G, marginBottom: 4 }}>✨ AI 컨셉 생성</div>
        <div style={{ fontSize: 11, color: "#888" }}>TAB 1~4의 데이터를 종합하여 Claude AI가 컨셉 옵션을 생성합니다</div>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: "16px 18px", border: "1px solid #f0f0f0", marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: G, marginBottom: 8 }}>🎨 톤 선택</div>
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          {["Bold", "Playful", "Premium", "Edgy"].map((t) => (
            <button key={t} onClick={() => setTone(t)} style={{ background: tone === t ? MEP_COLOR : "#f5f5f5", color: tone === t ? "#fff" : "#666", border: "none", borderRadius: 20, padding: "6px 14px", fontSize: 10, fontWeight: tone === t ? 800 : 600, cursor: "pointer" }}>{t}</button>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 800, color: G, marginBottom: 8 }}>💎 강조 옵션</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Flexible", "맛의 깊이", "업그레이드", "소스", "K-Food"].map((e) => (
            <button key={e} onClick={() => setEmphasis(e)} style={{ background: emphasis === e ? MEP_COLOR : "#f5f5f5", color: emphasis === e ? "#fff" : "#666", border: "none", borderRadius: 20, padding: "6px 14px", fontSize: 10, fontWeight: emphasis === e ? 800 : 600, cursor: "pointer" }}>{e}</button>
          ))}
        </div>
      </div>

      <button onClick={handleGenerate} disabled={loading} style={{ width: "100%", background: loading ? "#ccc" : `linear-gradient(135deg,${MEP_COLOR},#991b1b)`, color: "#fff", border: "none", borderRadius: 10, padding: "14px 0", fontSize: 13, fontWeight: 800, cursor: loading ? "wait" : "pointer", marginBottom: 14 }}>
        {loading ? "🤖 AI가 컨셉을 생성 중..." : genCount === 0 ? "✨ 컨셉 생성하기" : "↻ 다른 컨셉 생성하기"}
      </button>

      {err && <div style={{ background: "#fef2f2", borderRadius: 8, padding: "10px 14px", marginBottom: 12, fontSize: 11, color: "#dc2626" }}>❌ {err}</div>}

      {loading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 40, gap: 12 }}>
          <div style={{ width: 36, height: 36, border: `3px solid ${MEP_COLOR}20`, borderTopColor: MEP_COLOR, borderRadius: "50%", animation: "sp .7s linear infinite" }} />
          <div style={{ fontSize: 11, color: MEP_COLOR, fontWeight: 700 }}>7개 LAYER + 경쟁 분석을 종합하여 컨셉을 생성합니다</div>
        </div>
      )}

      {!loading && concepts.length === 0 && genCount === 0 && (
        <div style={{ background: "#f9fafb", borderRadius: 10, padding: 30, textAlign: "center", color: "#999", fontSize: 11 }}>
          위 버튼을 눌러 AI가 데이터 기반 컨셉 옵션을 생성하게 하세요
        </div>
      )}

      {!loading && concepts.length > 0 && (
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, color: G, marginBottom: 10 }}>🏆 Top {concepts.length} Concepts (점수순)</div>
          {concepts.map((c, i) => <ConceptCard key={i} concept={c} />)}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────── MAIN COMPONENT ───────────────────────────
export default function MEPConceptDev({ back }) {
  const [tab, setTab] = useState("dna");

  return (
    <div style={{ animation: "fi .4s" }}>
      <div style={{ background: `linear-gradient(135deg,${MEP_COLOR},#7f1d1d)`, color: "#fff", borderRadius: 14, padding: "20px 24px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 8, fontWeight: 700, opacity: 0.7, letterSpacing: 2, marginBottom: 4 }}>MEP × US MARKET</div>
            <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 4 }}>🌶️ NEW 컨셉 Dev</div>
            <div style={{ fontSize: 11, opacity: 0.85 }}>데이터 기반 미국 시장 브랜드 컨셉 개발</div>
          </div>
          <button onClick={back} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "8px 14px", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>← 분기 선택</button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "#fff", borderRadius: 10, padding: 4, border: "1px solid #f0f0f0", overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, minWidth: 110, background: tab === t.id ? `linear-gradient(135deg,${MEP_COLOR},#991b1b)` : "transparent", color: tab === t.id ? "#fff" : "#888", border: "none", borderRadius: 8, padding: "10px 8px", fontSize: 10, fontWeight: tab === t.id ? 800 : 600, cursor: "pointer", whiteSpace: "nowrap" }}>{t.label}</button>
        ))}
      </div>

      {tab === "dna" && <TabDNA />}
      {tab === "language" && <TabLanguage />}
      {tab === "journey" && <TabJourney />}
      {tab === "competitor" && <TabCompetitor />}
      {tab === "concept" && <TabConcept />}
    </div>
  );
}
