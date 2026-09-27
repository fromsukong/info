# FromSukong.com Style Guide

The single source of truth for how every page on fromsukong.com looks and is
built. If a new page or component deviates from this document, either fix the
page or update this document — never let them drift.

> **2026-09-27 — one design language.** The site is now unified: home, demo,
> about, blog and post pages all render through `SiteLayout.astro` with the
> same tokens, nav, footer and type scale (the landing v4 "excited.live"
> language). The old Astryx/React stack and the Strava-style white pages are
> gone. `/road-to-85kg` is the one intentional exception (standalone tracker,
> own styles, no site nav).

## Design language

Light, warm, minimal. Cream canvas, ink text, one orange accent. Soft rounded
surfaces and "halo" shadows instead of borders. Friendly, not corporate.

### Tokens — `src/styles/tokens.css` (single source of truth)

| Token           | Value      | Use                                        |
| --------------- | ---------- | ------------------------------------------ |
| `--canvas`      | `#F3F0EE`  | Page background (all unified pages)        |
| `--lifted`      | `#FCFBFA`  | Slightly raised surfaces                   |
| `--white`       | `#FFFFFF`  | Cards, drawer, nav pill                    |
| `--ink`         | `#141413`  | Primary text, dark footer bg, primary btn  |
| `--charcoal`    | `#262627`  | Body copy                                  |
| `--slate`       | `#696969`  | Secondary text, labels                     |
| `--dust`        | `#D1CDC7`  | Tertiary text, disabled, arrows            |
| `--ghost`       | `#E8E2DA`  | Hairlines, code chips, quiet fills         |
| `--orange`      | `#CF4500`  | THE accent — links, dots, chips, highlights|
| `--orange-light`| `#F37338`  | Gradient partner (demo animations only)    |
| `--clay`        | `#9A3A0A`  | Deep accent (demo animations only)         |

Radii: buttons/pills `20px`, cards `20-24px`, panels `36-40px`, chips `999px`.
Shadows: `--shadow-halo` (hero panel), `--shadow-card` (cards), `--shadow-nav`.
Layout: `--content-max: 1200px`, `--page-max: 720px` (reading column),
`--gutter: 24px`.

**Rule:** never hardcode a hex value in a page/component when a token exists.
Change the token, not the usage.

### Typography

- **Sofia Sans** (400/450/500/600/700) for everything Latin.
- **Noto Sans Thai** (400-700) as the Thai fallback — required, the blog has
  Thai posts. Both loaded once via the Google Fonts link in `SiteLayout`.
- System monospace stack for code (`.prose code`), not a webfont.
- Display sizes clamp: hero `clamp(40px, 5.4vw, 70px)`, page title
  `clamp(32px, 4.6vw, 52px)`, post title `clamp(30px, 4vw, 44px)`.
- Letter-spacing is tight/slightly negative on big titles (`-0.02em`).

### Layout system

- Every unified page = `SiteLayout` shell: **nav pill (sticky)** → page content
  → **dark rounded footer** → consent banner.
- Subpage headers use `.page-head`: centered, `.eyebrow` (orange dot + 12px
  uppercase label) → `.page-title` → `.page-sub`.
- Content widths: prose/reading `--page-max` (720px), card lists 720px,
  footer/nav `--content-max` (1200px).
- Cards: white, `20-24px` radius, `--shadow-card`, gap `14px`. Hover = lift
  + orange arrow/accent, no glow.
- Nav responsive: >860px = avatar + wordmark + Blog/About + Hire; ≤860px the
  avatar turns into the menu button (drawer: Blog/About/Demo + CTA); ≤480px
  the avatar hides but the **wordmark stays** so the pill keeps its brand.
  The current page is marked `aria-current="page"` + orange in both navs.

## Architecture — where everything lives

```
src/
├── config.ts                    # SITE url + FASTWORK_URL + SOCIALS (import, never re-declare)
├── layouts/
│   └── SiteLayout.astro         # THE shell: <head> (SEO, GA4 consent, fonts, favicons),
│                                # JSON-LD graph (Person + WebSite, unified), nav, slot,
│                                # footer, consent banner. All pages use it.
├── components/
│   ├── SiteNav.astro            # nav pill + mobile drawer (drawer script is:inline)
│   ├── SiteFooter.astro         # dark footer + vCard "Save my contact" script
│   ├── HeroDemo.astro           # home-only: hero copy + tabbed demo panel + its script
│   ├── ConsentBanner.astro      # GA4 consent banner (localStorage: fs-consent)
│   └── BackLink.astro           # floating back dot — used ONLY by /road-to-85kg
├── styles/
│   ├── tokens.css               # design tokens (:root) — import FIRST
│   ├── site.css                 # reset + shared atoms (eyebrow, buttons), nav, footer,
│   │                            # page-head, cards, prose — every unified page
│   └── landing.css              # home only: .hero + demo panel animation
├── pages/
│   ├── index.astro              # / — funnel: SiteLayout + HeroDemo
│   ├── demo.astro               # /demo — stub (drawer-linked only)
│   ├── about.astro              # /about — page head + info cards (content in frontmatter)
│   ├── blog/index.astro         # /blog — post cards
│   ├── blog/[...slug].astro     # /blog/<slug> — article + prose
│   └── road-to-85kg.astro       # /road-to-85kg — STANDALONE (own head/styles; imports BackLink)
└── content/blog/*.md            # blog posts (Astro content collection)
```

