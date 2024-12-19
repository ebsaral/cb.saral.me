import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CB',
    short_name: 'CB',
    description: '...',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ededed',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}