# Level X Club

Public website for Level X — a premium fitness and recovery club in Queensland. Toowong is open; Queen’s Wharf and the Gold Coast are next.

The app lives in `prototype/`. Location, membership and event content is in `prototype/src/data/club.ts`. Adding a club is a data change, not a new page type.

## Local

```bash
cd prototype
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Deploy on Netlify

1. Push this repo to GitHub (the 266 MB `media/level promo.mov` is gitignored — only the compressed MP4s ship).
2. Add a new site from that repo.
3. Leave the base directory empty (repo root). `netlify.toml` already runs the build inside `prototype/` and publishes `prototype/dist/client`.
4. Set `VITE_SITE_URL` to `https://levelxclub.com.au` (already defaulted in `netlify.toml`).
5. Attach the custom domain `levelxclub.com.au`.
6. **Forms:** Site configuration → Forms. Enable form notifications to `admin@levelxclub.com.au` for the `membership-apply` form.

No database. Applications go to Netlify Forms.

## Add a location

In `prototype/src/data/club.ts`, append a `ClubLocation` to `locations` (slug, address, status `"open"` or `"coming"`, copy, facilities, images). Home, the location page, footer, apply dropdown and sitemap follow that list. Add the new URL to `prototype/public/sitemap.xml`. Drop images in `prototype/public/images/`.

## Hero video

Source: `media/level promo.mov` (portrait 1080×1920, not committed). The site clip starts at 6s and runs for 5s.

Compressed outputs (faststart H.264, no audio):

- `prototype/public/videos/hero-5s-1080.mp4` — desktop (~1.1 MB)
- `prototype/public/videos/hero-5s-720.mp4` — mobile (~0.4 MB)
- `prototype/public/images/hero-poster-5s.jpg` — first frame of that clip

Re-encode after replacing the `.mov`:

```bash
cd prototype
npm run compress:hero
```

Requires `ffmpeg` on your PATH.
