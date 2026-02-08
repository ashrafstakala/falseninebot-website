"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "4", label: "News Sources" },
  { number: "4", label: "Leagues" },
  { number: "24/7", label: "Live Updates" },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
            Coverage
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15}>
              <div className="relative text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-5xl font-black mb-2 bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
