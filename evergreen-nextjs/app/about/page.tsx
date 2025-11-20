import { client } from '@/lib/sanity/client'
import { authorsQuery } from '@/lib/sanity/queries'
import AboutPageClient from '@/components/AboutPageClient'

export const metadata = {
  title: 'About Our Team - Evergreen Chiropractic',
  description: 'Meet our team of Gonstead chiropractors and learn about our unique approach to family wellness in Nashville, TN.',
}

export default async function AboutPage() {
  const authors = await client.fetch(authorsQuery).catch(() => [])

  return <AboutPageClient authors={authors} />
}
