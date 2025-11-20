'use client'

import { useState } from 'react'
import {
  NatureBackground,
  GlassmorphicCard,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

const faqs = [
  {
    question: 'What is a chiropractic adjustment?',
    answer: 'It is a small thrust applied to the body (misaligned vertebra) from the hands of a chiropractor.',
  },
  {
    question: 'Will I see results right away?',
    answer: 'This depends on a number of things like the nature and history of the illness. Sometimes, chiropractic results may be achieved very quickly. Other times, it may take weeks to months because of changes that have occurred in the body in response to the subluxation(s).',
  },
  {
    question: 'Will my pain be relieved?',
    answer: 'In many instances, taking pressure off the nerve is all that is needed for relief of pain.',
  },
  {
    question: 'Can children be adjusted too?',
    answer: 'Yes! It is best to have children checked for subluxations as early as possible. This will ensure that they are fulfilling their own potential to live and grow as healthy as they can.',
  },
  {
    question: 'What is the difference between what Evergreen docs do and other chiropractors?',
    answer: 'The biggest difference is the Gonstead Difference. Our doctors use the Gonstead System of analyzing and adjusting the spine which means that we are very specific in finding your problem areas and in delivering precise adjustments.',
  },
  {
    question: 'Can chiropractic help more than just back pain?',
    answer: 'Absolutely. It can help because when you receive a chiropractic adjustment, nerve interference is removed which allows your body to function better. Simply put, it helps your immune system kick in so that your body can heal itself.',
  },
  {
    question: 'Can chiropractic help me?',
    answer: 'Chiropractic care will benefit almost everyone in some way, just as dental care will benefit almost everyone in some way. How you respond depends on how long you have dealt with your pain/symptoms, your lifestyle and your compliance to the care plan.',
  },
  {
    question: 'How many visits will I need?',
    answer: 'That depends on your unique situation. Each injury/situation is different and each individual\'s healing response is different. I will give each patient an estimate on how long their recovery may take after the initial exam and will have an even better idea after 2-3 visits. This office does not have the same "3x a week for 6 weeks" approach for every patient.',
  },
  {
    question: 'Are chiropractic adjustments safe?',
    answer: 'Absolutely! In fact, a New Zealand government study found that adjustments are "remarkably safe." It is the result of biologically sound, specific adjustments without the use of drugs or surgeries that has given Chiropractic care an excellent safety record.',
  },
  {
    question: 'How do I know if I have a subluxation (misalignment)?',
    answer: 'Oftentimes you can have a subluxation and not even know it! They can be present before you have obvious symptoms, like the progression of tooth decay. The best thing for you and your family is to be checked in our office with a thorough examination for the presence and severity of subluxations.',
  },
  {
    question: 'Can I adjust myself?',
    answer: 'No. Turning your body or neck in one direction and/or the other may make your joints "pop", but that sound is not correcting the problem and certainly is not an adjustment! Only a licensed Chiropractor is able to adjust the actual misaligned vertebra that\'s really causing the tension.',
  },
  {
    question: 'Are you going to "crack" my whole spine?',
    answer: 'As Gonstead Chiropractors, we carefully analyze your spine to determine which segments need to be adjusted and which should be left alone. With Chiropractic care, more is not better. The goal is to correct the exact cause of the problem and let your body do the rest of the healing.',
  },
  {
    question: 'Why do newborns get adjustments?',
    answer: 'The birth process, no matter how natural, can affect an infant\'s spine. Some studies suggest that colic, unusual crying, poor appetite, ear infection or erratic sleeping habits can be signs of spinal distress. A newborn is examined very carefully to determine if there is a subluxation and, if needed, receives a gentle Gonstead adjustment involving very little pressure.',
  },
  {
    question: 'Do I have a slipped disk?',
    answer: 'No. The disc is a cartilage pad between each of your spinal vertebra that aides in your spine\'s connection, flexibility, movement, weight bearing & shock absorbing ability. Because of spinal subluxations or severe trauma a disc can bulge, swell, tear, herniate, thin, dry out or collapse but it can\'t actually "slip" out from between the spinal bones it serves.',
  },
  {
    question: 'I\'ve had back surgery, can you still help?',
    answer: 'Yes. Surgery often leads to instability in your spine above or below the area operated on. Your Gonstead Chiropractor will be very specific to your problem areas and will avoid the surgically altered segments.',
  },
  {
    question: 'How long until I feel better?',
    answer: 'Happily, a lot of our patients have reported immediate relief. Others experience slow progress over a period of days or weeks. There are many factors that play a role in your healing process, including the severity or length of your injury. Other factors include proper rest, nutrition, exercise, keeping your appointments and closely following our doctors recommendations.',
  },
  {
    question: 'I\'ve heard that once you get adjusted, you have to keep getting adjusted. Is that true?',
    answer: 'This is only true if you want to utilize the gift of chiropractic as a lifestyle, similar to an exercise, dental, or wellness program. By receiving regular chiropractic adjustments, people find that they have more energy and motivation, handle stress better, perform better, sleep better, amongst many other things.',
  },
]

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
                Frequently Asked Questions
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl text-gray-100">
                Common questions about Gonstead chiropractic care and what to expect at Evergreen
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.05}>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <GlassmorphicCard
                      variant="light"
                      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full text-left px-6 py-4 hover:bg-emerald-900/30 transition-colors flex justify-between items-center"
                      >
                        <span className="font-semibold text-white pr-8">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-emerald-600 transition-transform flex-shrink-0 ${
                            openIndex === index ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 py-4 bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/40 border-t border-[#6ff799]/30">
                          <p className="text-gray-100">{faq.answer}</p>
                        </div>
                      </div>
                    </GlassmorphicCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/nature-1.png')] bg-cover bg-center" />
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
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
                  className="inline-flex items-center justify-center px-8 py-3 bg-emerald-900 text-base font-medium rounded-2xl text-green-600 hover:bg-green-900 transition-all hover:scale-105"
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
