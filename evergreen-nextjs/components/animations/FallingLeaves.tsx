'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Leaf {
  id: number
  x: number
  delay: number
  duration: number
  rotation: number
  size: number
  type: 'maple' | 'oak' | 'birch'
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Generate random leaves
    const generatedLeaves: Leaf[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (%)
      delay: Math.random() * 10, // Random delay (0-10s)
      duration: 15 + Math.random() * 10, // Random duration (15-25s)
      rotation: Math.random() * 360, // Random initial rotation
      size: 0.6 + Math.random() * 0.8, // Random size (0.6-1.4)
      type: ['maple', 'oak', 'birch'][Math.floor(Math.random() * 3)] as 'maple' | 'oak' | 'birch'
    }))

    setLeaves(generatedLeaves)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute -top-10"
          style={{
            left: `${leaf.x}%`,
            fontSize: `${leaf.size * 24}px`,
          }}
          initial={{ y: -100, opacity: 0, rotate: leaf.rotation }}
          animate={{
            y: '110vh',
            opacity: [0, 1, 1, 0.8, 0],
            rotate: [leaf.rotation, leaf.rotation + 360, leaf.rotation + 720],
            x: [0, 50, -30, 40, -20, 0], // Swaying motion
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
        >
          <LeafSVG type={leaf.type} />
        </motion.div>
      ))}
    </div>
  )
}

function LeafSVG({ type }: { type: 'maple' | 'oak' | 'birch' }) {
  const colors = {
    maple: ['#f59e0b', '#dc2626', '#ea580c', '#eab308'],
    oak: ['#78350f', '#92400e', '#854d0e', '#a16207'],
    birch: ['#65a30d', '#84cc16', '#4d7c0f', '#16a34a']
  }

  const color = colors[type][Math.floor(Math.random() * colors[type].length)]

  if (type === 'maple') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 2 C 12 5, 8 8, 10 15 C 6 14, 3 16, 4 20 C 2 20, 1 22, 3 26 C 1 27, 2 30, 6 32 C 4 35, 8 38, 12 38 L 18 35 L 24 38 C 28 38, 32 35, 30 32 C 34 30, 35 27, 33 26 C 35 22, 34 20, 32 20 C 33 16, 30 14, 26 15 C 28 8, 24 5, 18 2 Z"
          fill={color}
          opacity="0.9"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
        />
      </svg>
    )
  }

  // Birch leaf
  return (
    <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
