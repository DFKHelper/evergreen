import { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  evergreenBusinessData,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Visit Evergreen Chiropractic at 1222 16th Ave S on Music Row. Call (615) 395-1178 to schedule. Open Monday through Friday.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Evergreen Chiropractic Nashville',
    description:
      'Visit us at 1222 16th Ave S on Music Row. Call (615) 395-1178 to schedule. Open Monday through Friday.',
    url: 'https://www.evergreenchironash.com/contact',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evergreen Chiropractic Contact',
      },
    ],
  },
}

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema(evergreenBusinessData)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Contact', url: 'https://www.evergreenchironash.com/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ContactPageClient />
    </>
  )
}
