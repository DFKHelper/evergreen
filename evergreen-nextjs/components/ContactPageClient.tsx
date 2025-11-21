'use client'

import { useState } from 'react'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = `Contact Form: Message from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

    window.location.href = `mailto:drmcgetrick@evergreenchironash.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
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
            <div className="max-w-2xl mx-auto">
              {/* Contact Details */}
              <FadeIn direction="up" delay={0.2}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-2xl border-[#6ff799]/30">
                  <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                  <StaggerContainer staggerDelay={0.1}>
                    <div className="space-y-6">
                      <StaggerItem>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 p-2 rounded-xl bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                            <svg className="h-6 w-6 text-[#6ff799]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">Phone</p>
                            <a href="tel:6153951178" className="text-lg text-[#6ff799] hover:text-white transition-colors">
                              (615) 395-1178
                            </a>
                          </div>
                        </div>
                      </StaggerItem>

                      <StaggerItem>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 p-2 rounded-xl bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                            <svg className="h-6 w-6 text-[#6ff799]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">Email</p>
                            <a href="mailto:drmcgetrick@evergreenchironash.com" className="text-lg text-[#6ff799] hover:text-white transition-colors break-all">
                              drmcgetrick@evergreenchironash.com
                            </a>
                          </div>
                        </div>
                      </StaggerItem>

                      <StaggerItem>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 p-2 rounded-xl bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                            <svg className="h-6 w-6 text-[#6ff799]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Monday:</span>
                        <span>12:30pm - 7:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Tuesday:</span>
                        <span>9:00am - 12:00pm, 2:00pm - 5:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Wednesday:</span>
                        <span>9:00am - 12:00pm, 12:30pm - 6:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Thursday:</span>
                        <span>11:30am - 5:30pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Friday:</span>
                        <span>9:00am - 12:00pm, 2:00pm - 5:00pm</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Saturday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between hover:bg-emerald-900/30 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Map Location */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up" delay={0.2}>
              <GlassmorphicCard variant="medium" className="p-6 rounded-2xl border-[#6ff799]/30">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us</h2>
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.01843511678!2d-86.79316710000002!3d36.14176440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467ccca74c75b%3A0xc956b67bca9625d4!2sEvergreen%20Chiropractic!5e0!3m2!1sen!2sus!4v1763679645965!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-gray-100 text-center mt-4">
                  1222 16th Avenue South, Ste 10, Nashville, TN 37212
                </p>
              </GlassmorphicCard>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up" delay={0.2}>
              <GlassmorphicCard variant="strong" className="p-8 sm:p-10 rounded-3xl border-[#6ff799]/30">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Send Us a Message</h2>
                <p className="text-gray-200 text-center mb-8">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ff799] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ff799] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6ff799] focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full bg-[#6ff799] text-emerald-900 hover:bg-[#5de085] transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
                    >
                      Send Message
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </GlassmorphicCard>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
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
