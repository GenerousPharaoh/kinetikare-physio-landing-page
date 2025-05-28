"use client";

import React from 'react';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Physiotherapy
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 transition">Services</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
            <li>
              <Link href="/ai-physio" className="relative flex items-center space-x-1 hover:text-[#B08D57] transition group">
                <SparklesIcon className="h-4 w-4 text-[#B08D57] group-hover:scale-110 transition-transform" />
                <span>AI Advisor</span>
              </Link>
            </li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 