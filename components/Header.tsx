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
          ? 'py-3 backdrop-blur-md bg-white/85 shadow-sm border-b border-neutral-200/20' 
          : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Container */}
          <Link href="/" aria-label="KH Physiotherapy Homepage" className="flex items-center group">
            <div className="flex items-center">
              <div className={`${scrolled 
                  ? 'bg-primary-700 shadow-sm' 
                  : 'bg-primary-800 shadow-md'} 
                rounded-lg py-1.5 px-2.5 transition-all duration-300 group-hover:shadow-accent/10`}>
                <span className="font-heading font-bold text-xl text-white tracking-tight">KH</span>
              </div>
              <div className="ml-3 transition-all duration-300">
                <span className={`font-sans font-medium text-lg md:text-xl ${scrolled ? 'text-primary-700' : 'text-white'} tracking-wide transition-colors duration-300`}>
                  Physiotherapy
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
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
                  className={`text-sm lg:text-base font-medium px-3 py-2 rounded-md
                      ${scrolled ? 'text-gray-700 hover:bg-gray-100/50' : 'text-white hover:bg-white/10'} 
                      hover:text-primary-600 relative transition-all duration-200`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Call-to-Action */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link
              href="tel:+19056346000"
              className={`flex items-center text-sm lg:text-base font-medium ${scrolled ? 'text-primary-600 hover:text-primary-700' : 'text-white hover:text-accent-light'} transition-colors duration-200 py-1.5 px-2 rounded-md hover:bg-white/5`}
              aria-label="Call Now"
            >
              <PhoneIcon className={`h-4 w-4 lg:h-5 lg:w-5 ${scrolled ? 'text-green-600' : 'text-accent'}`} />
              <span className="ml-2 hidden lg:inline">(905) 634-6000</span>
            </Link>

            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent/10"
            >
              <span className="flex items-center gap-1.5">
                <CalendarDaysIcon className="h-4 w-4" /> 
                <span>Book Online</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-lg ${scrolled ? 'text-primary-600 hover:bg-gray-100/50' : 'text-white hover:bg-white/10'} focus:outline-none transition-colors duration-200`}
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
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="overflow-hidden md:hidden backdrop-blur-md bg-white/95 shadow-md border-t border-neutral-200/20"
        id="mobile-menu"
      >
        <div className="px-5 pt-2 pb-3 space-y-1 flex flex-col">
          {navItems.map((item) => (
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
              className="block w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100/80 hover:text-primary transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200/50 px-5 flex flex-col gap-3 pb-5">
          <Link
            href="tel:+19056346000"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-medium text-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            <PhoneIcon className="h-5 w-5 mr-2.5 text-green-600" /> (905) 634-6000
          </Link>

          <Link
            href="https://endorphinshealth.janeapp.com/#/staff_member/6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-accent hover:bg-accent-dark text-white font-medium flex items-center justify-center w-full px-4 py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            <CalendarDaysIcon className="h-5 w-5 mr-2.5" /> Book Online
          </Link>
        </div>
      </motion.div>
    </header>
  );
});

export default Header;