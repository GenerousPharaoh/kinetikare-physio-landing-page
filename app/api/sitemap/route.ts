import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.kinetikarephysio.com';
  
  // Generate fresh timestamp every request
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: '/', priority: '1.0' },
    { url: '/about', priority: '0.8' },
    { url: '/services', priority: '0.9' },
    { url: '/conditions', priority: '0.8' },
    { url: '/faq', priority: '0.5' },
    { url: '/privacy', priority: '0.3' },
    { url: '/terms', priority: '0.3' },
    { url: '/accessibility', priority: '0.3' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}