'use client';

import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white py-10 px-6 space-y-8">
      <Section title="Navbar" description="Navigation bar with links to Home, Services, About Us, Contact, and user login/join options." />

      <Section 
        title="Header Section" 
        description="Rentify is a digital platform committed to connecting students and lecturers with safe, affordable, and verified rental properties. Our mission is to simplify the housing search by offering transparent listings, trustworthy landlords, and helpful tools tailored for the academic community." 
      />

      <Section 
        title="About Section" 
        description="Founded to address the housing struggles faced by students and lecturers, Rentify emerged as a tech-driven solution in 2024. From its inception, the platform aimed to bridge the gap between quality housing and the academic population, ensuring verified listings and reliable support. Key milestones include our partnership with universities and local housing authorities, and expanding to over 3 cities within our first year." 
      />

      <Section 
        title="Benefits Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>📍 Verified property listings to avoid scams.</li>
            <li>🏫 Tailored for academic users—students and lecturers alike.</li>
            <li>💬 In-app communication between renters and landlords.</li>
            <li>📊 Transparent pricing and comparison tools.</li>
            <li>🔐 Secure account system with user reviews and ratings.</li>
          </ul>
        } 
      />

      <Section 
        title="Team Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Deborah Leepile</strong> – CEO & Co-Founder: Visionary behind Rentify's mission.</li>
            <li><strong>John Mokoena</strong> – CTO: Leads the platform’s development and innovation.</li>
            <li><strong>Mary Khotso</strong> – Customer Relations: Connects with our users and partners.</li>
          </ul>
        } 
      />

      <Section 
        title="Logo List Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>National Student Housing Association</li>
            <li>Lerotholi Polytechnic</li>
            <li>Lesotho Housing Authority</li>
            <li>TechConnect Incubator Program</li>
          </ul>
        } 
      />

      <Section 
        title="Award Logos List Section" 
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>🏆 Best Student Innovation Platform – 2024</li>
            <li>🏅 Lesotho Tech Excellence Award – Housing Tech Category</li>
            <li>🎖️ Top 10 Startups to Watch – EduTech Africa</li>
          </ul>
        } 
      />

      <Section 
        title="CTA Section" 
        description="Ready to join the Rentify community? Sign up now to explore verified listings or reach out to our team for custom support. Let's make your rental experience smooth, safe, and smart." 
      />

      <Section title="Footer" description="Includes links to Privacy Policy, Terms of Service, and social media handles." />
    </main>
  );
};

const Section = ({ title, description }: { title: string; description?: React.ReactNode }) => (
  <div className="border rounded-lg p-4 shadow-sm space-y-2">
    <h2 className="font-bold text-lg">{title}</h2>
    {description && <div className="text-sm text-gray-700 dark:text-gray-300">{description}</div>}
  </div>
);

export default About;
