import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center px-6 py-4 z-10 relative bg-transparent">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex gap-6">
          <li><Link href="/">Home </Link></li>
          <li><Link href="about">About Us</Link></li>
          <li><Link href="properties">Properties</Link></li>
          <li><Link href="dashboard">Dashboard</Link></li>
          <li><Link href="blog">Blog</Link></li>
          <li className="relative group">
            <Link href="contact">Contact Us</Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md p-2">
              <li><Link href="#">Email</Link></li>
              <li><Link href="#">Phone</Link></li>
            </ul>
          </li>
        </ul>
        <div className="flex gap-2">
          <Button className="rounded-full border-white text-white hover:bg-white hover:text-black">Join</Button>
          <Button className="rounded-full bg-[#c29d84] text-black hover:opacity-90">Login</Button>
        </div>
      </nav>
    </div>
  )
}
