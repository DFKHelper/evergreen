'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      {/* Family-Centered Care Section */}
      <section className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl mt-8 mb-4">
        <NatureBackground variant="lush" showTrees={true} className="py-10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto relative z-10 space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <GlassmorphicCard variant="strong" className="p-8 rounded-3xl">
                <p className="text-white text-lg sm:text-xl leading-relaxed text-center">
                  We are a family-centered chiropractic office striving to provide children and families with gentle, specific chiropractic care. We seek to provide you and your family with all the tools you need to live your healthiest lives. We are located in the heart of Music Row and grateful to be serving this amazing community!
                </p>
              </GlassmorphicCard>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <GlassmorphicCard variant="strong" className="p-8 rounded-3xl">
                <p className="text-white text-lg sm:text-xl leading-relaxed text-center">
                  As the leading pediatric, prenatal, and family wellness experts, we welcome you and your family to enjoy a beautiful healing experience & achieve optimal health and well-being. Whether you are trying to conceive, expecting a baby, experiencing uncomfortable symptoms, already leading a healthy lifestyle, or simply want more for your life, Evergreen Chiropractic is here for you!
                </p>
              </GlassmorphicCard>
            </FadeIn>
          </div>
        </NatureBackground>
      </section>

      {/* Featured Services with Nature Background */}
      <section className="relative mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-4">
        <NatureBackground variant="vibrant" showTrees={true} className="py-16 px-6 sm:px-8 lg:px-12">
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
                      <GlassmorphicCard variant="medium" className="p-6 h-full flex flex-col items-center text-center">
                        {service.title === 'Pregnant Moms' ? (
                          <motion.div
                            className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Image
                              src="/pregnant-moms.png"
                              alt="Pregnant Moms - Webster technique care"
                              width={160}
                              height={120}
                              className="rounded-2xl"
                            />
                          </motion.div>
                        ) : service.title === 'Newborns & Kids' ? (
                          <motion.div
                            className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Image
                              src="/newborns-kids.png"
                              alt="Newborns & Kids - Gentle pediatric care"
                              width={160}
                              height={120}
                              className="rounded-2xl"
                            />
                          </motion.div>
                        ) : service.title === 'Adults' ? (
                          <motion.div
                            className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Image
                              src="/adults.png"
                              alt="Adults - Peak performance care"
                              width={160}
                              height={120}
                              className="rounded-2xl"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Image
                              src="/athletes.png"
                              alt="Athletes - Peak performance care"
                              width={160}
                              height={120}
                              className="rounded-2xl"
                            />
                          </motion.div>
                        )}
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
                  className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-emerald-700 hover:bg-[#6ff799] hover:text-emerald-900 font-semibold rounded-2xl shadow-lg transition-all"
                >
                  View All Services
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </NatureBackground>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl">
        <NatureBackground variant="lush" showTrees={false} className="py-10 px-6 sm:px-8 lg:px-12">
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
                <GlassmorphicCard variant="strong" className="p-6 h-full flex flex-col items-center">
                  <motion.div
                    className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center w-[200px] h-[150px] mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/specific-analysis.png"
                      alt="Specific Analysis - Doctors examining spine x-ray"
                      width={200}
                      height={150}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">Specific Analysis</h3>
                  <p className="text-gray-100 text-center">
                    We use 5 pillars of analysis including x-rays, instrumentation, and palpation to find the exact cause of your problem
                  </p>
                </GlassmorphicCard>
              </StaggerItem>

              <StaggerItem>
                <GlassmorphicCard variant="strong" className="p-6 h-full flex flex-col items-center">
                  <motion.div
                    className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center w-[200px] h-[150px] mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/precise-adjustments.png"
                      alt="Precise Adjustments - Gonstead technique"
                      width={200}
                      height={150}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">Precise Adjustments</h3>
                  <p className="text-gray-100 text-center">
                    No twisting or rotation. We adjust one bone at a time with specific, gentle force
                  </p>
                </GlassmorphicCard>
              </StaggerItem>

              <StaggerItem>
                <GlassmorphicCard variant="strong" className="p-6 h-full flex flex-col items-center">
                  <motion.div
                    className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center w-[200px] h-[150px] mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/family-care.png"
                      alt="Family Care - Care for all ages"
                      width={200}
                      height={150}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">Family Care</h3>
                  <p className="text-gray-100 text-center">
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
                <h3 className="font-bold text-white mb-4">Address</h3>
                <p className="text-gray-200 mb-4">
                  {settings?.address?.street || '1222 16th Avenue South, Ste 10'}<br />
                  {settings?.address?.city || 'Nashville'}, {settings?.address?.state || 'TN'} {settings?.address?.zip || '37212'}
                </p>
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.01843511678!2d-86.79316710000002!3d36.14176440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467ccca74c75b%3A0xc956b67bca9625d4!2sEvergreen%20Chiropractic!5e0!3m2!1sen!2sus!4v1763679645965!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
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
                  className="text-[#6ff799] hover:text-white text-sm"
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
