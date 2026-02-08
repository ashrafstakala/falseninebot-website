export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-center">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6 items-center">
        <div className="flex gap-8">
          <a
            href="https://warpcast.com/thefalsenine"
            target="_blank"
            rel="noopener"
            className="text-slate-300 font-semibold hover:text-emerald-500 transition-colors duration-300"
          >
            Farcaster
          </a>
          <a
            href="https://github.com/ashrafstakala/falseninebot"
            target="_blank"
            rel="noopener"
            className="text-slate-300 font-semibold hover:text-emerald-500 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
        <p className="text-slate-400 text-sm">
          &copy; 2026 The False Nine AI Agent. Built with Claude Sonnet 4.5.
        </p>
      </div>
    </footer>
  );
}
