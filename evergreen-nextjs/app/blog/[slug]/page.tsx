import { notFound } from 'next/navigation'
import BlogPostClient from '@/components/BlogPostClient'
import { getBlogPost, blogPosts } from '@/lib/blogData'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)

  if (!post) {
    return {
      title: 'Post Not Found | Evergreen Chiropractic Nashville',
    }
  }

  return {
    title: `${post.title} | Evergreen Chiropractic Nashville`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
