/**
 * EXAMPLE: How to Add Nature Animations to Any Page
 *
 * This is a template showing how to integrate the animation components
 * into any page of the website. Copy and adapt this pattern for:
 * - About page
 * - Services page
 * - Contact page
 * - FAQ page
 * - Blog pages
 */

'use client'

import {
  FallingLeaves,
  NatureBackground,
  GlassmorphicCard,
  AnimatedVines,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingLeafDecoration,
  RippleEffect
} from '@/components/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ExampleAnimatedPage() {
  return (
    <div className="min-h-screen">
      {/* Add falling leaves to the entire page */}
      <FallingLeaves />

      {/* Add decorative vines on the sides */}
      <AnimatedVines position="left" variant="detailed" className="opacity-30" />
      <AnimatedVines position="right" variant="detailed" className="opacity-30" />

      {/* Hero Section with Nature Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NatureBackground variant="forest" showTrees={true}>
          <div className="max-w-7xl mx-auto">
            <FadeIn direction="up" className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Your Page Title
              </h1>
              <p className="text-xl text-gray-700">
                A peaceful subtitle that describes this section
              </p>
            </FadeIn>

            {/* Floating leaf decoration */}
            <FloatingLeafDecoration className="top-10 right-10 opacity-20" />
          </div>
        </NatureBackground>
      </section>

      {/* Content Section with Cards */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <NatureBackground variant="subtle" showTrees={false}>
          <div className="max-w-7xl mx-auto">
            <FadeIn direction="up" delay={0.2} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Features Section
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Description of what's below
              </p>
            </FadeIn>

            {/* Grid with staggered animations */}
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <StaggerItem>
                <RippleEffect>
                  <GlassmorphicCard variant="medium" className="p-8 h-full">
                    <motion.div
                      className="text-emerald-600 mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Feature One
                    </h3>
                    <p className="text-gray-700">
                      Description of your first feature with glassmorphic styling
                    </p>
                  </GlassmorphicCard>
                </RippleEffect>
              </StaggerItem>

              <StaggerItem>
                <RippleEffect>
                  <GlassmorphicCard variant="medium" className="p-8 h-full">
                    <motion.div
                      className="text-green-600 mb-4"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Feature Two
                    </h3>
                    <p className="text-gray-700">
                      Description of your second feature with animations
                    </p>
                  </GlassmorphicCard>
                </RippleEffect>
              </StaggerItem>

              <StaggerItem>
                <RippleEffect>
                  <GlassmorphicCard variant="medium" className="p-8 h-full">
                    <motion.div
                      className="text-teal-600 mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Feature Three
                    </h3>
                    <p className="text-gray-700">
                      Description of your third feature with ripple effects
                    </p>
                  </GlassmorphicCard>
                </RippleEffect>
              </StaggerItem>
            </StaggerContainer>

            {/* Decorative floating leaves */}
            <FloatingLeafDecoration className="bottom-10 left-20 opacity-15" />
          </div>
        </NatureBackground>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Take action now and experience the difference
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-emerald-100 text-base font-medium rounded-md hover:bg-emerald-100 hover:text-green-700 transition-colors shadow-xl"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </FadeIn>
        </div>

        <FloatingLeafDecoration className="top-10 right-20 opacity-10" />
        <FloatingLeafDecoration className="bottom-10 left-10 opacity-10" />
      </section>

      {/* Additional Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <GlassmorphicCard variant="strong" className="p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Information
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Add more content here with smooth animations and glassmorphic styling.
                The card will fade in on scroll and has a subtle hover effect.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-md font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Learn More
              </motion.button>
            </GlassmorphicCard>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

/**
 * USAGE NOTES:
 *
 * 1. Import this template into your page file
 * 2. Make sure your page uses 'use client' directive
 * 3. Customize the content while keeping the animation structure
 * 4. Adjust animation delays and variants as needed
 * 5. Add or remove sections based on your needs
 *
 * ANIMATION COMPONENTS USED:
 * - FallingLeaves: Page-wide falling leaves
 * - AnimatedVines: Side decorations
 * - NatureBackground: Parallax backgrounds
 * - GlassmorphicCard: Content cards with glass effect
 * - FadeIn: Entrance animations
 * - StaggerContainer/Item: Sequential animations
 * - FloatingLeafDecoration: Decorative floating leaves
 * - RippleEffect: Click interactions
 *
 * CUSTOMIZATION OPTIONS:
 * - variant: Change glassmorphic intensity (light/medium/strong)
 * - direction: Change fade-in direction (up/down/left/right)
 * - delay: Adjust animation timing
 * - staggerDelay: Control sequential animation speed
 * - position: Change vine placement (left/right/top/bottom)
 */
