'use client'

import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

const infantConditions = [
  'Birth trauma',
  'Tongue tie-lip tie',
  'Torticollis',
  'Reflux',
  'Colic',
  'Inability to latch',
  'Difficulty sucking',
  'Difficulty swallowing',
  'Constipation',
  'Indigestion',
  'Asymmetrical head shape',
  'Earache',
  'Autism',
  'TMJ',
  'Strabismus'
]

const childrenConditions = [
  'Asthma',
  'Earache',
  'Concussion',
  'ADHD/ADD',
  'Learning disorders',
  'Sinus conditions',
  'Anxiety',
  'Neck pain',
  'Allergies',
  'Bedwetting',
  'Headache',
  'Scoliosis'
]

const adultConditions = [
  'Migraine',
  'Concussion',
  'TMJ',
  'Neck pain',
  'Jaw pain',
  'Hip pain',
  'Sinus conditions',
  'Back pain',
  'Anxiety',
  'Depression',
  'Pelvic pain',
  'Whiplash',
  'Scars'
]

export default function CFTPageClient() {
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
                  CFT Gillespie
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-xl text-gray-100">
                  Craniosacral Fascial Therapy - A gentle, natural approach with powerful therapeutic effects
                </p>
              </FadeIn>
            </div>
          </section>

          {/* What is CFT */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up">
                <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">What is CFT?</h2>
                  <div className="space-y-4 text-gray-100">
                    <p>
                      <strong className="text-[#6ff799]">Craniosacral Fascial Therapy (CFT)</strong> is the work of{' '}
                      <a
                        href="http://www.gillespieapproach.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6ff799] hover:underline"
                      >
                        Dr. Barry Gillespie
                      </a>. It is based on his theory that the Craniosacral and Fascial systems are not separate but one interconnected system. CFT blends the two established modalities of Dr. William Sutherland's Cranial Sacral Therapy and John Barnes' Myofascial Release, along with dental techniques developed from Dr. Gillespie's experience as a periodontist.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* What is Fascia */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.1}>
                <GlassmorphicCard variant="light" className="p-8 rounded-3xl">
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">What is Fascia?</h2>
                  <div className="space-y-4 text-gray-100 text-center">
                    <p>
                      Basically, fascia is the body's connective tissue, providing a framework that helps support and protect muscles, organs, and the entire body as a unit. It is an all-encompassing web found throughout the body that protects the entire body as a whole. It envelopes organs, muscles, nerves and even blood, for protection from outside trauma. It supports the musculoskeletal system and allows us to perform functional activities like walking, jumping, running, or simply changing position.
                    </p>
                    <p>
                      The intricate <strong className="text-[#6ff799]">craniosacral fascial system</strong> originates in the body's core around the brain and spinal cord, and extends through the fascial web. A healthy system allows for the free flow of cerebrospinal fluid from the brain, down the spine, to the sacrum, and into the fascia.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* How is Fascia Damaged */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.2}>
                <GlassmorphicCard variant="light" className="p-8 rounded-3xl">
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">How is Fascia Damaged?</h2>
                  <p className="text-gray-100 text-center">
                    All of us have experienced trauma --- difficult birth, surgery, auto accidents, falls, concussions, dental work/orthodontics, vaccinations, and emotional trauma, to name a few. Starting from birth, traumas accumulate and can create strain and toxicity in the craniosacral fascial system, restricting critical brain motion. Damage to the craniosacral fascial system can cause poor blood flow, diminish nerve impulses, hinder brain function, limit range of motion, and cause a host of other ailments.
                  </p>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* How does CFT Help */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" delay={0.3}>
                <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">How does CFT Help?</h2>
                  <div className="space-y-4 text-gray-100 text-center">
                    <p>
                      Our brains must expand and contract. Any restrictions or damage to this motion can greatly effect our health and wellbeing.
                    </p>
                    <p>
                      CFT techniques are designed to gently unwind and release accumulated fascial strain. This allows optimal mobility and better brain function. When the Craniosacral Fascial System is loose and open there is free flow of cerebrospinal fluid to help nourish and cleanse toxins.
                    </p>
                  </div>
                </GlassmorphicCard>
              </FadeIn>
            </div>
          </section>

          {/* Conditions Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up" className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  CFT is Effective for All Ages
                </h2>
                <p className="text-lg text-gray-100">
                  CFT benefits a variety of conditions
                </p>
              </FadeIn>

              <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
                {/* Infants */}
                <StaggerItem>
                  <GlassmorphicCard variant="strong" className="p-6 h-full">
                    <h3 className="text-xl font-bold text-[#6ff799] mb-4 text-center">Infants</h3>
                    <ul className="space-y-2">
                      {infantConditions.map((condition) => (
                        <li key={condition} className="text-gray-100 flex items-start">
                          <span className="text-[#6ff799] mr-2">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </GlassmorphicCard>
                </StaggerItem>

                {/* Children */}
                <StaggerItem>
                  <GlassmorphicCard variant="strong" className="p-6 h-full">
                    <h3 className="text-xl font-bold text-[#6ff799] mb-4 text-center">Children</h3>
                    <ul className="space-y-2">
                      {childrenConditions.map((condition) => (
                        <li key={condition} className="text-gray-100 flex items-start">
                          <span className="text-[#6ff799] mr-2">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </GlassmorphicCard>
                </StaggerItem>

                {/* Adults */}
                <StaggerItem>
                  <GlassmorphicCard variant="strong" className="p-6 h-full">
                    <h3 className="text-xl font-bold text-[#6ff799] mb-4 text-center">Adults</h3>
                    <ul className="space-y-2">
                      {adultConditions.map((condition) => (
                        <li key={condition} className="text-gray-100 flex items-start">
                          <span className="text-[#6ff799] mr-2">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </GlassmorphicCard>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Tongue Tie Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-teal-900/20">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Tongue Tie & Tethered Oral Tissues
                </h2>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn direction="up" delay={0.1}>
                  <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">What exactly is a Tongue Tie?</h3>
                    <p className="text-gray-100 text-center">
                      We all have a frenulum which is tissue on the underside of our tongue connected to the floor of the mouth. When this tissue is too short, too thick, too tight, and attached too far forward on the tongue, it will affect mobility, function and the tongue's resting posture. In some cases, a tied frenulum may not be visible (known as a submucosal tie). A tongue tie condition is often accompanied by a lip tie or cheek ties (also known as buccal ties). All of these conditions are referred to as Tethered Oral Tissues (TOTS).
                    </p>
                  </GlassmorphicCard>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                  <GlassmorphicCard variant="light" className="p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">What causes Tongue Tie?</h3>
                    <p className="text-gray-100 text-center">
                      Tongue tie is often associated with a fairly common genetic mutation of the MTHFR gene. This gene controls the production of an enzyme called Methyl-Tetra-Hydro-Folate-Reductase. People with a variant on this gene have a difficult time processing folate or folic acid which can contribute to other midline defects as well as general health issues. Research shows 30-50 percent of the population carries this mutation of the MTHFR gene.
                    </p>
                  </GlassmorphicCard>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                  <GlassmorphicCard variant="medium" className="p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Why does it matter?</h3>
                    <div className="space-y-4 text-gray-100 text-center">
                      <p>
                        Your tongue should be resting in the palate and filling the entire roof of your mouth. This allows for optimal palate development. A wide palate allows enough room for teeth to come in straight and guides proper cranial bone and orofacial development. A restrictive tongue will sit in the lower part of the mouth, causing mouth breathing, open mouth posture and a tongue thrust swallowing pattern. These can contribute to an obstructed airway leading to sleep, breathing, and other OMDs.
                      </p>
                    </div>
                  </GlassmorphicCard>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
                  <StaggerItem>
                    <GlassmorphicCard variant="strong" className="p-6 h-full">
                      <h4 className="text-xl font-bold text-[#6ff799] mb-4">For Infants</h4>
                      <p className="text-gray-100 text-sm">
                        Since the tongue has been tethered during fetal life, it is likely that the infant will have a high palate because it is the tongue's position in the roof of the mouth that forms the wide palate. This may affect the ability to breastfeed efficiently. Breastfeeding issues may include noisy sucking, clicking, popping on/off breast, leaking milk from sides of mouth, gagging, blisters, inefficient nursing and pain for the Mom. Other tongue tie related conditions may include reflux, colic, poor sleep, poor weight gain, digestive issues and general fussiness.
                      </p>
                    </GlassmorphicCard>
                  </StaggerItem>

                  <StaggerItem>
                    <GlassmorphicCard variant="strong" className="p-6 h-full">
                      <h4 className="text-xl font-bold text-[#6ff799] mb-4">For Children & Adults</h4>
                      <p className="text-gray-100 text-sm">
                        You may be surprised to learn that many "common" health issues are related to a Tongue Tie or improper oral function. Some of the related conditions are mouth breathing, speech issues, excessive cavities, narrow palate, crooked teeth, recessed jaw, dark circles/tired eyes, poor posture, difficulty chewing, picky eating, messy eating, slow eating, large tonsils, ADHD symptoms, anxiety, poor sleep, bed wetting, snoring, sleep disordered breathing/sleep apnea, neck and shoulder tension, headaches, grinding/clenching.
                      </p>
                    </GlassmorphicCard>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience CFT?</h2>
                <p className="text-xl mb-6">Book an appointment for Craniosacral Fascial Therapy today</p>
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
