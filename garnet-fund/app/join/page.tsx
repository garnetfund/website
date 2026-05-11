export default function Join() {
  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{ padding: "5rem 2.5rem 3rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "2rem" }}>Join</p>
          <h1 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, lineHeight: 1.2, color: "#1A1A1A", marginBottom: "2.5rem" }}>Applications Open Fall 2026</h1>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", border: "1px solid #E5E3DF", padding: "0.75rem 1.5rem" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#7B0000" }} />
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.82rem", color: "#4A4A4A" }}>Applications are currently closed</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: "6rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000" }}>Membership</p>
          <div>
            <h2 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2rem", fontWeight: 400, color: "#1A1A1A", marginBottom: "1.5rem", lineHeight: 1.3 }}>
              What membership involves.
            </h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Members manage real capital in a live portfolio. You will develop coverage on a set of companies, build financial models, and pitch investment ideas to the team.
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85 }}>
              The fund is selective and size is largely fixed. Applications are primarily intended to replace graduating or departing members.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: "6rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000" }}>Questions</p>
          <div>
            <h2 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.8rem", fontWeight: 400, color: "#1A1A1A", marginBottom: "1.25rem" }}>Get in touch.</h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "2rem" }}>
              For questions about membership or the application process, contact us directly.
            </p>
            <a href="mailto:garnetinvestmentfund@gmail.com" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#7B0000", textDecoration: "none", borderBottom: "1px solid #7B0000", paddingBottom: "2px" }}>
              garnetinvestmentfund@gmail.com</a><div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}><div><p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>Arav Patel - President</p><a href="mailto:arav@email.sc.edu" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#7B0000", textDecoration: "none", borderBottom: "1px solid #7B0000", paddingBottom: "2px" }}>arav@email.sc.edu</a></div><div><p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>Sophia McCoy - Head of Operations</p><a href="mailto:shmccoy@email.sc.edu" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#7B0000", textDecoration: "none", borderBottom: "1px solid #7B0000", paddingBottom: "2px" }}>shmccoy@email.sc.edu</a></div></div><div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}><div><p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>Arav Patel — President</p><a href="mailto:arav@email.sc.edu" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#7B0000", textDecoration: "none", borderBottom: "1px solid #7B0000", paddingBottom: "2px" }}>arav@email.sc.edu</a></div><div><p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>Sophia McCoy — Head of Operations</p><a href="mailto:shmccoy@email.sc.edu" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#7B0000", textDecoration: "none", borderBottom: "1px solid #7B0000", paddingBottom: "2px" }}>shmccoy@email.sc.edu</a></div></div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){ section > div { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
