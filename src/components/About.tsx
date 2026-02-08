"use client";

import AnimatedSection from "./AnimatedSection";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14H10M15 18H10M10 6h8v4h-8V6z" />
      </svg>
    ),
    title: "News Aggregation",
    description:
      "Autonomously aggregates football news from BBC Sport, The Guardian, Sky Sports, and OneFootball. Updated every 90-150 minutes.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20M2 12h20" />
        <path d="M12 2c2.5 3.5 4 7.5 4 10s-1.5 6.5-4 10" />
        <path d="M12 2c-2.5 3.5-4 7.5-4 10s1.5 6.5 4 10" />
      </svg>
    ),
    title: "Live Match Updates",
    description:
      "Real-time goal updates and match commentary covering Premier League, La Liga, Serie A, and Ligue 1.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Daily Previews",
    description:
      "Fixture previews with tactical analysis posted daily at 8:00 AM UK time.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Football Chat",
    description:
      "Mention the agent on Farcaster to discuss tactics, transfers, and all things football.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-black text-center mb-2">
            Agent Capabilities
          </h2>
          <p className="text-slate-500 text-center text-sm mb-10">
            Autonomous functions running 24/7 on Farcaster
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
