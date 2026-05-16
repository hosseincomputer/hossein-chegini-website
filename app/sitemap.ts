import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages = articles.map((article) => ({
    url: `https://kasralabs.ai/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const solutionSlugs = [
    'crawler',
    'bot-design',
    'image-processing',
    'geo-map-optimisation',
    'insight-generation',
  ]

  const solutionPages = solutionSlugs.map((slug) => ({
    url: `https://kasralabs.ai/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://kasralabs.ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kasralabs.ai/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://kasralabs.ai/book',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...solutionPages,
    ...blogPages,
  ]
}
