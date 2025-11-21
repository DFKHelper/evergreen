import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Tongue Tie & Infant Care',
  description:
    'CFT/Gillespie therapy for babies with tongue tie, lip tie, feeding difficulties, and colic in Nashville. Gentle bodywork to release fascial restrictions.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/tongue-tie',
  },
  openGraph: {
    title: 'Tongue Tie & Infant Care | Evergreen Chiropractic Nashville',
    description:
      'CFT/Gillespie therapy for babies with tongue tie and feeding difficulties in Nashville.',
    url: 'https://www.evergreenchironash.com/conditions/tongue-tie',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Infant Care at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Tongue Tie & Infant Care in Nashville',
  subtitle:
    'Gentle CFT/Gillespie therapy for babies with oral restrictions and feeding difficulties.',
  introduction: [
    'If your baby is struggling to breastfeed, has a tongue tie or lip tie, or shows signs of colic, you know how exhausting and heartbreaking it can be. Many parents try everything and still feel stuck.',
    'At Evergreen Chiropractic, Dr. Brittney McGetrick is certified in CFT (Craniosacral Fascial Therapy), also known as the Gillespie Approach. This is a gentle form of bodywork that releases fascial restrictions throughout the body, including those that affect feeding and comfort.',
    'CFT works well alongside tongue tie releases performed by dentists or ENTs. Many babies need bodywork before and after a release to get the best results. The fascia connects everything in the body, and oral restrictions often come with tension in the neck, head, and throughout the fascial system.',
  ],
  symptoms: {
    title: 'Signs Your Baby May Need Help',
    items: [
      'Difficulty latching or staying latched',
      'Painful breastfeeding for mom',
      'Poor weight gain',
      'Excessive gas or colic',
      'Reflux or frequent spitting up',
      'Clicking sounds while feeding',
      'Favoring one side or turning head to one side',
      'Fussiness and difficulty settling',
      'Diagnosed tongue tie or lip tie',
    ],
  },
  howWeHelp: {
    title: 'How CFT/Gillespie Therapy Works',
    description: [
      'CFT is extremely gentle. It involves light touch and holding to allow the baby\'s fascial system to unwind and release. Babies often relax deeply during treatment, and some even fall asleep.',
      'Dr. Brittney looks at the whole baby, not just the mouth. Birth trauma, positioning in the womb, and delivery can all create tension patterns that affect feeding. We address all of these.',
      'Many families see improvement within the first few sessions. Some babies need more time, especially if they have significant restrictions or have been struggling for a while. We work with your lactation consultant and other providers to give your baby the best chance at successful feeding.',
    ],
  },
  benefits: [
    'Improved latch and feeding',
    'Less colic and fussiness',
    'Better sleep for baby',
    'Reduced reflux',
    'More comfortable nursing for mom',
    'Supports tongue tie release healing',
  ],
  faqs: [
    {
      question: 'How soon after birth can my baby be seen?',
      answer:
        'We can see babies as early as the first week of life. The sooner we address restrictions, the easier it is for babies to develop good feeding patterns.',
    },
    {
      question: 'Does CFT replace tongue tie surgery?',
      answer:
        'No. If your baby has a significant tongue tie, they may still need a release. CFT prepares the body before the release and helps with healing afterward. Many babies who only get the surgical release without bodywork continue to struggle.',
    },
    {
      question: 'How many sessions will my baby need?',
      answer:
        'It depends on the severity of the restrictions. Some babies respond quickly in 2 to 3 sessions. Others with more significant issues may need 6 or more. We will give you a better idea after the initial evaluation.',
    },
  ],
  relatedConditions: [
    { title: 'Pregnancy Chiropractic', slug: 'pregnancy-chiropractic' },
    { title: 'Pediatric Care', slug: 'pediatric-chiropractic' },
  ],
}

export default function TonguetiePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Tongue Tie',
      url: 'https://www.evergreenchironash.com/conditions/tongue-tie',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Tongue Tie & Infant Care - CFT/Gillespie Therapy Nashville',
    'Gentle CFT therapy for babies with tongue tie, feeding difficulties, and colic.',
    'https://www.evergreenchironash.com/conditions/tongue-tie'
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
