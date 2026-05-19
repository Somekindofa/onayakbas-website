# Handoff — onayakbas.com Redesign

## Context

This is the personal artist website of **Onay Akbaş** (Turkish painter, based in France).
The site is trilingual: English (default), French (`/fr`), Turkish (`/tr`).
You are taking over from a Cowork session that scaffolded the Astro project.
The developer (Théo) will be doing all updates himself — no CMS needed, no non-technical editor.

---

## Project location

```
C:\Users\dupon\Desktop\site_papa\
├── public\www\                  ← OLD static site (keep as reference, do not delete)
│   ├── images\                  ← 925 images (652 JPG, 162 PNG, 110 GIF), 177 MB
│   │   ├── 1.jpg … 50.jpg       ← numbered paintings (main gallery)
│   │   ├── 1984_*.JPG           ← archival photos going back to 1984
│   │   └── ...
│   ├── bio-en.html              ← English bio text (real content to migrate)
│   ├── bio-fr.html              ← French bio text
│   ├── bio.html                 ← Turkish bio text
│   ├── articles-en.html         ← English articles/press
│   ├── articles-fr.html         ← French articles
│   ├── eserler.html             ← Turkish works list
│   ├── contact.html / contact-fr.html / iletisim.html
│   ├── 20230601IZMIR.mp4        ← video
│   ├── Onay_Simavi.mp4          ← video (award/prize related)
│   └── ...
│
└── public\www\onayakbas-site\   ← NEW Astro project (work here)
    ├── package.json
    ├── astro.config.mjs
    ├── tsconfig.json
    └── src\
        ├── layouts\Layout.astro
        └── pages\
            ├── index.astro      ← EN homepage
            ├── work.astro       ← EN gallery
            ├── bio.astro        ← EN bio (placeholder text, needs real content)
            ├── contact.astro    ← EN contact
            ├── fr\index.astro   ← FR homepage
            └── tr\index.astro   ← TR homepage
```

---

## What's done

- Full Astro 5 project scaffolded (minimal template, TypeScript strict)
- Shared `Layout.astro` with: header, nav, lang switcher (EN/FR/TR), footer, global CSS
- Typography: Cormorant Garamond (serif display) + Inter (sans body), warm off-white background (`#f8f6f1`)
- EN pages: homepage (3-col painting grid), work gallery (4-col grid), bio, contact
- FR and TR homepages stubbed
- Target deploy: **Netlify** (free tier), domain `onayakbas.com` currently at Amen.fr

---

## What still needs to be done

### 1. First run
```bash
cd "C:\Users\dupon\Desktop\site_papa\public\www\onayakbas-site"
npm install
npm run dev
```

### 2. Copy images to public/
```bash
cp -r "../images" "./public/images"
```
(or robocopy on Windows)

### 3. Migrate real bio text
- Extract text from `../bio-en.html`, `../bio-fr.html`, `../bio.html`
- Paste into `src/pages/bio.astro`, `src/pages/fr/bio.astro`, `src/pages/tr/bio.astro`
- There is no portrait photo identified yet — check the images folder for a suitable one

### 4. Complete missing pages
Pages that exist in the old site but not yet in Astro:
- `/work` FR and TR versions (`fr/work.astro`, `tr/work.astro`)
- `/bio` FR and TR versions
- `/contact` FR and TR versions
- Articles/press page (EN/FR/TR) — old site has `articles-en.html`, `articles-fr.html`
- Individual painting pages (optional — lightbox on the gallery page may be enough)

### 5. Gallery improvements
- The work page currently uses `1.jpg` through `50.jpg` hardcoded — make it data-driven
- Consider a lightbox for full-size viewing (vanilla JS or a small lib)
- Some images have `E` suffix variants (e.g. `10E.jpg`) — likely detail/enlargement shots, decide how to handle

### 6. Videos
- `Onay_Simavi.mp4` and `20230601IZMIR.mp4` — add a dedicated page or section

### 7. Deploy to Netlify
- Create free account at netlify.com
- `npm run build` → drag the `dist/` folder into Netlify's deploy UI
- Point `onayakbas.com` DNS to Netlify (currently at Amen.fr — update nameservers or CNAME)

---

## Design decisions already made

- Warm off-white background, not pure white
- Minimal, gallery-style aesthetic — let the paintings breathe
- No CMS, no database, pure static
- Lang switcher in header (EN / FR / TR)
- Cormorant Garamond for display text (elegant, fits an artist)

---

## Key files to read for real content

| File | Content |
|------|---------|
| `../bio-en.html` | English biography |
| `../bio-fr.html` | French biography |
| `../bio.html` | Turkish biography |
| `../articles-en.html` | Press / articles EN |
| `../articles-fr.html` | Press / articles FR |
| `../eserler.html` | Works list TR |
| `../contact.html` | Contact info TR |

---

## Notes

- Admin email found in old DB: `akbasonay@gmail.com`
- Old site was hand-coded HTML, built around 2009-2011, last touched ~2023 (video added)
- No framework, no build system on the old site — pure HTML + jQuery fancybox
- The numbered images (`1.jpg`…) appear to be the main painting gallery; archival photos (dated filenames) are biographical/documentary
