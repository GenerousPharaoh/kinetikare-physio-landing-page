/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.kinetikarephysio.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/', '/_next/'],
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
      '/conditions': 0.8,
      '/ai-physio': 0.7,
      '/blog': 0.6,
      '/faq': 0.5,
      '/contact': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}; 