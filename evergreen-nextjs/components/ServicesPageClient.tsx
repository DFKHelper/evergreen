'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

const services = [
  {
    title: 'Pregnant Moms',
    icon: '🤰',
    image: '/office-1.jpg',
    description: 'One of the most important times for Nashville women to see a chiropractor is during pregnancy. Seeing a prenatal chiropractor is important for both mom and baby.',
    benefits: [
      'More comfortable pregnancy',
      'Shorter labor times',
      'Webster technique for breech babies',
      'Relief from sciatic pain',
    ],
  },
  {
    title: 'Newborns',
    icon: '👶',
    description: 'Trauma during the birth process is way more common than most people think. Even in uncomplicated births, there is pulling and pushing on a baby\'s head and neck.',
    benefits: [
      'Address birth trauma',
      'Tongue and lip tie support',
      'Improved sleep and feeding',
      'CFT/Gillespie therapy available',
    ],
  },
  {
    title: 'Kids',
    icon: '🧒',
    image: '/office-3.jpg',
    description: 'From learning to walk, run, ride a bike and play sports, kids fall hundreds if not thousands of times. The best time to start chiropractic care is now, before problems occur.',
    benefits: [
      'Early detection and correction',
      'Address posture from sitting',
      'Support healthy development',
      'Prevent future issues',
    ],
  },
  {
    title: 'Adults',
    icon: '🧑',
    description: 'Whether you\'re a professional athlete or your daily routine is more relaxed, getting adjusted by a Gonstead Chiropractor should be top on your list of health priorities.',
    benefits: [
      'Maximize body performance',
      'Reach your full potential',
      'Avoid illness',
      'Increased athletic performance',
    ],
  },
  {
    title: 'Athletes',
    icon: '🏃',
    description: 'Many athletes benefit from seeing a sports chiropractor because it keeps them in peak condition without the use of drugs.',
    benefits: [
      'Better performance',
      'Fewer injuries',
      'Quicker recovery',
      'Competitive advantage',
    ],
  },
]

export default function ServicesPageClient() {
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
                Who We Help
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl text-gray-100">
                Specific Gonstead chiropractic care for every member of your family
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-16">
                {services.map((service, index) => (
                  <StaggerItem key={service.title}>
                    <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                      <GlassmorphicCard
                        variant="medium"
                        className={`grid md:grid-cols-2 gap-12 items-center p-8 ${
                          index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                          {service.image ? (
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/80 via-green-900/70 to-teal-900/80 backdrop-blur-sm border border-[#6ff799]/30 flex items-center justify-center shadow-lg">
                              <div className="text-9xl drop-shadow-lg">{service.icon}</div>
                            </div>
                          )}
                        </div>
                        <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                          <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                          <p className="text-lg text-gray-100 mb-6">{service.description}</p>
                          <h3 className="text-xl font-semibold text-emerald-600 mb-3">Benefits:</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start">
                                <svg
                                  className="h-6 w-6 text-emerald-600 mr-2 mt-0.5 flex-shrink-0"
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
                                <span className="text-gray-100">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </GlassmorphicCard>
                    </FadeIn>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CFT/Gillespie Therapy Highlight */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/50 via-emerald-900/40 to-teal-900/50" />

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn direction="up">
              <GlassmorphicCard variant="light" className="p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  CFT/Gillespie Therapy
                </h2>
                <p className="text-xl text-gray-100 mb-6">
                  Craniosacral Fascial Therapy is a very gentle, natural approach with powerful therapeutic effects.
                  Especially effective for infants with tongue ties, birth trauma, colic, and more.
                </p>
                <p className="text-lg text-gray-200 mb-8">
                  We have 2 practitioners in the office who offer CFT: Dr. Brittney and Meghan.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-emerald-600 text-base font-medium rounded-2xl text-emerald-600 bg-emerald-900/80 hover:bg-emerald-900 hover:scale-105 transition-all shadow-md"
                >
                  Learn More
                </Link>
              </GlassmorphicCard>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/nature-1.png')] bg-cover bg-center" />
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-6">Book your appointment today and experience the Gonstead difference</p>
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
