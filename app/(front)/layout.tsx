import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'



export default async function Layout({children}: {children:ReactNode}) {
  return (
    <div>
     <div className='space-y-2.5 '>
        <Navbar />
       {children}
    </div>
    </div>
  )
}