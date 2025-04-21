"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, PhoneIcon, CalendarDaysIcon, ChevronDownIcon, HomeIcon, NewspaperIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

// Group navigation items by type for better organization
interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  type: 'standalone' | 'section'; // Differentiate between standalone pages and home sections
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const pathname = usePathname();

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
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setHomeDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [mobileMenuOpen]);

  // Close mobile menu when the window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Reorganized navigation structure with clear type indicators
  const navItems: NavItem[] = [
    { name: 'Home', href: '/', type: 'standalone', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'Services', href: '/#services', type: 'section' },
    { name: 'About', href: '/#about', type: 'section' },
    { name: 'Conditions', href: '/#conditions', type: 'section' },
    { name: 'Testimonials', href: '/#testimonials', type: 'section' },
    { name: 'Blog', href: '/blog', type: 'standalone', icon: <NewspaperIcon className="w-4 h-4" /> },
    { name: 'FAQ', href: '/faq', type: 'standalone', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
    { name: 'Contact', href: '/#contact', type: 'section' },
  ];

  // Filter for standalone pages and home page sections
  const standalonePages = navItems.filter(item => item.type === 'standalone');
  const homeSections = navItems.filter(item => item.type === 'section');

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto', 
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Handle navigation click with consistent behavior for all navigation items
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For both hash and non-hash links
    if ((href === '/' || href.includes('#')) && pathname === '/') {
      // Only handle hash navigation on the home page
      if (href.includes('#')) {
        e.preventDefault();
        const targetId = href.substring(2); // Remove /# part
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
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
    }
    
    // Always close menus
    setIsOpen(false);
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
    
    // Call onNavLinkClick if provided (for the parent component to react)
    if (onNavLinkClick) {
      onNavLinkClick(href);
    }
  };

  // Determine if current location matches the nav item - consistent for all items
  const isCurrentPath = (href: string) => {
    // Exact match for pages like home, blog, faq
    if (href === pathname) {
      return true;
    }
    
    // For hash links on home page
    if (href.includes('#') && pathname === '/') {
      return false; // Don't mark as active unless it's the exact hash we're on
    }
    
    // For non-hash pages
    if (!href.includes('#') && href !== '/') {
      return pathname.startsWith(href);
    }
    
    // Default case
    return false;
  };

  // Determine header opacity based on scroll position and hover state
  const getHeaderOpacity = () => {
    if (isHovered) {
      return 'bg-white/98'; // Almost fully opaque when hovered
    }
    if (scrolled) {
      return 'bg-white/95'; // More opaque when scrolled for better readability
    }
    return 'bg-white/90'; // Default opacity
  };

  return (
    <motion.header
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'shadow-xl py-1 xs:py-2' 
          : 'py-2 xs:py-3'}
        ${getHeaderOpacity()} backdrop-blur-lg`}
      style={{ 
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'transform, background-color, box-shadow, padding',
        borderBottom: scrolled ? '1px solid rgba(231, 169, 49, 0.15)' : 'none',
        background: scrolled 
          ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))' 
          : 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHomeDropdownOpen(false); // Close dropdown when leaving header
      }}
    >
      {/* Premium header accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      
      {/* Enhanced subtle glass effect overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl -z-10"></div>
      
      {/* Force GPU acceleration for smoother transitions */}
      <div className="container mx-auto px-3 xs:px-4 md:px-6 relative">
        {/* Top subtle accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center z-10 group">
            <motion.div 
              className="font-heading font-bold text-base xs:text-xl md:text-2xl flex items-center relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-primary-700 group-hover:text-primary-800 transition-colors duration-500">KH</span>
              <span className="text-accent group-hover:text-accent-dark transition-colors duration-500 ml-1">Physiotherapy</span>
              
              {/* Enhanced animated underline */}
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500/80 via-accent/80 to-primary-500/80"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              ></motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Enhanced with primary/secondary navigation structure */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2 lg:space-x-3 bg-white/30 backdrop-blur-sm rounded-full px-2 py-1 border border-white/50 shadow-sm">
              {/* Main pages */}
              {standalonePages.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center"
                  onHoverStart={() => setActiveItem(item.name)}
                  onHoverEnd={() => setActiveItem(null)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 lg:px-4 py-2 rounded-full transition-all duration-300 
                        text-sm lg:text-base font-medium flex items-center gap-1.5
                        ${isCurrentPath(item.href) 
                          ? 'text-accent-600 font-semibold' 
                          : 'text-primary-700 hover:text-accent-500'}`}
                  >
                    {item.icon && <span className="text-accent/70">{item.icon}</span>}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Animated background on hover and active states */}
                    {(isCurrentPath(item.href) || activeItem === item.name) && (
                      <motion.span 
                        className="absolute inset-0 bg-accent/10 rounded-full -z-0"
                        layoutId={`navBackground-${item.name}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Underline indicator for current page */}
                    {isCurrentPath(item.href) && (
                      <motion.span 
                        className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full"
                        layoutId={`activeIndicator-${item.type}`}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Home sections dropdown */}
              <motion.div 
                className="relative"
                onHoverStart={() => setHomeDropdownOpen(true)}
                onHoverEnd={() => setHomeDropdownOpen(false)}
              >
                <motion.button
                  className={`relative px-3 lg:px-4 py-2 rounded-full transition-all duration-300 
                    text-sm lg:text-base font-medium flex items-center gap-1.5
                    ${pathname === '/' && !isCurrentPath('/blog') && !isCurrentPath('/faq')
                      ? 'text-accent-600 font-semibold' 
                      : 'text-primary-700 hover:text-accent-500'}`}
                  onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">Explore</span>
                  <ChevronDownIcon 
                    className={`h-4 w-4 transition-transform duration-300 ${homeDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                  
                  {/* Animated background on hover */}
                  {(homeDropdownOpen || pathname === '/' && !isCurrentPath('/blog') && !isCurrentPath('/faq')) && (
                    <motion.span 
                      className="absolute inset-0 bg-accent/10 rounded-full -z-0"
                      layoutId="navBackground-Explore"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Underline indicator for current page */}
                  {pathname === '/' && !isCurrentPath('/blog') && !isCurrentPath('/faq') && (
                    <motion.span 
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full"
                      layoutId="activeIndicator-dropdown"
                    />
                  )}
                </motion.button>
                
                {/* Dropdown menu */}
                <AnimatePresence>
                  {homeDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 py-2 px-1 bg-white rounded-xl shadow-lg border border-neutral-200/70 min-w-[180px] z-50 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ originY: "top" }}
                    >
                      <div className="space-y-0.5">
                        {homeSections.map((section, i) => (
                          <motion.div
                            key={section.name}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * i, duration: 0.2 }}
                          >
                            <Link
                              href={section.href}
                              onClick={(e) => handleNavClick(e, section.href)}
                              className="block px-4 py-2 text-sm text-primary-700 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors duration-200 font-medium"
                            >
                              {section.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </nav>

          {/* Desktop Call-to-Action */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 h-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="tel:+19056346000"
                className="flex items-center text-sm font-medium transition-all duration-300 py-2 px-3 lg:px-4 
                  rounded-full hover:scale-105 h-10 whitespace-nowrap
                  text-primary-700 bg-white border border-neutral-200 hover:shadow-md
                  hover:border-accent/30"
                aria-label="Call Now"
              >
                <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle header-badge mr-2 bg-primary-50">
                  <PhoneIcon className="h-3.5 w-3.5 text-primary-700" />
                </div>
                <span className="hidden lg:inline">905-634-6000</span>
                <span className="lg:hidden">Call</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="https://khphysiotherapy.janeapp.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-medium px-3 lg:px-4 py-2 rounded-full 
                  shadow-md hover:shadow-lg transition-all duration-300 
                  flex items-center gap-1.5 h-10 whitespace-nowrap border border-accent/50"
              >
                <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle header-badge bg-white/20">
                  <CalendarDaysIcon className="h-3.5 w-3.5" />
                </div>
                <span>Book Online</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-full focus:outline-none transition-colors duration-200
                bg-white/80 border border-neutral-200 shadow-sm 
                text-primary-700 hover:text-accent"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Reorganized with section grouping */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.div 
              className="backdrop-blur-xl bg-white/95 shadow-lg border-b border-neutral-200/30 px-4 py-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Primary Pages */}
              <div className="pb-2 mb-3 border-b border-neutral-100">
                <h3 className="text-xs uppercase tracking-wider text-primary-500 font-semibold mb-2 px-4">Main Pages</h3>
                <div className="space-y-1">
                  {standalonePages.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`flex items-center px-4 py-3 rounded-lg text-base font-medium 
                          hover:bg-accent/10 transition-all duration-200 gap-3
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                            : 'text-primary-700 hover:text-accent-500'}`}
                      >
                        {item.icon && <span className="text-accent/70">{item.icon}</span>}
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Home Sections */}
              {pathname === '/' && (
                <div className="pb-2 mb-3">
                  <h3 className="text-xs uppercase tracking-wider text-primary-500 font-semibold mb-2 px-4">On This Page</h3>
                  <div className="space-y-1 bg-accent/5 py-2 px-1 rounded-lg">
                    {homeSections.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (0.05 * i), duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="flex items-center px-4 py-2 rounded-lg text-base font-medium 
                            hover:bg-accent/10 transition-all duration-200
                            text-primary-700 hover:text-accent-500"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 mt-5 py-2">
                <Link
                  href="tel:+19056346000"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-white text-primary-700 rounded-lg text-base font-medium border border-neutral-200 hover:border-accent/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle header-badge bg-primary-50">
                    <PhoneIcon className="h-4 w-4 text-primary-700" />
                  </div>
                  <span>Call Now</span>
                </Link>
                <Link
                  href="https://khphysiotherapy.janeapp.com/"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-lg text-base font-medium border border-accent/50 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle header-badge bg-white/20">
                    <CalendarDaysIcon className="h-4 w-4" />
                  </div>
                  <span>Book</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});

export default Header;