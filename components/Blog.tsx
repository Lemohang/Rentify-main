'use client';

import React from 'react';
import Link from 'next/link';
import { FaUserGraduate, FaRegNewspaper, FaQuoteLeft, FaEnvelope, FaShareAlt, FaUsers } from 'react-icons/fa';

export default function Blog() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="text-xl font-bold flex items-center gap-2"><FaRegNewspaper /> Rentify Blog</div>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Blog Header Section */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Housing Insights & Student Life</h1>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Welcome to our blog! Discover articles about student accommodation, landlord tips, renting advice, and much more.
        </p>
      </section>

      {/* Blog List Section */}
      <section className="px-6 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Top 10 Tips for First-Time Renters',
            description: 'Renting for the first time? Here’s everything you need to know to avoid common pitfalls.',
            icon: <FaUserGraduate className="text-[#c29d84] text-3xl" />,
          },
          {
            title: 'Student Housing Trends in 2025',
            description: 'What’s changing in the housing market for students this year? Find out here.',
            icon: <FaRegNewspaper className="text-[#c29d84] text-3xl" />,
          },
          {
            title: 'How to Choose a Reliable Landlord',
            description: 'Discover red flags and green lights when searching for your next rental.',
            icon: <FaUsers className="text-[#c29d84] text-3xl" />,
          },
        ].map((post, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">{post.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
            <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read More →</Link>
          </div>
        ))}
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#f9f5f1] dark:bg-gray-900 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6 flex justify-center items-center gap-2">
          <FaQuoteLeft className="text-[#c29d84]" /> What Our Readers Say
        </h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="italic">“Thanks to Rentify’s blog, I found the best student apartment within a week!”</p>
            <p className="mt-2 text-sm text-gray-500">– Thabiso, NUL Student</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="italic">“Their tips for landlords helped me improve my listings and attract better tenants.”</p>
            <p className="mt-2 text-sm text-gray-500">– Mme Dineo, Landlord</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
          <FaEnvelope className="text-[#c29d84]" /> Stay Updated
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">Subscribe to receive the latest blog updates and housing tips directly to your inbox.</p>
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
          <button className="bg-[#c29d84] text-black px-6 py-2 rounded-md hover:opacity-90">Subscribe</button>
        </form>
      </section>

      {/* CTA Section */}
      <section className="bg-[#c29d84] text-black py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
          <FaShareAlt /> Enjoying our content?
        </h2>
        <p className="mb-6">Share it with your friends or follow us on social media for more updates!</p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:opacity-90">Share Now</button>
          <button className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white">Follow Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Rentify. All rights reserved.
      </footer>
    </main>
  );
}
