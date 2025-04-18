"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show button after scrolling 500px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`md:hidden fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <Link
        href="https://endorphinshealth.janeapp.com/#/staff_member/6"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-4 py-3 rounded-full shadow-lg transition-all duration-200"
        aria-label="Book appointment"
      >
        <CalendarDaysIcon className="h-5 w-5" />
        <span>Book Now</span>
      </Link>
    </div>
  );
} 