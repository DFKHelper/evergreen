'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
} from '@/components/animations'
import { BlogPost, formatDate } from '@/lib/blogData'

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <NatureBackground variant="subtle">
      <div className="min-h-screen relative">
        {/* Content */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/40 via-green-900/30 to-transparent" />

            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="down" delay={0.1}>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-[#6ff799] hover:text-white transition-colors mb-6"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
              </FadeIn>

              <FadeIn direction="down" delay={0.2}>
                {post.category && (
                  <span className="inline-block text-[#6ff799] text-sm font-medium mb-4">
                    {post.category}
                  </span>
                )}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {post.title}
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="flex items-center gap-4 text-gray-200">
                  <span className="font-medium">{post.author}</span>
                  <span>|</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Featured Image */}
          {post.image && (
            <section className="px-4 sm:px-6 lg:px-8 relative -mt-4">
              <div className="max-w-3xl mx-auto">
                <FadeIn direction="up" delay={0.4}>
                  <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                      priority
                    />
                  </div>
                </FadeIn>
              </div>
            </section>
          )}

          {/* Blog Content */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="up" delay={0.5}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                  <div
                    className="prose prose-lg prose-invert max-w-none
                      prose-headings:text-white prose-headings:font-bold
                      prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                      prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                      prose-p:text-gray-100 prose-p:leading-relaxed prose-p:mb-4
                      prose-strong:text-[#6ff799] prose-strong:font-semibold
                      prose-ul:text-gray-100 prose-ul:my-4
                      prose-ol:text-gray-100 prose-ol:my-4
                      prose-li:mb-2
                      prose-a:text-[#6ff799] prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Back to Blog */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to All Posts
                </Link>
              </FadeIn>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Questions About Your Health?</h2>
                <p className="text-xl mb-6">Schedule a consultation with our doctors</p>
                <a
                  href="https://evergreenchironash.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                >
                  Book an Appointment
                </a>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </NatureBackground>
  )
}
