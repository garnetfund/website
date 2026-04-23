export default function Donate() {
  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{ padding: "5rem 2.5rem 3rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "0.75rem" }}>Donate</p>
          <h1 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, color: "#1A1A1A" }}>Support the Fund</h1>
        </div>
      </section>

      {/* Why Give */}
      <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: "6rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000" }}>Long-Term Impact</p>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.05rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Garnet Fund is entirely student-run. Donor capital is what makes it possible for students to manage a real portfolio and gain genuine investment experience.
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.05rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Garnet Fund has the potential to be a self-sustaining driver of change within the Moore School. Once the fund reaches $1 million in AUM, up to 4% may be disbursed annually — funding scholarships, paid training resources, and educational experiences. Any disbursement requires approval from both the advisory board and faculty advisors, and would only be made if AUM remains at or above $1 million following it.
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.05rem", color: "#4A4A4A", lineHeight: 1.85 }}>
              Donations to the Garnet Fund are through the USC and are tax-deductible. Please use the link below for donations:
            </p>
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: "6rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000" }}>How to Give</p>
          <div>
            <h2 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.6rem", fontWeight: 400, color: "#1A1A1A", marginBottom: "1.25rem" }}>Give 4 Garnet</h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.05rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "1rem" }}>
              We appreciate contributions of all sizes. Donate through the Give 4 Garnet portal — please select the Darla Moore School of Business and then choose the Garnet Fund.
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#7B0000", marginBottom: "1.5rem" }}>
              Give 4 Garnet is available through March 26, 2026.
            </p>
            <a
              href="https://give4garnet.sc.edu/giving-day/104390/donate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#7B0000", color: "white",
                padding: "0.9rem 2.2rem",
                fontFamily: "system-ui, sans-serif", fontSize: "0.85rem",
                textDecoration: "none", marginBottom: "1.5rem",
              }}
            >
              Give 4 Garnet 2026 →
            </a>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.82rem", color: "#888", lineHeight: 1.7 }}>
              For questions about giving, contact us at{" "}
              <a href="mailto:garnetinvestmentfund@gmail.com" style={{ color: "#7B0000", textDecoration: "none" }}>
                garnetinvestmentfund@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section style={{ padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: "6rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000" }}>Transparency</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem" }}>
            {[
              { freq: "Monthly", title: "Investor Letter", body: "Performance updates and portfolio commentary sent to all donors." },
              { freq: "Annual", title: "Year-End Report", body: "A comprehensive summary of the fund's year, including member outcomes." },
              { freq: "Semiannual", title: "Advisory Meeting", body: "Leadership meets with advisors to review performance and discuss plans." },
            ].map(item => (
              <div key={item.freq} style={{ borderTop: "1px solid #E5E3DF", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7B0000", marginBottom: "0.75rem" }}>{item.freq}</p>
                <h3 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1rem", color: "#1A1A1A", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", color: "#4A4A4A", lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){ section > div { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
