"use client";

import React, { useState, useEffect, forwardRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
// import { Menu, X, Phone, Calendar } from 'lucide-react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon, 
  CalendarDaysIcon, 
  ChevronDownIcon,
} from '@heroicons/react/24/outline'; // Using outline for header icons

import { 
  HomeIcon,
  WrenchScrewdriverIcon, 
  UserIcon,
  ClipboardDocumentCheckIcon,
  StarIcon
} from '@heroicons/react/24/solid'; // Using solid icons for menu items for a bolder look
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [homeSectionsOpen, setHomeSectionsOpen] = useState(false);
  const [mobileHomeSectionsOpen, setMobileHomeSectionsOpen] = useState(false);
  const pathname = usePathname();

  // Optimize scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    // Set CSS variable for header height
    const headerElement = document.querySelector('header');
    if (headerElement) {
      document.documentElement.style.setProperty('--header-height', `${headerElement.offsetHeight}px`);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (homeSectionsOpen) setHomeSectionsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [mobileMenuOpen, homeSectionsOpen]);

  // Optimize resize handler with throttling
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 768 && mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
        
        // Update header height CSS variable on resize
        const headerElement = document.querySelector('header');
        if (headerElement) {
          document.documentElement.style.setProperty('--header-height', `${headerElement.offsetHeight}px`);
        }
      }, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [mobileMenuOpen]);

  // Define the main navigation items and home sections using useMemo
  const mainNavItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/#contact' },
  ], []);

  // Define sections that exist on the home page with useMemo
  const homeSections = useMemo(() => [
    { 
      name: 'Services', 
      href: '/#services', 
      icon: <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-accent to-accent-dark">
              <WrenchScrewdriverIcon className="h-3 w-3 text-white" />
            </div> 
    },
    { 
      name: 'About', 
      href: '/#about', 
      icon: <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-600 to-primary-700">
              <UserIcon className="h-3 w-3 text-white" />
            </div> 
    },
    { 
      name: 'Conditions', 
      href: '/#conditions', 
      icon: <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-accent-dark to-primary-700">
              <ClipboardDocumentCheckIcon className="h-3 w-3 text-white" />
            </div> 
    },
    { 
      name: 'Testimonials', 
      href: '/#testimonials', 
      icon: <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-amber-400 to-orange-500">
              <StarIcon className="h-3 w-3 text-white" />
            </div> 
    },
  ], []);

  // Memoize animation variants to prevent recreation
  const navItemVariants = useMemo(() => ({
    visible: {
      opacity: 1,
      y: 0
    }
  }), []);

  // Handle navigation click with useCallback to prevent re-creation
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    setHomeSectionsOpen(false);
    setMobileHomeSectionsOpen(false);
    
    // Call onNavLinkClick if provided (for the parent component to react)
    if (onNavLinkClick) {
      onNavLinkClick(href);
    }
  }, [pathname, onNavLinkClick]);

  // Memoize current path checking function
  const isCurrentPath = useCallback((href: string) => {
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
  }, [pathname]);

  // Memoize header opacity function
  const getHeaderOpacity = useCallback(() => {
    if (isHovered) {
      return 'bg-white/98'; // Almost fully opaque when hovered
    }
    if (scrolled) {
      return 'bg-white/95'; // More opaque when scrolled for better readability
    }
    return 'bg-white/90'; // Default opacity
  }, [isHovered, scrolled]);

  // Memoize the header background style
  const headerStyle = useMemo(() => ({
    transform: 'translateZ(0)' as const,
    backfaceVisibility: 'hidden' as const,
    willChange: 'transform, background-color, box-shadow, padding',
    borderBottom: scrolled ? '1px solid rgba(231, 169, 49, 0.15)' : 'none',
    background: scrolled 
      ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))' 
      : 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0
  }), [scrolled]);

  // Update renderHomeDropdown to use AnimatePresence (we won't use this anymore as we're directly rendering the dropdown)
  const renderHomeDropdown = useMemo(() => {
    return null; // This is now unused as we're rendering the dropdown directly in the JSX
  }, [homeSectionsOpen, homeSections, handleNavClick]);
  
  // Set header height in CSS variables
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const height = headerElement.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };
    
    // Initial update
    updateHeaderHeight();
    
    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    // Update after a short delay to ensure proper measurement after render
    const timeout = setTimeout(updateHeaderHeight, 100);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      ref={ref}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'shadow-lg py-1 xs:py-2' 
          : 'py-2 xs:py-3'}
        ${getHeaderOpacity()} backdrop-blur-lg`}
      style={{
        ...headerStyle,
        boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.07)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.92))' 
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85))'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Add subtle light reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 backdrop-blur-xl -z-5"></div>
      
      {/* Premium header accent line - enhance with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      {/* Enhanced subtle glass effect overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl -z-10"></div>
      
      {/* Force GPU acceleration for smoother transitions */}
      <div className="container mx-auto px-3 xs:px-4 md:px-6 relative z-20">
        {/* Top subtle accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center z-20 group relative">
            <div className="font-heading font-bold text-base xs:text-xl md:text-2xl flex items-center relative overflow-hidden">
              <span className="text-primary-700 group-hover:text-primary-800 transition-all duration-500 tracking-tight relative">
                KH
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
              <span className="mx-1 text-neutral-300">|</span>
              <span className="text-accent group-hover:text-accent-dark transition-all duration-500 tracking-wide font-medium relative">
                Physiotherapy
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left delay-75"></span>
              </span>
            </div>
            
            {/* Add a subtle glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-200/0 via-accent/10 to-primary-200/0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
          </Link>

          {/* Desktop Navigation - with dropdown for home sections */}
          <nav className="hidden md:flex items-center justify-center flex-1 z-20">
            <div className="flex items-center space-x-1 lg:space-x-3 bg-white/40 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/60 shadow-lg shadow-primary-100/20">
              {/* Main navigation items */}
              {mainNavItems.map((item) => (
                <div 
                  key={item.name}
                  className="flex items-center relative"
                  onMouseEnter={() => {
                    setActiveItem(item.name);
                    // Only other items will set activeItem, Home item handles its own dropdown
                    if (item.name !== 'Home' && homeSectionsOpen) {
                      setHomeSectionsOpen(false);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveItem(null);
                  }}
                >
                  {item.name === 'Home' ? (
                    <div 
                      className="relative home-dropdown-container" 
                      onMouseEnter={() => setHomeSectionsOpen(true)}
                      onMouseLeave={() => setHomeSectionsOpen(false)}
                    >
                      <div 
                        className={`relative px-4 lg:px-5 py-2.5 rounded-full transition-all duration-300 
                          text-sm lg:text-base font-medium cursor-pointer flex items-center gap-1.5 group
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold' 
                            : 'text-primary-700 hover:text-accent-500'}`}
                        onClick={(e) => {
                          if (pathname === '/') {
                            setHomeSectionsOpen(!homeSectionsOpen);
                          } else {
                            handleNavClick(e as any, item.href);
                          }
                        }}
                      >
                        <span className="relative z-10">Home</span>
                        <motion.div
                          animate={{ rotate: homeSectionsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="h-4 w-4" />
                        </motion.div>
                        
                        {/* Animated background on hover and active states */}
                        {(isCurrentPath(item.href) || activeItem === item.name || homeSectionsOpen) && (
                          <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/20 rounded-full -z-0"
                          ></motion.span>
                        )}
                        
                        {/* Improved underline indicator with animation */}
                        <span className={`absolute bottom-1 left-0 right-0 h-0.5 mx-3 bg-accent rounded-full 
                          transform origin-left transition-all duration-300 ease-out 
                          ${homeSectionsOpen || isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                        </span>
                      </div>
                      
                      {/* Dropdown for Home Sections - Only render when open */}
                      <AnimatePresence>
                        {homeSectionsOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/40 py-2 min-w-[200px] z-[100]"
                            style={{ 
                              boxShadow: '0 15px 35px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)',
                              transformOrigin: 'top center'
                            }}
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ staggerChildren: 0.05, delayChildren: 0.05 }}
                              className="py-1"
                            >
                              <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Link
                                  href="/"
                                  onClick={(e) => handleNavClick(e, "/")}
                                  className="flex items-center px-4 py-2.5 text-sm text-primary-700 hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/20 hover:text-accent-700 transition-all duration-150"
                                >
                                  <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 mr-3 shadow-sm">
                                    <HomeIcon className="h-3 w-3 text-white" />
                                  </div>
                                  <span className="font-medium">Home</span>
                                </Link>
                              </motion.div>
                              
                              <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-1.5 mx-3 opacity-70"></div>
                              
                              {homeSections.map((section, index) => (
                                <motion.div
                                  key={section.name}
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.05 * (index + 1) }}
                                >
                                  <Link
                                    href={section.href}
                                    onClick={(e) => handleNavClick(e, section.href)}
                                    className="flex items-center px-4 py-2.5 text-sm text-primary-700 hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/20 hover:text-accent-700 transition-all duration-150"
                                  >
                                    <span className="mr-3">{section.icon}</span>
                                    <span className="font-medium">{section.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-4 lg:px-5 py-2.5 rounded-full transition-all duration-300 
                          text-sm lg:text-base font-medium cursor-pointer flex items-center gap-1.5 group
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold' 
                            : 'text-primary-700 hover:text-accent-500'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Animated background on hover and active states */}
                      {(isCurrentPath(item.href) || activeItem === item.name) && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/20 rounded-full -z-0"
                        ></motion.span>
                      )}
                      
                      {/* Improved underline indicator with animation */}
                      <span className={`absolute bottom-1 left-0 right-0 h-0.5 mx-3 bg-accent rounded-full 
                        transform origin-left transition-all duration-300 ease-out 
                        ${isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop Call-to-Action */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 h-12">
            <div>
              <Link
                href="tel:+19056346000"
                className="flex items-center text-sm font-medium transition-all duration-300 py-2 px-4 lg:px-5 
                  rounded-full hover:scale-[1.03] h-10 whitespace-nowrap group
                  text-primary-700 hover:text-primary-800 bg-white/50 backdrop-blur-sm border border-primary-300/50 shadow-sm hover:shadow-md
                  hover:border-accent/30 relative overflow-hidden"
                aria-label="Call Now"
              >
                {/* Add subtle hover animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50/0 via-primary-50/80 to-primary-50/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-50/80 text-primary-700 mr-2 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="h-3.5 w-3.5" />
                </div>
                <span className="hidden lg:inline relative z-10">905-634-6000</span>
                <span className="lg:hidden relative z-10">Call</span>
              </Link>
            </div>

            <div>
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-medium px-4 lg:px-5 py-2 rounded-full 
                  shadow-md hover:shadow-lg transition-all duration-300 
                  flex items-center gap-2 h-10 whitespace-nowrap border border-accent/50 
                  hover:scale-[1.03] hover:brightness-105 group relative overflow-hidden"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <CalendarDaysIcon className="h-3.5 w-3.5" />
                </div>
                <span className="relative z-10">Book Online</span>
                
                {/* Add subtle shine effect on hover */}
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                ></div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-full focus:outline-none transition-all duration-200
                bg-white/60 backdrop-blur-sm border border-neutral-200/80 
                text-primary-700 hover:text-accent hover:bg-white/90 hover:shadow-md
                active:scale-95"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: -90, opacity: 0.8 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning with proper z-index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden fixed inset-x-0 top-[var(--header-height)] z-40 overflow-hidden bg-white/95 backdrop-blur-xl shadow-xl border-b border-neutral-200/30"
          >
            <motion.div 
              className="px-4 py-3 overflow-y-auto max-h-[calc(100vh-var(--header-height))]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="space-y-1">
                {/* Home with dropdown toggle for sections */}
                <div className="mb-3">
                  <div
                    className={`flex justify-between items-center px-4 py-3.5 rounded-xl text-base font-medium 
                      hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/15 transition-all duration-200 cursor-pointer 
                      ${pathname === '/' 
                        ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                        : 'text-primary-700 hover:text-accent-500'}`}
                    onClick={() => setMobileHomeSectionsOpen(!mobileHomeSectionsOpen)}
                  >
                    <div className="flex items-center">
                      <span>Home</span>
                    </div>
                    <motion.div
                      animate={{ rotate: mobileHomeSectionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="h-5 w-5" />
                    </motion.div>
                  </div>
                  
                  {/* Collapsible home sections */}
                  <AnimatePresence>
                    {mobileHomeSectionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 ml-4 border-l border-neutral-200 mt-1 mb-2 overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Link
                            href="/"
                            onClick={(e) => handleNavClick(e, "/")}
                            className="flex items-center px-4 py-3 rounded-lg text-primary-700 hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/15 hover:text-accent-500 text-sm font-medium"
                          >
                            <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 mr-2 shadow-sm">
                              <HomeIcon className="h-3 w-3 text-white" />
                            </div> Home Page
                          </Link>
                          {homeSections.map((section) => (
                            <Link
                              key={section.name}
                              href={section.href}
                              onClick={(e) => handleNavClick(e, section.href)}
                              className="flex items-center px-4 py-3 rounded-lg text-primary-700 hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/15 hover:text-accent-500 text-sm font-medium"
                            >
                              <span className="mr-2">{section.icon}</span> {section.name}
                            </Link>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Other main nav items without Home */}
                {mainNavItems.filter(item => item.name !== 'Home').map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * (index + 1) }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium 
                        hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/15 active:bg-accent/20 transition-all duration-200
                        ${isCurrentPath(item.href) 
                          ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                          : 'text-primary-700 hover:text-accent-500'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced mobile CTA buttons */}
              <motion.div 
                className="flex items-center gap-3 mt-5 py-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="tel:+19056346000"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-white/70 backdrop-blur-sm text-primary-700 rounded-xl text-base font-medium border border-neutral-200/80 hover:border-accent/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-50/80 group-hover:bg-primary-100/90 transition-colors duration-300 group-hover:scale-110">
                    <PhoneIcon className="h-4 w-4 text-primary-700" />
                  </div>
                  <span>Call Now</span>
                </Link>
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl text-base font-medium border border-accent/50 shadow-md hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                    <CalendarDaysIcon className="h-4 w-4" />
                  </div>
                  <span className="relative z-10">Book</span>
                  {/* Add subtle shine effect on hover */}
                  <div 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  ></div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default React.memo(Header);