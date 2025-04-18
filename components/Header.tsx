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
        const headerOffset = ref.current?.offsetHeight || 70;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'py-3 backdrop-blur-lg bg-white/90 shadow-sm border-b border-neutral-200/20' 
          : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Container */}
          <Link href="/" aria-label="KH Physiotherapy Homepage" className="flex items-center group">
            <div className="flex items-center">
              <div className={`${scrolled 
                  ? 'bg-primary-700 shadow-sm' 
                  : 'bg-primary-700 shadow-md'} 
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
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm lg:text-base font-medium px-3 py-2 rounded-md transition-all duration-200
                      ${scrolled 
                        ? 'text-gray-700 hover:bg-gray-100/70 hover:text-primary-600' 
                        : 'text-white hover:bg-white/10 hover:text-accent'}`}
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
              className={`flex items-center text-sm lg:text-base font-medium transition-colors duration-200 py-1.5 px-2 rounded-md 
                ${scrolled 
                  ? 'text-primary-600 hover:text-primary-700 hover:bg-primary-50/70' 
                  : 'text-white hover:text-accent hover:bg-white/10'}`}
              aria-label="Call Now"
            >
              <PhoneIcon className={`h-4 w-4 lg:h-5 lg:w-5 ${scrolled ? 'text-primary-600' : 'text-accent'}`} />
              <span className="ml-2 hidden lg:inline">(905) 634-6000</span>
            </Link>

            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/6"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5
                ${scrolled 
                  ? 'bg-accent hover:bg-accent-dark text-white hover:shadow-accent/10' 
                  : 'bg-accent hover:bg-accent-dark text-white hover:shadow-accent/10'}`}
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
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/6"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 px-3 py-2.5 bg-accent text-white rounded-md text-base font-medium hover:bg-accent-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-50"
              >
                Book Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Header;