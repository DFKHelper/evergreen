'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="backdrop-blur-md bg-emerald-900/90 shadow-sm sticky top-0 z-50 border-b border-[#6ff799]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/logo.png"
                  alt="Evergreen Chiropractic Logo"
                  width={56}
                  height={56}
                  className="rounded brightness-110 contrast-105 saturate-105"
                />
              </motion.div>
              <span className="text-xl font-bold text-[#6ff799] group-hover:text-white transition-colors">
                Evergreen Chiropractic
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Who We Help</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://evergreenchironash.janeapp.com"
                target="_blank"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all shadow-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-[#6ff799] hover:bg-emerald-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <motion.div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-emerald-900/95 border-t border-[#6ff799]/50"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>
                Who We Help
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
              <MobileNavLink href="/faq" onClick={() => setIsOpen(false)}>
                FAQ
              </MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </MobileNavLink>
              <Link
                href="https://evergreenchironash.janeapp.com"
                target="_blank"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                onClick={() => setIsOpen(false)}
              >
                Book an Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group">
      <span className="text-gray-100 group-hover:text-[#6ff799] transition-colors">
        {children}
      </span>
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-emerald-600"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
      />
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="block px-3 py-2 rounded-2xl text-base font-medium text-gray-100 hover:text-[#6ff799] hover:bg-emerald-800/50"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}
