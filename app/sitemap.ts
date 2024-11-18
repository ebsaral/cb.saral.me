import { getPosts } from 'app/utils/posts'

export const baseUrl = 'https://cb.saral.me'
type MetaObject = {url: string, lastModified: string}

async function getSitemap(section: string) {
  let posts = getPosts("proje").data.map((post) => ({
    url: `${baseUrl}/${section}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', `/${section}`].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
  return {posts, routes}
} 

export default async function sitemap() {
  let routes: MetaObject[] = []
  let posts: MetaObject[] = []
  
  const projeSitemap = await getSitemap("proje")
  routes.push(...projeSitemap.routes)
  posts.push(...projeSitemap.posts)

  return [...routes, ...posts]
}
