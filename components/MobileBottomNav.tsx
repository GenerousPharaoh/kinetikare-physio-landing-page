"use client";

import React from 'react';
import Link from 'next/link';
import { HomeIcon, WrenchScrewdriverIcon, PhoneIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'; // Or solid
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/#home', label: 'Home', icon: HomeIcon },
  { href: '/#services', label: 'Services', icon: WrenchScrewdriverIcon },
  { href: 'https://endorphinshealth.janeapp.com/#/staff_member/6', label: 'Book', icon: CalendarDaysIcon, external: true },
  { href: '/#contact', label: 'Contact', icon: PhoneIcon },
  // { href: '/#about', label: 'About', icon: UserIcon }, // Optional: Add if needed
];

export default function MobileBottomNav() {
  const pathname = usePathname(); // Use to highlight active section if needed, though less common for bottom nav

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-neutral-200 shadow-top z-40 flex items-center justify-around">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className="flex flex-col items-center justify-center text-center px-2 py-1 text-xs font-medium text-neutral-600 hover:text-primary transition-colors duration-200 group"
        >
          <item.icon className="w-6 h-6 mb-0.5 text-neutral-500 group-hover:text-primary transition-colors duration-200" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
} 