'use client'

import { motion } from 'framer-motion'
import { useState, MouseEvent } from 'react'

interface RippleEffectProps {
  children: React.ReactNode
  className?: string
  rippleColor?: string
}

interface Ripple {
  x: number
  y: number
  id: number
}

export default function RippleEffect({
  children,
  className = '',
  rippleColor = 'rgba(16, 185, 129, 0.3)'
}: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now()
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: rippleColor,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%'
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 500,
            height: 500,
            opacity: 0
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      {children}
    </div>
  )
}
