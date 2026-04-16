"use client";
import { useState } from "react";
import { members, type Member } from "@/lib/team";

function toHeadshotPath(name: string): string {
  return "/headshots/" + name.toLowerCase().replace(/[^a-z\s]/g, "").trim().replace(/\s+/g, "-") + ".jpg";
}

function MemberCard({ member }: { member: Member }) {
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  const headshotPath = member.headshot ?? toHeadshotPath(member.name);
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div
      style={{ background: "#FFFFFF", border: "1px solid #E5E3DF", transition: "border-color 0.2s" }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#7B0000"}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E5E3DF"}
    >
      <div style={{ aspectRatio: "1/1", background: "#F7F6F4", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {hasPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={headshotPath} alt={member.name} onError={() => setHasPhoto(false)}
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        ) : (
          <span style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1.8rem", fontWeight: 400, color: "#C8C4BE" }}>{initials}</span>
        )}
      </div>
      <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
        <p style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "1rem", color: "#1A1A1A", marginBottom: "0.3rem" }}>{member.name}</p>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#7B0000", marginBottom: member.group ? "0.6rem" : 0, lineHeight: 1.4 }}>{member.position}</p>
        {member.group && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", color: "#bbb" }}>{member.group}</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", color: "#bbb" }}>{member.gradYear}</span>
          </div>
        )}
        {!member.group && (
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", color: "#bbb", marginTop: "0.4rem" }}>{member.gradYear}</p>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{ padding: "5rem 2.5rem 3rem", borderBottom: "1px solid #E5E3DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7B0000", marginBottom: "0.75rem" }}>Team</p>
          <h1 style={{ fontFamily: "Palatino Linotype, Palatino, Georgia, serif", fontSize: "2.2rem", fontWeight: 400, color: "#1A1A1A" }}>The Investment Team</h1>
        </div>
      </section>
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {members.map(m => <MemberCard key={m.name} member={m} />)}
        </div>
      </section>
    </div>
  );
}
