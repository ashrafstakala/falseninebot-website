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
    <section className="py-20 border-t border-slate-800 bg-slate-900">
      <div className="max-w-[900px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Powered By
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="bg-slate-800 px-6 py-5 rounded-xl border border-slate-800 text-center text-slate-300">
                <strong className="text-emerald-500 mr-2">
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
