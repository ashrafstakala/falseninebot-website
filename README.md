# The False Nine Website

Official website for The False Nine AI-powered football journalist.

Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Live Site

Visit: [falseninebot.com](https://falseninebot.com)

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Then visit: http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deployment

Deploy to **Vercel** (recommended):

1. Push to GitHub
2. Import repository in Vercel
3. Deploy (auto-detected as Next.js)
4. Connect custom domain `falseninebot.com`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Tailwind + global styles
└── components/
    ├── AnimatedSection.tsx  # Scroll-triggered animation wrapper
    ├── Logo.tsx             # SVG logo
    ├── Hero.tsx             # Hero section
    ├── About.tsx            # Features grid
    ├── FeatureCard.tsx      # Feature card component
    ├── TechStack.tsx        # Tech stack section
    ├── Token.tsx            # $FALSENINE token section
    ├── Stats.tsx            # Coverage stats
    ├── Philosophy.tsx       # Philosophy quote
    └── Footer.tsx           # Footer
```

## Links

- Bot Farcaster: [@thefalsenine](https://warpcast.com/thefalsenine)
- GitHub (Bot): [falseninebot](https://github.com/ashrafstakala/falseninebot)
- Token: $FALSENINE on Base

## License

MIT License
