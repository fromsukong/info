# AGENTS.md — info

**Cursor CLI running Grok 4.7** is a recognized coding agent in this repo (joined 2026-11-14). Owner is Supakone (Prame).

Source for **fromsukong.com**, a Thai-only Astro site (home, about, blog) deployed to Cloudflare Pages from `main`.

## Read first

- [README.md](README.md) for routes and which file to edit.
- [STYLEGUIDE.md](STYLEGUIDE.md) for look and type. If a page drifts from it, fix the page or update the guide in the same change.

## Hard rules

1. User-facing copy is Thai (`lang="th"`). Do not add English UI strings or a language switcher.
2. No phone number or email on the site, including JSON-LD, footer, and blog copy.
3. About copy stays professional. Do not add personal life detail.
4. Stack is Astro with plain CSS. Do not add React or another client framework.
5. Import site URL, Fastwork URL, and socials from `src/config.ts`. Do not re-declare them.
6. A merge to `main` deploys the live site. Do not merge unless asked. Do not commit or push unless asked.
7. `npm install`, `npm run dev`, `npm run build`. Do not add a second lockfile.
