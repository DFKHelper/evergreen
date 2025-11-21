'use client'

import Image from 'next/image'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
} from '@/components/animations'

export default function VisceralTherapyPageClient() {
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
                  Visceral Therapy
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-xl text-gray-100">
                  A gentle, manual therapy that helps restore natural movement and function of the viscera (organs)
                </p>
              </FadeIn>
            </div>
          </section>

          {/* Main Image */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="up">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/visceral-2.png"
                    alt="Visceral Therapy Treatment"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* What is Visceral Therapy */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up">
                <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">What is Visceral Therapy?</h2>
                  <div className="space-y-4 text-gray-100 text-center">
                    <p>
                      Just like muscles and joints, our organs need to move freely to function properly. This manual technique was developed by physician and physical therapist{' '}
                      <strong className="text-[#6ff799]">Jean-Pierre Barral</strong>.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Barral's Theory */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.1}>
                <GlassmorphicCard variant="light" className="p-8 rounded-3xl">
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">How Does It Work?</h2>
                  <div className="space-y-4 text-gray-100 text-center">
                    <p>
                      Barral's work is based on the theory that each organ has a specific rhythm and path of movement. Your organs naturally move as you breathe, digest and perform other bodily functions.
                    </p>
                    <p>
                      When restricted due to injury, infection, surgery, or inflammation, the normal movement is disrupted. This leads to fascial tension and imbalances that can manifest as various health issues; including digestive, menstrual and chronic pelvic pain.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.2}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">Benefits of Visceral Therapy</h2>
                  <p className="text-gray-100 text-center">
                    Visceral therapy is designed to work with your body's natural healing process and achieve balance. It helps to release deep-seated tension and restriction in the body.
                  </p>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Image Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl mx-auto">
              <FadeIn direction="up" delay={0.3}>
                <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/visceral-1.jpg"
                    alt="Visceral Therapy at Evergreen Chiropractic"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Call to Action Content */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.4}>
                <GlassmorphicCard variant="strong" className="p-8 rounded-3xl">
                  <p className="text-lg text-gray-100 text-center mb-6">
                    If you are experiencing digestive discomfort, menstrual pain, or chronic tension, visceral therapy can offer gentle relief and support your body's natural healing. Book a session to experience Visceral therapy and restore balance, improve function, and feel more at ease in your body.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://evergreenchironash.janeapp.com/#/staff_member/5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 border-2 border-[#6ff799] text-lg font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                    >
                      Book an appointment with Dr. Toya
                    </a>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Deposit Notice */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="up" delay={0.5}>
                <GlassmorphicCard variant="light" className="p-6 rounded-2xl">
                  <p className="text-gray-100 text-center">
                    A <span className="underline font-bold">non-refundable</span> $150 deposit will be required at the time of booking to reserve your appointment.
                  </p>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Questions About Visceral Therapy?</h2>
                <p className="text-xl mb-6">Give us a call or schedule your first appointment</p>
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
