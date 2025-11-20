import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity/client'
import { blogPostsQuery, categoriesQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'

export const metadata = {
  title: 'Blog - Evergreen Chiropractic',
  description: 'Read the latest articles about chiropractic care, wellness, and health from our team at Evergreen Chiropractic in Nashville, TN.',
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    client.fetch(blogPostsQuery).catch(() => []),
    client.fetch(categoriesQuery).catch(() => []),
  ])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-green-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-100">
            Insights on chiropractic care, wellness, and living your healthiest life
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-900">
        <div className="max-w-6xl mx-auto">
          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article
                  key={post._id}
                  className="bg-emerald-800/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-[#6ff799]/30"
                >
                  <Link href={`/blog/${post.slug.current}`}>
                    {post.mainImage ? (
                      <div className="relative h-48 w-full">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-48 w-full bg-gradient-to-br from-emerald-800 to-green-800 flex items-center justify-center">
                        <div className="text-6xl text-green-600">📝</div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {post.categories && post.categories.length > 0 && (
                          <span className="text-xs font-semibold text-[#6ff799] bg-emerald-800 px-2 py-1 rounded">
                            {post.categories[0].title}
                          </span>
                        )}
                        <time className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-2 hover:text-[#6ff799] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-200 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {post.author && (
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <span>By {post.author.name}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            // Placeholder content when no blog posts exist
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Blog Posts Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're working on bringing you valuable insights about chiropractic care, wellness tips,
                and health information. Check back soon for our latest articles!
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Categories Sidebar - Only show if categories exist */}
      {categories && categories.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-emerald-900/80">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category: any) => (
                <Link
                  key={category._id}
                  href={`/blog/category/${category.slug.current}`}
                  className="px-4 py-2 bg-emerald-700 rounded-full text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-colors shadow-sm"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Gonstead Difference?</h2>
          <p className="text-xl mb-6">Schedule your appointment today</p>
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
