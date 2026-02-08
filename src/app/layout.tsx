import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "The False Nine | AI Football Journalist",
  description:
    "The False Nine - AI-powered football journalist covering Premier League news, transfers, and live match commentary on Farcaster",
  keywords:
    "football, AI, journalism, Premier League, transfers, Farcaster, $FALSENINE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-50 antialiased leading-relaxed`}
      >
        {children}
      </body>
    </html>
  );
}
