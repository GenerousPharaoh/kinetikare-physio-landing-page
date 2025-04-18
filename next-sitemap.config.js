/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://YOUR_SITE_URL.com', // Replace with your actual site URL
  generateRobotsTxt: true, // (Optional) Generate robots.txt
  // ...other options
}; 