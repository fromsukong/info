# Repository Specification: `services`

> **Belongs to Product**: [`personal-brand`](../../../products/personal-brand/prd.md)
> **Repository URL**: [`https://github.com/fromsukong/services`](https://github.com/fromsukong/services)
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
- **Format**: Static HTML (single page)
- **Analytics**: Cloudflare Web Analytics (free, privacy-friendly)
- **Runtime**: Any static file server (e.g. `python3 -m http.server 8000`) / Cloudflare Pages

---

## 3. Directory Structure
```
services/
├── index.html              # Linktree page (2 links)
├── README.md
└── product/                # Local repo spec
    └── spec.md
```

---

## 4. Integration Contracts
- **Products-dev**: registered as a sparse submodule at `products-dev/repos/services` (checks out `product/` only).
- **Hosting**: deployed on Cloudflare Pages under `fromsukong.com` (TBD).
