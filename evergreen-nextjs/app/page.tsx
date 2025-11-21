import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity/client'
import { settingsQuery, featuredServicesQuery } from '@/lib/sanity/queries'
import HomePageClient from '@/components/HomePageClient'

export default async function HomePage() {
  // Fetch settings and featured services
  const [settings, featuredServices] = await Promise.all([
    client.fetch(settingsQuery).catch(() => null),
    client.fetch(featuredServicesQuery).catch(() => []),
  ])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Nature Background */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Evergreen trees and nature"
            fill
            className="object-cover brightness-100 saturate-110 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/15 via-green-900/10 to-teal-900/15"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {settings?.title || 'Evergreen Chiropractic'}
              </h1>
              <p className="text-xl sm:text-2xl text-[#6ff799] font-semibold mb-4 drop-shadow-md">
                {settings?.tagline || 'The only Gonstead office in Nashville'}
              </p>
              <p className="text-lg text-gray-100 mb-8 drop-shadow-md">
                {settings?.description || 'Specific chiropractic care for the entire family. We also specialize in hormone imbalance, infertility, and body work for lip & tongue ties in infants.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={settings?.bookingUrl || 'https://evergreenchironash.janeapp.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#6ff799] text-base font-medium rounded-2xl text-white bg-[#6ff799]/20 hover:bg-[#6ff799] hover:text-emerald-900 transition-colors shadow-lg backdrop-blur-sm"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-2xl text-white bg-white/10 hover:bg-white hover:text-emerald-900 transition-colors backdrop-blur-sm"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client-side animated components */}
      <HomePageClient featuredServices={featuredServices} settings={settings} />
    </div>
  )
}
