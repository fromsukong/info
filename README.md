# fromsukong.com

Source for **fromsukong.com** — the FromSukong site:

- `/` — AI-automation funnel (hero + animated demo; every CTA → Fastwork)
- `/about` — Supakone Kongprapan, who he is and what he's building
- `/blog` + `/blog/<slug>` — writing (Thai + English)
- `/road-to-85kg` — the standalone public fitness tracker (separate page, own styles)

## Stack

- **Astro 7** — static output, zero client frameworks (no React)
- Plain CSS + design tokens (`src/styles/tokens.css`)
- Hosted on **Cloudflare Pages** (project `info`), deployed from `main` by GitHub Actions

## Run locally

```sh
npm install
npm run dev            # http://localhost:4321
npm run build          # static site into dist/
npm run preview        # serve the production build
```

## Structure

```
src/
├── config.ts              # SITE url + FASTWORK_URL + SOCIALS — import, never re-declare
├── layouts/SiteLayout.astro   # the shell: <head>, SEO/JSON-LD, nav, footer, consent
├── components/            # SiteNav, SiteFooter, HeroDemo, ConsentBanner, BackLink
├── styles/                # tokens.css (tokens) · site.css (shared) · landing.css (home only)
├── pages/                 # index, demo, about, blog/*, road-to-85kg
└── content/blog/*.md      # blog posts (Astro content collection)
public/                    # static assets, 404, redirects, sitemap, robots
```

## Where to change what

| I want to…                        | Edit                                              |
| --------------------------------- | ------------------------------------------------- |
| change colors / radii / shadows   | `src/styles/tokens.css`                           |
| change nav pill or drawer         | `src/components/SiteNav.astro` (+ `site.css`)     |
| change the footer / vCard         | `src/components/SiteFooter.astro`                 |
| change the home hero or demo      | `src/components/HeroDemo.astro` (+ `landing.css`) |
| write a blog post                 | add `src/content/blog/<slug>.md` (title, description, pubDate, tags, draft) |
| edit About content                | `src/pages/about.astro` (SECTIONS in frontmatter) |
| change the Fastwork link          | `src/config.ts`                                   |
| page `<head>` / SEO / GA4         | `src/layouts/SiteLayout.astro`                    |
| the 85kg tracker                  | `src/pages/road-to-85kg.astro` (standalone)       |

Full design rules and the verification checklist: **STYLEGUIDE.md**.

## Deploy

Automatic on push to `main` via `.github/workflows/deploy.yml`: it runs
`npm run build` and deploys `dist/` to the `info` Pages project (custom domain
`fromsukong.com`). Required repo secrets (already configured):
`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

Manual alternative: `npx wrangler pages deploy dist --project-name=info`.

## AI agent setup (Cloudflare)

Configured for Cloudflare agent setup:

- **MCP servers** — `.opencode/opencode.json` (Code Mode API, docs, bindings, builds, observability).
- **Skills** — `npx skills add https://github.com/cloudflare/skills` installs into `.agents/` (gitignored); `skills-lock.json` pins versions.
- **Wrangler** — config in `wrangler.jsonc`.
