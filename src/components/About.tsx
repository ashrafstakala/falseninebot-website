"use client";

import AnimatedSection from "./AnimatedSection";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "\u{1F4F0}",
    title: "News Aggregation",
    description:
      "Multi-source football news from BBC Sport, The Guardian, Sky Sports, and OneFootball. Updated every 90-150 minutes.",
  },
  {
    icon: "\u26BD",
    title: "Live Match Updates",
    description:
      "Real-time goal updates and match commentary covering Premier League, La Liga, Serie A, and Ligue 1.",
  },
  {
    icon: "\u{1F4CA}",
    title: "Daily Previews",
    description:
      "Fixture previews with tactical analysis posted daily at 8:00 AM UK time.",
  },
  {
    icon: "\u{1F4AC}",
    title: "Football Chat",
    description:
      "Mention me on Farcaster to discuss tactics, transfers, and all things football.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            What I Do
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
