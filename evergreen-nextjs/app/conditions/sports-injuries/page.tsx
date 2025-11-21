import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sports Chiropractic',
  description:
    'Sports chiropractor in Nashville for athletes. Recover faster, perform better, prevent injuries. Gonstead technique for peak athletic performance.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/sports-injuries',
  },
  openGraph: {
    title: 'Sports Chiropractic | Evergreen Chiropractic Nashville',
    description:
      'Chiropractic care for athletes in Nashville. Recover faster and perform at your best.',
    url: 'https://www.evergreenchironash.com/conditions/sports-injuries',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sports Chiropractic at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Sports Chiropractic in Nashville',
  subtitle:
    'Recover faster, perform better, stay in the game.',
  introduction: [
    'Athletes push their bodies hard. Training, competing, and recovering take a toll. When your spine is out of alignment, your nervous system cannot communicate efficiently with your muscles. That affects your performance, recovery, and injury risk.',
    'At Evergreen Chiropractic, we work with athletes of all levels. Weekend warriors, recreational players, college athletes, and professionals. Chiropractic care helps them recover from injuries faster and perform at their best.',
    'A research study showed that athletes who received Gonstead adjustments saw an average increase of 3.5 inches in their vertical jump. Your nervous system controls everything. When it works better, you perform better.',
  ],
  symptoms: {
    title: 'Common Sports Issues We Address',
    items: [
      'Strains and sprains',
      'Back pain from training',
      'Neck and shoulder tension',
      'Hip and knee issues',
      'Decreased range of motion',
      'Recurring injuries',
      'Slow recovery between workouts',
      'Performance plateaus',
    ],
  },
  howWeHelp: {
    title: 'How Chiropractic Helps Athletes',
    description: [
      'We analyze your spine to find areas of dysfunction. Even if you are not in pain, subluxations can affect nerve function and limit your performance. We correct these issues so your body works efficiently.',
      'For acute injuries, we help speed recovery by ensuring proper alignment and nerve function. Your body heals faster when everything is working correctly.',
      'For ongoing maintenance, regular adjustments help prevent injuries and keep you performing at your peak. Many athletes get adjusted weekly or before competitions.',
    ],
  },
  benefits: [
    'Faster injury recovery',
    'Improved performance',
    'Better range of motion',
    'Reduced muscle tension',
    'Fewer injuries',
    'Quicker recovery between workouts',
  ],
  faqs: [
    {
      question: 'Can chiropractic actually improve performance?',
      answer:
        'Yes. When your spine is aligned and your nervous system works efficiently, your muscles respond better. Studies have shown improvements in reaction time, strength, and athletic performance with chiropractic care.',
    },
    {
      question: 'Should I get adjusted before or after competition?',
      answer:
        'Both can be beneficial. Many athletes get adjusted a day or two before competition to ensure they are functioning optimally. Post-competition adjustments help with recovery.',
    },
    {
      question: 'I am not in pain. Do I still need chiropractic?',
      answer:
        'Subluxations can exist without pain. If you want to perform at your best and reduce injury risk, regular chiropractic maintenance makes sense even when nothing hurts.',
    },
  ],
  relatedConditions: [
    { title: 'Back Pain', slug: 'back-pain' },
    { title: 'Neck Pain', slug: 'neck-pain' },
    { title: 'Sciatica', slug: 'sciatica' },
  ],
}

export default function SportsInjuriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Sports Injuries',
      url: 'https://www.evergreenchironash.com/conditions/sports-injuries',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Sports Chiropractic - Athletic Performance Nashville',
    'Chiropractic care for athletes. Faster recovery, better performance, injury prevention.',
    'https://www.evergreenchironash.com/conditions/sports-injuries'
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalPageSchema),
        }}
      />
      <ConditionPageTemplate {...conditionData} />
    </>
  )
}
