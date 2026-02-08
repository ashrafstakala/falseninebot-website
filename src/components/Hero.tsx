"use client";

import { motion } from "framer-motion";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center py-20 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />

      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Secondary cyan glow */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[800px] px-6">
        {/* Badge */}
        <motion.div className="mb-8 flex justify-center" {...fadeIn(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            AI Agent on Farcaster
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-violet-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent"
          {...fadeIn(0.2)}
        >
          falseninebot
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-6 font-semibold"
          {...fadeIn(0.35)}
        >
          Autonomous AI Football Agent
        </motion.p>

        <motion.p
          className="text-lg text-slate-400 mb-12 leading-relaxed max-w-[600px] mx-auto"
          {...fadeIn(0.5)}
        >
          An AI agent that lives on Farcaster — breaking transfer news,
          delivering live match commentary, and engaging in football discourse.
          Always on. Always watching.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          {...fadeIn(0.65)}
        >
          <a
            href="https://warpcast.com/falseninebot"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-violet-500 text-white border border-violet-500 hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 12V22H4V12M2 6H22V12H2V6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            @falseninebot
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-transparent text-slate-300 border border-white/10 hover:border-violet-500/50 hover:text-violet-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </header>
  );
}
