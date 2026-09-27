/**
 * Shared site constants — import from here, never re-declare per page.
 */

/** Canonical origin (no trailing slash). */
export const SITE = 'https://fromsukong.com';

/** Every "Hire me" / "Fastwork" CTA points here. */
export const FASTWORK_URL = 'https://fastwork.co/byob/5rBVa61qjC?openExternalBrowser=1&source=byob';

/** Social profiles — used by the footer + schema.org sameAs. */
export const SOCIALS = {
  instagram: 'https://instagram.com/fromsukong',
  tiktok: 'https://tiktok.com/@prem_sukong',
  youtube: 'https://www.youtube.com/channel/UC12xsWSeHKOZHff8W6xPx6g',
  threads: 'https://www.threads.net/@fromsukong',
  facebook: 'https://www.facebook.com/fromsukong/',
};

/** Blog publish clock: pubDate is a Bangkok calendar date (UTC+7). A scheduled
 * post goes live at 1:00am Bangkok on that date, picked up by the daily
 * rebuild in .github/workflows/deploy.yml. */
export const BKK_OFFSET_MS = 7 * 60 * 60 * 1000;

/** True when a blog post is publicly live (not a draft, publish date reached). */
export function isPostLive(post: { data: { draft: boolean; pubDate: Date } }): boolean {
  return !post.data.draft && post.data.pubDate.valueOf() - BKK_OFFSET_MS <= Date.now();
}
