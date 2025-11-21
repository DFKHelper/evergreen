import { Metadata } from 'next'
import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Conditions We Treat',
  description:
    'We help with back pain, neck pain, sciatica, pregnancy discomfort, infant tongue ties, colic, and more. Gonstead chiropractic for all ages in Nashville.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions',
  },
  openGraph: {
    title: 'Conditions We Treat | Evergreen Chiropractic Nashville',
    description:
      'We help with back pain, neck pain, sciatica, pregnancy discomfort, infant tongue ties, colic, and more. Gonstead chiropractic for all ages.',
    url: 'https://www.evergreenchironash.com/conditions',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Conditions We Treat at Evergreen Chiropractic',
      },
    ],
  },
}

const conditions = [
  {
    title: 'Back Pain',
    slug: 'back-pain',
    description:
      'Lower back pain, upper back tension, and spinal discomfort. We find the exact vertebra causing your problem and correct it.',
  },
  {
    title: 'Neck Pain',
    slug: 'neck-pain',
    description:
      'Stiff neck, tech neck, and cervical issues. Precise Gonstead adjustments without twisting or rotating.',
  },
  {
    title: 'Sciatica',
    slug: 'sciatica',
    description:
      'Shooting leg pain, numbness, and tingling. We address the root cause in your spine, not just the symptoms.',
  },
  {
    title: 'Pregnancy Care',
    slug: 'pregnancy-chiropractic',
    description:
      'Webster certified care for expecting moms. Helps with comfort, optimal baby positioning, and shorter labor times.',
  },
  {
    title: 'Pediatric Care',
    slug: 'pediatric-chiropractic',
    description:
      'Gentle adjustments for kids of all ages. From birth trauma to sports injuries, we help children thrive.',
  },
  {
    title: 'Tongue Tie / Infant Care',
    slug: 'tongue-tie',
    description:
      'CFT/Gillespie therapy for babies with feeding difficulties, colic, reflux, and oral restrictions.',
  },
  {
    title: 'Headaches & Migraines',
    slug: 'headaches',
    description:
      'Many headaches originate from neck problems. We find and fix the spinal cause.',
  },
  {
    title: 'Sports Injuries',
    slug: 'sports-injuries',
    description:
      'Get back in the game faster. Chiropractic helps athletes recover and perform at their peak.',
  },
]

export default function ConditionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <NatureBackground variant="subtle" showTrees={true}>
        <div className="min-h-screen relative">
          <div className="relative z-10">
            {/* Hero */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/40 via-green-900/30 to-transparent" />

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeIn direction="down" delay={0.1}>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Conditions We Treat
                  </h1>
                </FadeIn>
                <FadeIn direction="up" delay={0.3}>
                  <p className="text-xl text-gray-100">
                    Gonstead chiropractic helps your body heal itself. Here are some of the issues we see most often.
                  </p>
                </FadeIn>
              </div>
            </section>

            {/* Conditions Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-6xl mx-auto">
                <StaggerContainer staggerDelay={0.1}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition) => (
                      <StaggerItem key={condition.slug}>
                        <Link href={`/conditions/${condition.slug}`} className="block h-full">
                          <GlassmorphicCard
                            variant="medium"
                            className="p-6 h-full hover:scale-[1.02] transition-transform cursor-pointer"
                          >
                            <h2 className="text-xl font-bold text-white mb-3">
                              {condition.title}
                            </h2>
                            <p className="text-gray-100">{condition.description}</p>
                            <div className="mt-4 text-[#6ff799] font-medium flex items-center">
                              Learn more
                              <svg
                                className="ml-2 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </GlassmorphicCard>
                        </Link>
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
                  <h2 className="text-3xl font-bold mb-4">Not Sure If We Can Help?</h2>
                  <p className="text-xl mb-6">
                    Give us a call. We are happy to answer your questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:6153951178"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                    >
                      Call (615) 395-1178
                    </a>
                    <a
                      href="https://evergreenchironash.janeapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-base font-medium rounded-2xl hover:bg-white hover:text-emerald-900 transition-all hover:scale-105"
                    >
                      Book Online
                    </a>
                  </div>
                </FadeIn>
              </div>
            </section>
          </div>
        </div>
      </NatureBackground>
    </>
  )
}
