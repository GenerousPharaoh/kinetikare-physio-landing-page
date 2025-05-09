"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Physiotherapy
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/#services" className="hover:text-blue-600 transition">Services</Link></li>
            <li><Link href="/#about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link href="/#testimonials" className="hover:text-blue-600 transition">Testimonials</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 