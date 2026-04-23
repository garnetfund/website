"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E5E3DF", background: "#FFFFFF", padding: "3rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        <p style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1rem", color: "#1A1A1A" }}>Garnet Fund</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[
            { href: "/", label: "Overview" },
            { href: "/investment-approach", label: "Approach" },
            { href: "/team", label: "Team" },
            { href: "/our-work", label: "Our Work" },
            { href: "/join", label: "Join" },
            { href: "/donate", label: "Donate" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: "#aaa", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#7B0000"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#aaa"}
            >{l.label}</Link>
          ))}
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#ccc" }}>© {new Date().getFullYear()} Garnet Fund</p>
      </div>
    </footer>
  );
}
