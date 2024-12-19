import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cb.saral.me',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://cb.saral.me/en',
        },
      },
    },
  ]
}