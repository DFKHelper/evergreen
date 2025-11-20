'use client'

import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  RippleEffect
} from './animations'
import { motion } from 'framer-motion'

interface Service {
  _id: string
  title: string
  excerpt: string
  slug: { current: string }
}

interface HomePageClientProps {
  featuredServices: Service[]
  settings: any
}

export default function HomePageClient({ featuredServices, settings }: HomePageClientProps) {
  const services = featuredServices && featuredServices.length > 0 ? featuredServices : [
    {
      _id: '1',
      title: 'Pregnant Moms',
      excerpt: 'Webster technique certified care for comfortable pregnancy and optimal birth outcomes',
      slug: { current: 'pregnant-moms' }
    },
    {
      _id: '2',
      title: 'Newborns & Kids',
      excerpt: 'Gentle care for birth trauma, tongue ties, and growing bodies',
      slug: { current: 'newborns-kids' }
    },
    {
      _id: '3',
      title: 'Adults',
      excerpt: 'Maximize your body\'s performance and reach your full potential',
      slug: { current: 'adults' }
    },
    {
      _id: '4',
      title: 'Athletes',
      excerpt: 'Peak performance without drugs, faster recovery, fewer injuries',
      slug: { current: 'athletes' }
    }
  ]

  return (
    <>
      {/* Featured Services with Nature Background */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NatureBackground variant="subtle" showTrees={true}>
          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Who We Help
              </h2>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                We provide specialized Gonstead chiropractic care for every member of your family
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
              {services.map((service, index) => (
                <StaggerItem key={service._id}>
                  <Link href={`/services/${service.slug.current}`} className="block h-full">
                    <RippleEffect>
                      <GlassmorphicCard variant="medium" className="p-6 h-full">
                        <motion.div
                          className="text-emerald-700 mb-4"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-100">{service.excerpt}</p>
                      </GlassmorphicCard>
                    </RippleEffect>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.6} className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                >
                  View All Services
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </NatureBackground>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NatureBackground variant="lush" showTrees={false}>
          <div className="max-w-7xl mx-auto">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The Gonstead Difference
              </h2>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                Nashville's only Gonstead chiropractic office
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.2}>
              <StaggerItem>
                <GlassmorphicCard variant="strong" className="p-6 h-full">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🔍
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Specific Analysis</h3>
                  <p className="text-gray-100">
                    We use 5 pillars of analysis including x-rays, instrumentation, and palpation to find the exact cause of your problem
                  </p>
                </GlassmorphicCard>
              </StaggerItem>

              <StaggerItem>
                <GlassmorphicCard variant="strong" className="p-6 h-full">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🎯
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Precise Adjustments</h3>
                  <p className="text-gray-100">
                    No twisting or rotation. We adjust one bone at a time with specific, gentle force
                  </p>
                </GlassmorphicCard>
              </StaggerItem>

              <StaggerItem>
                <GlassmorphicCard variant="strong" className="p-6 h-full">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    👨‍👩‍👧‍👦
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Family Care</h3>
                  <p className="text-gray-100">
                    From newborns to grandparents, we provide safe, effective care for the whole family
                  </p>
                </GlassmorphicCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </NatureBackground>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience the Gonstead Difference?
            </h2>
            <p className="text-xl mb-8">
              Book your appointment today and start your journey to better health
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={settings?.bookingUrl || 'https://evergreenchironash.janeapp.com'}
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-colors shadow-xl"
              >
                Schedule Your Visit
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center" staggerDelay={0.2}>
            <StaggerItem>
              <GlassmorphicCard variant="light" className="p-6">
                <h3 className="font-bold text-white mb-2">Address</h3>
                <p className="text-gray-200">
                  {settings?.address?.street || '1222 16th Avenue South, Ste 10'}<br />
                  {settings?.address?.city || 'Nashville'}, {settings?.address?.state || 'TN'} {settings?.address?.zip || '37212'}
                </p>
              </GlassmorphicCard>
            </StaggerItem>

            <StaggerItem>
              <GlassmorphicCard variant="light" className="p-6">
                <h3 className="font-bold text-white mb-2">Phone</h3>
                <motion.a
                  href={`tel:${settings?.contactPhone || '6153951178'}`}
                  className="text-[#6ff799] hover:text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {settings?.contactPhone || '(615) 395-1178'}
                </motion.a>
              </GlassmorphicCard>
            </StaggerItem>

            <StaggerItem>
              <GlassmorphicCard variant="light" className="p-6">
                <h3 className="font-bold text-white mb-2">Email</h3>
                <motion.a
                  href={`mailto:${settings?.contactEmail || 'drmcgetrick@evergreenchironash.com'}`}
                  className="text-[#6ff799] hover:text-white break-all"
                  whileHover={{ scale: 1.05 }}
                >
                  {settings?.contactEmail || 'drmcgetrick@evergreenchironash.com'}
                </motion.a>
              </GlassmorphicCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
