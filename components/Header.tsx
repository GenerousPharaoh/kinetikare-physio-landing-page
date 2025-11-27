"use client";

import React, { useState, useEffect, forwardRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { conditionCategories } from '@/lib/conditions-data';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SearchModal from './SearchModal';

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [conditionsExpanded, setConditionsExpanded] = useState(false);
  const pathname = usePathname();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Optimized scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Handle animation state
  useEffect(() => {
    if (pathname === '/' && !scrolled && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setHasAnimated(true);
    }
  }, [pathname, scrolled, hasAnimated]);

  const mainNavItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Conditions', href: '/conditions' },
    { name: 'FAQ', href: '/faq' },
  ], []);

  const isCurrentPath = useCallback((href: string) => {
    if (href === pathname) return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  }, [pathname]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    if (onNavLinkClick) onNavLinkClick('');
  };

  // Animation Variants
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5 // Start slightly after hero swipe begins
      }
    }
  };

  const headerItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Only animate on homepage, when at the top, and if we haven't animated yet
  const shouldAnimate = pathname === '/' && !scrolled && !hasAnimated;

  return (
    <>
      <header
        ref={ref}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out border-b ${scrolled || pathname !== '/'
          ? '!bg-[#020617]/90 backdrop-blur-xl border-white/10 py-3 shadow-lg'
          : '!bg-transparent border-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex items-center justify-between"
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
            variants={headerContainerVariants}
          >

            {/* Logo Section */}
            <motion.div variants={headerItemVariants}>
              <Link href="/" className="flex items-center gap-3 group relative z-50">
                <div className="relative w-10 h-10 lg:w-11 lg:h-11 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/kinetikare-logo-without-text.webp"
                    alt="KinetiKare Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center tracking-[0.15em] leading-none">
                    <span className="text-lg lg:text-xl font-light !text-white">KINETI</span>
                    <span className="text-lg lg:text-xl font-bold text-[#D4AF37]">K</span>
                    <span className="text-lg lg:text-xl font-light !text-white">ARE</span>
                  </div>
                  <span className="text-[10px] !text-white/60 tracking-[0.2em] uppercase mt-0.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                    Physiotherapy
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {mainNavItems.map((item) => (
                <motion.div key={item.name} className="relative group/nav" variants={headerItemVariants}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${isCurrentPath(item.href)
                      ? '!text-[#D4AF37] bg-white/10 shadow-[0_0_10px_rgba(212,175,55,0.1)]'
                      : '!text-white/80 hover:!text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </Link>

                  {/* Conditions Dropdown - Premium Glassmorphism */}
                  {item.name === 'Conditions' && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 ease-out">
                      <div className="w-[600px] bg-[#020617]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 grid grid-cols-2 gap-x-8 gap-y-4">
                        {conditionCategories.map((category) => (
                          <div key={category.slug} className="group/category">
                            <div className="flex items-center justify-between py-2 border-b border-white/5 group-hover/category:border-[#D4AF37]/30 transition-colors">
                              <span className="text-[#D4AF37] font-medium text-sm tracking-wide">{category.title}</span>
                            </div>
                            <div className="mt-2 space-y-1">
                              {category.conditions.slice(0, 4).map((condition) => (
                                <Link
                                  key={condition.slug}
                                  href={`/conditions/${condition.slug}`}
                                  className="block text-xs text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 py-1"
                                >
                                  {condition.name}
                                </Link>
                              ))}
                              {category.conditions.length > 4 && (
                                <Link
                                  href={`/conditions?tab=${conditionCategories.indexOf(category)}`}
                                  className="block text-[10px] text-[#D4AF37]/70 hover:text-[#D4AF37] uppercase tracking-wider font-bold pt-1"
                                >
                                  View All ({category.conditions.length})
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Search */}
              <motion.div variants={headerItemVariants}>
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 !text-white/70 hover:!text-[#D4AF37] transition-all duration-300 border border-white/5 hover:border-[#D4AF37]/30"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </motion.div>

              {/* Phone */}
              <motion.div variants={headerItemVariants}>
                <Link
                  href="tel:+19056346000"
                  className="hidden xl:flex items-center gap-2 !text-white/70 hover:!text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:!text-slate-900 transition-all duration-300">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">905-634-6000</span>
                </Link>
              </motion.div>

              {/* Book Now Button - Premium Redesign */}
              <motion.div variants={headerItemVariants}>
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="hidden sm:flex group relative px-6 py-2.5 bg-[#D4AF37] overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <span className="relative flex items-center gap-2 text-slate-900 font-bold text-xs tracking-[0.1em] uppercase">
                    <CalendarDaysIcon className="w-4 h-4" />
                    Book Now
                  </span>
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                variants={headerItemVariants}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center !text-white hover:!text-[#D4AF37] transition-colors"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-7 h-7" />
                ) : (
                  <Bars3Icon className="w-7 h-7" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#020617] border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-24 space-y-6">
                {/* Mobile Search */}
                <button
                  onClick={() => {
                    setSearchModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 !text-white/70 hover:!text-white hover:bg-white/10 transition-all border border-white/5"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Search...</span>
                </button>

                {/* Mobile Nav Links */}
                <nav className="space-y-2">
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      {item.name === 'Conditions' ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => setConditionsExpanded(!conditionsExpanded)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isCurrentPath(item.href)
                              ? 'bg-[#D4AF37]/10 !text-[#D4AF37]'
                              : '!text-white/80 hover:bg-white/5 hover:!text-white'
                              }`}
                          >
                            <span className="font-medium tracking-wide">{item.name}</span>
                            <ChevronRightIcon className={`w-4 h-4 transition-transform duration-300 ${conditionsExpanded ? 'rotate-90' : ''}`} />
                          </button>

                          <AnimatePresence>
                            {conditionsExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-1 border-l border-white/10 ml-4 my-2">
                                  {conditionCategories.map((category, idx) => (
                                    <Link
                                      key={category.slug}
                                      href={`/conditions?tab=${idx}`}
                                      onClick={handleNavClick}
                                      className="block px-4 py-2 text-sm !text-white/60 hover:!text-[#D4AF37] transition-colors"
                                    >
                                      {category.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleNavClick}
                          className={`block px-4 py-3 rounded-xl font-medium tracking-wide transition-all ${isCurrentPath(item.href)
                            ? 'bg-[#D4AF37]/10 !text-[#D4AF37]'
                            : '!text-white/80 hover:bg-white/5 hover:!text-white'
                            }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <Link
                    href="tel:+19056346000"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 !text-white hover:bg-white/5 transition-all"
                  >
                    <PhoneIcon className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-medium">905-634-6000</span>
                  </Link>
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D4AF37] text-slate-900 font-bold tracking-wide hover:bg-[#C9A227] transition-all shadow-lg"
                  >
                    <CalendarDaysIcon className="w-5 h-5" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
});

export default React.memo(Header);