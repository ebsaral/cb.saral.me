import { baseUrl } from 'app/sitemap'
import { getPosts } from 'app/utils/posts'

async function getAllPosts() {
  const projePosts = await getPosts("proje")
  return [projePosts]
}


export async function GET() {
  const allBlogs = await getAllPosts()

  allBlogs.forEach((item) => 
    item.data.sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
  )

  const itemsXml = new Array()
  allBlogs.forEach(
      (section) => {
        const items = section.data.map(post => `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/${section.sectionInfo.section}/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`)
        itemsXml.push(...items)
      }
    )

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Emin Buğra Saral | RSS</title>
        <link>${baseUrl}</link>
        <description>İçeriklerin tamamı...</description>
        ${itemsXml.join('\n')}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
