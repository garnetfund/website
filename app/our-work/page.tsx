"use client";
import { useState } from "react";
import { pitches, letters } from "@/lib/ourWork";

export default function OurWork() {
  const [tab, setTab] = useState<"pitches" | "letters">("pitches");

  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{ padding: "5rem 2.5rem 3rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "2rem" }}>Our Work</p>
          <h1 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, lineHeight: 1.2, color: "#1A1A1A" }}>Research & Communications</h1>
        </div>
      </section>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid #E5E3DF", padding: "0 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex" }}>
          {(["pitches", "letters"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: "none", border: "none",
              borderBottom: tab === t ? "2px solid #7B0000" : "2px solid transparent",
              color: tab === t ? "#1A1A1A" : "#888",
              padding: "1.25rem 0", marginRight: "2.5rem",
              fontFamily: "system-ui, sans-serif", fontSize: "0.85rem",
              cursor: "pointer", transition: "color 0.2s",
            }}>
              {t === "pitches" ? "Pitches" : "Investor Letters"}
            </button>
          ))}
        </div>
      </div>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2.5rem" }}>

        {/* PITCHES */}
        {tab === "pitches" && (
          <p style={{ marginBottom: "2rem", fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#bbb" }}>
            Not investment advice.
          </p>
        )}
        {tab === "pitches" && (
          pitches.length === 0 ? (
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#aaa" }}>Pitches coming soon.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {pitches.map((p, i) => (
                <div
                  key={p.ticker}
                  onClick={() => window.open(p.file, "_blank")}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "2rem",
                    padding: "2rem 0",
                    borderBottom: i < pitches.length - 1 ? "1px solid #E5E3DF" : "none",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >
                  {/* Ticker + direction */}
                  <div>
                    <p style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.3rem", color: "#1A1A1A", marginBottom: "0.2rem" }}>{p.ticker}</p>
                    <span style={{
                      fontFamily: "system-ui, sans-serif", fontSize: "0.65rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: p.direction === "Long" ? "#2a7a2a" : "#7B0000",
                    }}>{p.direction}</span>
                  </div>

                  {/* Company + dates */}
                  <div>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", color: "#1A1A1A", marginBottom: "0.5rem" }}>{p.company}</p>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", color: "#aaa" }}>
                      Pitched {p.pitchedDate} · PT reached {p.reachedPTDate}
                    </p>
                  </div>

                  {/* Days to target + arrow */}
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: "#7B0000", marginBottom: "0.3rem" }}>{p.daysToTarget} to target</p>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#bbb" }}>View PDF →</p>
                  </div>
                </div>
              ))}
            </div>
          )
        )}

        {/* LETTERS */}
        {tab === "letters" && (
          letters.length === 0 ? (
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#aaa" }}>Investor letters coming soon.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {letters.map((l, i) => (
                <div
                  key={l.title}
                  onClick={() => l.file && window.open(l.file, "_blank")}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "1.75rem 0",
                    borderBottom: i < letters.length - 1 ? "1px solid #E5E3DF" : "none",
                    cursor: l.file ? "pointer" : "default",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={e => l.file && ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <div>
                    <p style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1rem", color: "#1A1A1A", marginBottom: "0.2rem" }}>{l.title}</p>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: "#aaa" }}>{l.date}</p>
                  </div>
                  {l.file && <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#7B0000" }}>Download →</span>}
                </div>
              ))}
            </div>
          )
        )}
      </section>
    </div>
  );
}
