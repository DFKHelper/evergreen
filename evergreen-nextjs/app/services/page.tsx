import { Metadata } from 'next'
import ServicesPageClient from '@/components/ServicesPageClient'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Who We Help',
  description:
    'Gonstead chiropractic for pregnant moms, newborns, kids, adults, and athletes in Nashville. Webster certified prenatal care. Gentle adjustments for all ages.',
  alternates: {
    canonical: 'https://www.evergreenchironash.com/services',
  },
  openGraph: {
    title: 'Who We Help | Evergreen Chiropractic Nashville',
    description:
      'Gonstead chiropractic for pregnant moms, newborns, kids, adults, and athletes. Webster certified. Gentle adjustments for all ages.',
    url: 'https://www.evergreenchironash.com/services',
    images: [
      {
        url: 'https://www.evergreenchironash.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evergreen Chiropractic Services',
      },
    ],
  },
}

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.evergreenchironash.com' },
    { name: 'Who We Help', url: 'https://www.evergreenchironash.com/services' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ServicesPageClient />
    </>
  )
}
