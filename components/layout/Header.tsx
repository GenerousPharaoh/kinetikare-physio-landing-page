"use client";

import React from 'react';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium tracking-tight text-primary-800 hover:text-[#B08D57] transition-colors duration-300">
          <span className="font-light">Kineti</span><span className="font-semibold bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Kare</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="text-primary-700 hover:text-[#B08D57] transition-colors duration-300 font-medium">Home</Link></li>
            <li><Link href="/services" className="text-primary-700 hover:text-[#B08D57] transition-colors duration-300 font-medium">Services</Link></li>
            <li><Link href="/blog" className="text-primary-700 hover:text-[#B08D57] transition-colors duration-300 font-medium">Blog</Link></li>
            <li><Link href="/faq" className="text-primary-700 hover:text-[#B08D57] transition-colors duration-300 font-medium">FAQ</Link></li>
            <li>
              <Link href="/ai-physio" className="relative flex items-center space-x-1 hover:text-[#B08D57] transition group">
                <SparklesIcon className="h-4 w-4 text-[#B08D57] group-hover:scale-110 transition-transform" />
                <span>AI Advisor</span>
              </Link>
            </li>
            <li><Link href="/contact" className="text-primary-700 hover:text-[#B08D57] transition-colors duration-300 font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 