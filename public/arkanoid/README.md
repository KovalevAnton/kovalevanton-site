# /arkanoid easter egg slot

This folder is the mount point for the Vite-built arkanoid game.

## How to fill it

1. In the `pretext-arcanoid` repo, set Vite base path:
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: "/arkanoid/",
     // ...
   });
   ```
2. Build: `npm run build`
3. Copy `dist/*` into this folder (`public/arkanoid/`).
4. Run `npm run dev` in `kovalevanton-site` and open `/arkanoid`.
5. Deploy: `vercel link` → `pretext-arcanoid` → `vercel --prod`.

The rewrite lives in `next.config.mjs` and maps `/arkanoid` → `/arkanoid/index.html`.
