import { Metadata } from 'next'
import ConditionPageTemplate from '@/components/ConditionPageTemplate'
import {
  generateBreadcrumbSchema,
  generateMedicalWebPageSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Neck Pain Relief',
  description:
    'Nashville chiropractor for neck pain and stiffness. Gonstead technique with precise adjustments, no twisting or rotating. Tech neck, whiplash, and cervical issues.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/conditions/neck-pain',
  },
  openGraph: {
    title: 'Neck Pain Relief | Evergreen Chiropractic Nashville',
    description:
      'Gonstead chiropractic for neck pain in Nashville. Precise adjustments without twisting.',
    url: 'https://www.evergreenchironash.com/conditions/neck-pain',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neck Pain Treatment at Evergreen Chiropractic',
      },
    ],
  },
}

const conditionData = {
  title: 'Neck Pain Relief in Nashville',
  subtitle:
    'Precise Gonstead adjustments for neck pain without twisting or rotating.',
  introduction: [
    'Neck pain is one of the most common complaints we see. Hours spent looking at phones and computers, sleeping in awkward positions, car accidents, and everyday stress all take a toll on your cervical spine.',
    'Many people are nervous about having their neck adjusted. They have seen videos of chiropractors twisting necks quickly and heard loud cracking sounds. That is not how we work.',
    'At Evergreen Chiropractic, we use the Gonstead technique, which involves specific, controlled adjustments without twisting or rotating your neck. We analyze your spine carefully, find the exact vertebra that is misaligned, and correct it with precision.',
  ],
  symptoms: {
    title: 'Common Neck Problems We See',
    items: [
      'Stiff neck and limited range of motion',
      'Tech neck from phone and computer use',
      'Pain that radiates into shoulders or arms',
      'Headaches originating from the neck',
      'Muscle tightness and knots',
      'Whiplash from car accidents',
      'Grinding or popping sounds',
      'Pain when turning or tilting your head',
    ],
  },
  howWeHelp: {
    title: 'How We Treat Neck Pain',
    description: [
      'We start with a thorough evaluation of your cervical spine. This includes checking your range of motion, feeling for areas of tenderness and misalignment, using our Nervoscope to detect inflammation, and often taking X-rays to see the structure of your neck.',
      'Gonstead neck adjustments are specific. We isolate the problem vertebra and deliver a controlled adjustment. There is no grabbing your head and twisting it. The adjustment is quick but controlled.',
      'Most patients find the adjustment comfortable and feel relief immediately. Your neck may feel different for a day or two as it adapts to the new position. We will see you again to check your progress and make any needed corrections.',
    ],
  },
  benefits: [
    'Improved range of motion',
    'Less pain and stiffness',
    'Fewer headaches',
    'Better posture',
    'Reduced muscle tension',
    'Better sleep',
  ],
  faqs: [
    {
      question: 'Is neck adjustment safe?',
      answer:
        'Yes. Gonstead neck adjustments are very safe when performed by a trained chiropractor. We use specific, controlled movements without aggressive twisting. Our technique has an excellent safety record.',
    },
    {
      question: 'Will my neck crack?',
      answer:
        'You may hear a sound during the adjustment. This is just gas being released from the joint, similar to cracking your knuckles. Not all adjustments make noise, and the sound is not an indicator of effectiveness.',
    },
    {
      question: 'How long until my neck feels better?',
      answer:
        'Many patients feel better after the first adjustment. Complete correction depends on how long the problem has been there and how much damage has accumulated. We will give you a realistic timeline.',
    },
  ],
  relatedConditions: [
    { title: 'Headaches', slug: 'headaches' },
    { title: 'Back Pain', slug: 'back-pain' },
    { title: 'Sports Injuries', slug: 'sports-injuries' },
  ],
}

export default function NeckPainPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Conditions', url: 'https://www.evergreenchironash.com/conditions' },
    {
      name: 'Neck Pain',
      url: 'https://www.evergreenchironash.com/conditions/neck-pain',
    },
  ])

  const medicalPageSchema = generateMedicalWebPageSchema(
    'Neck Pain Relief - Gonstead Chiropractic Nashville',
    'Chiropractic treatment for neck pain using the Gonstead technique.',
    'https://www.evergreenchironash.com/conditions/neck-pain'
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
