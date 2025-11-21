import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  evergreenBusinessData,
} from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const baseUrl = 'https://www.evergreenchironash.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Evergreen Chiropractic Nashville | Gonstead Chiropractor for Families',
    template: '%s | Evergreen Chiropractic Nashville',
  },
  description:
    'Nashville\'s only Gonstead chiropractic office. Gentle, specific care for pregnant moms, babies, kids, and adults. Webster certified. Located on Music Row.',
  keywords: [
    'chiropractor nashville',
    'gonstead chiropractor',
    'prenatal chiropractor nashville',
    'pediatric chiropractor nashville',
    'family chiropractor',
    'webster technique nashville',
    'cft therapy',
    'tongue tie nashville',
    'music row chiropractor',
  ],
  authors: [{ name: 'Evergreen Chiropractic' }],
  creator: 'Evergreen Chiropractic',
  publisher: 'Evergreen Chiropractic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Evergreen Chiropractic Nashville | Gonstead Chiropractor for Families',
    description:
      'Nashville\'s only Gonstead chiropractic office. Gentle, specific care for the whole family. Webster certified for pregnancy. Located on Music Row.',
    url: baseUrl,
    siteName: 'Evergreen Chiropractic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Evergreen Chiropractic - Nashville Gonstead Chiropractor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evergreen Chiropractic Nashville | Gonstead Care for Families',
    description:
      'Nashville\'s only Gonstead office. Prenatal, pediatric, and family chiropractic on Music Row.',
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = generateLocalBusinessSchema(evergreenBusinessData)
  const webSiteSchema = generateWebSiteSchema(
    'Evergreen Chiropractic',
    baseUrl,
    'Nashville\'s only Gonstead chiropractic office. Family-centered care for pregnant moms, newborns, kids, adults, and athletes.'
  )

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={baseUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
