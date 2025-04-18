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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled 
          ? 'py-2 backdrop-blur-md bg-white/80 shadow-lg' 
          : 'py-3 bg-white shadow-header'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Container with updated styling */}
          <motion.div 
            className={`py-1 pr-6 md:pr-8 lg:pr-10 border-r ${scrolled ? 'border-primary/10' : 'border-neutral-200'} mr-4 md:mr-6 lg:mr-8`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" aria-label="KH Physiotherapy Homepage">
              <div className="flex items-center">
                <div className={`${scrolled 
                    ? 'bg-primary-700 shadow-md' 
                    : 'bg-primary-800 shadow-sm'} 
                  rounded-md py-1.5 px-2 transition-all duration-500`}>
                  <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">KH</span>
                </div>
                <span className={`ml-3 font-sans font-medium text-lg md:text-xl ${scrolled ? 'text-primary-600' : 'text-primary-700'} tracking-wide transition-colors duration-500`}>
                  Physiotherapy
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with animations */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/#') && onNavLinkClick) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className={`text-base lg:text-base font-medium px-1 py-2 
                      ${scrolled ? 'text-text-secondary/90' : 'text-text-secondary'} 
                      hover:text-primary relative group transition-colors duration-200 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 
                      focus-visible:ring-offset-2 rounded-md`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Call-to-Action with improved styling */}
          <motion.div 
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="tel:+19056346000"
              className={`flex items-center text-sm lg:text-base font-medium 
                ${scrolled ? 'text-primary-600' : 'text-primary'} 
                hover:text-primary-dark transition-colors duration-200 
                group py-1.5 px-2 rounded-md hover:bg-primary-50/60 whitespace-nowrap`}
              aria-label="Call Now"
            >
              <PhoneIcon className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
              <span className="ml-2 hidden lg:inline">(905) 634-6000</span>
            </Link>

            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/6"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-sm btn-primary font-medium ${scrolled ? 'shadow-md' : 'shadow-button'} 
                hover:shadow-button-hover px-3 py-2 lg:px-4 lg:py-2 flex items-center gap-1.5`}
            >
              <CalendarDaysIcon className="h-4 w-4" /> 
              <span>Book Online</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button with improved transitions */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md 
                ${scrolled ? 'text-primary-600 hover:bg-primary-50/50' : 'text-primary hover:bg-neutral-100'}  
                focus:outline-none transition-colors duration-200 
                focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2`}
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

      {/* Mobile Menu with glassmorphism effect and improved animation */}
      <div
        className={`${isOpen 
          ? 'max-h-[80vh] py-4 border-t border-neutral-200/50 backdrop-blur-md bg-white/95 shadow-lg' 
          : 'max-h-0 border-none'} 
          overflow-y-auto md:hidden transition-all duration-500 ease-in-out`}
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
              className="block w-full px-4 py-3 rounded-lg text-lg font-medium text-text-secondary hover:text-primary hover:bg-neutral-100/80 transition-all duration-200"
              style={{
                transitionDelay: `${i * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200/50 px-5 flex flex-col gap-3 pb-5">
          <Link
            href="tel:+19056346000"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-medium text-primary border border-primary/20 hover:bg-primary-50/60 transition-all duration-200"
            style={{
              transitionDelay: `${navItems.length * 50}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <PhoneIcon className="h-5 w-5 mr-2.5 text-green-600" /> (905) 634-6000
          </Link>

          <Link
            href="https://endorphinshealth.janeapp.com/#/staff_member/6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary flex items-center justify-center w-full py-3 text-base shadow-button hover:shadow-button-hover"
            style={{
              transitionDelay: `${(navItems.length + 1) * 50}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <CalendarDaysIcon className="h-5 w-5 mr-2.5" /> Book Online
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Header;