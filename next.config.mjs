import createNextIntlPlugin from 'next-intl/plugin';
import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm';

const withNextIntl = createNextIntlPlugin();

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

// Merge MDX config with Next.js config
export default withNextIntl(withMDX(nextConfig))