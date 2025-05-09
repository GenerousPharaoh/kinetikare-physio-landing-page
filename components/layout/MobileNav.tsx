"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button - fixed at bottom on mobile */}
      <button 
        className="md:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={toggleNav}
        aria-label="Toggle mobile menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleNav} aria-label="Close menu">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-6 text-center text-xl">
              <li>
                <Link href="/#services" className="block py-2" onClick={toggleNav}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="block py-2" onClick={toggleNav}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="block py-2" onClick={toggleNav}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="block py-2" onClick={toggleNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav; 