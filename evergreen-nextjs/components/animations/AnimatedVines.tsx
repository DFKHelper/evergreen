'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedVinesProps {
  position?: 'left' | 'right' | 'top' | 'bottom'
  variant?: 'simple' | 'detailed'
  className?: string
}

export default function AnimatedVines({
  position = 'left',
  variant = 'detailed',
  className = ''
}: AnimatedVinesProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const positionClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full'
  }

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden ${className}`}>
      {variant === 'simple' ? <SimpleVine position={position} /> : <DetailedVine position={position} />}
    </div>
  )
}

function SimpleVine({ position }: { position: string }) {
  const isVertical = position === 'left' || position === 'right'

  return (
    <motion.svg
      width={isVertical ? "60" : "100%"}
      height={isVertical ? "100%" : "60"}
      viewBox={isVertical ? "0 0 60 400" : "0 0 400 60"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <motion.path
        d={isVertical
          ? "M 30 0 Q 10 100 30 200 T 30 400"
          : "M 0 30 Q 100 10 200 30 T 400 30"
        }
        stroke="url(#vineGradient)"
        strokeWidth="3"
        fill="none"
        animate={{
          strokeWidth: [3, 4, 3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Leaves along the vine */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: i * 0.3, duration: 0.6 }}
        >
          <motion.ellipse
            cx={isVertical ? 15 + (i % 2) * 30 : 50 + i * 80}
            cy={isVertical ? 50 + i * 80 : 15 + (i % 2) * 30}
            rx="8"
            ry="12"
            fill="#059669"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>
      ))}

      <defs>
        <linearGradient id="vineGradient" x1="0%" y1="0%" x2={isVertical ? "0%" : "100%"} y2={isVertical ? "100%" : "0%"}>
          <stop offset="0%" stopColor="#065f46" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#059669" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

function DetailedVine({ position }: { position: string }) {
  const isVertical = position === 'left' || position === 'right'
  const isRightOrBottom = position === 'right' || position === 'bottom'

  return (
    <motion.svg
      width={isVertical ? "80" : "100%"}
      height={isVertical ? "100%" : "80"}
      viewBox={isVertical ? "0 0 80 600" : "0 0 600 80"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isRightOrBottom ? 'rotate-180' : ''}
    >
      {/* Main vine stem */}
      <motion.path
        d={isVertical
          ? "M 40 0 Q 20 80 40 160 Q 60 240 40 320 Q 20 400 40 480 Q 60 560 40 600"
          : "M 0 40 Q 80 20 160 40 Q 240 60 320 40 Q 400 20 480 40 Q 560 60 600 40"
        }
        stroke="url(#detailedVineGradient)"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />

      {/* Secondary vines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={`branch-${i}`}
          d={isVertical
            ? `M 40 ${100 + i * 150} Q ${30 - i * 5} ${120 + i * 150} ${20 - i * 3} ${140 + i * 150}`
            : `M ${100 + i * 150} 40 Q ${120 + i * 150} ${30 - i * 5} ${140 + i * 150} ${20 - i * 3}`
          }
          stroke="url(#branchGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1 + i * 0.3, duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Animated leaves */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i % 2 === 0 ? -30 : 30) + i * 5
        return (
          <motion.g
            key={`leaf-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: 1.5 + i * 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.path
              d={isVertical
                ? `M ${25 + (i % 2) * 30} ${70 + i * 70} Q ${15 + (i % 2) * 30} ${60 + i * 70} ${20 + (i % 2) * 30} ${50 + i * 70} Q ${25 + (i % 2) * 30} ${60 + i * 70} ${25 + (i % 2) * 30} ${70 + i * 70}`
                : `M ${70 + i * 70} ${25 + (i % 2) * 30} Q ${60 + i * 70} ${15 + (i % 2) * 30} ${50 + i * 70} ${20 + (i % 2) * 30} Q ${60 + i * 70} ${25 + (i % 2) * 30} ${70 + i * 70} ${25 + (i % 2) * 30}`
              }
              fill="#10b981"
              stroke="#059669"
              strokeWidth="0.5"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [angle, angle + 5, angle]
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: 'center' }}
            />
          </motion.g>
        )
      })}

      <defs>
        <linearGradient id="detailedVineGradient" x1="0%" y1="0%" x2={isVertical ? "0%" : "100%"} y2={isVertical ? "100%" : "0%"}>
          <stop offset="0%" stopColor="#065f46" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#047857" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#065f46" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export function FloatingLeafDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 30 5 Q 45 15 50 30 Q 45 45 30 55 Q 15 45 10 30 Q 15 15 30 5 Z"
          fill="url(#leafGradient)"
          opacity="0.6"
        />
        <line x1="30" y1="5" x2="30" y2="55" stroke="#047857" strokeWidth="2" opacity="0.4" />
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
