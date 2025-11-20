'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  variant?: 'light' | 'medium' | 'strong'
  hoverEffect?: boolean
  animateOnView?: boolean
}

export default function GlassmorphicCard({
  children,
  className = '',
  variant = 'medium',
  hoverEffect = true,
  animateOnView = true
}: GlassmorphicCardProps) {
  const variants = {
    light: 'bg-emerald-900/40 backdrop-blur-sm border-[#6ff799]/30',
    medium: 'bg-emerald-900/60 backdrop-blur-md border-[#6ff799]/40',
    strong: 'bg-emerald-800/70 backdrop-blur-lg border-[#6ff799]/50'
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const hoverVariants = hoverEffect ? {
    scale: 1.03,
    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  } : {}

  return (
    <motion.div
      className={`${variants[variant]} rounded-2xl border shadow-lg transition-all ${className}`}
      variants={animateOnView ? cardVariants : undefined}
      initial={animateOnView ? "hidden" : undefined}
      whileInView={animateOnView ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverVariants}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
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

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  )
}

export function GlassmorphicContainer({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`backdrop-blur-md bg-emerald-900/50 rounded-3xl border border-[#6ff799]/40 shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      {/* Breathing glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 rounded-3xl blur-lg -z-10"
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

      <div className="relative">
        {children}
      </div>
    </motion.div>
  )
}
