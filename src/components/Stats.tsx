"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "4", label: "News Sources" },
  { number: "4", label: "Leagues" },
  { number: "24/7", label: "Live Updates" },
];

export default function Stats() {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-[800px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Coverage
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15}>
              <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-800">
                <div className="text-5xl font-black text-emerald-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-semibold">
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
