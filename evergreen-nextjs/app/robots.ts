import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.evergreenchironash.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      // AI Crawlers - allowing for visibility
      // Remove or modify these rules based on preference
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
