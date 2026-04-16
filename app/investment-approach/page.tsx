"use client";
import { useEffect, useRef, ReactNode } from "react";

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(32px)", transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

export default function InvestmentApproach() {
  const sections = [
    {
      title: "Long/short equity.",
      body: "Garnet Fund runs a long/short equity portfolio, taking positions on both sides of the market. This approach requires members to develop conviction in their ideas and understand how individual securities behave relative to the broader market.",
    },
    {
      title: "Capital preservation above all.",
      body: "The fund operates with a conservative, near-market-neutral philosophy. We aim to generate returns through stock-specific insight rather than broad market exposure. Risk management is central to every decision.",
    },
    {
      title: "Idea-driven, independent.",
      body: "Investment ideas originate with the analysts who cover each name. Positions go through a structured review process before entering the portfolio. Members are responsible for their coverage and are expected to develop and defend their own views.",
    },
    {
      title: "Learn by doing.",
      body: "New members complete a training program in financial modeling, valuation, and investment analysis before contributing to the live portfolio. After completing training, analysts build coverage and pitch ideas to the team.",
    },
  ];

  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{ padding: "5rem 2.5rem 3rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "0.75rem" }}>Approach</p>
            <h1 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, color: "#1A1A1A" }}>How We Invest</h1>
          </FadeIn>
        </div>
      </section>

      {sections.map((s, i) => {
        const isRight = i % 2 !== 0;
        return (
          <section key={s.title} style={{ padding: "6rem 2.5rem", borderBottom: "1px solid #E5E3DF", background: "#FFFFFF" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <FadeIn delay={i * 100}>
                <div style={{ maxWidth: 620, marginLeft: isRight ? "auto" : "0", marginRight: isRight ? "0" : "auto", textAlign: isRight ? "right" : "left" }}>
                  <h2 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2rem", fontWeight: 400, color: "#1A1A1A", marginBottom: "1.5rem", lineHeight: 1.25 }}>{s.title}</h2>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85 }}>{s.body}</p>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}
    </div>
  );
}