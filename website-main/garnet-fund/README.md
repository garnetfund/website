# Garnet Fund Website

A production-grade Next.js website for Garnet Fund — a fully student-managed long/short equity hedge fund at the Darla Moore School of Business, University of South Carolina.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Inline styles + Tailwind CSS
- **Deployment**: Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, overview, stats, donate CTA |
| `/investment-approach` | Philosophy, portfolio construction, idea velocity, training |
| `/team` | Filterable member directory |
| `/our-work` | Investor letters and equity pitch archive |
| `/join` | Application info — Fall 2026 |
| `/donate` | Donor info and contact |

---

## Common Updates

### Add / Update Team Members
Edit `lib/team.ts`. To add a headshot, place a square image (400×400px recommended) in `public/headshots/` and add `headshot: "/headshots/firstname-lastname.jpg"` to the member object.

### Add Investor Letters or Pitches
1. Place the PDF in `public/letters/` or `public/pitches/`
2. Add an entry to the `letters` or `pitches` array in `app/our-work/page.tsx`

```ts
{
  title: "Investor Letter — March 2026",
  date: "March 2026",
  description: "Monthly update...",
  file: "/letters/investor-letter-march-2026.pdf",
  tag: "Letter",
}
```

---

## Deploy to Vercel

### Via GitHub (recommended — auto-deploys on every push)
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Vercel auto-detects Next.js → click **Deploy**

### Via CLI
```bash
npm install -g vercel
vercel --prod
```

---

## Project Structure

```
garnet-fund/
├── app/                        # All pages (Next.js App Router)
│   ├── layout.tsx              # Root layout (Nav + Footer)
│   ├── page.tsx                # Home
│   ├── investment-approach/
│   ├── team/
│   ├── our-work/
│   ├── join/
│   └── donate/
├── components/
│   ├── Nav.tsx
│   └── Footer.tsx
├── lib/
│   └── team.ts                 # Roster data — edit this to update members
└── public/
    ├── logo-white.png
    ├── logo-black.png
    ├── headshots/              # Add member headshots here
    ├── letters/                # Investor letter PDFs
    └── pitches/                # Equity pitch PDFs
```

---

**Contact**: garnetinvestmentfund@gmail.com
