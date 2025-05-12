'use client'

import Link from 'next/link'
import { JSX } from 'react'

export default function Hero(): JSX.Element {
  return (
    <div className="relative h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/building.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl leading-tight drop-shadow-lg">
          Verified Rentals. Real Comfort.
        </h1>

        <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium max-w-xl drop-shadow-md">
          Designed for Students & Lecturers Seeking Peace of Mind
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-md">
          <input
            type="text"
            placeholder="Search rentals..."
            aria-label="Search rentals"
            className="w-full rounded-full px-5 py-3 text-sm text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/rentals"
            className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-sm font-semibold shadow-lg transition"
          >
            Browse Rentals
          </Link>
          <Link
            href="/list-property"
            className="text-sm font-semibold text-white underline hover:text-indigo-200"
          >
            List a Property →
          </Link>
        </div>
      </div>
    </div>
  )
}
