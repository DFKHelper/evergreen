// JSON-LD Structured Data for SEO
// Only add schema for content that is visible on the page

export interface LocalBusinessData {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  openingHours: string[]
  priceRange: string
  image?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ArticleData {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    url?: string
  }
}

export interface PersonData {
  name: string
  jobTitle: string
  description?: string
  image?: string
  url?: string
  worksFor?: string
}

// Generate LocalBusiness schema (for home and contact pages)
export function generateLocalBusinessSchema(data: LocalBusinessData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Chiropractor',
    '@id': `${data.url}#localbusiness`,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.zip,
      addressCountry: data.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHoursSpecification: parseOpeningHours(data.openingHours),
    priceRange: data.priceRange,
    ...(data.image && { image: data.image }),
    areaServed: [
      { '@type': 'City', name: 'Nashville' },
      { '@type': 'City', name: 'Brentwood' },
      { '@type': 'City', name: 'Franklin' },
      { '@type': 'City', name: 'Green Hills' },
      { '@type': 'City', name: 'Belle Meade' },
    ],
    serviceType: [
      'Gonstead Chiropractic',
      'Prenatal Chiropractic',
      'Pediatric Chiropractic',
      'Sports Chiropractic',
      'CFT/Gillespie Therapy',
      'Webster Technique',
    ],
  }
}

// Parse opening hours for schema
function parseOpeningHours(hours: string[]) {
  const dayMap: Record<string, string> = {
    Monday: 'Mo',
    Tuesday: 'Tu',
    Wednesday: 'We',
    Thursday: 'Th',
    Friday: 'Fr',
    Saturday: 'Sa',
    Sunday: 'Su',
  }

  return hours
    .filter((h) => !h.includes('Closed'))
    .map((h) => {
      const [day, ...timeParts] = h.split(':')
      const timeStr = timeParts.join(':').trim()
      const dayAbbr = dayMap[day.trim()]

      // Handle multiple time ranges (e.g., "9:00am - 12:00pm, 2:00pm - 5:00pm")
      const timeRanges = timeStr.split(',').map((t) => t.trim())

      return timeRanges.map((range) => {
        const [open, close] = range.split('-').map((t) => t.trim())
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: dayAbbr,
          opens: convertTo24Hour(open),
          closes: convertTo24Hour(close),
        }
      })
    })
    .flat()
}

// Convert 12-hour time to 24-hour format
function convertTo24Hour(time: string): string {
  if (!time) return ''
  const match = time.match(/(\d+):(\d+)\s*(am|pm)/i)
  if (!match) return time

  let [, hours, minutes, period] = match
  let h = parseInt(hours)

  if (period.toLowerCase() === 'pm' && h !== 12) {
    h += 12
  } else if (period.toLowerCase() === 'am' && h === 12) {
    h = 0
  }

  return `${h.toString().padStart(2, '0')}:${minutes}`
}

// Generate FAQPage schema (only for actual FAQ pages with visible Q&A)
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Article schema (for blog posts)
export function generateArticleSchema(data: ArticleData, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    ...(data.image && { image: data.image }),
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.author.name,
      ...(data.author.url && { url: data.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Evergreen Chiropractic',
      url: baseUrl,
    },
  }
}

// Generate Person schema (for doctor bios)
export function generatePersonSchema(data: PersonData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.jobTitle,
    ...(data.description && { description: data.description }),
    ...(data.image && { image: data.image }),
    ...(data.url && { url: data.url }),
    ...(data.worksFor && {
      worksFor: {
        '@type': 'Chiropractor',
        name: data.worksFor,
      },
    }),
  }
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Generate WebSite schema (for home page)
export function generateWebSiteSchema(
  name: string,
  url: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    publisher: {
      '@type': 'Chiropractor',
      name,
      url,
    },
  }
}

// Generate MedicalWebPage schema (for condition pages)
export function generateMedicalWebPageSchema(
  name: string,
  description: string,
  url: string,
  lastReviewed?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url,
    ...(lastReviewed && { lastReviewed }),
    specialty: {
      '@type': 'MedicalSpecialty',
      name: 'Chiropractic',
    },
  }
}

// Default business data for Evergreen Chiropractic
export const evergreenBusinessData: LocalBusinessData = {
  name: 'Evergreen Chiropractic',
  description:
    'Nashville\'s only Gonstead chiropractic office. Family-centered care for pregnant moms, newborns, kids, adults, and athletes. Webster certified, CFT/Gillespie therapy available.',
  url: 'https://www.evergreenchironash.com',
  telephone: '+1-615-395-1178',
  email: 'drmcgetrick@evergreenchironash.com',
  address: {
    street: '1222 16th Avenue South, Suite 10',
    city: 'Nashville',
    state: 'TN',
    zip: '37212',
    country: 'US',
  },
  geo: {
    latitude: 36.14176,
    longitude: -86.79317,
  },
  openingHours: [
    'Monday: 12:30pm - 7:00pm',
    'Tuesday: 9:00am - 12:00pm, 2:00pm - 5:00pm',
    'Wednesday: 9:00am - 12:00pm, 12:30pm - 6:00pm',
    'Thursday: 11:30am - 5:30pm',
    'Friday: 9:00am - 12:00pm, 2:00pm - 5:00pm',
    'Saturday: Closed',
    'Sunday: Closed',
  ],
  priceRange: '$$',
  image: 'https://www.evergreenchironash.com/og-image.jpg',
}
