'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }}
    >
      {children}
    </motion.div>
  )
}

// Simple wrapper that just renders children - no animation delay
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}) {
  // CSS animation class based on direction
  const animationClass = `animate-fade-in-${direction}`
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {}

  return (
    <div
      className={`${className} ${animationClass}`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`${className} animate-fade-in-up`}>
      {children}
    </div>
  )
}
