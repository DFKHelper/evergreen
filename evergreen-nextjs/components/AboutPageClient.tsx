'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer
} from '@/components/animations'

interface Author {
  _id: string
  name: string
  title: string
  bio?: any
  slug?: { current: string }
}

export default function AboutPageClient({
  authors = []
}: {
  authors: Author[]
}) {
  const defaultTeam = [
    {
      _id: '1',
      name: 'Dr. Brittney McGetrick',
      title: 'Owner & Chiropractor, R.D.',
      image: '/team-1.png',
      bio: [
        'Dr. McGetrick attended San Diego State University where she received her bachelors degree in Foods & Nutrition, then went on to complete her dietetic internship at UCSD Medical Center and become a registered dietitian. After experiencing a chiropractic miracle herself, she was hooked.',
        'Dr. Brittney attended Southern California University of Health Sciences where she was the Gonstead Club president and graduated Magna Cum Laude. She is Webster certified and certified in CFT/Gillespie approach therapy.'
      ]
    },
    {
      _id: '2',
      name: 'Dr. Toya White',
      title: 'Chiropractor',
      image: '/team-2.png',
      bio: [
        'Born and raised in West Tennessee, Dr. Toya earned her bachelors in cell and molecular biology from University of Tennessee at Martin and a masters in epidemiology from University of Memphis.',
        'Dr. Toya attended Logan University in St. Louis, MO where she learned the Gonstead method. Having benefited tremendously from Gonstead chiropractic care herself, she proudly cares for families in Nashville.'
      ]
    },
    {
      _id: '3',
      name: 'Dr. Courtney Simon',
      title: 'Chiropractor',
      image: '/team-3.png',
      bio: [
        "Dr. Courtney obtained her Bachelor's degree in Exercise Science at Central College in Pella, Iowa. She attended Life University in Marietta, Georgia where she graduated Summa Cum Laude.",
        "She became a leader of the University's Gonstead Club and is Webster Technique certified. Dr. Courtney is proud to serve the Nashville community with specific chiropractic care."
      ]
    }
  ]

  const teamMembers = authors.length > 0 ? authors : defaultTeam

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
                Meet Our Team
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl text-gray-100">
                Dedicated Gonstead chiropractors committed to your family's health and wellness
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-16">
                {teamMembers.map((member: any, index: number) => (
                  <FadeIn key={member._id} direction={index % 2 === 0 ? 'right' : 'left'}>
                    <GlassmorphicCard
                      variant="medium"
                      className={`grid md:grid-cols-2 gap-12 items-center p-8 ${
                        index % 2 === 1 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                        <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="bg-gradient-to-br from-emerald-800 to-green-800 flex items-center justify-center w-full h-full">
                              <div className="text-6xl text-emerald-400">👤</div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                        <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                        <p className="text-xl text-emerald-600 font-semibold mb-4">{member.title}</p>
                        <div className="prose prose-lg text-gray-100">
                          {member.bio && typeof member.bio === 'object' && Array.isArray(member.bio) ? (
                            member.bio.map((paragraph: string, i: number) => (
                              <p key={i}>{paragraph}</p>
                            ))
                          ) : member.bio ? (
                            <PortableText value={member.bio} />
                          ) : null}
                        </div>
                      </div>
                    </GlassmorphicCard>
                  </FadeIn>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Gonstead Technique Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/50 via-emerald-900/40 to-teal-900/50" />

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn direction="up">
              <GlassmorphicCard variant="light" className="p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                  The Gonstead Technique
                </h2>
                <div className="prose prose-lg mx-auto">
                  <p className="text-gray-100">
                    Of the hundreds of different chiropractic techniques practiced all over the world, one of the most well-known
                    and highly respected is the Gonstead Method. This is the technique that we choose to utilize at Evergreen.
                  </p>
                  <p className="text-gray-100">
                    Gonstead chiropractic is named after Dr. Clarence S. Gonstead (1898-1978). Before becoming a chiropractor,
                    Gonstead worked in the field of engineering. His background gave him a unique perspective when studying and
                    analyzing the human frame.
                  </p>
                  <h3 className="text-2xl font-bold text-white mt-8 mb-4">What Makes the Gonstead Technique Different?</h3>
                  <p className="text-gray-100">
                    Before we adjust your spine, we take the time to analyze and investigate how your spine works and what it needs
                    to work most efficiently. The pillars of the Gonstead work are as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-100">
                    <li><strong>Visualization</strong> - How does the patient look today? Are they in pain?</li>
                    <li><strong>Instrumentation</strong> - Using a Nervoscope to search for areas of inflammation</li>
                    <li><strong>Static Palpation</strong> - How are your bones positioned when not moving?</li>
                    <li><strong>Motion Palpation</strong> - How effectively are your bones moving?</li>
                    <li><strong>X-ray Analysis</strong> - "To see is to know, not to see is to guess"</li>
                  </ul>
                  <p className="text-gray-200 mt-6 text-center text-xl font-semibold text-emerald-600">
                    We never guess when it comes to your health.
                  </p>
                </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Team?</h2>
              <p className="text-xl mb-6">Schedule your appointment today</p>
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
