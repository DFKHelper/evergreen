'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations'
import { motion } from 'framer-motion'

const practitioners = [
  {
    name: 'Dr. Toya',
    title: 'Chiropractor',
    specialty: 'Specializes in visceral therapy',
    image: '/dr-toya-booking.png',
    bookingUrl: 'https://evergreenchironash.janeapp.com/#/staff_member/5',
    learnMoreUrl: '/visceral-therapy',
    learnMoreText: 'Learn about visceral therapy',
  },
  {
    name: 'Dr. Courtney',
    title: 'Chiropractor',
    specialty: 'Webster certified, multiple therapy types',
    image: '/dr-courtney-booking.png',
    bookingUrl: 'https://evergreenchironash.janeapp.com/#/staff_member/9',
  },
  {
    name: 'Intern Dr. Kallie',
    title: 'Chiropractic Intern',
    specialty: 'Associate practitioner',
    image: '/dr-kallie-booking.png',
    bookingUrl: 'https://evergreenchironash.janeapp.com/#/staff_member/10',
  },
  {
    name: 'Dr. Brittney',
    title: 'Owner & Chiropractor, R.D.',
    specialty: 'Gonstead, Webster, CFT/Gillespie certified',
    image: '/dr-brittney-booking.png',
    bookingUrl: 'https://evergreenchironash.janeapp.com/#/staff_member/1',
    learnMoreUrl: '/cft-gillespie',
    learnMoreText: 'Learn more about CFT',
  },
  {
    name: 'Meghan',
    title: 'Massage Therapist',
    specialty: 'Therapeutic massage',
    image: '/meghan-booking.png',
    bookingUrl: 'https://evergreenchironash.janeapp.com/#/staff_member/7',
  },
]

const benefits = [
  'Decreases migraine frequency and intensity',
  'Decreases anxiety',
  'Helps hormone regulation; reduces period cramps',
  'Boosts immune system (up to 200%)',
  'Decreases pharmaceutical costs (85%)',
  'Reduces need for outpatient surgeries (62%)',
  'Eliminates neck and back pain',
  'Improves sleep quality and duration',
  'Improves digestion',
  'Decreases non-age-related bedwetting',
]

