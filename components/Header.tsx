"use client";

import React, { useState, useEffect, forwardRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
// import { Menu, X, Phone, Calendar } from 'lucide-react';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'; // Using outline for header icons

import { conditionCategories } from '@/lib/conditions-data';

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
import SearchModal from './SearchModal';

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [conditionsExpanded, setConditionsExpanded] = useState(false);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
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

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (searchModalOpen) setSearchModalOpen(false);
      }
      // Add CMD+K or CTRL+K for search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [mobileMenuOpen, searchModalOpen]);

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
    { name: 'Treatments', href: '/treatments' },
    { name: 'Conditions', href: '/conditions' },
    { name: 'FAQ', href: '/faq' },
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
    borderBottom: 'none',
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
      <div 
        className={`relative w-full transition-all duration-[400ms] border-0 outline-none`} 
        style={{ 
          background: 'linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(23, 37, 84) 50%, rgb(15, 23, 42) 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 25s ease-in-out infinite',
          boxShadow: '0 1px 0 rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)',
          borderTop: '1px solid rgba(212, 175, 55, 0.08)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden' as const,
          willChange: 'transform, background-position'
        }}
      >
      
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="flex items-center gap-1">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <Image
                    src="/images/kinetikare-logo-without-text.png"
                    alt="KinetiKare physiotherapy logo Burlington Waterdown Kareem Hassanein"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain transition-all duration-[400ms] ease-out group-hover:scale-110"
                    style={{
                      filter: 'contrast(1.2) saturate(1.3) brightness(1.1) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 8px rgba(212, 175, 55, 0.2))',
                      imageRendering: 'crisp-edges',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                  {/* Enhanced glow effect with pulse */}
                  <div className="absolute inset-0 w-10 h-10 bg-[#D4AF37]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-out"
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}></div>
                </div>
                <div className="flex items-center">
                  <span className="text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-white font-extralight tracking-[0.12em] leading-none uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.12em' }}>Kineti</span>
                  <span className="text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#D4AF37] font-bold leading-none uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>K</span>
                  <span className="text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-white font-extralight tracking-[0.12em] leading-none uppercase" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.12em' }}>are</span>
                </div>
              </div>
              <div className="hidden lg:block w-px h-5 bg-[#D4AF37]/30 mx-3"></div>
              <div className="hidden lg:flex flex-col justify-center">
                <div className="text-xs xl:text-sm text-white/80 font-medium leading-tight">
                  Kareem Hassanein Physiotherapy
                </div>
              </div>
          </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1 lg:gap-2 xl:gap-4 2xl:gap-6 flex-1 justify-center px-2 xl:px-4">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group/nav">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-xs lg:text-sm xl:text-base font-medium transition-all duration-[400ms] ease-out py-2 group whitespace-nowrap outline-none
                      ${isCurrentPath(item.href)
                        ? '!text-[#D4AF37] font-normal hover:!text-[#E6C157]'
                        : '!text-white hover:!text-[#D4AF37]'}`}
                    style={{
                      letterSpacing: '0.08em',
                      fontVariantLigatures: 'common-ligatures',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      transform: 'translateZ(0)',
                      willChange: 'transform, color'
                    }}
                  >
                    {item.name}

                    {/* Underline indicator with glow */}
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 transform origin-left transition-all duration-[400ms] ease-out
                      ${isCurrentPath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                      style={{
                        background: 'linear-gradient(90deg, #D4AF37, #E6C157, #D4AF37)',
                        filter: 'drop-shadow(0 0 3px rgba(212, 175, 55, 0.4))'
                      }}>
                    </span>

                    {/* Hover backdrop glow */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05), transparent)',
                        filter: 'blur(8px)'
                      }}></span>
                  </Link>

                  {/* Conditions Dropdown Menu */}
                  {item.name === 'Conditions' && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 ease-out z-50">
                      <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg shadow-xl overflow-visible border border-gray-200/50" style={{ minWidth: '240px', backdropFilter: 'blur(10px)' }}>
                        {conditionCategories.map((category) => (
                          <div key={category.slug} className="relative group">
                            {/* Category - triggers submenu on hover */}
                            <div className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-white/70 hover:text-[#B08D57] transition-all duration-150 cursor-pointer border-b border-gray-200/30 last:border-b-0">
                              <span className="font-medium">{category.title}</span>
                              <ChevronRightIcon className="h-3.5 w-3.5 text-gray-400" />
                            </div>

                            {/* Submenu - appears on hover */}
                            <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg shadow-xl border border-gray-200/50 overflow-hidden" style={{ minWidth: '220px', maxHeight: '400px', backdropFilter: 'blur(10px)' }}>
                                <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
                                  {category.conditions.map((condition) => (
                                    <Link
                                      key={condition.slug}
                                      href={`/conditions/${condition.slug}`}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/70 hover:text-[#B08D57] transition-all duration-150 border-b border-gray-200/20 last:border-b-0"
                                    >
                                      {condition.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
              <Link
                href="tel:+19056346000"
                className="hidden lg:flex items-center text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                <PhoneIcon className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline">905-634-6000</span>
              </Link>

              {/* Search Button - Desktop Only */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="hidden sm:block p-2.5 bg-white/10 hover:bg-white/20 text-white hover:text-[#D4AF37] rounded-lg transition-all duration-300 border border-white/20"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              {/* Phone icon for smaller screens */}
              <Link
                href="tel:+19056346000"
                className="sm:hidden p-2 bg-white/10 hover:bg-white/20 text-white hover:text-[#D4AF37] rounded-lg transition-all duration-300 border border-white/20"
              >
                <PhoneIcon className="h-4 w-4" />
              </Link>

              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-[#D4AF37] text-white text-xs lg:text-sm font-medium px-2 sm:px-3 lg:px-4 xl:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-1 lg:gap-2 whitespace-nowrap shadow-lg group"
                style={{
                  letterSpacing: '0.08em',
                  transform: 'translateZ(0)',
                  animation: 'breathe 3s ease-in-out infinite',
                  willChange: 'transform'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <CalendarDaysIcon className="h-3.5 lg:h-4 w-3.5 lg:w-4 relative z-10" />
                <span className="hidden sm:inline relative z-10">Book Appointment</span>
                <span className="sm:hidden relative z-10">Book</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors duration-300"
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

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-[#D4AF37]/30 max-h-[70vh] overflow-y-auto"
        >
            <div className="px-6 py-4 space-y-1 touch-auto">
              {/* Search Button for Mobile */}
              <button
                onClick={() => {
                  setSearchModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-300 outline-none !text-white hover:bg-white/5 hover:!text-[#D4AF37]"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                Search
              </button>
              
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  {item.name === 'Conditions' ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`flex-1 px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-300 outline-none
                            ${isCurrentPath(item.href)
                              ? '!text-[#D4AF37] bg-[#D4AF37]/10 font-normal hover:!text-[#F5D63D] hover:bg-[#D4AF37]/15'
                              : '!text-white hover:bg-white/5 hover:!text-[#D4AF37]'}`}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => {
                            setConditionsExpanded(!conditionsExpanded);
                            setExpandedRegion(null);
                          }}
                          className={`px-3 py-3 rounded-lg transition-all duration-300 outline-none
                            ${conditionsExpanded ? '!text-[#D4AF37]' : '!text-white/60 hover:!text-white'}`}
                        >
                          <ChevronRightIcon className={`h-4 w-4 transition-transform duration-200 ${conditionsExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      </div>

                      {conditionsExpanded && (
                        <div className="pl-4 space-y-1 mt-1">
                          {conditionCategories.map((category, categoryIndex) => (
                            <div key={category.slug}>
                              <div className="flex items-center gap-1">
                                <Link
                                  href={`/conditions?tab=${categoryIndex}`}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setConditionsExpanded(false);
                                    setExpandedRegion(null);
                                  }}
                                  className="flex-1 px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                                >
                                  {category.title}
                                </Link>
                                <button
                                  onClick={() => setExpandedRegion(expandedRegion === category.slug ? null : category.slug)}
                                  className="px-2 py-2 rounded transition-all duration-200 outline-none"
                                >
                                  <ChevronRightIcon className={`h-3 w-3 transition-transform duration-200 ${expandedRegion === category.slug ? 'rotate-90 !text-[#D4AF37]' : '!text-white/60 hover:!text-white'}`} />
                                </button>
                              </div>

                              {expandedRegion === category.slug && (
                                <div className="pl-3 space-y-0.5 mt-0.5">
                                  {category.conditions.map((condition) => (
                                    <Link
                                      key={condition.slug}
                                      href={`/conditions/${condition.slug}`}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setConditionsExpanded(false);
                                        setExpandedRegion(null);
                                      }}
                                      className="block px-3 py-1.5 rounded text-xs text-white/70 hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-200"
                                    >
                                      {condition.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-300 flex items-center gap-2 outline-none
                        ${isCurrentPath(item.href)
                          ? '!text-[#D4AF37] bg-[#D4AF37]/10 font-normal hover:!text-[#F5D63D] hover:bg-[#D4AF37]/15'
                          : '!text-white hover:bg-white/5 hover:!text-[#D4AF37]'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="px-6 pb-4 border-t border-white/10 pt-4">
              <div className="flex gap-3">
              <Link
                href="tel:+19056346000"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 text-white rounded-lg font-normal tracking-wide border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call
              </Link>
                
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#D4AF37] hover:bg-[#B08D57] text-slate-900 hover:text-white rounded-lg font-medium tracking-wide shadow-lg transition-all duration-300"
              >
                  <CalendarDaysIcon className="h-5 w-5" />
                  Book Appointment
                </Link>
                </div>
            </div>
          </motion.div>
      )}
      </AnimatePresence>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </header>
  );
});

export default React.memo(Header);