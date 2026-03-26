const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

const getFileMTime = (relativePath) => {
  try {
    return fs.statSync(path.join(rootDir, relativePath)).mtime;
  } catch {
    return undefined;
  }
};

const getLatestMTime = (relativePaths) =>
  relativePaths
    .map((relativePath) => getFileMTime(relativePath))
    .filter(Boolean)
    .sort((left, right) => right.getTime() - left.getTime())[0];

const contentLastModified = {
  home: getLatestMTime([
    'app/page.tsx',
    'app/layout.tsx',
    'components/Header.tsx',
    'components/Footer.tsx',
  ]),
  about: getLatestMTime(['app/about/page.tsx']),
  services: getLatestMTime(['app/services/page.tsx']),
  faq: getLatestMTime([
    'app/faq/page.tsx',
    'components/FAQPageClient.tsx',
    'components/FAQAccordion.tsx',
  ]),
  conditions: getLatestMTime([
    'app/conditions/[slug]/page.tsx',
    'components/ConditionPageClient.tsx',
    'lib/conditions-data.ts',
    'lib/detailed-conditions-content.ts',
  ]),
  treatments: getLatestMTime([
    'app/treatments/[slug]/page.tsx',
    'components/treatments/TreatmentHero.tsx',
    'components/treatments/TreatmentContent.tsx',
    'components/treatments/TreatmentProcess.tsx',
    'components/treatments/TreatmentFAQ.tsx',
    'lib/treatments-data.ts',
  ]),
};

const pathLastModified = (pathName) => {
  if (pathName === '/') return contentLastModified.home;
  if (pathName === '/about') return contentLastModified.about;
  if (pathName === '/services') return contentLastModified.services;
  if (pathName === '/faq') return contentLastModified.faq;
  if (pathName === '/conditions' || pathName.startsWith('/conditions/')) return contentLastModified.conditions;
  if (pathName === '/treatments' || pathName.startsWith('/treatments/')) return contentLastModified.treatments;
  return undefined;
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.kinetikarephysio.com',
  autoLastmod: false,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/sitemap.xml', '/robots.txt', '/privacy', '/terms'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/temp/', '/ai-conversations/', '/tests/'],
      },
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
