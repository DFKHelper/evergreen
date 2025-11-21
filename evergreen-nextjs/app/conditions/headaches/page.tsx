import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Headache & Migraine Relief',
  description:
    'Nashville chiropractor for headaches and migraines. Many headaches come from neck problems. We find and fix the spinal cause for lasting relief.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/headaches',
  },
  openGraph: {
    title: 'Headache & Migraine Relief | Evergreen Chiropractic Nashville',
    description:
      'Chiropractic care for headaches and migraines in Nashville. Address the root cause.',
    url: 'https://www.evergreenchironash.com/conditions/headaches',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Headache Treatment at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Headache & Migraine Relief in Nashville',
  subtitle:
    'Many headaches come from your neck. We find the cause and fix it.',
  introduction: [
    'If you deal with frequent headaches or migraines, you know how much they can affect your life. Missing work, canceling plans, relying on medications that only temporarily help. The cycle can feel endless.',
    'What many people do not realize is that a large percentage of headaches originate from the cervical spine. These are called cervicogenic headaches. When vertebrae in your neck are misaligned or not moving properly, it can cause pain that radiates into your head.',
    'At Evergreen Chiropractic, we see many patients whose headaches improve significantly with chiropractic care. By correcting the spinal issues contributing to their headaches, they get lasting relief without constantly taking pills.',
  ],
  symptoms: {
    title: 'Types of Headaches We Help With',
    items: [
      'Tension headaches',
      'Cervicogenic headaches (from the neck)',
      'Migraines',
      'Headaches with neck stiffness',
      'Headaches from poor posture',
      'Headaches after car accidents',
      'Chronic daily headaches',
      'Headaches that medications do not fully relieve',
    ],
  },
  howWeHelp: {
    title: 'How Chiropractic Helps Headaches',
    description: [
      'We start by examining your cervical spine. Many headache sufferers have tension, misalignment, or restricted movement in the upper neck. These issues can irritate nerves and refer pain into the head.',
      'Using the Gonstead technique, we identify the specific vertebrae contributing to your headaches and deliver precise adjustments to correct them. This relieves pressure and allows normal nerve function.',
      'Some patients experience immediate relief. Others notice their headaches become less frequent and less severe over a series of visits. We will assess your response and adjust our approach as needed.',
    ],
  },
  benefits: [
    'Fewer headaches',
    'Less reliance on medication',
    'Reduced intensity when headaches occur',
    'Improved neck mobility',
    'Better posture',
    'Long-term prevention',
  ],
  faqs: [
    {
      question: 'Can chiropractic really help migraines?',
      answer:
        'Many migraine sufferers find relief with chiropractic care. While migraines have multiple triggers, spinal issues can be a contributing factor. Correcting these issues often reduces frequency and severity.',
    },
    {
      question: 'How is this different from just taking medication?',
      answer:
        'Medications mask the pain but do not fix the underlying cause. Chiropractic addresses the structural issues contributing to your headaches. The goal is fewer headaches, not just managing pain.',
    },
    {
      question: 'How many visits until I see improvement?',
      answer:
        'It varies. Some patients feel better quickly. Others with chronic headaches need more time. We will give you an honest assessment after examining you.',
    },
  ],
  relatedConditions: [
    { title: 'Neck Pain', slug: 'neck-pain' },
    { title: 'Back Pain', slug: 'back-pain' },
  ],
}

export default function HeadachesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Headaches',
      url: 'https://www.evergreenchironash.com/conditions/headaches',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Headache & Migraine Relief - Chiropractic Nashville',
    'Chiropractic treatment for headaches and migraines by addressing cervical spine issues.',
    'https://www.evergreenchironash.com/conditions/headaches'
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