Deleted in the 2026-09-27 unification (recoverable from git history): all
`@astryxdesign/*` React components, `themes/`, `global.css`,
`light-overrides.css`, `BlogLayout.astro`, old `data.ts`/`infoContent.ts`,
unused assets (`doink.png`, `blog.png`, `exl-logo-mark.png`, `fastwork*`,
`gotopamaet.jpeg`, `ig-dm.png`, `road85-icon.png`).

### Rules

1. New page? Render through `SiteLayout` — never hand-write a `<head>`, nav,
   footer or consent block again.
2. Styles: reuse `.eyebrow`, `.btn-ink`/`.btn-white`/`.btn-ghost` and the
   `.post-card` / `.info-card` patterns from `site.css`. New page-specific CSS
   should be small; put truly shared things in `site.css`, home-only in
   `landing.css`, and never add a 4th stylesheet.
3. Page-specific JSON-LD: pass `jsonLd` prop to SiteLayout (extra graph nodes
   referencing `@id: https://fromsukong.com/#person`). The Person + WebSite
   nodes live in SiteLayout — edit them THERE, not per page.
4. Theme-color is `#F3F0EE` on every unified page (matches the cream canvas);
   road-to-85kg keeps `#FC5200`.
5. `BackLink` is for road-to-85kg only. Unified pages navigate via the nav
   pill (brand → home, links, drawer on mobile).
6. Don't add React/Astryx back. Stack is Astro + static HTML/CSS, that's it.
7. Don't hardcode the Fastwork URL — `import { FASTWORK_URL } from '../config'`
   (or `'../../config'` from pages/blog).
8. The JSON-LD `telephone` value: never retype it by hand — copy the exact
   string from an existing source. (It was once silently corrupted into a
   masked `+666****5246` value; check `grep -c '\*\*\*\*' dist/**/*.html`).
## Pages inventory (2026-09-27)

| Page | File | Notes |
| --- | --- | --- |
| `/` | `pages/index.astro` + `HeroDemo` | Funnel: hero + animated demo, all CTAs → Fastwork |
| `/demo` | `pages/demo.astro` | Stub. Drawer-linked only; keep out of nav/footer/sitemap until real content |
| `/about` | `pages/about.astro` | Page head + 4 info cards; section copy = inline HTML strings in frontmatter |
| `/blog` | `pages/blog/index.astro` | Post cards (title, desc, date, arrow) |
| `/blog/<slug>` | `pages/blog/[...slug].astro` | Article; `.prose` styles handle Thai + English; orange tag chips |
| `/road-to-85kg` | `pages/road-to-85kg.astro` | **Standalone exception**: Fustat, dark/orange, live Google-Sheet data, BackLink, no site nav/footer |
| `404` | `public/404.html` | Static cream page (no build step) |

Nav: desktop = avatar brand + Blog + About + "Hire me"; ≤860px = menu button →
drawer (Blog / About / Demo + Fastwork CTA). Footer: "Let's automate your
busywork" + Hire me / Save my contact + Explore (Fastwork / Blog / About) +
Follow (Instagram / TikTok / YouTube / Threads / Facebook).

## Verification checklist (before deploy)

```sh
npm run build                      # must build 6 static pages, no React chunks
grep -c 'astryx\|react' dist/index.html        # expect 0
grep -rc '\*\*\*\*' dist/ || true              # expect no masked-token leaks
```

Headless verify + screenshots (Hermes chromium + puppeteer-core):

```sh
cd /opt/data/cache/shot
export LD_LIBRARY_PATH=/opt/data/cache/chromium-deps/root/usr/lib/aarch64-linux-gnu
export FONTCONFIG_PATH=/opt/data/cache/fonts/etc/fonts
export NODE_PATH=/opt/data/cache/shot/node_modules HOME=/opt/data/cache/shot/home
export CHROME=$(ls -d /opt/data/tools/chromium-*/chrome-linux/chrome | sort -V | tail -1)
python3 -m http.server 4399 --directory /opt/data/info/dist &   # serve dist
node verify-site.mjs               # 59 checks: styles, fonts, nav, drawer, JSON-LD, console
```

Then: send screenshots to Prame → wait for explicit go → push to `main` →
GitHub Actions builds + deploys to Cloudflare Pages → verify live with a
cache-busted curl. Never deploy without his go.

## History (why things are the way they are)

- **2026-09-27 — unification (this refactor).** One design language across
  home/demo/about/blog; `SiteLayout` shell kills 4 copies of the `<head>`;
  Astryx + React removed; dead SVG symbols + unused assets deleted; 404
  restyled; sitemap lastmods refreshed; fixed the corrupted JSON-LD phone
  (`+666****5246` → real number, it had leaked into production).
- **2026-09-26** — landing v4: akkari-style centered hero, tabbed animation
  demo, single Fastwork funnel, dark footer, mobile drawer.
- **2026-09-25** — first landing redesign (excited.live language, cream
  `#F3F0EE` + Sofia Sans, `#CF4500` orange) + `/demo` stub.
- **2026-08** — original link-in-bio clone (Astryx/React, white/Fustat
  Strava-style) + blog + road-to-85kg tracker.
