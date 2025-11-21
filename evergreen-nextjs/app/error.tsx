'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-200 mb-8">
            We apologize for the inconvenience. Please try again or contact us if the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-[#6ff799] text-emerald-900 font-semibold rounded-xl hover:bg-[#5ce088] transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-900 transition-colors"
            >
              Go Home
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            Need help? Call us at{' '}
            <a href="tel:6153951178" className="text-[#6ff799] hover:underline">
              (615) 395-1178
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
