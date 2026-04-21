import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garnet Fund",
  description: "Garnet Fund is a fully student-managed long/short equity hedge fund at the Darla Moore School of Business, University of South Carolina.",
  icons: { icon: "/logo-white.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
