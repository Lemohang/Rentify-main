'use client'

import Link from 'next/link'
import { JSX } from 'react'

// Reusable background blob
function BackgroundBlob({ position = 'top' }: { position?: 'top' | 'bottom' }): JSX.Element {
  const isTop = position === 'top'

  const style = {
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }

  const className = `absolute inset-x-0 ${
    isTop ? '-top-40 sm:-top-80' : 'top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]'
  } -z-10 transform-gpu overflow-hidden blur-3xl`

  const innerClassName = `relative ${
    isTop ? 'left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]' : 'left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]'
  } aspect-1155/678 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30`

  return (
    <div aria-hidden="true" className={className}>
      <div style={style} className={innerClassName} />
    </div>
  )
}

export default function Hero(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BackgroundBlob position="top" />

        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-52">
          {/* Search bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search rentals..."
              aria-label="Search rentals"
              className="w-full max-w-md rounded-full border border-gray-300 px-5 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 sm:text-base"
            />
          </div>

          {/* Heading and subheading */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-sans">
              Verified Rentals. Real Comfort.
            </h1>
            <p className="mt-6 text-lg text-gray-600 font-medium sm:text-xl">
              Designed for Students & Lecturers Seeking Peace of Mind
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/rentals"
                className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Browse Rentals
              </Link>
              <Link
                href="/list-property"
                className="text-sm font-semibold text-gray-900 hover:underline"
              >
                List a Property <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <BackgroundBlob position="bottom" />
      </div>
    </div>
  )
}
