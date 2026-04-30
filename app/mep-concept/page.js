"use client";
import Link from "next/link";
import MEPConceptDev from "../MEPConceptDev";

const O = "#FF6F00";
const G = "#1a1a1a";

export default function MEPConceptRoute() {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F7", fontFamily: "'Pretendard Variable','Apple SD Gothic Neo',sans-serif", color: G }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "18px 32px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: G }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg,${O},#E05500)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: "#fff", boxShadow: `0 2px 8px ${O}20` }}>S</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800 }}>삼양 AI <span style={{ color: O }}>Brandformance</span> Engine</div>
              <div style={{ fontSize: 7, color: "#ccc", letterSpacing: 2 }}>ALGORITHM PERFORMANCE PLATFORM</div>
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 8, padding: "4px 12px", fontSize: 10, fontWeight: 700 }}>🌶️ MEP — Concept Dev</span>
            <span style={{ fontSize: 9, color: "#ddd", fontWeight: 600 }}>Pentacle × AI</span>
          </div>
        </div>

        <MEPConceptDev back={() => { window.location.href = "/"; }} />

        <div style={{ textAlign: "center", marginTop: 32, paddingTop: 12, borderTop: "1px solid #eee" }}>
          <div style={{ fontSize: 7, color: "#ddd", letterSpacing: 3 }}>PENTACLE × AI ALGORITHM PERFORMANCE PLATFORM</div>
        </div>
      </div>
    </div>
  );
}
