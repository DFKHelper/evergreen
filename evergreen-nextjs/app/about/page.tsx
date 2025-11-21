import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { authorsQuery } from '@/lib/sanity/queries'
import AboutPageClient from '@/components/AboutPageClient'
import {
  generatePersonSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Meet Our Doctors',
  description:
    'Get to know Dr. Brittney McGetrick, Dr. Toya White, and Dr. Courtney Simon. Three Gonstead chiropractors serving Nashville families with gentle, specific care.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/about',
  },
  openGraph: {
    title: 'Meet Our Doctors | Evergreen Chiropractic Nashville',
    description:
      'Get to know Dr. Brittney McGetrick, Dr. Toya White, and Dr. Courtney Simon. Three Gonstead chiropractors serving Nashville families.',
    url: 'https://www.evergreenchironash.com/about',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evergreen Chiropractic Team',
      },
    ],
  },
}

export default async function AboutPage() {
  const authors = await client.fetch(authorsQuery).catch(() => [])

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'About', url: 'https://www.evergreenchironash.com/about' },
  ])

  const doctorSchemas = [
    generatePersonSchema({
      name: 'Dr. Brittney McGetrick',
      jobTitle: 'Chiropractor, Registered Dietitian',
      description:
        'Owner of Evergreen Chiropractic. Gonstead and Webster certified. CFT/Gillespie certified for infant care.',
      worksFor: 'Evergreen Chiropractic',
    }),
    generatePersonSchema({
      name: 'Dr. Toya White',
      jobTitle: 'Chiropractor',
      description:
        'Gonstead chiropractor with background in epidemiology. Serves families in Nashville with specific chiropractic care.',
      worksFor: 'Evergreen Chiropractic',
    }),
    generatePersonSchema({
      name: 'Dr. Courtney Simon',
      jobTitle: 'Chiropractor',
      description:
        'Gonstead and Webster certified chiropractor. Graduated Summa Cum Laude from Life University.',
      worksFor: 'Evergreen Chiropractic',
    }),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {doctorSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <AboutPageClient authors={authors} />
    </>
  )
}
