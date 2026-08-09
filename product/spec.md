# Repository Specification: `services`

> **Belongs to Product**: [`personal-brand`](../../../products/personal-brand/prd.md)
> **Repository URL**: [`https://github.com/fromsukong/links`](https://github.com/fromsukong/links)
> **Visibility**: Public
> **Maintainer**: @fromsukong

---

## 1. Description & Scope
Link-in-bio (linktree-style) page for `@fromsukong` with built-in analytics. Serves two links:

1. **Digital Marketing service** → Fastwork profile (paid gigs).
2. **Other work / contact** → Line (primary contact channel in Thailand).

Pageview and link-click analytics via Cloudflare Web Analytics; no backend, no database.

---

## 2. Tech Stack & Environment
- **Framework**: Astro 5 (static output) with `@astrojs/react` (React 19)
- **UI library**: `@astryxdesign/core` + `@astryxdesign/theme-gothic` (extended, see `src/themes/fromsukong.ts`)
- **Analytics**: Cloudflare Web Analytics (free, privacy-friendly)
- **Runtime**: `npm run build` → static `dist/` for Cloudflare Pages

---

## 3. Directory Structure
```
services/
├── src/
│   ├── pages/
│   │   └── index.astro              # Page shell (meta, fonts)
│   ├── components/
│   │   └── LinkBio.tsx              # Page built from Astryx components
│   ├── themes/
│   │   ├── fromsukong.ts            # Gothic theme extended with Linktree palette
│   │   └── fromsukong.css           # Pre-built theme (generated)
│   └── styles/
│       └── global.css               # Reset + astryx + theme imports
├── public/
│   └── assets/                      # Profile images
├── README.md
└── product/                         # Local repo spec
    └── spec.md
```

---

## 4. Integration Contracts
- **Local clone**: `/home/prame/Project/links`.
- **Hosting**: deployed on Cloudflare Pages (project `links`) under `info.fromsukong.com`.
