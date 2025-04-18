"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import Link from 'next/link';
// import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Bars3Icon, XMarkIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'; // Using outline for header icons
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [mobileMenuOpen]);

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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2); // Remove /# part
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Use document.querySelector as a fallback instead of ref.current
        // This fixes the TypeScript error while maintaining the same functionality
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement?.offsetHeight || 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden
        ${scrolled 
          ? 'py-3 backdrop-blur-xl bg-white/80 border-b border-neutral-200/20 shadow-md' 
          : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - shifted left and simplified */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" aria-label="KH Physiotherapy Homepage" className="flex items-center gap-3 group">
              <div className={`${scrolled 
                  ? 'bg-primary-700 shadow-md' 
                  : 'bg-primary-700 shadow-lg'} 
                rounded-lg py-1.5 px-2.5 transition-all duration-500 group-hover:shadow-accent/10 
                group-hover:translate-y-[-2px] hover:scale-105 ease-out relative overflow-hidden`}>
                <span className="font-heading font-bold text-xl text-white tracking-tight relative z-10">KH</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-800 to-primary-600 opacity-70"></div>
                <div className="absolute inset-0 opacity-30 texture-noise"></div>
              </div>
              <div className="transition-all duration-300">
                <span className={`font-sans font-medium text-base md:text-lg 
                  ${scrolled ? 'text-primary-700' : 'text-white'} 
                  tracking-wide transition-colors duration-500`}>
                  <span className={scrolled ? 'gradient-text' : ''}>Physiotherapy</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm lg:text-base font-medium px-2 lg:px-3 py-2 rounded-md transition-all duration-300
                        relative overflow-hidden group
                        ${scrolled 
                          ? 'text-gray-700 hover:text-primary-600' 
                          : 'text-white hover:text-accent'}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? 'bg-primary-600' : 'bg-accent'} 
                      transition-all duration-300 group-hover:w-full`}></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Desktop Call-to-Action - right aligned and unified */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:+19056346000"
              className={`flex items-center text-base font-medium transition-all duration-300 py-2 px-3 
                rounded-lg hover:scale-105
                ${scrolled 
                  ? 'text-primary-600 bg-primary-50/50 hover:bg-primary-50' 
                  : 'text-white bg-white/10 hover:bg-white/20'}`}
              aria-label="Call Now"
            >
              <PhoneIcon className={`h-4 w-4 ${scrolled ? 'text-primary-600' : 'text-accent'} mr-2`} />
              <span>905-634-6000</span>
            </Link>

            <Link
              href="https://khphysiotherapy.janeapp.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`button-3d font-medium px-4 py-2 rounded-lg transition-all duration-300 
                shadow-lg flex items-center gap-1.5
                ${scrolled 
                  ? 'bg-accent hover:bg-accent-dark text-white' 
                  : 'bg-accent hover:bg-accent-dark text-white'}`}
            >
              <CalendarDaysIcon className="h-4 w-4" /> 
              <span>Book Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg focus:outline-none transition-colors duration-200
                ${scrolled 
                  ? 'text-primary-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'}`}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200/20"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-primary-800 hover:text-primary-900 hover:bg-primary-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4 py-2">
                <Link
                  href="tel:+19056346000"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-primary-50 text-primary-700 rounded-md text-base font-medium hover:bg-primary-100"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Call Now</span>
                </Link>
                <Link
                  href="https://khphysiotherapy.janeapp.com/"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-accent text-white rounded-md text-base font-medium hover:bg-accent-dark"
                >
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span>Book</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Header;