"use client";

import AnimatedSection from "./AnimatedSection";

export default function Token() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-violet-500/10 to-cyan-500/10" />
      <div className="absolute inset-0 border-y border-white/10" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            $FALSENINE Token
          </h2>
          <p className="text-center text-lg mb-12 text-slate-300">
            The official token of the FalseNineBot AI Agent, deployed on Base
            network.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex gap-6 justify-center flex-wrap max-w-[600px] mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wide text-slate-400">
                Network
              </span>
              <span className="text-2xl font-bold text-slate-50">Base</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 flex flex-col gap-2">
              <span className="text-sm uppercase tracking-wide text-slate-400">
                Symbol
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                $FALSENINE
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
