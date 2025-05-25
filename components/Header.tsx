"use client";

import React, { useState, useEffect, forwardRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
// import { Menu, X, Phone, Calendar } from 'lucide-react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon, 
  CalendarDaysIcon
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
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [mobileMenuOpen]);

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
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ], []);

  // Define sections that exist on the home page with useMemo
  const homeSections = useMemo(() => [
    // Removed since About is now in main nav
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

  return (
    <header
      ref={ref}
      className={`fixed w-full top-0 transition-all duration-300 ease-in-out z-50`}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'transform, background-color, box-shadow',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!mobileMenuOpen) {
          setIsOpen(false);
        }
      }}
    >
      {/* Single Unified Navigation Bar */}
      <div className={`relative w-full bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 backdrop-blur-xl shadow-2xl transition-all duration-300 ${scrolled ? 'shadow-3xl' : ''}`}>
        
        {/* Premium golden accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center">
                  <Image
                    src="/images/kinetikare-logo-without-text.png"
                    alt="KinetiKare Logo"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      filter: 'contrast(1.2) saturate(1.3) brightness(1.1) drop-shadow(0 1px 3px rgba(255, 255, 255, 0.1))',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-7 h-7 bg-white/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center">
                  <span className="font-serif text-xl xl:text-2xl text-white tracking-wide font-light">Kineti</span>
                  <span className="font-serif text-xl xl:text-2xl text-white/90 tracking-wide font-semibold">K</span>
                  <span className="font-serif text-xl xl:text-2xl text-white tracking-wide font-light">are</span>
                </div>
              </div>
              <div className="hidden lg:block w-px h-5 bg-white/20 mx-3"></div>
              <div className="hidden lg:flex flex-col justify-center" style={{ marginTop: '2px' }}>
                <div className="text-xs xl:text-sm text-white/70 font-medium leading-tight">
                  Kareem Hassanein Physiotherapy
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-shrink-0">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 py-2 group whitespace-nowrap
                    ${isCurrentPath(item.href) 
                      ? 'text-amber-400 font-semibold' 
                      : 'text-white hover:text-amber-300'}`}
                >
                  {item.name}
                  
                  {/* Underline indicator */}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 transform origin-left transition-all duration-300
                    ${isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
              <Link
                href="tel:+19056346000"
                className="hidden lg:flex items-center text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                <PhoneIcon className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline">905-634-6000</span>
              </Link>

              {/* Phone icon for smaller screens */}
              <Link
                href="tel:+19056346000"
                className="lg:hidden p-2.5 bg-white/10 hover:bg-white/20 text-white hover:text-amber-300 rounded-lg transition-all duration-300 border border-white/20"
              >
                <PhoneIcon className="h-4 w-4" />
              </Link>

              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold tracking-wide px-3 xl:px-5 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                <CalendarDaysIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 text-white hover:text-amber-300 transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-amber-400/30"
        >
            <div className="px-6 py-4 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-300
                    ${isCurrentPath(item.href) 
                      ? 'text-amber-400 bg-amber-400/10 font-semibold' 
                      : 'text-white hover:bg-white/5 hover:text-amber-300'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="px-6 pb-4 border-t border-white/10 pt-4">
              <div className="flex gap-3">
                <Link
                  href="tel:+19056346000"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 text-white rounded-lg font-semibold tracking-wide border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call
                </Link>
                
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500 text-slate-900 rounded-lg font-semibold tracking-wide shadow-lg"
                >
                  <CalendarDaysIcon className="h-5 w-5" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
});

export default React.memo(Header);