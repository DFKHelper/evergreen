'use client'

import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'
import { blogPosts, formatDate } from '@/lib/blogData'

export default function BlogPageClient() {
  return (
    <NatureBackground variant="subtle">
      <div className="min-h-screen relative">
        {/* Content */}
        <div className="relative z-10">
          {/* Hero */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/40 via-green-900/30 to-transparent" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <FadeIn direction="down" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Evergreen Wellness Blog
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-xl text-gray-100">
                  Health tips, wellness insights, and chiropractic education from our doctors
                </p>
              </FadeIn>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <StaggerContainer staggerDelay={0.1}>
                <div className="space-y-8">
                  {blogPosts.map((post, index) => (
                    <StaggerItem key={post.slug}>
                      <FadeIn direction="up" delay={index * 0.05}>
                        <Link href={`/blog/${post.slug}`}>
                          <GlassmorphicCard
                            variant="medium"
                            className="p-6 rounded-3xl hover:scale-[1.02] transition-transform cursor-pointer group"
                          >
                            <div className="flex flex-col">
                              {post.category && (
                                <span className="text-[#6ff799] text-sm font-medium mb-2">
                                  {post.category}
                                </span>
                              )}
                              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#6ff799] transition-colors">
                                {post.title}
                              </h2>
                              <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                                <span>{post.author}</span>
                                <span>|</span>
                                <span>{formatDate(post.date)}</span>
                              </div>
                              <p className="text-gray-100 line-clamp-3">
                                {post.excerpt}
                              </p>
                              <div className="mt-4">
                                <span className="inline-flex items-center text-[#6ff799] font-medium group-hover:translate-x-2 transition-transform">
                                  Read more
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </GlassmorphicCard>
                        </Link>
                      </FadeIn>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
                <p className="text-xl mb-6">Book your appointment today</p>
                <a
                  href="https://evergreenchironash.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                >
                  Schedule Your Visit
                </a>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </NatureBackground>
  )
}
