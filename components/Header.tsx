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
    right: 0,
    zIndex: 99999
  }), [scrolled]);

  // Prevent unnecessary re-renders with useMemo for dropdown elements
  const renderHomeDropdown = useMemo(() => {
    if (!homeSectionsOpen) return null;
    
    return (
      <div 
        className="fixed top-auto left-auto mt-0 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 min-w-[180px] dropdown-menu"
        style={{ 
          position: 'absolute',
          top: 'calc(100% - 5px)',
          left: '0',
          zIndex: 100000, // Increased z-index to be higher than header
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          paddingTop: '10px' // Add extra padding at top to create overlap
        }}
      >
        {/* Invisible overlay to prevent gaps between trigger and dropdown */}
        <div 
          className="absolute -top-5 left-0 right-0 h-5" 
          style={{ background: 'transparent' }}
        ></div>
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center px-4 py-2 text-sm text-primary-700 hover:bg-accent/10 hover:text-accent-700"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 mr-2">
            <HomeIcon className="h-3 w-3 text-white" />
          </div> Home
        </Link>
        <div className="h-px bg-neutral-200 my-1 mx-3"></div>
        {homeSections.map((section) => (
          <Link
            key={section.name}
            href={section.href}
            onClick={(e) => handleNavClick(e, section.href)}
            className="flex items-center px-4 py-2 text-sm text-primary-700 hover:bg-accent/10 hover:text-accent-700"
          >
            <span className="mr-2">{section.icon}</span> {section.name}
          </Link>
        ))}
      </div>
    );
  }, [homeSectionsOpen, homeSections, handleNavClick]);

  return (
    <header
      ref={ref}
      className={`fixed w-full top-0 z-[100000] transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'shadow-modern-medium py-1 xs:py-2' 
          : 'py-2 xs:py-3'}
        ${getHeaderOpacity()} backdrop-blur-lg`}
      style={{
        ...headerStyle,
        zIndex: 100000 // Ensure consistent z-index
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!mobileMenuOpen) {
          setHomeSectionsOpen(false);
        }
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
          <Link href="/" className="flex items-center group">
            <div className="font-heading font-bold text-base xs:text-xl md:text-2xl flex items-center relative">
              <span className="text-primary-700 group-hover:text-primary-800 transition-colors duration-500 tracking-tight">KH</span>
              <span className="mx-1 text-neutral-300">|</span>
              <span className="text-accent group-hover:text-accent-dark transition-colors duration-500 tracking-wide font-medium">Physiotherapy</span>
              
              {/* Enhanced animated underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500/80 via-accent/80 to-primary-500/80 w-0 group-hover:w-full transition-all duration-500"></span>
            </div>
          </Link>

          {/* Desktop Navigation - with dropdown for home sections */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 lg:space-x-2 bg-white/30 backdrop-blur-sm rounded-xl px-1.5 py-1.5 border border-white/50 shadow-modern-subtle">
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
                        className={`relative px-3 lg:px-4 py-2.5 rounded-xl transition-all duration-300 
                          text-sm lg:text-base font-medium cursor-pointer flex items-center gap-1.5 group
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold' 
                            : 'text-primary-700 hover:text-accent-600'}`}
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
                          className={`h-4 w-4 transition-transform duration-300 ${homeSectionsOpen ? 'rotate-180' : ''}`} 
                        />
                        
                        {/* Animated background on hover and active states */}
                        {(isCurrentPath(item.href) || activeItem === item.name || homeSectionsOpen) && (
                          <span className="absolute inset-0 bg-accent/10 rounded-xl -z-0"></span>
                        )}
                        
                        {/* Improved underline indicator with animation */}
                        <span className={`absolute bottom-1 left-0 right-0 h-0.5 mx-3 bg-accent rounded-full 
                          transform origin-left transition-all duration-300 ease-out 
                          ${homeSectionsOpen || isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                        </span>
                      </div>
                      
                      {/* Dropdown for Home Sections - Only render when open */}
                      {renderHomeDropdown}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-3 lg:px-4 py-2.5 rounded-xl transition-all duration-300 
                          text-sm lg:text-base font-medium cursor-pointer flex items-center gap-1.5 group
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold' 
                            : 'text-primary-700 hover:text-accent-600'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Animated background on hover and active states */}
                      {(isCurrentPath(item.href) || activeItem === item.name) && (
                        <span className="absolute inset-0 bg-accent/10 rounded-xl -z-0"></span>
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
          <div className="hidden md:flex items-center gap-3 lg:gap-4 h-12">
            <div>
              <Link
                href="tel:+19056346000"
                className="flex items-center text-sm font-medium transition-all duration-300 py-2 px-3 lg:px-4 
                  rounded-xl hover:scale-105 h-10 whitespace-nowrap
                  text-primary-700 hover:text-primary-800 bg-transparent border border-primary-300 hover:shadow-modern-subtle
                  hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/30"
                aria-label="Call Now"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full text-primary-700 mr-2">
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
                className="bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-medium px-3 lg:px-4 py-2 rounded-xl 
                  shadow-modern-subtle hover:shadow-modern-medium transition-all duration-300 
                  flex items-center gap-1.5 h-10 whitespace-nowrap border border-accent/50 
                  hover:scale-105 hover:brightness-105 group relative overflow-hidden
                  focus:outline-none focus:ring-2 focus:ring-accent/30"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
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
                bg-white/50 backdrop-blur-sm border border-neutral-200 shadow-modern-subtle 
                text-primary-700 hover:text-accent hover:bg-white/80 hover:shadow-modern-medium
                focus:ring-2 focus:ring-accent/30"
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

      {/* Mobile Menu - Only render when open */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed left-0 right-0 z-[99990] max-h-[calc(100vh-var(--header-height,60px))] overflow-y-auto"
          style={{ 
            position: 'fixed', 
            top: 'var(--header-height, 70px)', 
            zIndex: 99990
          }}
        >
          <div 
            className="backdrop-blur-xl bg-white/98 shadow-modern-medium border-b border-neutral-200/30 px-4 py-3"
          >
            <div className="space-y-1">
              {/* Home with dropdown toggle for sections */}
              <div className="mb-2">
                <div
                  className={`flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium 
                    hover:bg-accent/10 transition-all duration-200 cursor-pointer 
                    ${pathname === '/' 
                      ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                      : 'text-primary-700 hover:text-accent-600'}`}
                  onClick={() => setMobileHomeSectionsOpen(!mobileHomeSectionsOpen)}
                >
                  <div className="flex items-center">
                    <span>Home</span>
                  </div>
                  <ChevronDownIcon 
                    className={`h-5 w-5 transition-transform duration-300 ${mobileHomeSectionsOpen ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                {/* Collapsible home sections */}
                {mobileHomeSectionsOpen && (
                  <div
                    className="pl-4 ml-4 border-l border-neutral-200 mt-1 mb-2"
                  >
                    <Link
                      href="/"
                      onClick={(e) => handleNavClick(e, "/")}
                      className="flex items-center px-4 py-2.5 rounded-xl text-primary-700 hover:bg-accent/10 hover:text-accent-600 text-sm font-medium"
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 mr-2">
                        <HomeIcon className="h-3 w-3 text-white" />
                      </div> Home Page
                    </Link>
                    {homeSections.map((section) => (
                      <Link
                        key={section.name}
                        href={section.href}
                        onClick={(e) => handleNavClick(e, section.href)}
                        className="flex items-center px-4 py-2.5 rounded-xl text-primary-700 hover:bg-accent/10 hover:text-accent-600 text-sm font-medium"
                      >
                        <span className="mr-2">{section.icon}</span> {section.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Other main nav items without Home */}
              {mainNavItems.filter(item => item.name !== 'Home').map((item) => (
                <div
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center px-4 py-4 rounded-xl text-base font-medium 
                      hover:bg-accent/10 active:bg-accent/20 transition-all duration-200
                      ${isCurrentPath(item.href) 
                        ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                        : 'text-primary-700 hover:text-accent-600'}`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3 mt-5 py-2">
              <Link
                href="tel:+19056346000"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-white text-primary-700 rounded-xl text-base font-medium border border-neutral-200 hover:border-accent/30 hover:shadow-modern-subtle transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle header-badge bg-primary-50">
                  <PhoneIcon className="h-4 w-4 text-primary-700" />
                </div>
                <span>Call Now</span>
              </Link>
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl text-base font-medium border border-accent/50 shadow-modern-subtle hover:shadow-modern-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle header-badge bg-white/20">
                  <CalendarDaysIcon className="h-4 w-4" />
                </div>
                <span>Book</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

export default React.memo(Header);