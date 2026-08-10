# services

Link-in-bio (Linktree-style) page for `@fromsukong`, rebuilt with [Astro](https://astro.build) + [Astryx](https://astryx.atmeta.com) (Meta's React design system). Clone of https://linktr.ee/fromsukong.

## Stack

- **Astro** 5 (static output) with `@astrojs/react`
- **React** 19
- **@astryxdesign/core** + **@astryxdesign/theme-gothic** (extended to the original Linktree palette)

## Run locally

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site into dist/
npm run preview    # serve the production build
```

## Deploy (fromsukong.com via Cloudflare Pages)

Automatic deployment on push to `main` via `.github/workflows/deploy.yml`:

1. Push this repo to GitHub (`github.com/fromsukong/info`).
2. In GitHub → repo → **Settings → Secrets and variables → Actions**, add:
   - `CLOUDFLARE_API_TOKEN` — API token with **Cloudflare Pages — Edit** permission (dash.cloudflare.com → My Profile → API Tokens).
   - `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID (right sidebar of any dashboard page).
3. Push to `main` (or run the workflow manually). It runs `npm run build` and deploys `dist/` to the `info` Pages project (served at `fromsukong.pages.dev`, custom domain `fromsukong.com`).
4. Custom domain `fromsukong.com` is bound to the Pages project and kept up to date in the Cloudflare dashboard.

Manual alternative: `npx wrangler login` then `npx wrangler pages deploy dist --project-name=info`.

## AI agent setup (Cloudflare)

Configured for [Cloudflare agent setup](https://developers.cloudflare.com/agent-setup/opencode/):

- **MCP servers** — defined in `.opencode/opencode.json` (Code Mode API, docs, bindings, builds, observability). First tool call from a server triggers Cloudflare OAuth.
- **Skills** — `npx skills add https://github.com/cloudflare/skills` installs the Cloudflare skill bundle into `.agents/` (gitignored). `skills-lock.json` pins the installed version.
- **Wrangler** — config lives in `wrangler.jsonc`.

## Structure

```
services/
├── src/
│   ├── pages/
│   │   └── index.astro          # page shell (meta, fonts)
│   ├── components/
│   │   └── LinkBio.tsx          # page built from Astryx components
│   ├── themes/
│   │   ├── fromsukong.ts        # gothic theme extended with the original Linktree palette
│   │   └── fromsukong.css       # pre-built theme (generated: npm run astryx -- theme build)
│   └── styles/
│       └── global.css           # reset + astryx + theme imports, page-level styles
├── public/
│   └── assets/                  # profile images
├── product/                     # Local repo spec
│   └── spec.md
├── astro.config.mjs
└── package.json
```

## Notes

- Link cards: GoToPamaet Project, via Fastwork, Connect with me via DM (Instagram DM), Other Preferd Method (Instagram profile).
- Social links: Instagram, YouTube, Threads, TikTok, Facebook.
- Regenerate the theme CSS after editing `fromsukong.ts`:

```sh
npm run astryx -- theme build src/themes/fromsukong.ts
```

- Analytics: Cloudflare Web Analytics (add your token to `src/pages/index.astro` to enable).
