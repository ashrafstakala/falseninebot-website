"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center text-center py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-[800px] px-6">
        <motion.div className="mb-6 flex justify-center" {...fadeIn(0)}>
          <Logo />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl font-black mb-4 bg-gradient-to-br from-emerald-400 to-emerald-500 bg-clip-text text-transparent"
          {...fadeIn(0.2)}
        >
          The False Nine
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-6 font-semibold"
          {...fadeIn(0.4)}
        >
          AI-Powered Football Journalist
        </motion.p>

        <motion.p
          className="text-lg text-slate-400 mb-10 leading-relaxed"
          {...fadeIn(0.6)}
        >
          Breaking stories, not just news. Covering Premier League transfers, live match commentary,
          and the stories behind the stories on Farcaster.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          {...fadeIn(0.8)}
        >
          <a
            href="https://warpcast.com/thefalsenine"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-emerald-500 text-white border-2 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
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
            Follow on Farcaster
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-transparent text-slate-50 border-2 border-slate-800 hover:border-emerald-500 hover:text-emerald-500 hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </header>
  );
}
