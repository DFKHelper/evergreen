'use client'

import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

export default function ContactPageClient() {
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
                Contact Us
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl text-gray-100">
                We are located in the heart of Music Row in Nashville, TN!
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Contact Details */}
              <FadeIn direction="right" delay={0.2}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-2xl border-[#6ff799]/30">
                  <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                  <StaggerContainer staggerDelay={0.1}>
                    <div className="space-y-6">
                      <StaggerItem>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                            <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">Phone</p>
                            <a href="tel:6153951178" className="text-lg text-emerald-600 hover:text-emerald-700 transition-colors">
                              (615) 395-1178
                            </a>
                          </div>
                        </div>
                      </StaggerItem>

                      <StaggerItem>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                            <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">Email</p>
                            <a href="mailto:drmcgetrick@evergreenchironash.com" className="text-lg text-emerald-600 hover:text-emerald-700 transition-colors break-all">
                              drmcgetrick@evergreenchironash.com
                            </a>
                          </div>
                        </div>
                      </StaggerItem>

                      <StaggerItem>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                            <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">Address</p>
                            <p className="text-lg text-gray-100">
                              1222 16th Avenue South, Ste 10<br />
                              Nashville, TN 37212
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    </div>
                  </StaggerContainer>

                  {/* Office Hours */}
                  <div className="mt-8 pt-8 border-t border-emerald-600">
                    <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                    <div className="space-y-2 text-gray-100">
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Monday:</span>
                        <span>12:30pm - 7:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Tuesday:</span>
                        <span>9:00am - 12:00pm, 2:00pm - 5:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Wednesday:</span>
                        <span>9:00am - 12:00pm, 12:30pm - 6:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Thursday:</span>
                        <span>11:30am - 5:30pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Friday:</span>
                        <span>9:00am - 12:00pm, 2:00pm - 5:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Saturday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded transition-colors">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </FadeIn>

              {/* Right Column - Insurance Info */}
              <FadeIn direction="left" delay={0.4}>
                <GlassmorphicCard variant="light" className="p-8 rounded-2xl border-[#6ff799]/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Insurance Policy</h3>
                  <div className="space-y-4 text-gray-100">
                    <p>
                      A common question we get is "do you accept insurance?" The answer is no, because we want to make sure you
                      and your family get the care you DESERVE.
                    </p>
                    <p>
                      We strive to provide the BEST quality of care while keeping it affordable - especially for families!
                    </p>
                    <p>
                      We choose to let each patient have the FREEDOM to choose what is best for themselves and their families.
                      In this office we work for you, not a premium.
                    </p>
                  </div>
                  <div className="mt-6 p-6 rounded-2xl bg-emerald-900/60 backdrop-blur-sm border border-[#6ff799]/30">
                    <h4 className="font-bold text-white mb-3">We Do Accept:</h4>
                    <StaggerContainer staggerDelay={0.1}>
                      <ul className="space-y-2">
                        <StaggerItem>
                          <li className="flex items-center text-gray-100 hover:translate-x-1 transition-transform">
                            <svg className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            HSA Cards
                          </li>
                        </StaggerItem>
                        <StaggerItem>
                          <li className="flex items-center text-gray-100 hover:translate-x-1 transition-transform">
                            <svg className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            FSA Cards
                          </li>
                        </StaggerItem>
                        <StaggerItem>
                          <li className="flex items-center text-gray-100 hover:translate-x-1 transition-transform">
                            <svg className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Superbills for out-of-network reimbursement
                          </li>
                        </StaggerItem>
                      </ul>
                    </StaggerContainer>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/nature-1.png')] bg-cover bg-center" />
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Ready to Schedule?</h2>
              <p className="text-xl mb-6">Book your appointment online today</p>
              <a
                href="https://evergreenchironash.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
              >
                Book an Appointment
              </a>
            </FadeIn>
          </div>
        </section>
        </div>
      </div>
    </NatureBackground>
  )
}
