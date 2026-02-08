"use client";

import AnimatedSection from "./AnimatedSection";

export default function Token() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-violet-500/10 to-cyan-500/10" />
      <div className="absolute inset-0 border-y border-white/10" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                $FALSENINE Token
              </h2>
              <p className="text-slate-300 text-sm">
                The official token of the falseninebot AI agent, deployed on Base network.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  Network
                </span>
                <span className="text-lg font-bold text-slate-50">Base</span>
              </div>
              <a
                href="https://dexscreener.com/base/0xb8a0f2e5ed748f88498a25133116221ed7f965dc"
                target="_blank"
                rel="noopener"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 flex flex-col gap-1 hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  Ticker
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  $FALSENINE
                </span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
