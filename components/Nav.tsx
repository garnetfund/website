"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/investment-approach", label: "Approach" },
  { href: "/team", label: "Team" },
  { href: "/our-work", label: "Our Work" },
  { href: "/join", label: "Join" },
  { href: "/donate", label: "Donate" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)",
      borderBottom: "1px solid #E5E3DF",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem",
        height: 76, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.9rem", textDecoration: "none" }}>
          <Image src="/logo-black.png" alt="Garnet Fund" width={36} height={36} style={{ objectFit: "contain" }} />
          <div>
            <span style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.2rem", color: "#1A1A1A", display: "block", lineHeight: "1.2" }}>
              Garnet Fund
            </span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.62rem", color: "#aaa", letterSpacing: "0.04em", display: "block" }}>
              University of South Carolina
            </span>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.85rem",
              textDecoration: "none",
              color: pathname === l.href ? "#7B0000" : "#4A4A4A",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#7B0000"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = pathname === l.href ? "#7B0000" : "#4A4A4A"}
            >{l.label}</Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="mobile-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}>
          <div style={{ width: 22, height: 1.5, background: "#1A1A1A", marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: "#1A1A1A", marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: "#1A1A1A" }} />
        </button>
      </div>

      {open && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid #E5E3DF", padding: "1rem 2.5rem" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "0.75rem 0",
              fontFamily: "system-ui, sans-serif", fontSize: "0.9rem",
              color: "#4A4A4A", textDecoration: "none",
              borderBottom: "1px solid #F0EDEA",
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
