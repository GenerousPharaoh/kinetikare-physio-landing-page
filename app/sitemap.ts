import { MetadataRoute } from 'next';

// Assuming the slugs are defined here or imported from where generateStaticParams gets them
// For now, let's hardcode them as they appear to be in the blog page generation logic
const blogSlugs = ['understanding-low-back-pain', 'rotator-cuff-exercises', 'first-physio-visit-expectations', 'ai-physiotherapy-advisor-launch'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kinetikarephysio.com';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-physio`, // Assuming this is the correct slug for the AI Physio page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // {
    //   url: `${baseUrl}/success-stories`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ];

  const blogPostPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(), // Use actual post date if available in the future
    changeFrequency: 'monthly', // Or 'weekly' if you update blogs often
    priority: 0.7, // Blog posts are important content
  }));

  return [...staticPages, ...blogPostPages];
} 