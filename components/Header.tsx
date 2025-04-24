"use client";

import React, { useState, useEffect, forwardRef } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  // Close mobile menu when the window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Define the main navigation items and home sections
  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Define sections that exist on the home page
  const homeSections = [
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
  ];

  // Simplified animation variants to prevent flash
  const navItemVariants = {
    visible: {
      opacity: 1,
      y: 0
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
    setHomeSectionsOpen(false);
    setMobileHomeSectionsOpen(false);
    
    // Call onNavLinkClick if provided (for the parent component to react)
    if (onNavLinkClick) {
      onNavLinkClick(href);
    }
  };

  // Determine if current location matches the nav item
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
    <header
      ref={ref}
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
        if (!homeSectionsOpen) {
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
          <Link href="/" className="flex items-center z-10 group">
            <div className="font-heading font-bold text-base xs:text-xl md:text-2xl flex items-center relative">
              <span className="text-primary-700 group-hover:text-primary-800 transition-colors duration-500">KH</span>
              <span className="text-accent group-hover:text-accent-dark transition-colors duration-500 ml-1">Physiotherapy</span>
              
              {/* Enhanced animated underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500/80 via-accent/80 to-primary-500/80 w-0 group-hover:w-full transition-all duration-500"></span>
            </div>
          </Link>

          {/* Desktop Navigation - with dropdown for home sections */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-0.5 lg:space-x-2 bg-white/30 backdrop-blur-sm rounded-full px-1 py-1 border border-white/50 shadow-sm">
              {/* Main navigation items */}
              {mainNavItems.map((item, i) => (
                <div 
                  key={item.name}
                  className="flex items-center"
                  onMouseEnter={() => {
                    setActiveItem(item.name);
                    // Close home sections dropdown when hovering other items
                    if (item.name !== 'Home' && homeSectionsOpen) {
                      setHomeSectionsOpen(false);
                    }
                  }}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {item.name === 'Home' ? (
                    <div className="relative">
                      <div 
                        className={`relative px-2 lg:px-4 py-2 rounded-full transition-all duration-300 
                          text-sm lg:text-base font-medium cursor-pointer flex items-center gap-1
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold' 
                            : 'text-primary-700 hover:text-accent-500'}`}
                        onClick={() => setHomeSectionsOpen(!homeSectionsOpen)}
                        onMouseEnter={() => setHomeSectionsOpen(true)}
                      >
                        <span className="relative z-10">Explore</span>
                        <ChevronDownIcon 
                          className={`h-4 w-4 transition-transform duration-300 ${homeSectionsOpen ? 'rotate-180' : ''}`} 
                        />
                        
                        {/* Animated background on hover and active states */}
                        {(isCurrentPath(item.href) || activeItem === item.name || homeSectionsOpen) && (
                          <span className="absolute inset-0 bg-accent/10 rounded-full -z-0"></span>
                        )}
                      </div>
                      
                      {/* Dropdown for Home Sections */}
                      {homeSectionsOpen && (
                        <div 
                          className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 min-w-[180px] z-50"
                          onMouseLeave={() => setHomeSectionsOpen(false)}
                        >
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
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-2 lg:px-4 py-2 rounded-full transition-all duration-300 
                          text-sm lg:text-base font-medium 
                          ${isCurrentPath(item.href) 
                            ? 'text-accent-600 font-semibold' 
                            : 'text-primary-700 hover:text-accent-500'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Animated background on hover and active states */}
                      {(isCurrentPath(item.href) || activeItem === item.name) && (
                        <span className="absolute inset-0 bg-accent/10 rounded-full -z-0"></span>
                      )}
                      
                      {/* Underline indicator for current page */}
                      {isCurrentPath(item.href) && (
                        <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full"></span>
                      )}
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
            </div>

            <div>
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
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
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - reorganized with collapsible sections */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden"
        >
          <div 
            className="backdrop-blur-xl bg-white/95 shadow-lg border-b border-neutral-200/30 px-4 py-3"
          >
            <div className="space-y-1">
              {/* Home with dropdown toggle for sections */}
              <div className="mb-2">
                <div
                  className={`flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium 
                    hover:bg-accent/10 transition-all duration-200 cursor-pointer 
                    ${pathname === '/' 
                      ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                      : 'text-primary-700 hover:text-accent-500'}`}
                  onClick={() => setMobileHomeSectionsOpen(!mobileHomeSectionsOpen)}
                >
                  <div className="flex items-center">
                    <span>Home & Sections</span>
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
                      className="flex items-center px-4 py-2.5 rounded-lg text-primary-700 hover:bg-accent/10 hover:text-accent-500 text-sm font-medium"
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
                        className="flex items-center px-4 py-2.5 rounded-lg text-primary-700 hover:bg-accent/10 hover:text-accent-500 text-sm font-medium"
                      >
                        <span className="mr-2">{section.icon}</span> {section.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Other main nav items without Home */}
              {mainNavItems.filter(item => item.name !== 'Home').map((item, i) => (
                <div
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium 
                      hover:bg-accent/10 transition-all duration-200
                      ${isCurrentPath(item.href) 
                        ? 'text-accent-600 font-semibold bg-accent/5 border-l-2 border-accent' 
                        : 'text-primary-700 hover:text-accent-500'}`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            
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
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
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
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;