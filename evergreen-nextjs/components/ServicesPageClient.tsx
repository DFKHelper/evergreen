'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

const services = [
  {
    title: 'Pregnant Moms',
    icon: '🤰',
    image: 'https://images.squarespace-cdn.com/content/v1/5c5a1545b2cf791f213739eb/1629468226753-W86CCD8D1L202Y5GNI55/BF4292A4-9582-4BE6-8D1D-AEFAA4E06791.JPG?format=750w',
    description: 'One of the most important times for Nashville women to see a chiropractor is during pregnancy. Seeing a prenatal chiropractor is important for both mom and baby. Many women who see a chiropractor during their pregnancy have a more comfortable pregnancy and shorter labor times.',
    details: 'Dr. Brittney and Dr. Courtney are both Webster certified and have adjusted hundreds of pregnant women. Webster technique is used to help turn breech babies and help the nervous system function optimally so that the pregnancy goes as smoothly as possible.',
  },
  {
    title: 'Newborns',
    icon: '👶',
    image: 'https://images.squarespace-cdn.com/content/v1/5c5a1545b2cf791f213739eb/1629468610699-2DVVPA6UFIU65IBK2UZP/IMG_4605EF421CD1-1.jpeg?format=750w',
    description: 'Trauma during the birth process is way more common than most people think. Even in uncomplicated births, there is pulling and pushing on a baby\'s head and neck. According to a study of over 1,000 infants done by Dr. Guttman, over 80% of them sustained trauma to their cervical spine during the birthing process.',
    details: 'Using specific palpation techniques, the Gonstead chiropractor can detect subluxation (misalignment) in newborns and correct it with just a gentle pressure applied by the fingertip. We also offer the Gillespie Approach CFT which is the perfect complement to chiropractic care for infants with tie restrictions.',
  },
  {
    title: 'Kids',
    icon: '🧒',
    image: 'https://images.squarespace-cdn.com/content/v1/5c5a1545b2cf791f213739eb/1629468872879-I0CT9UIUUVW5APCGF836/Screen+Shot+2021-08-20+at+9.13.05+AM.jpg?format=750w',
    description: 'From learning to walk, run, ride a bike and play sports, kids fall hundreds if not thousands of times. Many problems that we experience as adults stem from injuries that we had as children. The best time to start chiropractic care is now, before problems occur.',
    details: 'As kids grow, they spend a lot of time sitting at a desk, on a couch or looking down at screens. This causes poor posture which leads to poor health as an adult. Chiropractic care helps kids develop properly and prevents future issues.',
  },
  {
    title: 'Adults',
    icon: '🧑',
    image: 'https://images.squarespace-cdn.com/content/v1/5c5a1545b2cf791f213739eb/c94f91df-fa2c-4cca-aea5-eb9c0b169cff/IMG_0851.jpg?format=750w',
    description: 'Whether you\'re a professional athlete or your daily routine is more relaxed, getting adjusted by a Gonstead Chiropractor should be top on your list of health priorities. We don\'t just wait for pain to get you in our door, we want you to reach your full potential.',
    details: 'Chiropractic care is about so much more than pain relief. Our patients experience many benefits from increased athletic performance to avoiding illness. Your body is designed to perform at an optimum level and chiropractic helps you get there.',
  },
  {
    title: 'Athletes',
    icon: '🏃',
    image: 'https://images.squarespace-cdn.com/content/v1/5c5a1545b2cf791f213739eb/1549833178604-V5OV61HP026D9WGYEG7U/image-asset.jpeg?format=750w',
    description: 'Many athletes benefit from seeing a sports chiropractor because it keeps them in peak condition without the use of drugs. From weekend warriors to professional athletes, everyone can benefit from chiropractic care.',
    details: 'A research study showed that athletes who received Gonstead adjustments saw an average increase of 3.5 inches in their vertical jump. Your nervous system controls everything in your body - optimize it with chiropractic care.',
  },
]

export default function ServicesPageClient() {
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
            <FadeIn direction="down" delay={0.1} className="w-full text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Who We Help
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="w-full text-center">
              <p className="text-xl text-gray-100">
                Specific Gonstead chiropractic care for every member of your family
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-12">
                {services.map((service, index) => (
                  <StaggerItem key={service.title}>
                    <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                      <div>
                        <GlassmorphicCard
                          variant="medium"
                          className="p-6 flex flex-col"
                        >
                          {service.image ? (
                            <div className="relative h-[26rem] sm:h-[32rem] rounded-2xl overflow-hidden shadow-xl mb-6">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                loading={index === 0 ? undefined : "lazy"}
                                sizes="(max-width: 768px) 100vw, 768px"
                              />
                            </div>
                          ) : (
                            <div className="relative h-[26rem] sm:h-[32rem] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/80 via-green-900/70 to-teal-900/80 backdrop-blur-sm border border-[#6ff799]/30 flex items-center justify-center shadow-xl mb-6">
                              <div className="text-9xl drop-shadow-lg">{service.icon}</div>
                            </div>
                          )}
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                            <p className="text-lg text-gray-100 mb-4">{service.description}</p>
                            <p className="text-base text-gray-200">{service.details}</p>

                            {service.title === 'Newborns' && (
                              <div className="mt-6">
                                <Link
                                  href="/cft-gillespie"
                                  className="inline-flex items-center px-6 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                                >
                                  Learn more about Gillespie/CFT here
                                </Link>
                              </div>
                            )}
                          </div>
                        </GlassmorphicCard>

                        {service.title === 'Athletes' && (
                          <div className="mt-6 text-center">
                            <a
                              href="https://www.evergreenchironash.com/new-patient"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-6 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
                            >
                              New Patient Info
                            </a>
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-6">Book your appointment today and experience the Gonstead difference</p>
              <a
                href="https://evergreenchironash.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl hover:bg-[#6ff799] hover:text-emerald-900 transition-all hover:scale-105"
              >
                Schedule Your Visit
              </a>
            </FadeIn>
          </div>
        </section>
        </div>
      </div>
    </NatureBackground>
  )
}
