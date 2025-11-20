import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Evergreen Chiropractic | The only Gonstead office in Nashville',
  description: 'Specific chiropractic care for the entire family. We also specialize in hormone imbalance, infertility, and body work for lip & tongue ties in infants.',
  keywords: ['chiropractic', 'Gonstead', 'Nashville', 'family care', 'pregnancy', 'pediatric', 'CFT', 'Gillespie therapy'],
  authors: [{ name: 'Evergreen Chiropractic' }],
  openGraph: {
    title: 'Evergreen Chiropractic | The only Gonstead office in Nashville',
    description: 'Specific chiropractic care for the entire family',
    url: 'https://www.evergreenchironash.com',
    siteName: 'Evergreen Chiropractic',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
