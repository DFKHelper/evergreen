import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ekj1nrtx',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to create slugs
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function migrateContent() {
  console.log('🚀 Starting content migration to Sanity...\n')

  try {
    // 1. Create Settings Document
    console.log('📝 Creating site settings...')
    const settings = await client.createOrReplace({
      _type: 'settings',
      _id: 'settings',
      title: 'Evergreen Chiropractic',
      tagline: 'The only Gonstead office in Nashville',
      description: 'Specific chiropractic care for the entire family. We also specialize in hormone imbalance, infertility, and body work for lip & tongue ties in infants.',
      contactEmail: 'drmcgetrick@evergreenchironash.com',
      contactPhone: '(615) 395-1178',
      address: {
        street: '1222 16th Avenue South, Ste 10',
        city: 'Nashville',
        state: 'TN',
        zip: '37212',
        country: 'United States',
      },
      businessHours: [
        { dayOfWeek: 'Monday', hours: '12:30pm - 7:00pm' },
        { dayOfWeek: 'Tuesday', hours: '9:00am - 12:00pm, 2:00pm - 5:00pm' },
        { dayOfWeek: 'Wednesday', hours: '9:00am - 12:00pm, 12:30pm - 6:00pm' },
        { dayOfWeek: 'Thursday', hours: '11:30am - 5:30pm' },
        { dayOfWeek: 'Friday', hours: '9:00am - 12:00pm, 2:00pm - 5:00pm' },
        { dayOfWeek: 'Saturday', hours: 'Closed' },
        { dayOfWeek: 'Sunday', hours: 'Closed' },
      ],
      socialLinks: [
        { platform: 'Instagram', handle: '@evergreenchironash', url: 'https://instagram.com/evergreenchironash' },
        { platform: 'Instagram', handle: '@dr.brittneymcgetrick', url: 'https://www.instagram.com/dr.brittneymcgetrick' },
        { platform: 'Instagram', handle: '@toyad_white', url: 'http://www.instagram.com/toyad_white' },
      ],
      bookingUrl: 'https://evergreenchironash.janeapp.com',
    })
    console.log('✅ Settings created\n')

    // 2. Create Authors (Team Members)
    console.log('👥 Creating team members...')

    const drBrittney = await client.create({
      _type: 'author',
      name: 'Dr. Brittney McGetrick',
      slug: { _type: 'slug', current: 'dr-brittney-mcgetrick' },
      title: 'Owner & Chiropractor, R.D.',
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Dr. McGetrick attended San Diego State University where she received her bachelors degree in Foods & Nutrition, she then went on to complete her dietetic internship at UCSD Medical Center and become a registered dietitian. Unimpressed with the world of hospital dietetics, she was looking for something more fulfilling when she experienced a chiropractic miracle herself. A persistent knee injury resolved after her spine was adjusted by a Gonstead chiropractor, and from that day forward, she was hooked.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Dr. Brittney went on to attend Southern California University of Health Sciences in Whittier, California where she was the Gonstead Club president and graduated Magna Cum Laude. While in school, she attended dozens of seminars to perfect her craft and is excited to serve the Nashville community with extra study hours in specific adjusting skills, pediatric chiropractic, and immunology. Dr. Brittney is also Webster certified, and certified in CFT/Gillespie approach therapy.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Talus is her black lab who comes to work with her everyday, you will see him when you come to the office! He was 3 months old in this photo. He is a bit bigger now!',
            },
          ],
        },
      ],
    })

    const drToya = await client.create({
      _type: 'author',
      name: 'Dr. Toya White',
      slug: { _type: 'slug', current: 'dr-toya-white' },
      title: 'Chiropractor',
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Born and raised in West Tennessee, Dr. Toya attended the University of Tennessee at Martin where she completed research and studied the human body. She earned her bachelors degree in cell and molecular biology and went on to study patterns of health and disease at the University of Memphis where she earned a masters degree in epidemiology.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'After studying disease pathways and going through her own health issues, it was clear that using drugs as the primary intervention wasn\'t the solution. The body is beyond capable of healing itself given the proper support. Why weren\'t we discussing this?',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Dr. Toya attended Logan University in St. Louis, MO where she spent countless hours learning the Gonstead method, a comprehensive and specific chiropractic technique. Having benefited tremendously from Gonstead chiropractic care herself, Dr. Toya proudly cares for families in the Nashville area using this specific system.',
            },
          ],
        },
      ],
    })

    const drCourtney = await client.create({
      _type: 'author',
      name: 'Dr. Courtney Simon',
      slug: { _type: 'slug', current: 'dr-courtney-simon' },
      title: 'Chiropractor',
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Dr. Courtney grew up in small town Iowa with her family and was involved in a variety of sports growing up. It was during her senior year of high school that she started throwing up dozens of times every day and after months of doctors appointments and tests, she visited a chiropractic office. Within the first few visits she noticed a night and day difference and it was then that she realized how powerful the nervous system is and how chiropractic can impact all areas of health.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'She went on to obtain her Bachelor\'s degree in Exercise Science at Central College in Pella, Iowa. During these years as she was developing a deeper love for how the human body works and simultaneously forming a desire to live a sustainable holistic lifestyle, she knew it was her calling to become a chiropractor!',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Dr. Courtney attended Life University in Marietta, Georgia where she graduated Summa Cum Laude. During her time in the Doctor of Chiropractic program she was introduced to the Gonstead Technique and later became a leader of the University\'s Gonstead Club. The specificity and unique care for each patient spoke to her desire of how she wants to care for patients. She believes that everyone\'s nervous system and chiropractic care should be as unique to them as their appearance, life experiences, and goals are. Dr. Courtney is also certified in the Webster Technique and has attended several seminars to continue to learn how to best serve her patients. She is proud to serve the Nashville community with the specific chiropractic care that she believes every person deserves.',
            },
          ],
        },
      ],
    })

    console.log('✅ Team members created\n')

    // 3. Create Categories
    console.log('📁 Creating categories...')

    const chiropracticCategory = await client.create({
      _type: 'category',
      title: 'Chiropractic',
      slug: { _type: 'slug', current: 'chiropractic' },
      description: 'Articles about chiropractic care, techniques, and benefits',
    })

    const hormonesCategory = await client.create({
      _type: 'category',
      title: 'Healthy Hormones',
      slug: { _type: 'slug', current: 'healthy-hormones' },
      description: 'Information about hormone balance, women\'s health, and fertility',
    })

    console.log('✅ Categories created\n')

    // 4. Create Services
    console.log('🏥 Creating services...')

    const gonsteadService = await client.create({
      _type: 'service',
      title: 'Gonstead Chiropractic',
      slug: { _type: 'slug', current: 'gonstead-chiropractic' },
      excerpt: 'The Gonstead Method is one of the most well-known and highly respected chiropractic techniques in the world.',
      icon: 'Activity',
      featuredOnHome: true,
      order: 1,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'What Makes the Gonstead Technique Different?',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Before we adjust your spine, we take the time to analyze and investigate how your spine works and what it needs to work most efficiently. The pillars of the Gonstead work are as follows:',
            },
          ],
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Visualization - ',
            },
            {
              _type: 'span',
              text: 'how does the patient in front of me look today? Are they in pain, are they sitting in a certain way to try to avoid pain?',
            },
          ],
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Instrumentation - ',
            },
            {
              _type: 'span',
              text: 'Gonstead doctors use a Nervoscope, a fancy word that just means a thermometer on the surface of your spine to search for areas of inflammation.',
            },
          ],
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Static Palpation - ',
            },
            {
              _type: 'span',
              text: 'How are your bones positioned when not moving?',
            },
          ],
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Motion Palpation - ',
            },
            {
              _type: 'span',
              text: 'How effectively are your bones moving (or not moving) when you start to move around.',
            },
          ],
        },
        {
          _type: 'block',
          listItem: 'bullet',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'X-ray Analysis - ',
            },
            {
              _type: 'span',
              text: '"To see is to know, not to see is to guess" We never guess when it comes to your health.',
            },
          ],
        },
      ],
    })

    const cftService = await client.create({
      _type: 'service',
      title: 'CFT/Gillespie Therapy',
      slug: { _type: 'slug', current: 'cft-gillespie-therapy' },
      excerpt: 'Craniosacral Fascial Therapy is a very gentle, natural approach with powerful therapeutic effects.',
      icon: 'Heart',
      featuredOnHome: true,
      order: 2,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Craniosacral Fascial Therapy (CFT) is the work of Dr. Barry Gillespie. It is based on his theory that the Craniosacral and Fascial systems are not separate but one interconnected system. CFT blends the two established modalities of Dr. William Sutherland\'s Cranial Sacral Therapy and John Barnes\' Myofascial Release.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We have 2 practitioners in the office who offer CFT: Dr. Brittney and Meghan.',
            },
          ],
        },
      ],
    })

    const pregnancyService = await client.create({
      _type: 'service',
      title: 'Pregnancy & Prenatal Care',
      slug: { _type: 'slug', current: 'pregnancy-prenatal-care' },
      excerpt: 'Webster technique certified care for pregnant moms and their babies.',
      icon: 'Baby',
      featuredOnHome: true,
      order: 3,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'One of the most important times for Nashville women to see a chiropractor is during pregnancy. Seeing a prenatal chiropractor is important for both mom and baby.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Dr. Brittney is certified in the Webster technique, which is a technique designed just for pregnant women! It supports breech babies in being able to turn themselves head down.',
            },
          ],
        },
      ],
    })

    const pediatricService = await client.create({
      _type: 'service',
      title: 'Pediatric Chiropractic',
      slug: { _type: 'slug', current: 'pediatric-chiropractic' },
      excerpt: 'Gentle, specific care for newborns, infants, and children.',
      icon: 'Users',
      featuredOnHome: true,
      order: 4,
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The best time to start chiropractic care is now, with a pediatric chiropractor, before the problems occur. From learning to walk, run, ride a bike and play sports, kids fall hundreds, if not thousands, of times.',
            },
          ],
        },
      ],
    })

    console.log('✅ Services created\n')

    // 5. Create Pages
    console.log('📄 Creating pages...')

    const aboutPage = await client.create({
      _type: 'page',
      title: 'About',
      slug: { _type: 'slug', current: 'about' },
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Welcome to Evergreen Chiropractic, Nashville\'s only Gonstead chiropractic office. Our team of skilled practitioners is dedicated to providing specific, effective care for the entire family.',
            },
          ],
        },
      ],
      seo: {
        metaTitle: 'About Our Team - Evergreen Chiropractic',
        metaDescription: 'Meet our team of Gonstead chiropractors and learn about our unique approach to family wellness in Nashville, TN.',
      },
    })

    const contactPage = await client.create({
      _type: 'page',
      title: 'Contact',
      slug: { _type: 'slug', current: 'contact' },
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We are located in the heart of Music Row in Nashville, TN! We look forward to serving you and your family.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Insurance Policy',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We do not accept insurance because we want to make sure you and your family get the care you DESERVE. We strive to provide the BEST quality of care while keeping it affordable - especially for families! If you have an HSA or FSA card, we do accept those. We can provide you with a "superbill" that you can submit to your insurance company for reimbursement.',
            },
          ],
        },
      ],
      seo: {
        metaTitle: 'Contact Us - Evergreen Chiropractic Nashville',
        metaDescription: 'Get in touch with Evergreen Chiropractic in Nashville. Located at 1222 16th Ave S, Suite 10. Call (615) 395-1178.',
      },
    })

    const faqPage = await client.create({
      _type: 'page',
      title: 'FAQ',
      slug: { _type: 'slug', current: 'faq' },
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Frequently Asked Questions about Chiropractic Care',
            },
          ],
        },
      ],
      seo: {
        metaTitle: 'FAQ - Evergreen Chiropractic Nashville',
        metaDescription: 'Common questions about Gonstead chiropractic care, adjustments, and what to expect at Evergreen Chiropractic.',
      },
    })

    console.log('✅ Pages created\n')

    console.log('🎉 Content migration completed successfully!\n')
    console.log('📊 Summary:')
    console.log('  - 1 Settings document')
    console.log('  - 3 Team members (Authors)')
    console.log('  - 2 Categories')
    console.log('  - 4 Services')
    console.log('  - 3 Pages')
    console.log('\n✨ You can now view and edit this content in Sanity Studio at http://localhost:3001/studio\n')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

// Run the migration
migrateContent()
