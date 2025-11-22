import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/schema'
import NewPatientClient from '@/components/NewPatientClient'

export const metadata: Metadata = {
  title: 'New Patient Information',
  description:
    'Welcome to Evergreen Chiropractic! Learn about our Gonstead technique, meet our doctors, understand our pricing, and book your first appointment.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/new-patient',
  },
  openGraph: {
    title: 'New Patient Information | Evergreen Chiropractic Nashville',
    description:
      'Everything you need to know before your first visit. Meet our doctors, learn about Gonstead chiropractic, and book your appointment.',
    url: 'https://www.evergreenchironash.com/new-patient',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'New Patient Information at Evergreen Chiropractic',
      },
    ],
  },
}

export default function NewPatientPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'New Patient', url: 'https://www.evergreenchironash.com/new-patient' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <NewPatientClient />
    </>
  )
}
