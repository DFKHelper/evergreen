import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Prenatal Chiropractic Care',
  description:
    'Webster certified chiropractor in Nashville for pregnancy. Helps with back pain, optimal baby positioning, and shorter labor times. Safe and gentle care.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/pregnancy-chiropractic',
  },
  openGraph: {
    title: 'Prenatal Chiropractic Care | Evergreen Chiropractic Nashville',
    description:
      'Webster certified prenatal chiropractor in Nashville. Safe, gentle care for expecting moms.',
    url: 'https://www.evergreenchironash.com/conditions/pregnancy-chiropractic',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prenatal Chiropractic at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Prenatal Chiropractic in Nashville',
  subtitle:
    'Webster certified care for a more comfortable pregnancy and optimal birth outcomes.',
  introduction: [
    'Pregnancy puts a lot of demand on your body. As your belly grows, your center of gravity shifts, your pelvis tilts forward, and your spine adapts to carry the extra weight. This can lead to discomfort, and it can also affect how your baby is positioned.',
    'At Evergreen Chiropractic, Dr. Brittney McGetrick and Dr. Courtney Simon are both Webster certified. The Webster technique is a specific chiropractic analysis and adjustment for pregnant women that helps balance the pelvis and reduce tension in the surrounding muscles and ligaments.',
    'Many pregnant women who receive regular chiropractic care report less back pain, easier movement, and shorter labor times. We have helped hundreds of expecting moms in Nashville have more comfortable pregnancies.',
  ],
  symptoms: {
    title: 'Common Pregnancy Discomforts We Help With',
    items: [
      'Lower back pain',
      'Hip pain and tightness',
      'Sciatica and leg pain',
      'Round ligament pain',
      'Pubic symphysis pain',
      'Difficulty sleeping',
      'Breech or posterior baby position',
      'General discomfort and fatigue',
    ],
  },
  howWeHelp: {
    title: 'What to Expect',
    description: [
      'Prenatal adjustments are gentle. We use specialized tables and positioning pillows that accommodate your growing belly. There is no lying flat on your back or stomach.',
      'The Webster technique focuses on balancing your pelvis. When your pelvis is aligned and the muscles and ligaments around it are relaxed, there is more room for your baby to move into the optimal position for birth.',
      'We see many pregnant moms weekly or every other week throughout their pregnancy. Some come to us specifically because their baby is breech or they are having significant discomfort. Others want proactive care for a healthy pregnancy.',
    ],
  },
  benefits: [
    'Reduced back and hip pain',
    'Better sleep',
    'Optimal baby positioning',
    'Shorter labor times',
    'Easier movement',
    'Drug-free relief',
  ],
  faqs: [
    {
      question: 'When should I start prenatal chiropractic?',
      answer:
        'You can start at any point in your pregnancy. Some women come to us in the first trimester, others find us in the third trimester when discomfort increases. The earlier you start, the more time we have to help your body adapt.',
    },
    {
      question: 'Is chiropractic safe during pregnancy?',
      answer:
        'Yes. Chiropractic care is safe throughout pregnancy when provided by a trained chiropractor. Dr. Brittney and Dr. Courtney are both Webster certified and have extensive experience with prenatal patients.',
    },
    {
      question: 'Can you help turn a breech baby?',
      answer:
        'The Webster technique does not turn babies. It balances the pelvis so there is less constraint and more room for the baby to turn on their own. Many women with breech babies have found success with this approach.',
    },
  ],
  relatedConditions: [
    { title: 'Tongue Tie / Infant Care', slug: 'tongue-tie' },
    { title: 'Back Pain', slug: 'back-pain' },
    { title: 'Pediatric Care', slug: 'pediatric-chiropractic' },
  ],
}

export default function PregnancyChiropracticPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Pregnancy Chiropractic',
      url: 'https://www.evergreenchironash.com/conditions/pregnancy-chiropractic',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Prenatal Chiropractic Care - Webster Technique Nashville',
    'Webster certified chiropractic care for pregnant women. Safe, gentle adjustments for a more comfortable pregnancy.',
    'https://www.evergreenchironash.com/conditions/pregnancy-chiropractic'
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
