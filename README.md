# Everett DuPen — Website

Next.js 14 · TypeScript · Tailwind CSS · Static export · Self-hosted images

---

## Quick start (two steps)

### Step 1 — Download the images

Run this once from the project root (requires `curl`, pre-installed on Mac/Linux):

```bash
chmod +x download-images.sh
./download-images.sh
```

This downloads all 89 images from the original everettdupen.com site into the
correct `public/` folders. Files already downloaded are skipped on re-runs.

### Step 2 — Deploy to Vercel

```bash
npm install
npm run build        # verify clean build
```

Then push to GitHub and import the repo at vercel.com. It detects Next.js automatically.
First deploy takes ~60 seconds. Subsequent pushes auto-deploy.

---

## Pages

| Route | Content |
|---|---|
| `/` | Visual home — hero, ribbon, featured works, museum banner |
| `/works` | Full 87-work catalogue, filters, lightbox |
| `/artist/biography` | Life story & timeline |
| `/artist/documentary` | Vimeo film (BJ Bullert) |
| `/artist/resume` | Selected CV |
| `/artist/book` | Eternal Forms monograph |
| `/press` | Articles & exhibition press |
| `/museum` | Cascadia Art Museum current show |
| `/contact` | Family contact |

---

## Adding a press item

Open `lib/press.ts` and add a new entry at the top of the array:

```ts
{
  date: "2026",
  outlet: "Publication Name",
  title: "Article headline here",
  url: "https://...",
},
```

Push to GitHub — Vercel redeploys automatically.

---

## Image notes

- Images live in `public/works/`, `public/images/`, `public/contact/`
- File names are case-sensitive on Linux/Vercel — some drawings end in `.JPG` (uppercase)
- The download script preserves exact filenames from the original site
- To add new images: drop them in the right `public/` subfolder and add to `lib/works.ts`

