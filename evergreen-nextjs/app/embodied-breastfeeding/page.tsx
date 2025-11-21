import { Metadata } from 'next'
import EmbodiedBreastfeedingPageClient from '@/components/EmbodiedBreastfeedingPageClient'

export const metadata: Metadata = {
  title: 'Embodied Breastfeeding | Evergreen Chiropractic Nashville',
  description: 'Embodied Breastfeeding is a 90-minute group session hosted by Dr. Brittney & Meghan Thornburgh to support you and your baby on your feeding journey.',
  openGraph: {
    title: 'Embodied Breastfeeding | Evergreen Chiropractic Nashville',
    description: 'A 90-minute group session to support you and your baby wherever you are in your feeding journey.',
    url: 'https://www.evergreenchironash.com/embodied-breastfeeding',
    siteName: 'Evergreen Chiropractic',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EmbodiedBreastfeedingPage() {
  return <EmbodiedBreastfeedingPageClient />
}
