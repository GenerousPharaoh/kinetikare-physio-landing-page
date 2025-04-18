"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import Link from 'next/link';
// import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Bars3Icon, XMarkIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'; // Using outline for header icons
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Conditions', href: '/#conditions' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.35,
        ease: "easeOut"
      }
    })
  };

  // Handle navigation click with smooth scroll for local links
  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') && onNavLinkClick) {
      onNavLinkClick(href);
    }
    setIsOpen(false);
  };

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'py-2 bg-white/95 shadow-md' 
          : 'py-3 bg-white shadow-sm'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Container */}
          <div className="flex items-center">
            <Link href="/" aria-label="KH Physiotherapy Homepage" className="flex items-center">
              <div className={`${scrolled 
                  ? 'bg-primary-700' 
                  : 'bg-primary-800'} 
                rounded-md py-1.5 px-2 transition-all duration-300`}>
                <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">KH</span>
              </div>
              <span className={`ml-3 font-sans font-medium text-lg md:text-xl ${scrolled ? 'text-primary-600' : 'text-primary-700'} tracking-wide transition-colors duration-300`}>
                Physiotherapy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/#') && onNavLinkClick) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className={`text-base font-medium px-2 py-2 
                      ${scrolled ? 'text-gray-700' : 'text-gray-800'} 
                      hover:text-primary relative group transition-colors duration-200`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Call-to-Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:+19056346000"
              className="flex items-center text-sm lg:text-base font-medium text-primary hover:text-primary-dark transition-colors duration-200 py-1.5 px-2"
              aria-label="Call Now"
            >
              <PhoneIcon className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
              <span className="ml-2 hidden lg:inline">(905) 634-6000</span>
            </Link>

            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-medium px-4 py-2 rounded-md transition-all duration-200 shadow-sm flex items-center gap-1.5"
            >
              <CalendarDaysIcon className="h-4 w-4" /> 
              <span>Book Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-md ${scrolled ? 'text-primary-600' : 'text-primary'} focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen 
          ? 'max-h-[80vh] py-4 border-t border-neutral-200 bg-white shadow-md' 
          : 'max-h-0 border-none'} 
          overflow-y-auto md:hidden transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-5 pt-2 pb-3 space-y-1 flex flex-col">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('/#') && onNavLinkClick) {
                  e.preventDefault();
                  handleNavClick(item.href);
                } else {
                  setIsOpen(false);
                }
              }}
              className="block w-full px-4 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-primary transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200 px-5 flex flex-col gap-3 pb-5">
          <Link
            href="tel:+19056346000"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-4 py-3 rounded-md text-base font-medium text-primary"
          >
            <PhoneIcon className="h-5 w-5 mr-2.5 text-green-600" /> (905) 634-6000
          </Link>

          <Link
            href="https://endorphinshealth.janeapp.com/#/staff_member/6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-accent hover:bg-accent-dark text-white font-medium flex items-center justify-center w-full px-4 py-3 rounded-md transition-all duration-200"
          >
            <CalendarDaysIcon className="h-5 w-5 mr-2.5" /> Book Online
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Header;