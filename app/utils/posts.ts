import fs from 'fs'
import path from 'path'
import { format, formatDistance } from "date-fns";
import { tr } from "date-fns/locale";

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getPosts(section: string): {
  data: {
    metadata: Metadata;
    slug: string;
    content: string;
  }[],
  sectionInfo: {
    section: string;
    title: string;
    description: string;
  }
} {
  const { Metadata } = require(`app/${section}/info`)
  return {data : getMDXData(path.join(process.cwd(), 'app', section, 'posts')), sectionInfo: Metadata}
}

export function formatDate(date: string, includeRelative = false) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let fullDate = format(targetDate, "PP", {locale: tr})

  if (!includeRelative) {
    return fullDate
  }

  const formattedDate = formatDistance(
    new Date(),
    targetDate,
    { locale: tr },
  );
  
  return `${fullDate} (${formattedDate})`
}
