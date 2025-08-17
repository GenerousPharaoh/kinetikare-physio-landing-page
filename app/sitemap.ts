import { MetadataRoute } from 'next';
import { getAllConditions } from '@/lib/conditions-data';

// Blog posts removed - will add when blog is ready

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kinetikarephysio.com';
  
  // Get all conditions for individual pages
  const conditions = getAllConditions();
  
  // Create sitemap entries for condition pages with higher priority for featured conditions
  const conditionPages: MetadataRoute.Sitemap = conditions.map(condition => ({
    url: `${baseUrl}/conditions/${condition.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: condition.featured ? 0.85 : 0.75,
  }));

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
  ];

  return [...staticPages, ...conditionPages];
} 