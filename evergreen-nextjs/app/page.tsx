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
            src="/hero-image.jpeg"
            alt="Evergreen trees and nature"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-emerald-50/50 to-green-50/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {settings?.title || 'Evergreen Chiropractic'}
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-700 font-semibold mb-4">
                {settings?.tagline || 'The only Gonstead office in Nashville'}
              </p>
              <p className="text-lg text-gray-800 mb-8">
                {settings?.description || 'Specific chiropractic care for the entire family. We also specialize in hormone imbalance, infertility, and body work for lip & tongue ties in infants.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={settings?.bookingUrl || 'https://evergreenchironash.janeapp.com'}
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-emerald-600 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-emerald-600 text-base font-medium rounded-md text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
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
