// ─────────────────────────────────────────────────────────────
// OUR WORK DATA
// To add a pitch or letter, just add an entry to the arrays below.
// Pitches and letters are displayed in reverse chronological order.
// ─────────────────────────────────────────────────────────────

export type Pitch = {
  ticker: string;          // e.g. "ROKU"
  company: string;         // e.g. "Roku Inc."
  direction: "Long" | "Short";
  pitchedDate: string;     // e.g. "February 11, 2025"
  reachedPTDate: string;   // e.g. "February 14, 2025"
  daysToTarget: string;    // e.g. "3 days" — fill in manually
  file: string;            // path in /public/pitches/
};

export type Letter = {
  title: string;
  date: string;
  file?: string;           // path in /public/letters/ — omit if not yet published
};

// ── PITCHES (newest first) ────────────────────────────────────
export const pitches: Pitch[] = [
  {
    ticker: "MNDY",
    company: "monday.com Ltd.",
    direction: "Short",
    pitchedDate: "October 14, 2026",
    reachedPTDate: "November 10, 2026",
    daysToTarget: "27 days",
    file: "/pitches/MNDY.pdf",
  },
  {
    ticker: "ROKU",
    company: "Roku Inc.",
    direction: "Long",
    pitchedDate: "February 11, 2025",
    reachedPTDate: "February 14, 2025",
    daysToTarget: "3 days",
    file: "/pitches/ROKU.pdf",
  },
  {
    ticker: "CAVA",
    company: "Cava Group Inc.",
    direction: "Short",
    pitchedDate: "November 3, 2024",
    reachedPTDate: "February 28, 2025",
    daysToTarget: "117 days",
    file: "/pitches/CAVA.pdf",
  },
  {
    ticker: "CVCO",
    company: "Cavco Industries",
    direction: "Long",
    pitchedDate: "February 9, 2024",
    reachedPTDate: "November 20, 2024",
    daysToTarget: "285 days",
    file: "/pitches/CVCO.pdf",
  },
];

// ── LETTERS (newest first) ────────────────────────────────────
export const letters: Letter[] = [
  // Example — uncomment and fill in when ready:
  // {
  //   title: "Investor Letter — March 2026",
  //   date: "March 2026",
  //   file: "/letters/march-2026.pdf",
  // },
];
