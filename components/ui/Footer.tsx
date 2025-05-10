"use client"
import Image from "next/image";
import React from "react";

type FooterNavItem = {
  href: string;
  name: string;
};

const Footer: React.FC = () => {
  const footerNavs: FooterNavItem[] = [
    { href: "javascript:void()", name: "About" },
    { href: "javascript:void()", name: "Blog" },
    { href: "javascript:void()", name: "" },
    { href: "javascript:void()", name: "Team" },
    { href: "javascript:void()", name: "Careers" },
    { href: "javascript:void()", name: "Support" },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image
        width={300}
        height={300}
         src="https://www.floatui.com/logo.svg"
         className="w-32 sm:mx-auto" 
         alt="Logo" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className="hover:text-gray-800">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; 2022 Float UI. All rights reserved.</div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {/* Example social icons - you can replace SVGs as needed */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M..." /> {/* Replace with actual path */}
                </svg>
              </a>
            </li>
            {/* Repeat social links if needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
