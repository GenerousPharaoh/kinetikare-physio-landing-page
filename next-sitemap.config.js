const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

// lastmod is the date the page's content last changed, from lib/content-dates.json
// (written by scripts/content-dates.mjs, which runs just before this in
// postbuild). File modification times were the build time on Vercel.
const contentDates = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(rootDir, 'lib', 'content-dates.json'), 'utf8'));
  } catch {
    return {};
  }
})();

const pathLastModified = (pathName) => {
  const date = contentDates[pathName]?.date;
  return date ? new Date(`${date}T12:00:00Z`) : undefined;
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.kinetikarephysio.com',
  autoLastmod: false,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/sitemap.xml', '/robots.txt', '/privacy', '/terms', '/intake'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ is not disallowed: it serves the scripts and optimised images Google needs to render and index the pages.
        disallow: ['/api/', '/admin/', '/temp/', '/ai-conversations/', '/tests/'],
      },
      // Explicitly allow AI crawlers so the site is eligible for LLM citations
      // (ChatGPT, Claude, Perplexity, Google AI Overviews, Common Crawl).
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.kinetikarephysio.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different pages
    const customPriority = {
      '/': 1.0,
      '/services': 0.9,
      '/about': 0.8,
      '/treatments': 0.8,
      '/conditions': 0.8,
      '/faq': 0.5,
      '/accessibility': 0.3,
      // Pages matched to active Google Ads target keywords — bump crawl priority
      '/conditions/knee-pain': 0.9,
      '/conditions/knee-pain-patellofemoral': 0.9,
      '/conditions/patellar-tendinopathy': 0.9,
      '/conditions/greater-trochanteric-pain-syndrome': 0.9,
      '/conditions/low-back-pain': 0.9,
      '/conditions/hip-pain': 0.9,
      '/conditions/rotator-cuff-injuries': 0.9,
      '/conditions/shoulder-impingement': 0.9,
      '/conditions/plantar-fasciitis': 0.9,
      '/conditions/frozen-shoulder': 0.9,
      '/treatments/dry-needling': 0.9,
      '/treatments/cupping-therapy': 0.9,
      '/treatments/sports-rehab-return-to-sport': 0.9,
    };

    const customChangefreq = {
      '/': 'weekly',
      '/about': 'monthly',
      '/services': 'monthly',
      '/treatments': 'monthly',
      '/conditions': 'monthly',
      '/faq': 'monthly',
      '/accessibility': 'yearly',
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: pathLastModified(path)?.toISOString(),
    };
  },
}; 
