import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sciatica Treatment',
  description:
    'Nashville chiropractor for sciatica and leg pain. Gonstead technique addresses the spinal cause of your sciatic nerve pain. Drug-free relief.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/sciatica',
  },
  openGraph: {
    title: 'Sciatica Treatment | Evergreen Chiropractic Nashville',
    description:
      'Gonstead chiropractic for sciatica in Nashville. Address the root cause of your leg pain.',
    url: 'https://www.evergreenchironash.com/conditions/sciatica',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sciatica Treatment at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Sciatica Relief in Nashville',
  subtitle:
    'We find the spinal cause of your sciatic nerve pain and correct it.',
  introduction: [
    'Sciatica is that sharp, shooting pain that runs from your lower back down through your hip and leg. Sometimes it comes with numbness, tingling, or weakness. It can make sitting, standing, and walking miserable.',
    'The sciatic nerve is the longest nerve in your body. It runs from your lower spine, through your pelvis, and down each leg. When something in your spine irritates or compresses this nerve, you feel it all the way down.',
    'Most sciatica comes from a problem in the lumbar spine or pelvis. A misaligned vertebra, a bulging disc, or inflammation can all put pressure on the nerve. At Evergreen Chiropractic, we use the Gonstead technique to find exactly where the problem is and correct it.',
  ],
  symptoms: {
    title: 'Common Sciatica Symptoms',
    items: [
      'Pain radiating from lower back into buttock and leg',
      'Sharp or burning sensation',
      'Numbness or tingling in the leg or foot',
      'Weakness in the affected leg',
      'Pain that gets worse when sitting',
      'Difficulty standing up from sitting',
      'Pain on one side (rarely both)',
      'Pain that makes walking difficult',
    ],
  },
  howWeHelp: {
    title: 'How We Treat Sciatica',
    description: [
      'We start with a comprehensive exam including X-rays in most cases. Sciatica can come from different levels of the spine, and we need to know exactly where your problem is before we adjust you.',
      'Using the Gonstead technique, we deliver specific adjustments to the vertebra that is causing nerve irritation. This takes pressure off the nerve so it can heal.',
      'Some patients feel relief quickly. Others, especially those who have had sciatica for a long time or have disc involvement, need a series of adjustments. We will tell you what to expect based on your specific situation.',
    ],
  },
  benefits: [
    'Reduced leg pain',
    'Less numbness and tingling',
    'Improved mobility',
    'Better sleep',
    'No medications needed',
    'Addresses the root cause',
  ],
  faqs: [
    {
      question: 'Can chiropractic help a herniated disc?',
      answer:
        'In many cases, yes. Chiropractic can help reduce pressure on a disc and allow it to heal. Severe herniations may need additional intervention, but we can often help people avoid surgery.',
    },
    {
      question: 'How long does sciatica take to heal?',
      answer:
        'It varies. Some people feel better in a few weeks. Others with chronic sciatica or disc problems may take longer. The key is addressing the underlying cause, not just masking the pain.',
    },
    {
      question: 'Should I rest or stay active?',
      answer:
        'Gentle movement is usually better than bed rest. Complete rest can actually make sciatica worse. We will give you specific guidance based on your condition.',
    },
  ],
  relatedConditions: [
    { title: 'Back Pain', slug: 'back-pain' },
    { title: 'Neck Pain', slug: 'neck-pain' },
    { title: 'Sports Injuries', slug: 'sports-injuries' },
  ],
}

export default function SciaticaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Sciatica',
      url: 'https://www.evergreenchironash.com/conditions/sciatica',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Sciatica Treatment - Gonstead Chiropractic Nashville',
    'Chiropractic treatment for sciatica and leg pain using the Gonstead technique.',
    'https://www.evergreenchironash.com/conditions/sciatica'
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
