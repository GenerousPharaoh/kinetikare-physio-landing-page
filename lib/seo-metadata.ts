import contentDates from './content-dates.json';

const SITE_URL = 'https://www.kinetikarephysio.com';

// Content dates come from lib/content-dates.json, written by
// scripts/content-dates.mjs after each build from a fingerprint of what the
// page shows. They replaced file modification times, which on Vercel were the
// build time for every page.
const CONTENT_DATES = contentDates as Record<string, { hash: string; date: string }>;

/** Date this page's content last changed (YYYY-MM-DD). Accepts a path or a full URL. */
export function contentDateFor(routeOrUrl: string): string | undefined {
  const route = routeOrUrl.replace(/^https?:\/\/[^/]+/, '').replace(/[?#].*$/, '').replace(/\/$/, '') || '/';
  return CONTENT_DATES[route]?.date;
}

export const SEO_AUTHOR = {
  name: 'Kareem Hassanein',
  url: `${SITE_URL}/about`,
};

export const SEO_PUBLISHER = 'Kareem Hassanein Physiotherapy';

export const SEO_PERSON_ID = `${SITE_URL}/#person`;
export const SEO_ORGANIZATION_ID = `${SITE_URL}/#organization`;

