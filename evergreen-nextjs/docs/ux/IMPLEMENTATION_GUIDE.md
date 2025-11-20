# Evergreen Chiropractic - Implementation Guide

## Quick Start for Developers

This guide provides ready-to-use code snippets and patterns to implement the design vision.

---

## 1. Enhanced Animation Components

### 1.1 Enhanced Falling Leaves with Seasonal Variation

```typescript
// components/animations/FallingLeavesEnhanced.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FallingLeavesEnhancedProps {
  count?: number
  season?: 'spring' | 'summer' | 'autumn' | 'winter'
  speed?: number
}

const seasonalColors = {
  spring: ['#84cc16', '#65a30d', '#4d7c0f'],
  summer: ['#10b981', '#059669', '#047857'],
  autumn: ['#f59e0b', '#dc2626', '#ea580c'],
  winter: ['#a7f3d0', '#d1fae5', '#ecfdf5']
}

export default function FallingLeavesEnhanced({
  count = 15,
  season = 'summer',
  speed = 1
}: FallingLeavesEnhancedProps) {
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const generatedLeaves: Leaf[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: (15 + Math.random() * 10) / speed,
      rotation: Math.random() * 360,
      size: 0.6 + Math.random() * 0.8,
      type: ['maple', 'oak', 'birch'][Math.floor(Math.random() * 3)] as LeafType,
      color: seasonalColors[season][Math.floor(Math.random() * seasonalColors[season].length)]
    }))

    setLeaves(generatedLeaves)
  }, [count, season, speed])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute -top-10 pointer-events-auto cursor-pointer"
          style={{
            left: `${leaf.x}%`,
            fontSize: `${leaf.size * 24}px`,
            color: leaf.color
          }}
          initial={{ y: -100, opacity: 0, rotate: leaf.rotation }}
          animate={{
            y: '110vh',
            opacity: [0, 1, 1, 0.8, 0],
            rotate: [leaf.rotation, leaf.rotation + 360, leaf.rotation + 720],
            x: [0, 50, -30, 40, -20, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: leaf.duration / 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          onClick={(e) => handleLeafClick(e, leaf)}
        >
          <LeafSVG type={leaf.type} color={leaf.color} />
        </motion.div>
      ))}
    </div>
  )
}

function handleLeafClick(e: React.MouseEvent, leaf: Leaf) {
  // Optional: Add confetti or sound effect
  console.log('Leaf clicked!', leaf)
}

interface Leaf {
  id: number
  x: number
  delay: number
  duration: number
  rotation: number
  size: number
  type: 'maple' | 'oak' | 'birch'
  color: string
}

type LeafType = 'maple' | 'oak' | 'birch'

function LeafSVG({ type, color }: { type: LeafType, color: string }) {
  if (type === 'maple') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 2 L22 15 L30 10 L25 18 L38 20 L25 22 L30 30 L22 25 L20 38 L18 25 L10 30 L15 22 L2 20 L15 18 L10 10 L18 15 Z"
          fill={color}
          opacity="0.9"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
        />
      </svg>
    )
  }

  if (type === 'oak') {
    return (
      <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
        <path
          d="M18 2 C 12 5, 8 8, 10 15 C 6 14, 3 16, 4 20 C 2 20, 1 22, 3 26 C 1 27, 2 30, 6 32 C 4 35, 8 38, 12 38 L 18 35 L 24 38 C 28 38, 32 35, 30 32 C 34 30, 35 27, 33 26 C 35 22, 34 20, 32 20 C 33 16, 30 14, 26 15 C 28 8, 24 5, 18 2 Z"
          fill={color}
          opacity="0.9"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
        />
      </svg>
    )
  }

  return (
    <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
      <ellipse
        cx="15"
        cy="20"
        rx="12"
        ry="18"
        fill={color}
        opacity="0.9"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
      />
      <line x1="15" y1="2" x2="15" y2="38" stroke={color} strokeWidth="2" opacity="0.6" />
    </svg>
  )
}
```

### 1.2 Mist Overlay Component

