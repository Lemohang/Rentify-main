'use client';

import React from 'react';

const Properties = () => {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white py-10 px-6 space-y-8">
      <Section title="Navbar" description="Top navigation bar linking to Home, Properties, About Us, Contact, and user options like Login or Sign Up." />

      <Section 
        title="Hero Header Section" 
        description={
          <>
            <p className="mb-2">
              Welcome to the Properties page of Rentify — your trusted source for finding the perfect rental space.
            </p>
            <input
              type="text"
              placeholder="Search for properties by city, type, or price..."
              className="w-full max-w-md p-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
            />
          </>
        } 
      />

      <Section 
        title="Features List Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>🏢 Apartments – Affordable and cozy living spaces.</li>
            <li>🏘 Houses – Spacious homes for families and shared rentals.</li>
            <li>🏠 Studios – Compact, stylish options for solo renters.</li>
          </ul>
        } 
      />

      <Section 
        title="Ecommerce Products List Section" 
        description={
          <>
            <p className="mb-2">Explore our dynamic listing of verified rental properties with flexible filters:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>📍 Location: Maseru, Roma, Teyateyaneng, and more.</li>
              <li>💲 Price Range: Budget to premium listings.</li>
              <li>🏠 Type: Studio, Apartment, House.</li>
              <li>✅ Availability: Real-time status updates.</li>
            </ul>
          </>
        } 
      />

      <Section 
        title="Benefits Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>🔐 Verified landlords and properties to avoid scams.</li>
            <li>💼 Secure online transactions with escrow option.</li>
            <li>📞 Support team available to help renters at every step.</li>
            <li>⭐ User reviews and ratings to make informed decisions.</li>
          </ul>
        } 
      />

      <Section 
        title="FAQ Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Q:</strong> How do I know the property is verified?<br /><strong>A:</strong> All listings go through a strict verification process by our team.</li>
            <li><strong>Q:</strong> Is Rentify free to use?<br /><strong>A:</strong> Browsing is free. Some premium features may require sign-up.</li>
            <li><strong>Q:</strong> Can I contact landlords directly?<br /><strong>A:</strong> Yes, through our in-app messaging system.</li>
          </ul>
        } 
      />

      <Section 
        title="CTA Section" 
        description="Ready to find your ideal home? Sign up now or log in to explore hundreds of properties tailored to your needs. Your next home is just a few clicks away!" 
      />

      <Section 
        title="Footer" 
        description="Includes links to Privacy Policy, Terms of Service, Help Center, and social media accounts." 
      />
    </main>
  );
};

const Section = ({ title, description }: { title: string; description?: React.ReactNode }) => (
  <div className="border rounded-lg p-4 shadow-sm space-y-2">
    <h2 className="font-bold text-lg">{title}</h2>
    {description && <div className="text-sm text-gray-700 dark:text-gray-300">{description}</div>}
  </div>
);

export default Properties;
