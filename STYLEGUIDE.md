# FromSukong.com Style Guide

The single source of truth for how every page on fromsukong.com looks and is
built. If a new page or component deviates from this document, either fix the
page or update this document — never let them drift.

## Design language

Light, minimal, athletic (Strava-inspired). One accent color, lots of white,
hairline structure instead of heavy chrome.

### Tokens

| Token          | Value               | Use                                          |
| -------------- | ------------------- | -------------------------------------------- |
| `--accent`     | `#FC5200`           | Brand orange — CTAs, highlights, links       |
| `--ink`        | `#18181b`           | Primary text                                 |
| `--muted`      | `#a1a1aa`           | Section labels, secondary text               |
| `--faint`      | `#c4c4c8`           | Tertiary text, disabled                      |
| `--hairline`   | `#ececee`           | Dividers only — **never card borders**       |
| Card border    | `#d4d4d8`           | 1px solid — visible boundary on white cards  |
| Page bg        | `#ffffff`           | Every page                                   |
| `theme-color`  | `#FC5200`           | `<meta name="theme-color">` on ALL pages     |

All tokens are defined once in `src/styles/global.css` (`:root`). Never
hardcode a hex value in a component when a token exists.

**Rule:** `--hairline` (#ececee) is invisible against the white page when used
as a card border. Cards always use `#d4d4d8`. Hairlines are for full-width
dividers sitting next to whitespace, not box outlines.

### Typography

- **Fustat** (300–700) for everything; **JetBrains Mono** for code.
- Weights max out at 700 — Fustat has no 800/900.
- Loaded via Google Fonts `<link>` in every page head.
- Big numbers over prose: stats use large bold values with tiny uppercase
  letter-spaced labels (`10px / 700 / letter-spacing 2px`).

### Layout

- Content column: `max-width: 580px`, centered, `14px` gutters (`--link-gap`)
  → `.page` class.
- Sections separated by `row-gap: 14px` (`.section-gap`), not boxes.
- Structure through hairline dividers and whitespace. No navbars, no shadows
  on cards, no gradients except the road-to-85kg hero.

## Foundation: Astryx + overrides

React pages (`/`, `/about`) are built from `@astryxdesign/core` components
(`Theme`, `VStack`, `ClickableCard`, `Text`, `Thumbnail`, `Dialog`) with the
custom `fromsukong` theme (`src/themes/fromsukong.ts` — @generated CSS, do not
hand-edit `fromsukong.css`).

Astryx keeps dark tokens internally even in `mode="light"`, so
`src/styles/light-overrides.css` pins visible surfaces to the light language.
Import order in `global.css` matters — light-overrides loads LAST and wins:

```
reset.css → astryx.css → theme-gothic.css → fromsukong.css → light-overrides.css
```

When fighting Astryx defaults, match its selector specificity exactly and rely
on load order (e.g. `.astryx-card.link-card.link-card-highlight` beats
`.astryx-card.link-card` because it comes later). Avoid `!important` wars by
adding one more class instead.

## Component library (reuse these)

| Component                | What it is                                                        |
| ------------------------ | ----------------------------------------------------------------- |
| `BackLink.astro`         | THE back button — floating glass dot, fixed top-left, same-domain `history.back()` with `/` fallback. Used on about, blog, road-to-85kg. **Never re-implement back-button markup, style, or script inline.** Landing page has none. |
| `LinkCard.tsx`           | Standard row card: icon left, centered label, optional sub. Props: `icon` (raster) OR `iconNode` (inline SVG), `highlight`, `eventName`. |
| `ContactCard.tsx`        | "Contact me via" card opening the bottom-sheet dialog (email/phone/vCard). |
| `FeaturedCard.tsx`       | 16:9 image banner card (currently unused, kept for big CTAs).     |
| `ProfileHeader.tsx`      | Full-bleed hero photo with name/tagline overlay. Landing page only. |
| `SocialLinks.tsx`        | Bottom icon row.                                                  |
| `InfoSection.tsx`        | About-page text sections (mini-markdown renderer).                |
| `ConsentBanner.astro`    | GA4 Consent Mode v2 banner. On index + about; BlogLayout includes it. |

Rules:

1. Need a back button? `<BackLink />`. Nothing else.
2. New link-in-bio row? `LinkCard` with data added to `data.ts` — order in
   JSX = order on page.
3. SVG-icon cards (Contact, Learn-more) share `.link-card-glyph`: 48px zinc
   `#f4f4f5` tile + ink lucide glyph at `size={48}`. Keep new glyph cards
   identical.
4. Content lives in `src/components/data.ts` — never hardcode labels/hrefs in
   JSX.

## Highlighting a card (primary CTA)

Prame-approved pattern — quiet, no glow/gradient/arrow:

```css
.astryx-card.link-card.link-card-highlight {
  border-color: rgba(252, 82, 0, 0.55) !important;
}
.link-card-highlight .link-card-sub {
  font-size: 11px;
  letter-spacing: 0.3px;
  color: var(--accent);
  opacity: 1;
}
```

Use it by passing `highlight` to `LinkCard`. Currently: Road to 85kg card.

## Pages & shared shell requirements

Every `.astro` page head MUST have, in this spirit:

1. `<meta name="theme-color" content="#FC5200" />`
2. GA4 consent default (denied) → gtag.js async → config, all `<script is:inline>` (Astro module-bundling breaks global `gtag` otherwise)
3. Same favicon set + Google Fonts link
4. `<html lang="en">`; BlogLayout adds `data-theme="light"` for static-theme pages
5. Non-landing pages include `<BackLink />`; landing page does not

Current pages: `/` (landing), `/about`, `/blog` + posts (BlogLayout),
`/road-to-85kg` (standalone tracker, own styles but same tokens/fonts/back
button).

Landing card order (2026-08-23): Road to 85kg (highlighted) → Learn more
about me → Contact me → social icons.

## Accent usage

One orange: `#FC5200` everywhere (buttons, links, tags, chart strokes, step
bars, footer b). In blog post scoped styles use `var(--accent)` from
global.css, not Astryx's `var(--color-accent)` (which resolves dark-theme).
Exception: hero gradient shades (`#e84800`, `#c93b00`) on road-to-85kg only.

## Don'ts (learned the hard way)

- No navbar. No card boxes where hairlines suffice (daily logs, stats).
- No glows/gradients on cards; highlight = tinted border + small orange sub.
- Don't put Prame's face/photo on action cards — brand imagery for cards uses
  purpose-built icons (`road85-icon.png`) or neutral glyphs. His photo lives
  in the hero and contact sheet only.
- Don't hand-edit `src/themes/fromsukong.css` (@generated).
- Don't route customer-facing links through any analytics host.
- Don't add a second back-button implementation.
- Long prose in daily-log/tracker UIs — bullets and stat columns instead.

## Verification checklist (before deploy)

```sh
npm run build
grep -o 'Follow my Road to 85kg' dist/index.html   # content renders
grep -c 'back-link' dist/about/index.html          # BackLink present off-landing
```

Then preview + screenshot (`scripts/screenshot_preview.js`,
puppeteer-core + Playwright headless shell — see skill `fromsukong-website`),
check computed border colors of `.link-card` (#d4d4d8) vs
`.link-card-highlight` (rgba(252,82,0,.55)), send screenshots to Prame before
pushing. Deploy = push to main → GitHub Actions → Cloudflare Pages; verify
live with a cache-busted curl.
