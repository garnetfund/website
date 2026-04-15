import Link from "next/link";

export default function Home() {
  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{
        minHeight: "85vh", display: "flex", alignItems: "center", padding: "6rem 2.5rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/moore-school.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
          filter: "brightness(0.35)",
          zIndex: 0,
        }} />
        {/* Gradient overlay — fade to white at bottom */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, #FFFFFF 100%)",
          zIndex: 1,
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>
            Overview
          </p>
          <h1 style={{
            fontFamily: "Palatino Linotype, Palatino, Georgia, serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 400, lineHeight: 1.12,
            letterSpacing: "-0.01em", color: "#FFFFFF",
            maxWidth: 780, marginBottom: "2.5rem",
          }}>
            A student-managed investment fund
          </h1>
          <p style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "1.15rem", color: "rgba(255,255,255,0.75)",
            lineHeight: 1.8, maxWidth: 520,
          }}>
            Garnet Fund gives students the opportunity to manage real capital in a live portfolio across multiple strategies.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: "#E5E3DF" }} />

      <section style={{ padding: "7rem 2.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "2rem" }}>What We Do</p>
            <h2 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, lineHeight: 1.25, color: "#1A1A1A", marginBottom: "2rem" }}>
              Real experience, real capital
            </h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Garnet Fund was created to give students genuine investment experience. Members research and pitch investments, manage positions, and develop the skills that matter in finance careers.
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85 }}>
              The primary strategy is long/short equity, complemented by allocations to alternatives including credit, currencies, commodities, and derivatives.
            </p>
          </div>
          <div>
            {[
              { title: "Research", body: "Members develop deep expertise in the companies and sectors they cover through independent analysis." },
              { title: "Portfolio Management", body: "Students manage live positions across strategies, learning risk management and portfolio construction firsthand." },
              { title: "Career Development", body: "The fund prepares members for careers in investment management, investment banking, and beyond." },
            ].map((p, i, arr) => (
              <div key={p.title} style={{ padding: "2rem 0", borderBottom: i < arr.length - 1 ? "1px solid #E5E3DF" : "none" }}>
                <h3 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.1rem", color: "#1A1A1A", marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){ section > div { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      <div style={{ height: 1, background: "#E5E3DF" }} />

      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "2rem" }}>
            Analyst Training
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "8rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, lineHeight: 1.25, color: "#1A1A1A", marginBottom: "1.5rem" }}>
                Training for first-year analysts
              </h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85 }}>
                New analysts complete a six-week training program covering accounting, financial modeling, and investment research — building the skills needed to pitch a real equity idea.
              </p>
            </div>
            <div>
              {[
                { week: "Week 1", title: "Introduction to the Fund & Value Investing", body: "Overview of the fund, meet your onboarding class, and an introduction to the principles of value investing." },
                { week: "Week 2", title: "Accounting, Ratios & Multiples", body: "In-depth accounting fundamentals, key financial ratios, and valuation multiples — what they are, how to read them, and when they matter." },
                { week: "Week 3", title: "Financial Modeling", body: "Build a full three-statement model and walk through DCF, comps, precedent transactions, and rDCF — applied to the same company from Week 2." },
                { week: "Week 4", title: "Initial Research & Idea Generation", body: "Learn how to source investment ideas, develop an initial thesis, and structure early-stage research on a company." },
                { week: "Week 5", title: "Buyside Modeling — Levers & Drivers", body: "Go beyond accounting models to understand implied levers, value drivers, and how buyside investors frame an investment." },
                { week: "Week 6", title: "Buyside Modeling — Data & Forecasting", body: "Learn how to use data to forecast business performance and pressure-test your model assumptions." },
              ].map((item, i, arr) => (
                <div key={item.week} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "1.5rem", padding: "1.75rem 0", borderBottom: i < arr.length - 1 ? "1px solid #E5E3DF" : "none" }}>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#7B0000", paddingTop: "0.2rem" }}>{item.week}</p>
                  <div>
                    <h3 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.05rem", color: "#1A1A1A", marginBottom: "0.4rem" }}>{item.title}</h3>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.8 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
