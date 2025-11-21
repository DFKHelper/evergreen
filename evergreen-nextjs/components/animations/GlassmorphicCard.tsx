'use client'

import { ReactNode } from 'react'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  variant?: 'light' | 'medium' | 'strong'
  hoverEffect?: boolean
}

export default function GlassmorphicCard({
  children,
  className = '',
  variant = 'medium',
  hoverEffect = true
}: GlassmorphicCardProps) {
  const variants = {
    light: 'bg-emerald-900/40 backdrop-blur-sm border-[#6ff799]/30',
    medium: 'bg-emerald-900/60 backdrop-blur-md border-[#6ff799]/40',
    strong: 'bg-emerald-800/70 backdrop-blur-lg border-[#6ff799]/50'
  }

  const hoverClass = hoverEffect
    ? 'hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]'
    : ''

  return (
    <div
      className={`${variants[variant]} rounded-2xl border-2 shadow-lg transition-all duration-300 ${hoverClass} ${className}`}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent animate-glass-shimmer" />
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
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
    <div
      className={`backdrop-blur-md bg-emerald-900/50 rounded-3xl border border-[#6ff799]/40 shadow-xl ${className}`}
    >
      {/* Breathing glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 rounded-3xl blur-lg -z-10 animate-glow-pulse" />

      <div className="relative">
        {children}
      </div>
    </div>
  )
}
