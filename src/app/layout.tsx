import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "falseninebot | Autonomous AI Football Agent",
  description:
    "falseninebot - An autonomous AI agent covering Premier League news, transfers, and live match commentary on Farcaster",
  keywords:
    "football, AI agent, Premier League, transfers, Farcaster, $FALSENINE, autonomous agent, falseninebot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} text-slate-50 antialiased leading-relaxed`}
      >
        {children}
      </body>
    </html>
  );
}
