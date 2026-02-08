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
            The official token of the falseninebot AI agent, deployed on Base
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
            <a
              href="https://dexscreener.com/base/0xb8a0f2e5ed748f88498a25133116221ed7f965dc"
              target="_blank"
              rel="noopener"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 flex flex-col gap-2 hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-wide text-slate-400">
                Ticker
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                $FALSENINE
              </span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
