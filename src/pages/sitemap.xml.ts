// Sitemap endpoint — generated at build time (replaces the old static
// public/sitemap.xml). Blog posts come from the content collection, so new or
// scheduled posts (and their lastmod) update automatically on every deploy.
// Static pages: bump their lastmod below when the page changes meaningfully.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, isPostLive } from '../config';

const iso = (d: Date) => d.toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .filter(isPostLive)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const urls = [
    { loc: `${SITE}/`, lastmod: '2026-09-27', changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE}/about/`, lastmod: '2026-09-27', changefreq: 'monthly', priority: '0.8' },
    { loc: `${SITE}/blog/`, lastmod: posts[0] ? iso(posts[0].data.pubDate) : '2026-09-27', changefreq: 'weekly', priority: '0.7' },
    { loc: `${SITE}/road-to-85kg/`, lastmod: '2026-08-22', changefreq: 'daily', priority: '0.7' },
    ...posts.map((post) => ({
      loc: `${SITE}/blog/${post.id}/`,
      lastmod: iso(post.data.pubDate),
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
      )
      .join('\n') +
    `\n</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
