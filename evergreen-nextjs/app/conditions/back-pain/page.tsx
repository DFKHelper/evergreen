import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Back Pain Relief',
  description:
    'Nashville chiropractor for back pain. Gonstead technique finds the exact vertebra causing your problem. No twisting, no cracking your whole spine. Real results.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/back-pain',
  },
  openGraph: {
    title: 'Back Pain Relief | Evergreen Chiropractic Nashville',
    description:
      'Gonstead chiropractic for back pain in Nashville. We find and fix the exact cause of your pain.',
    url: 'https://www.evergreenchironash.com/conditions/back-pain',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Back Pain Treatment at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Back Pain Relief in Nashville',
  subtitle:
    'Gonstead chiropractic finds the exact cause of your back pain and corrects it.',
  introduction: [
    'Back pain affects most people at some point. Some deal with it for years, trying medications, heating pads, or just pushing through. The problem is that these approaches treat symptoms, not causes.',
    'At Evergreen Chiropractic, we take a different approach. Using the Gonstead technique, we analyze your spine to find the specific vertebra that is out of place and causing your pain. Then we correct it with a precise adjustment.',
    'No twisting your whole body. No cracking every joint in your spine. Just specific, targeted care for the actual problem.',
  ],
  symptoms: {
    title: 'Signs Your Back Pain Needs Attention',
    items: [
      'Pain that comes and goes but never fully resolves',
      'Stiffness when you wake up in the morning',
      'Pain that gets worse after sitting or standing',
      'Trouble bending or twisting',
      'Pain that radiates into your hips or legs',
      'Muscle spasms or tightness',
      'Pain after lifting or physical activity',
      'Relying on painkillers to get through the day',
    ],
  },
  howWeHelp: {
    title: 'How We Treat Back Pain',
    description: [
      'First, we do a thorough examination. We look at your posture, feel your spine, use instrumentation to detect inflammation, and may take X-rays to see exactly what is going on. We do not guess.',
      'Once we know which vertebra is causing the problem, we deliver a specific Gonstead adjustment. This is a controlled, targeted correction that moves the bone back into proper position.',
      'Many patients feel relief quickly. Others need a series of adjustments to fully correct the problem, especially if the issue has been there for years. We will give you an honest assessment of what to expect.',
    ],
  },
  benefits: [
    'Drug-free pain relief',
    'Addresses the root cause',
    'Improved mobility',
    'Better sleep',
    'Less muscle tension',
    'Long-term results',
  ],
  faqs: [
    {
      question: 'How long does it take to see results?',
      answer:
        'Many patients notice improvement after the first few visits. How quickly you respond depends on how long you have had the problem and how severe it is. We will give you realistic expectations after your exam.',
    },
    {
      question: 'Is chiropractic safe for back pain?',
      answer:
        'Yes. Gonstead chiropractic has an excellent safety record. We use specific, controlled adjustments without aggressive twisting or rotation.',
    },
    {
      question: 'Do I need X-rays?',
      answer:
        'We recommend X-rays for most back pain cases because they help us see exactly what is happening in your spine. This allows us to be more precise and avoid guessing.',
    },
  ],
  relatedConditions: [
    { title: 'Sciatica', slug: 'sciatica' },
    { title: 'Neck Pain', slug: 'neck-pain' },
    { title: 'Sports Injuries', slug: 'sports-injuries' },
  ],
}

export default function BackPainPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Back Pain',
      url: 'https://www.evergreenchironash.com/conditions/back-pain',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Back Pain Relief - Gonstead Chiropractic Nashville',
    'Chiropractic treatment for back pain using the Gonstead technique. Find the exact cause and correct it.',
    'https://www.evergreenchironash.com/conditions/back-pain'
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
