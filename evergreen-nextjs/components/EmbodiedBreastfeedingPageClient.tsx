'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn
} from '@/components/animations'

export default function EmbodiedBreastfeedingPageClient() {
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
                  Embodied Breastfeeding
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-xl text-gray-100">
                  A 90-minute group session to support you and your baby on your feeding journey
                </p>
              </FadeIn>
            </div>
          </section>

          {/* First Image */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up">
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/embodied-breastfeeding-1.png"
                    alt="Embodied Breastfeeding Session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.1}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                  <div className="space-y-4 text-gray-100 text-center">
                    <p className="text-lg">
                      Embodied Breastfeeding is a <strong className="text-[#6ff799]">90 min group session</strong> hosted by Dr. Brittney & Meghan Thornburgh
                    </p>
                    <p>
                      We are here to support you & your baby wherever you are in your feeding journey: breastfeeding, bottle feeding, currently bottle feeding but want to get back to breastfeeding, etc.
                    </p>
                    <p>
                      If you have been told your baby has an oral tie and you're not sure what to do next, we can help. If you are preparing your baby for a frenectomy (tie release procedure), we can help. If you had the frenectomy done with your baby & didn't get the outcomes you were looking for, we can help.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Second Image */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.2}>
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/embodied-breastfeeding-2.png"
                    alt="Embodied Breastfeeding Information"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Third Image */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.3}>
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/embodied-breastfeeding-3.png"
                    alt="Meet Our Doctors"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Book Now */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up" delay={0.2}>
                <a
                  href="https://evergreenchironash.janeapp.com#/staff_member/7/treatment/12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#6ff799] text-emerald-900 text-lg font-semibold rounded-2xl hover:bg-[#5ce088] transition-all hover:scale-105 shadow-lg"
                >
                  Book Here
                </a>
              </FadeIn>
            </div>
          </section>

          {/* Important Notes */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.3}>
                <GlassmorphicCard variant="light" className="p-8 rounded-3xl">
                  <div className="space-y-4 text-gray-100 text-center">
                    <p>
                      <strong className="text-[#6ff799]">***When making the appointment, please make it in your BABY's name!</strong> There is an option in Jane (scheduling software) where you can create a profile for both yourself and your baby. When scheduling your baby an appointment, we need the appointment booked in your baby's name. Thank you!
                    </p>
                    <p>
                      A <strong className="text-[#6ff799] underline">non-refundable</strong> $150 deposit will be required at the time of booking to reserve your appointment. For more information on our cancellation policy, <Link href="/contact" className="text-[#6ff799] hover:underline">contact us</Link>.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Back to CFT Link */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up" delay={0.4}>
                <Link
                  href="/cft-gillespie"
                  className="inline-flex items-center text-[#6ff799] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to CFT Gillespie
                </Link>
              </FadeIn>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Questions About Embodied Breastfeeding?</h2>
                <p className="text-xl mb-6">We're here to help with your feeding journey</p>
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
                    className="inline-flex items-center justify-center px-8 py-3 bg-emerald-900 text-base font-medium rounded-2xl text-white hover:bg-green-900 transition-all hover:scale-105"
                  >
                    Book an Appointment
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
