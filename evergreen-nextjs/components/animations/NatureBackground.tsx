'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface NatureBackgroundProps {
  children: ReactNode
  className?: string
  showTrees?: boolean
  variant?: 'forest' | 'subtle' | 'lush'
}

export default function NatureBackground({
  children,
  className = '',
  showTrees = true,
  variant = 'forest'
}: NatureBackgroundProps) {
  const gradients = {
    forest: 'from-green-900/20 via-emerald-800/10 to-teal-900/20',
    subtle: 'from-green-50/40 via-emerald-50/30 to-teal-50/40',
    lush: 'from-emerald-600/20 via-green-700/15 to-teal-600/20'
  }

  return (
    <div className={`relative rounded-3xl overflow-hidden ${className}`}>
      {/* Background gradients - static, no parallax */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[variant]} rounded-3xl`}
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/40 via-emerald-50/30 to-transparent rounded-3xl"
      />

      {showTrees && (
        <>
          {/* Logo-style tree trio on left side: small, large, small - bottoms aligned */}
          <div className="absolute left-[2%] top-0 flex items-end gap-0 opacity-30">
            <SwayingTree delay={0} size="small" />
            <div className="-ml-4">
              <SwayingTree delay={0.3} size="large" />
            </div>
            <div className="-ml-4">
              <SwayingTree delay={0.6} size="small" />
            </div>
          </div>

          {/* Logo-style tree trio on right side: small, large, small - bottoms aligned */}
          <div className="absolute right-[2%] top-10 flex items-end gap-0 opacity-30">
            <SwayingTree delay={1.5} size="small" />
            <div className="-ml-4">
              <SwayingTree delay={1.8} size="large" />
            </div>
            <div className="-ml-4">
              <SwayingTree delay={2.1} size="small" />
            </div>
          </div>

          {/* Middle section left - tree trio with aligned bottoms */}
          <div className="absolute left-[3%] top-[40%] flex items-end gap-0 opacity-25">
            <SwayingTree delay={0.8} size="small" />
            <div className="-ml-4">
              <SwayingTree delay={1.1} size="large" />
            </div>
            <div className="-ml-4">
              <SwayingTree delay={1.4} size="small" />
            </div>
          </div>

          {/* Middle section right - tree trio with aligned bottoms */}
          <div className="absolute right-[3%] top-[50%] flex items-end gap-0 opacity-25">
            <SwayingTree delay={2.3} size="small" />
            <div className="-ml-4">
              <SwayingTree delay={2.6} size="large" />
            </div>
            <div className="-ml-4">
              <SwayingTree delay={2.9} size="small" />
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

function SwayingTree({ delay, size }: { delay: number, size: 'small' | 'medium' | 'large' }) {
  const sizes = {
    small: 80,
    medium: 120,
    large: 160
  }

  const treeSize = sizes[size]

  return (
    <motion.svg
      width={treeSize}
      height={treeSize * 2}
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: [0, 3, 0, -3, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: 'bottom center' }}
    >
      {/* Tree trunk */}
      <motion.rect
        x="45"
        y="120"
        width="10"
        height="80"
        fill="url(#trunkGradient)"
        animate={{
          scaleX: [1, 0.98, 1, 1.02, 1]
        }}
        transition={{
          duration: 8,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Tree foliage - top triangle */}
      <motion.path
        d="M 50 10 L 20 70 L 80 70 Z"
        fill="url(#foliageGradient)"
        animate={{
          scale: [1, 1.05, 1, 0.98, 1],
        }}
        transition={{
          duration: 6,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Middle triangle */}
      <motion.path
        d="M 50 50 L 15 100 L 85 100 Z"
        fill="url(#foliageGradient2)"
        animate={{
          scale: [1, 0.98, 1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          delay: delay + 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Bottom triangle */}
      <motion.path
        d="M 50 80 L 10 130 L 90 130 Z"
        fill="url(#foliageGradient3)"
        animate={{
          scale: [1, 1.03, 1, 0.97, 1],
        }}
        transition={{
          duration: 8,
          delay: delay + 0.7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="foliageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="foliageGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="foliageGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
