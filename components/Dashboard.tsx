'use client';

import React from 'react';

export default function Dashboard() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to the Admin Dashboard</h1>
        <p className="text-lg text-gray-600">Manage users, properties, analytics, and subscriptions all in one place.</p>
      </section>

      {/* Features Section */}
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {/* User Management */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-600 mb-4">View and manage all registered accounts:</p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Students</li>
            <li>Lecturers</li>
            <li>Landlords</li>
          </ul>
        </div>

        {/* Property Management */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Property Management</h2>
          <p className="text-gray-600 mb-4">Oversee all property listings:</p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Approve new listings</li>
            <li>Edit or update property details</li>
            <li>Remove inactive or false listings</li>
          </ul>
        </div>

        {/* Reporting & Analytics */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Reporting & Analytics</h2>
          <p className="text-gray-600 mb-4">Track site performance and activity:</p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Page views & user traffic</li>
            <li>Property listing engagement</li>
            <li>Popular searches & trends</li>
          </ul>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-700 italic">"Rentify made it so easy to find safe housing near campus!"</p>
            <p className="mt-2 text-sm text-gray-500">– Leepile, Student</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-700 italic">"The approval process is smooth and ensures only legit listings are shown."</p>
            <p className="mt-2 text-sm text-gray-500">– Mr. Mpoba, Landlord</p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-gray-600">Basic access for students</p>
            <p className="text-2xl font-bold mt-4">R0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center border-2 border-[#c29d84]">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-600">Advanced features for verified landlords and lecturers</p>
            <p className="text-2xl font-bold mt-4">R99/month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Institutional</h3>
            <p className="text-gray-600">Best for institutions managing multiple listings</p>
            <p className="text-2xl font-bold mt-4">Custom Pricing</p>
          </div>
        </div>
      </section>
    </main>
  );
}
