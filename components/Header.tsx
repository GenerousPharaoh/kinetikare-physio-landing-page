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
    
    // Set CSS variable for header height - using a more reliable approach
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };
    
    // Update immediately and after a short delay to ensure accuracy
    updateHeaderHeight();
    const timeoutId = setTimeout(updateHeaderHeight, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Add additional useEffect to update header height on window resize and DOM changes
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };

    // Create a resize observer to detect changes in header size
    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    const headerElement = document.querySelector('header');
    if (headerElement) {
      resizeObserver.observe(headerElement);
    }

    // Update on window resize as well
    window.addEventListener('resize', updateHeaderHeight, { passive: true });
    
    return () => {
      if (headerElement) {
        resizeObserver.unobserve(headerElement);
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Optimize resize handler with throttling
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 768 && mobileMenuOpen) {
          setMobileMenuOpen(false);
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
      name: 'About', 
      href: '/#about', 
      icon: <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-600 to-primary-700">
              <UserIcon className="h-3 w-3 text-white" />
            </div> 
    },
    { 
      name: 'Testimonials', 
      href: '/#testimonials', 
      icon: <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-500 to-primary-600">
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
    borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.10)' : 'none',
    background: scrolled 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 247, 255, 0.98))' 
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 255, 0.95))',
    backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  }), [scrolled]);

  // Prevent unnecessary re-renders with useMemo for dropdown elements
  const renderHomeDropdown = useMemo(() => {
    if (!homeSectionsOpen) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg border border-neutral-100/80 py-3 min-w-[220px] dropdown-menu"
        style={{ 
          zIndex: 1000,
          overflow: 'hidden',
          transform: 'translateY(0)',
          boxShadow: '0 14px 40px -12px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center px-4 py-2.5 text-sm text-[#1A2036] hover:bg-neutral-50 transition-colors duration-200"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1A2036] mr-3">
            <HomeIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
          </div> Home
        </Link>
        <div className="h-px bg-neutral-100 my-2 mx-3"></div>
        {homeSections.map((section) => (
          <Link
            key={section.name}
            href={section.href}
            onClick={(e) => handleNavClick(e, section.href)}
            className="flex items-center px-4 py-2.5 text-sm text-[#1A2036] hover:bg-neutral-50 transition-colors duration-200"
          >
            <span className="mr-3">{section.icon}</span> {section.name}
          </Link>
        ))}
      </motion.div>
    );
  }, [homeSectionsOpen, homeSections, handleNavClick]);

  return (
    <header
      ref={ref}
      className={`fixed w-full top-0 transition-all duration-250 ease-in-out
        ${scrolled 
          ? 'py-1.5 xs:py-2' 
          : 'py-2.5 xs:py-3.5'}
        ${getHeaderOpacity()} backdrop-blur-lg`}
      style={{
        ...headerStyle,
        zIndex: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!mobileMenuOpen) {
          setHomeSectionsOpen(false);
        }
      }}
    >
      {/* Modern gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
      
      {/* Enhanced glass effect overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-xl p-1.5 mr-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A2036]/0 to-[#1A2036]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="font-serif font-bold text-base xs:text-xl md:text-2xl flex items-center relative">
                <span className="text-[#1A2036] group-hover:text-[#1A2036] transition-colors duration-500 tracking-tight">KH</span>
                <span className="mx-1 text-neutral-300">|</span>
                <span className="text-[#1A2036] group-hover:text-[#1A2036] transition-colors duration-500 tracking-wide font-medium">Physiotherapy</span>
                
                {/* Gold animated underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37]/70 to-[#D4AF37]/90 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - with dropdown for home sections */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 lg:space-x-2 bg-white/30 backdrop-blur-sm rounded-xl px-1.5 py-1.5 border border-neutral-100/60 shadow-sm">
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
                      style={{ position: 'relative' }}
                      onMouseEnter={() => {
                        setHomeSectionsOpen(true);
                        setActiveItem('Home');
                      }}
                      onMouseLeave={() => {
                        // Use a small delay before closing the menu to make it more forgiving
                        setTimeout(() => {
                          if (!document.querySelector('.home-dropdown-container:hover') && 
                              !document.querySelector('.dropdown-menu:hover')) {
                            setHomeSectionsOpen(false);
                            setActiveItem(null);
                          }
                        }, 100);
                      }}
                    >
                      <div 
                        className={`relative px-3.5 lg:px-4.5 py-2.5 rounded-xl transition-all duration-250 
                          text-sm lg:text-[15px] font-medium cursor-pointer flex items-center gap-1.5 group
                          ${isCurrentPath(item.href) 
                            ? 'text-[#1A2036] font-semibold' 
                            : 'text-[#1A2036] hover:text-[#1A2036]'}`}
                        onClick={(e) => {
                          if (pathname === '/') {
                            setHomeSectionsOpen(!homeSectionsOpen);
                          } else {
                            handleNavClick(e as any, item.href);
                          }
                        }}
                        style={{ position: 'relative' }}>
                        <span className="relative z-10">Home</span>
                        <ChevronDownIcon 
                          className={`h-4 w-4 transition-transform duration-250 ${homeSectionsOpen ? 'rotate-180' : ''}`} 
                        />
                        
                        {/* Animated background on hover and active states */}
                        {(isCurrentPath(item.href) || activeItem === item.name || homeSectionsOpen) && (
                          <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/80 rounded-xl -z-0"
                          ></motion.span>
                        )}
                        
                        {/* Gold underline indicator with animation */}
                        <span className={`absolute bottom-1 left-0 right-0 h-0.5 mx-3 bg-[#D4AF37] rounded-full 
                          transform origin-left transition-all duration-250 ease-out 
                          ${homeSectionsOpen || isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                        </span>
                      </div>
                      
                      {/* Dropdown for Home Sections with AnimatePresence for animation */}
                      <AnimatePresence>
                        {renderHomeDropdown}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-3.5 lg:px-4.5 py-2.5 rounded-xl transition-all duration-250
                          text-sm lg:text-[15px] font-medium cursor-pointer flex items-center gap-1.5 group
                          ${isCurrentPath(item.href) 
                            ? 'text-[#1A2036] font-semibold' 
                            : 'text-[#1A2036] hover:text-[#1A2036]'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Animated background on hover and active states */}
                      {(isCurrentPath(item.href) || activeItem === item.name) && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-white/80 rounded-xl -z-0"
                        ></motion.span>
                      )}
                      
                      {/* Gold underline indicator with animation */}
                      <span className={`absolute bottom-1 left-0 right-0 h-0.5 mx-3 bg-[#D4AF37] rounded-full 
                        transform origin-left transition-all duration-250 ease-out 
                        ${isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop Call-to-Action */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 h-12">
            <div>
              <Link
                href="tel:+19056346000"
                className="flex items-center text-sm font-medium transition-all duration-250 py-2 px-3.5 lg:px-4.5 
                  rounded-xl hover:scale-105 h-10 whitespace-nowrap
                  text-[#1A2036] hover:text-[#1A2036] bg-white/60 backdrop-blur-sm border border-neutral-200/80 hover:shadow-sm
                  hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 group"
                aria-label="Call Now"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A2036] text-[#D4AF37] mr-2 group-hover:scale-110 transition-transform">
                  <PhoneIcon className="h-3.5 w-3.5" />
                </div>
                <span className="hidden lg:inline">905-634-6000</span>
                <span className="lg:hidden">Call</span>
              </Link>
            </div>

            <div>
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#1A2036] to-[#252E4A] text-[#D4AF37] hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#C8A52E] hover:text-[#1A2036] text-sm font-medium px-3.5 lg:px-4.5 py-2 rounded-xl 
                  shadow-sm hover:shadow-md transition-all duration-250 
                  flex items-center gap-1.5 h-10 whitespace-nowrap border border-transparent 
                  hover:scale-105 group relative overflow-hidden
                  focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-250 group-hover:scale-110">
                  <CalendarDaysIcon className="h-3.5 w-3.5" />
                </div>
                <span>Book Online</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl focus:outline-none transition-all duration-200
                bg-white/60 backdrop-blur-sm border border-neutral-100/80 shadow-sm 
                text-[#1A2036] hover:text-[#1A2036] hover:bg-white/80 hover:shadow-md hover:scale-105
                focus:ring-2 focus:ring-[#D4AF37]/30"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              style={{ transform: 'translateZ(0)' }}
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

      {/* Mobile Menu with AnimatePresence for smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            id="mobile-menu"
            className="md:hidden fixed left-0 right-0 max-h-[calc(100vh-var(--header-height,60px))] overflow-y-auto bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-100"
            style={{ 
              position: 'fixed', 
              top: 'var(--header-height, 70px)', 
              zIndex: 99
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {/* Home with dropdown toggle for sections */}
              <div className="mb-2">
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className={`flex justify-between items-center px-4 py-3.5 rounded-xl text-base font-medium 
                    hover:bg-white/80 transition-all duration-200 cursor-pointer 
                    ${pathname === '/' 
                      ? 'text-[#1A2036] font-semibold bg-white/80 border-l-2 border-[#D4AF37]' 
                      : 'text-[#1A2036] hover:text-[#1A2036]'}`}
                  onClick={() => setMobileHomeSectionsOpen(!mobileHomeSectionsOpen)}
                >
                  <div className="flex items-center">
                    <span>Home</span>
                  </div>
                  <ChevronDownIcon 
                    className={`h-5 w-5 transition-transform duration-250 ${mobileHomeSectionsOpen ? 'rotate-180' : ''}`} 
                  />
                </motion.div>
                
                {/* Collapsible home sections with animation */}
                <AnimatePresence>
                  {mobileHomeSectionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                      className="pl-4 ml-4 border-l border-neutral-100 mt-1 mb-2 overflow-hidden"
                    >
                      <Link
                        href="/"
                        onClick={(e) => handleNavClick(e, "/")}
                        className="flex items-center px-4 py-3 rounded-xl text-[#1A2036] hover:bg-white/80 text-sm font-medium"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1A2036] mr-2.5">
                          <HomeIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
                        </div> Home Page
                      </Link>
                      {homeSections.map((section) => (
                        <Link
                          key={section.name}
                          href={section.href}
                          onClick={(e) => handleNavClick(e, section.href)}
                          className="flex items-center px-4 py-3 rounded-xl text-[#1A2036] hover:bg-white/80 text-sm font-medium"
                        >
                          <span className="mr-2.5">{section.icon}</span> {section.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Other main nav items without Home */}
              {mainNavItems.filter(item => item.name !== 'Home').map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center px-4 py-4 rounded-xl text-base font-medium 
                      hover:bg-white/80 active:bg-white/80 transition-all duration-200
                      ${isCurrentPath(item.href) 
                        ? 'text-[#1A2036] font-semibold bg-white/80 border-l-2 border-[#D4AF37]' 
                        : 'text-[#1A2036] hover:text-[#1A2036]'}`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3 mt-5 py-3 px-4">
              <Link
                href="tel:+19056346000"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-3.5 bg-white text-[#1A2036] rounded-xl text-base font-medium border border-neutral-100 hover:border-neutral-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 group"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1A2036] to-[#252E4A] group-hover:scale-110 transition-transform">
                  <PhoneIcon className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <span>Call Now</span>
              </Link>
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-3.5 bg-gradient-to-br from-[#1A2036] to-[#252E4A] text-[#D4AF37] rounded-xl text-base font-medium border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 group"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 group-hover:scale-110 transition-transform">
                  <CalendarDaysIcon className="h-4 w-4" />
                </div>
                <span>Book</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default React.memo(Header);