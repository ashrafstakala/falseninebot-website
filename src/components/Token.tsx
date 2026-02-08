"use client";

import AnimatedSection from "./AnimatedSection";

export default function Token() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white border-none">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">
            $FALSENINE Token
          </h2>
          <p className="text-center text-lg mb-8 opacity-95">
            The official token of The False Nine AI Agent, deployed on Base
            network.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex gap-12 justify-center flex-wrap max-w-[600px] mx-auto">
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wide opacity-80">
                Network:
              </span>
              <span className="text-2xl font-bold">Base</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wide opacity-80">
                Symbol:
              </span>
              <span className="text-2xl font-bold">$FALSENINE</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
