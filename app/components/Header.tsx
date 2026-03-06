"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">📦</span>
              <span className="ml-2 text-xl font-bold text-gray-900">ZiiBoxes</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products/mailer-boxes" className="text-gray-700 hover:text-blue-600 transition">
              Products
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/industries" className="text-gray-700 hover:text-blue-600 transition">
              Industries
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/products/mailer-boxes" className="text-gray-700 hover:text-blue-600 transition">
                Products
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
                Services
              </Link>
              <Link href="/industries" className="text-gray-700 hover:text-blue-600 transition">
                Industries
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
              <Link
                href="/quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
