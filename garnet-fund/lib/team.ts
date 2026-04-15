export type Member = {
  name: string;
  position: string;
  group: string | null;
  gradYear: number;
  headshot?: string;
};

export const members: Member[] = [
  // ── Leadership ───────────────────────────────────────────────
  { name: "Ibrahim Alimohamed", position: "President", group: null, gradYear: 2026 },
  { name: "Cameron Fischer", position: "Equities Portfolio Manager", group: null, gradYear: 2027 },
  { name: "Anthony Watson", position: "Alternatives Portfolio Manager & Senior Analyst, Derivatives", group: null, gradYear: 2027 },
  { name: "Chase McShane", position: "Risk Manager", group: null, gradYear: 2027 },
  { name: "Arav Patel", position: "Head of Operations", group: null, gradYear: 2027 },
  { name: "Anish Ghana", position: "Head of Data Governance", group: null, gradYear: 2027 },

  // ── Senior Analysts — Equities ───────────────────────────────
  { name: "Darya Tchavdarova", position: "Senior Analyst", group: "Consumer", gradYear: 2028 },
  { name: "William Seigler", position: "Senior Analyst", group: "Industrials", gradYear: 2028 },
  { name: "Nick Holjak", position: "Senior Analyst", group: "Technology, Media & Telecom", gradYear: 2027 },
  { name: "Valentin di Stefano", position: "Senior Analyst", group: "Financial Institutions", gradYear: 2028 },
  { name: "Jacob Kaliberda", position: "Senior Analyst", group: "Healthcare", gradYear: 2027 },
  { name: "Allison Eschenbach", position: "Senior Analyst", group: "Energy & Utilities", gradYear: 2026 },

  // ── Senior Analysts — Alternatives ──────────────────────────
  { name: "Camden Smith", position: "Senior Analyst", group: "Credit", gradYear: 2026 },
  { name: "Nicolas Gauvin", position: "Senior Analyst", group: "Currencies & Commodities", gradYear: 2027 },

  // ── Analysts — Equities ──────────────────────────────────────
  { name: "Ryan Conniff", position: "Analyst", group: "Consumer", gradYear: 2028 },
  { name: "Will McCoy", position: "Analyst", group: "Consumer", gradYear: 2029 },

  { name: "Ryan Ayers", position: "Analyst", group: "Industrials", gradYear: 2027 },
  { name: "Jonnie Williams", position: "Analyst", group: "Industrials", gradYear: 2026 },
  { name: "Sean Conroy", position: "Analyst", group: "Industrials", gradYear: 2028 },
  { name: "John Krokondelas", position: "Analyst", group: "Industrials", gradYear: 2029 },

  { name: "Cooper Johnston", position: "Analyst", group: "Technology, Media & Telecom", gradYear: 2027 },
  { name: "Sahil Agarwal", position: "Analyst", group: "Technology, Media & Telecom", gradYear: 2028 },
  { name: "Thomas Patterson", position: "Analyst", group: "Technology, Media & Telecom", gradYear: 2028 },

  { name: "Sven Nielsen", position: "Analyst", group: "Financial Institutions", gradYear: 2028 },
  { name: "John Gardner", position: "Analyst", group: "Financial Institutions", gradYear: 2029 },
  { name: "Arnav Goel", position: "Analyst, Financial Institutions & Derivatives", group: "Financial Institutions", gradYear: 2028 },

  { name: "Ethan Brodman", position: "Analyst", group: "Healthcare", gradYear: 2028 },
  { name: "Julia Judkins", position: "Analyst", group: "Healthcare", gradYear: 2028 },
  { name: "Michael Luca", position: "Analyst", group: "Healthcare", gradYear: 2028 },
  { name: "Frederic Smith", position: "Analyst", group: "Healthcare", gradYear: 2029 },

  { name: "Liam Gayduk", position: "Analyst", group: "Energy & Utilities", gradYear: 2026 },
  { name: "Jackson Davis", position: "Analyst", group: "Energy & Utilities", gradYear: 2028 },
  { name: "Jack Kwait", position: "Analyst", group: "Energy & Utilities", gradYear: 2029 },

  // ── Analysts — Alternatives ──────────────────────────────────
  { name: "Sophia McCoy", position: "Analyst", group: "Derivatives", gradYear: 2028 },

  { name: "Dalton Kahl", position: "Analyst", group: "Credit", gradYear: 2027 },
  { name: "Luke Ribar", position: "Analyst", group: "Credit", gradYear: 2027 },
  { name: "Thibault Hangyas", position: "Analyst", group: "Credit", gradYear: 2028 },

  { name: "Josh Shannon", position: "Analyst", group: "Currencies & Commodities", gradYear: 2027 },
  { name: "Beau Porter", position: "Analyst", group: "Currencies & Commodities", gradYear: 2027 },
];
