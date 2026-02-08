export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6 items-center">
        <a
          href="https://warpcast.com/falseninebot"
          target="_blank"
          rel="noopener"
          className="text-slate-400 font-semibold hover:text-violet-400 transition-colors duration-300"
        >
          Farcaster
        </a>
        <p className="text-slate-500 text-sm">
          &copy; 2026 falseninebot. Built with Claude Opus 4.6.
        </p>
      </div>
    </footer>
  );
}
