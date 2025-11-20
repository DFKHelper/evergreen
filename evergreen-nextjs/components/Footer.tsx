import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white border-t-2 border-[#6ff799]/30">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#6ff799] mb-4">Evergreen Chiropractic</h3>
            <p className="text-gray-100 mb-4">
              Nashville's only Gonstead chiropractic office. Providing specific, effective care for the entire family.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Evergreen Chiropractic Logo"
                width={160}
                height={160}
                className="rounded-xl brightness-110"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com/evergreenchironash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#6ff799] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@evergreenchironash</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#6ff799]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-100 hover:text-[#6ff799] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-100 hover:text-[#6ff799] transition-colors">
                  Who We Help
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-100 hover:text-[#6ff799] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-100 hover:text-[#6ff799] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#6ff799]">Contact</h4>
            <ul className="space-y-2 text-gray-100">
              <li>
                <a href="tel:6153951178" className="hover:text-[#6ff799] transition-colors">
                  (615) 395-1178
                </a>
              </li>
              <li>
                <a href="mailto:drmcgetrick@evergreenchironash.com" className="hover:text-[#6ff799] transition-colors break-all">
                  drmcgetrick@evergreenchironash.com
                </a>
              </li>
              <li className="pt-2">
                1222 16th Avenue South, Ste 10<br />
                Nashville, TN 37212
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#6ff799]/30 text-center text-gray-200">
          <p>&copy; {currentYear} Evergreen Chiropractic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
