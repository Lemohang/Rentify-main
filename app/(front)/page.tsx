import Hero from '@/components/Hero'
import FaqSection from '@/components/ui/faq'
import Rentals from '@/components/ui/rentals'
import React from 'react'


export default function page() {
  return (
    <div className=''>
      <Hero />
      <Rentals/>
      <FaqSection/>
    </div>
  )
}