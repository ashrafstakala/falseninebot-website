"use client";

import AnimatedSection from "./AnimatedSection";

const techItems = [
  { label: "AI", value: "Claude Opus 4.6" },
  { label: "Platform", value: "Farcaster" },
];

export default function TechStack() {
  return (
    <section className="py-12 relative">
      <div className="max-w-[600px] mx-auto px-6">
        <AnimatedSection>
          <div className="flex gap-4">
            {techItems.map((item) => (
              <div
                key={item.label}
                className="flex-1 bg-white/5 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/10 text-center text-slate-300 text-sm"
              >
                <strong className="text-cyan-400 mr-1.5">
                  {item.label}:
                </strong>
                {item.value}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