```typescript
// components/nature/MistOverlay.tsx
'use client'

import { motion } from 'framer-motion'

interface MistOverlayProps {
  intensity?: 'light' | 'medium' | 'heavy'
  animated?: boolean
}

export default function MistOverlay({
  intensity = 'medium',
  animated = true
}: MistOverlayProps) {
  const intensityMap = {
    light: 'opacity-20',
    medium: 'opacity-30',
    heavy: 'opacity-50'
  }

  const MistLayer = animated ? motion.div : 'div'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 */}
      <MistLayer
        className={`absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 ${intensityMap[intensity]}`}
        {...(animated && {
          animate: {
            opacity: [0.3, 0.5, 0.3],
            x: ['-10%', '10%', '-10%']
          },
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        })}
      />

      {/* Layer 2 - Slower movement */}
      <MistLayer
        className={`absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/30 ${intensityMap[intensity]}`}
        {...(animated && {
          animate: {
            opacity: [0.2, 0.4, 0.2],
            x: ['10%', '-10%', '10%']
          },
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        })}
      />

      {/* Radial mist in center */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent ${intensityMap[intensity]}`}
      />
    </div>
  )
}
```

### 1.3 Organic Button with Ripple

```typescript
// components/interactive/OrganicButton.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface OrganicButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export default function OrganicButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon
}: OrganicButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = { x, y, id: Date.now() }
    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  const variants = {
    primary: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700',
    secondary: 'bg-white/70 backdrop-blur-md text-emerald-700 border border-emerald-300 hover:bg-white/80',
    ghost: 'bg-transparent text-emerald-700 hover:bg-emerald-50/50'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg font-medium
        transition-all duration-300 shadow-lg
        ${variants[variant]}
        ${sizes[size]}
        flex items-center justify-center gap-2
      `}
      onClick={handleClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && (
          <motion.span
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {icon}
          </motion.span>
        )}
        {children}
      </span>

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-200%', '200%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.button>
  )
}
```

### 1.4 Cursor-Following Leaf

```typescript
// components/interactive/CursorFollowLeaf.tsx
'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorFollowLeaf() {
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20)
      cursorY.set(e.clientY - 20)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', moveCursor)
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 0.6 : 0,
        scale: isVisible ? 1 : 0,
        rotate: [0, 10, 0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.3 },
        rotate: { duration: 3, repeat: Infinity }
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M 20 5 Q 30 12 35 20 Q 30 28 20 35 Q 10 28 5 20 Q 10 12 20 5 Z"
          fill="#10b981"
          opacity="0.6"
        />
        <line x1="20" y1="5" x2="20" y2="35" stroke="#047857" strokeWidth="2" opacity="0.4" />
      </svg>
    </motion.div>
  )
}
```

---

## 2. Enhanced Glassmorphic System

### 2.1 Three-Variant System

```typescript
// components/glassmorphic/GlassCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  variant?: 'light' | 'medium' | 'strong'
  className?: string
  hoverEffect?: boolean
  animateOnView?: boolean
  glowEffect?: boolean
}

export default function GlassCard({
  children,
  variant = 'medium',
  className = '',
  hoverEffect = true,
  animateOnView = true,
  glowEffect = false
}: GlassCardProps) {
  const variants = {
    light: {
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.1)'
    },
    medium: {
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.15)'
    },
    strong: {
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(16, 185, 129, 0.4)',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)'
    }
  }

  const style = variants[variant]

  return (
    <motion.div
      className={`relative rounded-2xl transition-all ${className}`}
      style={{
        background: style.background,
        backdropFilter: style.backdropFilter,
        WebkitBackdropFilter: style.backdropFilter,
        border: style.border,
        boxShadow: style.boxShadow
      }}
      initial={animateOnView ? {
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: 'blur(10px)'
      } : undefined}
      whileInView={animateOnView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      } : undefined}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={hoverEffect ? {
        scale: 1.03,
        y: -5,
        boxShadow: '0 20px 60px rgba(16, 185, 129, 0.25)'
      } : undefined}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Optional glow effect */}
      {glowEffect && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 rounded-2xl blur-lg -z-10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
```

### 2.2 Glassmorphic Input

```typescript
// components/glassmorphic/GlassInput.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GlassInputProps {
  label: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  icon?: React.ReactNode
  required?: boolean
}

export default function GlassInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  required = false
}: GlassInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setHasValue(newValue.length > 0)
    onChange?.(newValue)
  }

  return (
    <motion.div
      className="relative"
      animate={isFocused ? 'focused' : 'rest'}
    >
      {/* Floating label */}
      <motion.label
        className="absolute left-4 text-gray-600 pointer-events-none"
        variants={{
          rest: { y: 12, fontSize: '1rem', color: '#6b7280' },
          focused: { y: -20, fontSize: '0.875rem', color: '#10b981' }
        }}
        animate={isFocused || hasValue ? 'focused' : 'rest'}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </motion.label>

      {/* Input wrapper */}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}

        <motion.input
          type={type}
          placeholder={isFocused ? placeholder : ''}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-white/60 backdrop-blur-md
            border border-emerald-200/40
            text-gray-900 placeholder-gray-400
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-emerald-500/50
            ${icon ? 'pl-12' : ''}
          `}
          variants={{
            rest: {
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1)',
              scale: 1
            },
            focused: {
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)',
              scale: 1.01
            }
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Animated vine line on focus */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
```

---

## 3. Page Templates

### 3.1 Enhanced Homepage Template

```typescript
// app/page.tsx (Enhanced)
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import GonsteadSection from '@/components/sections/GonsteadSection'
import CTASection from '@/components/sections/CTASection'
import ContactSection from '@/components/sections/ContactSection'

