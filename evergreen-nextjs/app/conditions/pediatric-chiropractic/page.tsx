import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Pediatric Chiropractic',
  description:
    'Kids chiropractor in Nashville. Gentle Gonstead adjustments for children of all ages. From birth trauma to sports injuries. Safe, specific care for growing bodies.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/pediatric-chiropractic',
  },
  openGraph: {
    title: 'Pediatric Chiropractic | Evergreen Chiropractic Nashville',
    description:
      'Gentle chiropractic care for kids in Nashville. Safe, specific adjustments for growing bodies.',
    url: 'https://www.evergreenchironash.com/conditions/pediatric-chiropractic',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatric Chiropractic at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Pediatric Chiropractic in Nashville',
  subtitle:
    'Gentle, specific chiropractic care for kids of all ages.',
  introduction: [
    'Kids are not small adults. Their spines are growing and developing, and they go through a lot of physical stress. Learning to walk, falling hundreds of times, playing sports, carrying heavy backpacks, and sitting at desks all affect their developing bodies.',
    'At Evergreen Chiropractic, we see kids from newborns to teenagers. Pediatric adjustments are very gentle. The amount of pressure we use on a baby is about what you would use to test the ripeness of a tomato. For older kids, we adjust our technique based on their size and development.',
    'Many parents bring their kids in for specific issues like ear infections, colic, or growing pains. Others bring them in regularly because they want to support healthy development and catch problems before they become serious.',
  ],
  symptoms: {
    title: 'Why Parents Bring Their Kids to Us',
    items: [
      'Frequent ear infections',
      'Colic and digestive issues in infants',
      'Trouble sleeping',
      'Growing pains',
      'Poor posture',
      'Sports injuries',
      'Headaches',
      'ADHD and difficulty concentrating',
      'Scoliosis concerns',
      'Birth trauma recovery',
    ],
  },
  howWeHelp: {
    title: 'What to Expect at Your Child\'s Visit',
    description: [
      'We make kids comfortable. Our office is family-friendly, and Dr. Brittney has a dog named Talus who comes to work every day. Kids often look forward to their visits.',
      'The exam is age-appropriate. For babies, we feel their spine while they are held by a parent. For older kids, we do a more traditional exam including posture analysis and range of motion testing.',
      'Pediatric adjustments are quick and gentle. Kids usually do not even realize what happened. We see many kids who get excited about their adjustments because they feel better afterward.',
    ],
  },
  benefits: [
    'Supports healthy development',
    'Catches problems early',
    'Improves immune function',
    'Better sleep',
    'Improved posture',
    'Drug-free care',
  ],
  faqs: [
    {
      question: 'At what age can kids be adjusted?',
      answer:
        'We adjust babies as young as a few days old. The birth process, even uncomplicated deliveries, can affect a baby\'s spine. Early care can address issues before they cause problems.',
    },
    {
      question: 'Is chiropractic safe for kids?',
      answer:
        'Yes. Pediatric chiropractic has an excellent safety record. We use very gentle pressure appropriate for each child\'s age and size. It is not the same as adult adjustments.',
    },
    {
      question: 'How do I know if my child needs chiropractic?',
      answer:
        'We recommend having kids checked, even if they seem fine. Subluxations can exist without obvious symptoms. Regular checkups help ensure their spine is developing properly.',
    },
  ],
  relatedConditions: [
    { title: 'Tongue Tie / Infant Care', slug: 'tongue-tie' },
    { title: 'Pregnancy Chiropractic', slug: 'pregnancy-chiropractic' },
    { title: 'Sports Injuries', slug: 'sports-injuries' },
  ],
}

export default function PediatricChiropracticPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Pediatric Chiropractic',
      url: 'https://www.evergreenchironash.com/conditions/pediatric-chiropractic',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Pediatric Chiropractic - Kids Chiropractor Nashville',
    'Gentle chiropractic care for children of all ages using the Gonstead technique.',
    'https://www.evergreenchironash.com/conditions/pediatric-chiropractic'
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
