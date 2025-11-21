'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations'

export interface ConditionPageProps {
  title: string
  subtitle: string
  heroImage?: string
  introduction: string[]
  symptoms?: {
    title: string
    items: string[]
  }
  howWeHelp: {
    title: string
    description: string[]
  }
  benefits?: string[]
  faqs?: {
    question: string
    answer: string
  }[]
  relatedConditions?: {
    title: string
    slug: string
  }[]
}

export default function ConditionPageTemplate({
  title,
  subtitle,
  heroImage,
  introduction,
  symptoms,
  howWeHelp,
  benefits,
  faqs,
  relatedConditions,
}: ConditionPageProps) {
  return (
    <NatureBackground variant="subtle" showTrees={false}>
      <div className="min-h-screen relative">
        <div className="relative z-10">
          {/* Hero */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/40 via-green-900/30 to-transparent" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <FadeIn direction="down" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {title}
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-xl text-gray-100">{subtitle}</p>
              </FadeIn>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.2}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-2xl">
                  {heroImage && (
                    <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
                      <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}

                  {/* Introduction */}
                  <div className="prose prose-lg max-w-none">
                    {introduction.map((paragraph, i) => (
                      <p key={i} className="text-gray-100 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Symptoms Section */}
          {symptoms && symptoms.items.length > 0 && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl mx-auto">
                <FadeIn direction="up" delay={0.2}>
                  <GlassmorphicCard variant="light" className="p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {symptoms.title}
                    </h2>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {symptoms.items.map((symptom, i) => (
                        <li key={i} className="flex items-start text-gray-100">
                          <svg
                            className="w-5 h-5 text-[#6ff799] mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </GlassmorphicCard>
                </FadeIn>
              </div>
            </section>
          )}

          {/* How We Help */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.2}>
                <GlassmorphicCard variant="strong" className="p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {howWeHelp.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {howWeHelp.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-100 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Benefits */}
          {benefits && benefits.length > 0 && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl mx-auto">
                <FadeIn direction="up">
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Benefits of Chiropractic Care
                  </h2>
                </FadeIn>
                <StaggerContainer staggerDelay={0.1}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((benefit, i) => (
                      <StaggerItem key={i}>
                        <GlassmorphicCard
                          variant="light"
                          className="p-4 text-center"
                        >
                          <p className="text-white font-medium">{benefit}</p>
                        </GlassmorphicCard>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </section>
          )}

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl mx-auto">
                <FadeIn direction="up">
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Common Questions
                  </h2>
                </FadeIn>
                <StaggerContainer staggerDelay={0.1}>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <StaggerItem key={i}>
                        <GlassmorphicCard
                          variant="light"
                          className="p-6 rounded-2xl"
                        >
                          <h3 className="text-lg font-bold text-white mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-gray-100">{faq.answer}</p>
                        </GlassmorphicCard>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </section>
          )}

          {/* Related Conditions */}
          {relatedConditions && relatedConditions.length > 0 && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl mx-auto">
                <FadeIn direction="up">
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Related Conditions
                  </h2>
                </FadeIn>
                <div className="flex flex-wrap justify-center gap-4">
                  {relatedConditions.map((condition) => (
                    <Link
                      key={condition.slug}
                      href={`/conditions/${condition.slug}`}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all"
                    >
                      {condition.title}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Ready to Feel Better?</h2>
                <p className="text-xl mb-6">
                  Book your appointment and start your path to relief.
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
  )
}
