# kovalevanton-site

Personal site for Anton Kovalev (`kovalevanton.xyz`). Frontend engineer learning
to build AI products in public. 90 days, 3 projects, receipts only.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Geist font
- Deployed on Vercel (`pretext-arcanoid` project)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating the day counter

Edit `lib/journey.ts` → bump `currentDay`. Commit. Deploy.

## /arkanoid easter egg

See `public/arkanoid/README.md`. Build the Vite game with `base: "/arkanoid/"`,
copy `dist/*` here, and the rewrite in `next.config.mjs` handles the rest.

## Deploy

```bash
vercel link   # pick pretext-arcanoid
vercel --prod
```

Domain (`kovalevanton.xyz`) is already wired to `pretext-arcanoid`.