export default function NewPatientClient() {
  return (
    <NatureBackground variant="subtle" showTrees={true}>
      <div className="min-h-screen relative">
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/40 via-green-900/30 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn direction="right" delay={0.1}>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Welcome to Evergreen Chiropractic!
                  </h1>
                  <p className="text-lg text-gray-100 mb-4">
                    We offer Gonstead Chiropractic care and Craniosacral Fascial Therapy (CFT) with multiple experienced practitioners ready to serve you and your family.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="https://evergreenchironash.janeapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-[#6ff799] text-emerald-900 font-semibold rounded-2xl hover:bg-[#5ce088] transition-all shadow-lg"
                    >
                      Book an Appointment
                    </Link>
                  </motion.div>
                </FadeIn>
                <FadeIn direction="left" delay={0.3}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/new-patient-welcome.png"
                      alt="Welcome to Evergreen Chiropractic"
                      width={600}
                      height={450}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 via-emerald-900/20 to-teal-900/30" />
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <FadeIn direction="right" delay={0.1}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/new-patient-benefits.png"
                      alt="Benefits of Chiropractic Care"
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </FadeIn>
                <FadeIn direction="left" delay={0.2}>
                  <GlassmorphicCard variant="medium" className="p-5">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      In just a few adjustments, you could be on your way to feeling better and functioning better!
                    </h2>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-100">
                          <svg className="w-6 h-6 text-[#6ff799] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassmorphicCard>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Meet Our Practitioners */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up" className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  Meet Our Practitioners
                </h2>
                <p className="text-base text-gray-100">
                  Book directly with the practitioner of your choice
                </p>
              </FadeIn>

              <StaggerContainer staggerDelay={0.1}>
                <div className="grid md:grid-cols-2 gap-4">
                  {practitioners.map((practitioner) => (
                    <StaggerItem key={practitioner.name}>
                      <GlassmorphicCard variant="medium" className="p-4 h-full flex flex-col">
                        <div className="rounded-xl overflow-hidden mb-3 shadow-lg">
                          <Image
                            src={practitioner.image}
                            alt={practitioner.name}
                            width={400}
                            height={300}
                            className="w-full h-auto"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">{practitioner.name}</h3>
                        <p className="text-[#6ff799] font-medium text-sm">{practitioner.title}</p>
                        <p className="text-gray-200 text-sm mb-2 flex-grow">{practitioner.specialty}</p>

                        <div className="space-y-1.5">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <a
                              href={practitioner.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-center px-3 py-2 bg-[#6ff799] text-emerald-900 font-semibold rounded-lg hover:bg-[#5ce088] transition-colors text-sm"
                            >
                              Book with {practitioner.name}
                            </a>
                          </motion.div>

                          {practitioner.learnMoreUrl && (
                            <Link
                              href={practitioner.learnMoreUrl}
                              className="block w-full text-center px-3 py-1.5 border border-[#6ff799]/50 text-[#6ff799] font-medium rounded-lg hover:bg-[#6ff799]/10 transition-colors text-xs"
                            >
                              {practitioner.learnMoreText}
                            </Link>
                          )}
                        </div>

                        <p className="text-gray-400 text-xs mt-2 text-center">
                          $150 deposit required.{' '}
                          <Link href="/contact" className="text-[#6ff799] hover:underline">
                            Cancellation policy
                          </Link>
                        </p>
                      </GlassmorphicCard>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </section>

          {/* The Gonstead Technique */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/30 via-emerald-900/20 to-green-900/30" />
            <div className="max-w-6xl mx-auto relative z-10">
              <FadeIn direction="up" className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  The Gonstead Technique
                </h2>
                <p className="text-lg text-[#6ff799] font-semibold">
                  What sets our office apart...
                </p>
              </FadeIn>

              <div className="grid lg:grid-cols-2 gap-5 mb-8">
                <FadeIn direction="right" delay={0.1}>
                  <GlassmorphicCard variant="strong" className="p-5 h-full">
                    <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
                      <Image
                        src="/gonstead-xrays-nervoscope.png"
                        alt="Pre and post x-rays and nervoscope demonstration"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      We are the only office in Nashville that practices this technique
                    </h3>
                    <ul className="space-y-2 text-gray-100">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#6ff799] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Full spine x-rays on every patient</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#6ff799] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Complete exam at each visit; customized care</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#6ff799] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Adjustments performed without rotation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#6ff799] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>One bone at a time approach</span>
                      </li>
                    </ul>
                  </GlassmorphicCard>
                </FadeIn>

                <FadeIn direction="left" delay={0.2}>
                  <GlassmorphicCard variant="strong" className="p-5 h-full">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="/gonstead-technique-1.png"
                          alt="Gonstead technique demonstration"
                          width={300}
                          height={225}
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="/gonstead-technique-2.png"
                          alt="Gonstead adjustment"
                          width={300}
                          height={225}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      No twisting. No "ninja moves."
                    </h3>
                    <p className="text-gray-100 mb-4">
                      We are chiropractors for people scared of chiropractors. Our gentle, specific approach means no surprises and no unnecessary manipulation.
                    </p>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/gonstead-no-rotation.png"
                        alt="No rotation adjustment technique"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </GlassmorphicCard>
                </FadeIn>
              </div>

              <FadeIn delay={0.4} className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-4 border-2 border-[#6ff799] text-white font-semibold rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all"
                  >
                    Learn More About the Gonstead Technique
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </FadeIn>
            </div>
          </section>

          {/* Insurance & Payment */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up">
                <GlassmorphicCard variant="medium" className="p-5 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Insurance & Payment
                      </h2>
                      <div className="space-y-3 text-gray-100 text-sm">
                        <p>
                          <strong className="text-[#6ff799]">We do not accept insurance.</strong> This allows us to ensure quality care at affordable prices without the restrictions insurance companies often impose.
                        </p>
                        <p>
                          We accept HSA and FSA cards. We also provide superbills for out-of-network reimbursement if your insurance covers it.
                        </p>
                        <p>
                          Your health decisions should be between you and your doctor, not an insurance company. This model gives you the freedom to choose the care that is best for you.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/insurance-info.png"
                        alt="Insurance and payment information"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Office Hours & Contact */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/30 via-green-900/20 to-teal-800/30" />
            <div className="max-w-6xl mx-auto relative z-10">
              <FadeIn direction="up" className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Office Hours & Contact
                </h2>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-5">
                <FadeIn direction="right" delay={0.1}>
                  <GlassmorphicCard variant="strong" className="p-5 h-full">
                    <h3 className="text-xl font-bold text-white mb-4">Hours</h3>
                    <div className="space-y-2 text-gray-100 text-sm">
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span className="text-[#6ff799]">12:30pm - 7:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday</span>
                        <span className="text-[#6ff799]">9:00am - 12:00pm, 2:00pm - 5:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday</span>
                        <span className="text-[#6ff799]">9:00am - 12:00pm, 12:30pm - 6:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday</span>
                        <span className="text-[#6ff799]">11:30am - 5:30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span className="text-[#6ff799]">9:00am - 12:00pm, 2:00pm - 5:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-gray-400">Select Saturdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-gray-400">Closed</span>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </FadeIn>

                <FadeIn direction="left" delay={0.2}>
                  <GlassmorphicCard variant="strong" className="p-5 h-full">
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[#6ff799] font-semibold mb-2">Address</h4>
                        <p className="text-gray-100">
                          1222 16th Avenue South, Ste 10<br />
                          Nashville, TN 37212
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[#6ff799] font-semibold mb-2">Phone</h4>
                        <a href="tel:6153951178" className="text-gray-100 hover:text-[#6ff799] transition-colors">
                          (615) 395-1178
                        </a>
                      </div>
                      <div>
                        <h4 className="text-[#6ff799] font-semibold mb-2">Email</h4>
                        <a href="mailto:drmcgetrick@evergreenchironash.com" className="text-gray-100 hover:text-[#6ff799] transition-colors break-all">
                          drmcgetrick@evergreenchironash.com
                        </a>
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-[#6ff799] text-emerald-900 font-semibold rounded-xl hover:bg-[#5ce088] transition-colors"
                        >
                          Contact Us
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </GlassmorphicCard>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="up">
                <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="text-lg mb-4">
                  Book your first appointment today and experience the Gonstead difference.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="https://evergreenchironash.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 border-2 border-[#6ff799] text-base font-medium rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all"
                  >
                    Book an Appointment
                  </a>
                </motion.div>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </NatureBackground>
  )
}
