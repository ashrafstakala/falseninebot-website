"use client";

import AnimatedSection from "./AnimatedSection";

const techItems = [
  { label: "AI", value: "Anthropic Claude Sonnet 4.5" },
  { label: "Platform", value: "Farcaster (Neynar API)" },
  { label: "Data", value: "Football-data.org, FPL API" },
  { label: "Runtime", value: "Node.js + TypeScript" },
];

export default function TechStack() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[900px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Powered By
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-[500px] mx-auto">
            The agent stack
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl border border-white/10 text-center text-slate-300 hover:border-violet-500/30 transition-all duration-300">
                <strong className="text-cyan-400 mr-2">
                  {item.label}:
                </strong>
                {item.value}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
