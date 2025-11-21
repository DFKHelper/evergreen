'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer
} from '@/components/animations'
import { motion } from 'framer-motion'

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
      image: '/team-1.jpg',
      instagram: '@dr.brittneymcgetrick',
      bio: [
        'Dr. McGetrick attended San Diego State University where she received her bachelors degree in Foods & Nutrition, she then went on to complete her dietetic internship at UCSD Medical Center and become a registered dietitian. Unimpressed with the world of hospital dietetics, she was looking for something more fulfilling when she experienced a chiropractic miracle herself. A persistent knee injury resolved after her spine was adjusted by a Gonstead chiropractor, and from that day forward, she was hooked.',
        'Dr. Brittney went on to attend Southern California University of Health Sciences in Whittier, California where she was the Gonstead Club president and graduated Magna Cum Laude. While in school, she attended dozens of seminars to perfect her craft and is excited to serve the Nashville community with extra study hours in specific adjusting skills, pediatric chiropractic, and immunology. Dr. Brittney is also Webster certified, and certified in CFT/Gillespie approach therapy.',
        'Talus is her black lab who comes to work with her everyday, you will see him when you come to the office! He was 3 months old in this photo. He is a bit bigger now!'
      ]
    },
    {
      _id: '2',
      name: 'Dr. Toya White',
      title: 'Chiropractor',
      image: '/team-2.jpg',
      instagram: '@toyad_white',
      bio: [
        'Born and raised in West Tennessee, Dr. Toya attended the University of Tennessee at Martin where she completed research and studied the human body. She earned her bachelors degree in cell and molecular biology and went on to study patterns of health and disease at the University of Memphis where she earned a masters degree in epidemiology.',
        'After studying disease pathways and going through her own health issues, it was clear that using drugs as the primary intervention wasn\'t the solution. The body is beyond capable of healing itself given the proper support. Why weren\'t we discussing this?',
        'Dr. Toya attended Logan University in St. Louis, MO where she spent countless hours learning the Gonstead method, a comprehensive and specific chiropractic technique. Having benefited tremendously from Gonstead chiropractic care herself, Dr. Toya proudly cares for families in the Nashville area using this specific system.'
      ]
    },
    {
      _id: '3',
      name: 'Dr. Courtney Simon',
      title: 'Chiropractor',
      image: '/team-3.jpg',
      bio: [
        'Dr. Courtney grew up in small town Iowa with her family and was involved in a variety of sports growing up. It was during her senior year of high school that she started throwing up dozens of times every day and after months of doctors appointments and tests, she visited a chiropractic office. Within the first few visits she noticed a night and day difference and it was then that she realized how powerful the nervous system is and how chiropractic can impact all areas of health.',
        'She went on to obtain her Bachelor\'s degree in Exercise Science at Central College in Pella, Iowa. During these years as she was developing a deeper love for how the human body works and simultaneously forming a desire to live a sustainable holistic lifestyle, she knew it was her calling to become a chiropractor!',
        'Dr. Courtney attended Life University in Marietta, Georgia where she graduated Summa Cum Laude. During her time in the Doctor of Chiropractic program she was introduced to the Gonstead Technique and later became a leader of the University\'s Gonstead Club. The specificity and unique care for each patient spoke to her desire of how she wants to care for patients. She believes that everyone\'s nervous system and chiropractic care should be as unique to them as their appearance, life experiences, and goals are. Dr. Courtney is also certified in the Webster Technique and has attended several seminars to continue to learn how to best serve her patients. She is proud to serve the Nashville community with the specific chiropractic care that she believes every person deserves.'
      ]
    }
  ]

  const teamMembers = authors.length > 0 ? authors : defaultTeam

  return (
    <NatureBackground variant="subtle" showTrees={false}>
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
          <div className="max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-12">
                {teamMembers.map((member: any, index: number) => (
                  <TeamMemberCard key={member._id} member={member} />
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
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
                  <div className="mb-4 sm:float-right sm:ml-6 sm:mb-4 rounded-2xl overflow-hidden w-full sm:w-80 md:w-96">
                    <Image
                      src="/gonstead-technique.jpg"
                      alt="Dr. Gonstead demonstrating technique"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
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
                  <p className="text-gray-200 mt-6 text-center text-xl font-semibold text-emerald-600 clear-both">
                    We never guess when it comes to your health.
                  </p>
                </div>
              </GlassmorphicCard>
            </FadeIn>
          </div>
        </section>

        {/* CFT/Gillespie Therapy Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/50 via-emerald-900/40 to-green-900/50" />

          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn direction="up">
              <GlassmorphicCard variant="light" className="p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                  CFT/Gillespie Therapy
                </h2>

                <div className="prose prose-lg mx-auto">
                  {/* CFT Image */}
                  <div className="mb-4 sm:float-left sm:mr-6 sm:mb-4 rounded-2xl overflow-hidden w-full sm:w-80 md:w-96">
                    <Image
                      src="https://images.squarespace-cdn.com/content/v1/5c5a1545b2cf791f213739eb/2ab48a36-558d-479f-8899-6115f94918c5/76651686_2666332186735484_1599287903672860672_n.jpg?format=750w"
                      alt="CFT/Gillespie Therapy demonstration"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-100 mb-4">
                    Craniosacral Fascial Therapy (CFT) is a very gentle, natural approach with powerful therapeutic effects.
                    The practice combines cranial sacral therapy with myofascial release techniques, developed by Dr. Barry Gillespie.
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-8 mb-4">How CFT Works</h3>
                  <p className="text-gray-100 mb-4">
                    Fascia is the body's interconnected web of connective tissue that provides structural support for muscles, organs, and nerves.
                    The therapy gently releases fascial strain to restore optimal mobility and brain function, allowing cerebrospinal fluid to flow
                    freely to nourish tissues and eliminate toxins.
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-8 mb-4">What CFT Treats</h3>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600 mb-2">Infants</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-100 text-base">
                        <li>Birth trauma</li>
                        <li>Tongue tie</li>
                        <li>Colic & reflux</li>
                        <li>Torticollis</li>
                        <li>Feeding difficulties</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600 mb-2">Children</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-100 text-base">
                        <li>Asthma</li>
                        <li>ADHD</li>
                        <li>Concussion</li>
                        <li>Ear infections</li>
                        <li>Headaches</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600 mb-2">Adults</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-100 text-base">
                        <li>Migraines</li>
                        <li>TMJ</li>
                        <li>Neck & back pain</li>
                        <li>Anxiety</li>
                        <li>Whiplash</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-200 mt-8 text-center text-xl font-semibold text-emerald-600 clear-both">
                    Dr. Brittney McGetrick is CFT/Gillespie certified and provides this specialized care.
                  </p>

                  {/* CFT Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 clear-both">
                    <Link
                      href="/cft-gillespie"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                    >
                      Learn More About CFT Here
                    </Link>
                    <Link
                      href="/embodiedbreastfeeding"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                    >
                      Embodied Breastfeeding Group
                    </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
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

function TeamMemberCard({ member }: { member: any }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const bioArray = member.bio && typeof member.bio === 'object' && Array.isArray(member.bio)
    ? member.bio
    : []

  const hasMultipleParagraphs = bioArray.length > 1
  const displayBio = isExpanded ? bioArray : bioArray.slice(0, 1)

  return (
    <FadeIn direction="up">
      <GlassmorphicCard variant="medium" className="p-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
          <div className="w-full sm:w-72 lg:w-80 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 256px, 288px"
                />
              ) : (
                <div className="bg-gradient-to-br from-emerald-800 to-green-800 flex items-center justify-center w-full h-full rounded-2xl">
                  <div className="text-6xl text-emerald-400">👤</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{member.name}</h2>
            <p className="text-lg sm:text-xl text-emerald-600 font-semibold mb-4">{member.title}</p>
            <div className="prose prose-sm sm:prose-base text-gray-100">
              {displayBio.map((paragraph: string, i: number) => (
                <p key={i} className="mb-3">{paragraph}</p>
              ))}
              {member.bio && !Array.isArray(member.bio) && (
                <PortableText value={member.bio} />
              )}
            </div>
            {member.instagram && (
              <div className="mt-4">
                <a
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-[#6ff799] font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{member.instagram}</span>
                </a>
              </div>
            )}
            {hasMultipleParagraphs && (
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-emerald-600 hover:text-[#6ff799] font-semibold flex items-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </GlassmorphicCard>
    </FadeIn>
  )
}
