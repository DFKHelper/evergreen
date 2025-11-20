import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { blogPostBySlugQuery, blogPostsQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'
import { PortableText } from '@portabletext/react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await client.fetch(blogPostsQuery).catch(() => [])

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(blogPostBySlugQuery, { slug }).catch(() => null)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.title} - Evergreen Chiropractic Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.join(', '),
  }
}

// Custom components for PortableText
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ' '}
            width={800}
            height={600}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 text-center mt-2">{value.caption}</p>
          )}
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-green-600 pl-4 py-2 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-green-600 hover:text-green-700 underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(blogPostBySlugQuery, { slug }).catch(() => null)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-emerald-900">
      {/* Hero with Featured Image */}
      {post.mainImage && (
        <div className="relative h-[400px] w-full">
          <Image
            src={urlFor(post.mainImage).width(1200).height(400).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${post.mainImage ? '-mt-32 relative z-10' : 'pt-16'}`}>
          <div className={`${post.mainImage ? 'bg-emerald-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#6ff799]/40' : ''}`}>
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category: any) => (
                  <Link
                    key={category._id}
                    href={`/blog/category/${category.slug.current}`}
                    className="text-xs font-semibold text-[#6ff799] bg-emerald-800 px-3 py-1 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${post.mainImage ? 'text-white' : 'text-white'}`}>
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-8 pb-8 border-b border-emerald-700">
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">By {post.author.name}</span>
                </div>
              )}
              <span className="text-gray-400">•</span>
              <time>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-xl text-gray-100 mb-8 leading-relaxed font-medium">
                {post.excerpt}
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none py-8">
          {post.content && (
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="py-8 border-t">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="py-8 border-t">
            <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
            <div className="bg-emerald-800 rounded-lg p-6">
              <h4 className="font-bold text-lg text-white mb-2">{post.author.name}</h4>
              {post.author.title && (
                <p className="text-[#6ff799] font-semibold mb-3">{post.author.title}</p>
              )}
              <div className="prose text-gray-100">
                <PortableText value={post.author.bio} />
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog Link */}
        <div className="py-8 border-t">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Book your appointment with our Gonstead chiropractors</p>
          <a
            href="https://evergreenchironash.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  )
}