// Lazy load animation components
const FallingLeavesEnhanced = dynamic(
  () => import('@/components/animations/FallingLeavesEnhanced'),
  { ssr: false }
)

const AnimatedVines = dynamic(
  () => import('@/components/animations/AnimatedVines'),
  { ssr: false }
)

export default async function HomePage() {
  const [settings, featuredServices] = await Promise.all([
    client.fetch(settingsQuery).catch(() => null),
    client.fetch(featuredServicesQuery).catch(() => []),
  ])

  return (
    <div className="min-h-screen relative">
      {/* Background nature animations */}
      <Suspense fallback={null}>
        <FallingLeavesEnhanced count={15} season="summer" />
        <AnimatedVines position="left" variant="detailed" className="opacity-30" />
        <AnimatedVines position="right" variant="detailed" className="opacity-30" />
      </Suspense>

      {/* Sections */}
      <HeroSection settings={settings} />
      <ServicesSection services={featuredServices} />
      <GonsteadSection />
      <CTASection settings={settings} />
      <ContactSection settings={settings} />
    </div>
  )
}
```

### 3.2 Enhanced Hero Section

```typescript
// components/sections/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MistOverlay from '@/components/nature/MistOverlay'
import OrganicButton from '@/components/interactive/OrganicButton'

export default function HeroSection({ settings }: { settings: any }) {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background forest */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpeg"
          alt="Evergreen forest"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-emerald-800/50 to-teal-700/60" />

        {/* Mist effect */}
        <MistOverlay intensity="medium" animated />
      </div>

      {/* Animated tree silhouettes (parallax) */}
      <TreeSilhouettes />

      {/* Content */}
      <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {settings?.title || 'Evergreen Chiropractic'}
            </h1>

            <motion.p
              className="text-xl sm:text-2xl text-green-100 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {settings?.tagline || 'The only Gonstead office in Nashville'}
            </motion.p>

            <motion.p
              className="text-lg text-white/95 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {settings?.description || 'Specific chiropractic care for the entire family.'}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <OrganicButton
                variant="primary"
                size="lg"
                onClick={() => window.open(settings?.bookingUrl || 'https://evergreenchironash.janeapp.com', '_blank')}
              >
                Book an Appointment
              </OrganicButton>

              <OrganicButton
                variant="ghost"
                size="lg"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
              </OrganicButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Tree silhouettes component
function TreeSilhouettes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[
        { left: '5%', top: '0', size: 'large', delay: 0 },
        { right: '10%', top: '10%', size: 'medium', delay: 1.5 },
        { left: '15%', top: '20%', size: 'small', delay: 0.8 }
      ].map((tree, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-10`}
          style={{ left: tree.left, right: tree.right, top: tree.top }}
          animate={{
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{
            duration: 8,
            delay: tree.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TreeSVG size={tree.size} />
        </motion.div>
      ))}
    </div>
  )
}

function TreeSVG({ size }: { size: string }) {
  const dimensions = {
    small: { width: 80, height: 160 },
    medium: { width: 120, height: 240 },
    large: { width: 160, height: 320 }
  }

  const { width, height } = dimensions[size as keyof typeof dimensions]

  return (
    <svg width={width} height={height} viewBox="0 0 100 200" fill="none">
      <rect x="45" y="120" width="10" height="80" fill="#78350f" />
      <path d="M 50 10 L 20 70 L 80 70 Z" fill="#065f46" />
      <path d="M 50 50 L 15 100 L 85 100 Z" fill="#047857" />
      <path d="M 50 80 L 10 130 L 90 130 Z" fill="#059669" />
    </svg>
  )
}
```

---

## 4. Utility Hooks

### 4.1 Seasonal Theme Hook

```typescript
// hooks/useSeason.ts
import { useEffect, useState } from 'react'

type Season = 'spring' | 'summer' | 'autumn' | 'winter'

interface SeasonPalette {
  primary: string
  secondary: string
  leaves: string[]
  background: string
}

const seasonPalettes: Record<Season, SeasonPalette> = {
  spring: {
    primary: '#84cc16',
    secondary: '#65a30d',
    leaves: ['#84cc16', '#65a30d', '#4d7c0f'],
    background: 'from-green-50 to-lime-50'
  },
  summer: {
    primary: '#10b981',
    secondary: '#059669',
    leaves: ['#10b981', '#059669', '#047857'],
    background: 'from-emerald-50 to-green-50'
  },
  autumn: {
    primary: '#f59e0b',
    secondary: '#dc2626',
    leaves: ['#f59e0b', '#dc2626', '#ea580c'],
    background: 'from-orange-50 to-red-50'
  },
  winter: {
    primary: '#6ee7b7',
    secondary: '#0d9488',
    leaves: ['#a7f3d0', '#d1fae5', '#ecfdf5'],
    background: 'from-teal-50 to-cyan-50'
  }
}

export function useSeason() {
  const [season, setSeason] = useState<Season>('summer')

  useEffect(() => {
    // Check localStorage for preference
    const saved = localStorage.getItem('preferred-season')
    if (saved && saved in seasonPalettes) {
      setSeason(saved as Season)
      return
    }

    // Otherwise determine by date
    const month = new Date().getMonth()
    if (month >= 2 && month <= 4) setSeason('spring')
    else if (month >= 5 && month <= 7) setSeason('summer')
    else if (month >= 8 && month <= 10) setSeason('autumn')
    else setSeason('winter')
  }, [])

  const setSe asonPreference = (newSeason: Season) => {
    setSeason(newSeason)
    localStorage.setItem('preferred-season', newSeason)
  }

  return {
    season,
    palette: seasonPalettes[season],
    setSeasonPreference
  }
}
```

### 4.2 Organic Animation Hook

```typescript
// hooks/useOrganicAnimation.ts
import { useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export function useOrganicAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const getVariants = () => ({
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: 'blur(10px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    },
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })

  return {
    ref,
    isInView,
    shouldAnimate: !shouldReduceMotion,
    variants: getVariants()
  }
}
```

---

## 5. Tailwind Configuration

### 5.1 Extended Theme

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gentle-sway': 'gentle-sway 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        'gentle-sway': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      transitionTimingFunction: {
        'forest': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'breeze': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}

export default config
```

---

## 6. Performance Optimization Examples

### 6.1 Lazy Loading Nature Elements

```typescript
// app/layout.tsx
import dynamic from 'next/dynamic'

// Only load animation components on client
const NatureAnimations = dynamic(
  () => import('@/components/nature/NatureAnimations'),
  {
    ssr: false,
    loading: () => null // Or a skeleton
  }
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* Load animations last */}
        <NatureAnimations />
      </body>
    </html>
  )
}
```

### 6.2 Intersection Observer for Animations

```typescript
// components/nature/LazyAnimatedSection.tsx
'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

const FallingLeaves = dynamic(() => import('./FallingLeaves'), { ssr: false })

export default function LazyAnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '200px' })

  return (
    <div ref={ref} className="relative">
      {children}
      {isInView && <FallingLeaves />}
    </div>
  )
}
```

---

## 7. Testing Utilities

### 7.1 Animation Test Helper

```typescript
// __tests__/utils/animationTest.ts
import { render, screen } from '@testing-library/react'
import { MotionConfig } from 'framer-motion'

export function renderWithAnimations(component: React.ReactElement) {
  return render(
    <MotionConfig reducedMotion="never">
      {component}
    </MotionConfig>
  )
}

export function renderWithoutAnimations(component: React.ReactElement) {
  return render(
    <MotionConfig reducedMotion="always">
      {component}
    </MotionConfig>
  )
}
```

---

## 8. Deployment Checklist

- [ ] Optimize images (use Next.js Image component)
- [ ] Enable Gzip/Brotli compression
- [ ] Set up CDN for static assets
- [ ] Configure caching headers
- [ ] Test on real devices (iOS, Android)
- [ ] Run Lighthouse audit (target >90)
- [ ] Test with slow 3G network
- [ ] Verify reduced-motion preferences
- [ ] Check keyboard navigation
- [ ] Run WAVE accessibility audit

---

## 9. Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Type check
npm run type-check

# Lint
npm run lint

# Analyze bundle
npm run analyze
```

---

This implementation guide provides concrete code examples for all major components described in the design vision. Developers can copy-paste these snippets and customize as needed.
