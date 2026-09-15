'use client';

import React, { useState, useEffect, useRef, forwardRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { conditionNav } from '@/lib/condition-nav';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL, JANE_INTAKE_BOOKING_URL } from '@/lib/booking';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useModalDialog } from '@/hooks/useModalDialog';

const loadSearchModal = () => import('./SearchModal');
const SearchModal = dynamic(loadSearchModal, {
  ssr: false,
  loading: () => null,
});

interface HeaderProps {
  onNavLinkClick?: (href: string) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ onNavLinkClick }, ref) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [conditionsExpanded, setConditionsExpanded] = useState(false);
  const [conditionsMenuOpen, setConditionsMenuOpen] = useState(false);
  const conditionsToggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isIntakePage = pathname === BOOKING_PAGE_PATH;
  // Always route the header Book button straight to Jane. The /intake page
  // is reserved for paid traffic landing on it via Google Ads — organic
  // visitors should not be funneled through it.
  // On the ads landing page every booking control carries the same deep link
  // (initial assessment preselected), so the header does not send a paid
  // visitor to a different Jane screen than the page's own buttons.
  const bookingHref = isIntakePage ? JANE_INTAKE_BOOKING_URL : JANE_BOOKING_URL;
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuPanelRef = useRef<HTMLDivElement>(null);

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
      if (window.innerWidth >= 1280 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  useModalDialog(mobileMenuOpen, mobileMenuPanelRef, () => setMobileMenuOpen(false));

  useEffect(() => {
    setMobileMenuOpen(false);
    setConditionsMenuOpen(false);
  }, [pathname]);

  const mainNavItems = useMemo(
    () => [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Treatments', href: '/treatments' },
      { name: 'Conditions', href: '/conditions' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
    []
  );

  const isCurrentPath = useCallback(
    (href: string) => {
      if (href === pathname) return true;
      if (href !== '/' && pathname.startsWith(href)) return true;
      return false;
    },
    [pathname]
  );

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    if (onNavLinkClick) onNavLinkClick('');
  };

  const primeSearchModal = () => {
    void loadSearchModal();
  };

  // Navigation is available at first paint; only the hero carries an entrance.
  const shouldAnimate = false;
  const headerContainerVariants = { visible: { opacity: 1 } };
  const headerItemVariants = { visible: { opacity: 1, x: 0 } };

  // Only transition on scroll, not on pathname changes (prevents flash during navigation)
  const shouldTransition = pathname === '/';

  return (
    <>
      <header
        ref={ref}
        className={`fixed w-full top-0 z-50 border-b ${shouldTransition ? 'transition-all duration-200 ease-in-out' : ''} ${
          scrolled || pathname !== '/' || mobileMenuOpen
            ? `!bg-[#020617]/90 backdrop-blur-xl border-white/10 ${isIntakePage ? 'py-2.5 lg:py-5' : 'py-3 lg:py-6'} shadow-lg`
            : '!bg-transparent border-transparent py-3 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex items-center justify-between"
            initial={shouldAnimate ? 'hidden' : 'visible'}
            animate="visible"
            variants={headerContainerVariants}
          >
            {/* Logo Section */}
            <motion.div variants={headerItemVariants}>
              <Link href="/" className="flex items-center gap-2 group relative z-50">
                <div className="relative w-10 h-10 lg:w-11 lg:h-11 transition-transform duration-500 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/kinetikare-logo-without-text.webp"
                    alt="Kinetikare Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    sizes="44px"
                  />
                </div>
                {/* Text Container - Moved down slightly (mt-1) */}
                <div className="flex flex-row items-center gap-1 mt-1.5 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
                  {/* One literal text node for the name. It used to be Kineti + K + are in
                      three spans, which parsers read as "KinetiKarePhysio" and re-split
                      as "Kinetika Rephysio". */}
                  <span className="text-sm sm:text-lg lg:text-xl font-light !text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] leading-none">
                    Kinetikare
                  </span>
                  {' '}

                  {/* Desktop Separator */}
                  <div className="hidden lg:block h-4 w-[1px] bg-[#D4AF37] mx-3" />

                  <span className="text-xs sm:text-[10px] lg:text-xl !text-white font-light tracking-[0.1em] sm:tracking-[0.15em] uppercase lg:mt-0 group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap">
                    Physio
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation (hidden on the ads landing page to reduce exits) */}
            {!isIntakePage && (
            <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1 2xl:gap-2">
              {mainNavItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative group/nav flex items-center"
                  variants={headerItemVariants}
                  onMouseLeave={item.name === 'Conditions' ? (event) => {
                    if (!event.currentTarget.contains(document.activeElement)) setConditionsMenuOpen(false);
                  } : undefined}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) setConditionsMenuOpen(false);
                  }}
                  onKeyDown={(event) => {
                    if (item.name === 'Conditions' && event.key === 'Escape' && conditionsMenuOpen) {
                      event.preventDefault();
                      setConditionsMenuOpen(false);
                      conditionsToggleRef.current?.focus();
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    prefetch={false}
                    onMouseEnter={item.name === 'Conditions' ? () => setConditionsMenuOpen(true) : undefined}
                    aria-current={isCurrentPath(item.href) ? 'page' : undefined}
                    className={`relative px-3 2xl:px-4 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                      isCurrentPath(item.href)
                        ? '!text-[#D4AF37] bg-white/10 shadow-[0_0_10px_rgba(212,175,55,0.1)]'
                        : '!text-white/80 hover:!text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.name === 'Conditions' && (
                    <button
                      ref={conditionsToggleRef}
                      type="button"
                      aria-label="Show condition categories"
                      aria-expanded={conditionsMenuOpen}
                      aria-controls="desktop-conditions-menu"
                      onClick={() => setConditionsMenuOpen((value) => !value)}
                      className="flex h-11 w-11 items-center justify-center rounded-md text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      <ChevronRightIcon aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${conditionsMenuOpen ? '-rotate-90' : 'rotate-90'}`} />
                    </button>
                  )}
                  {item.name === 'Conditions' && (
                    <div
                      id="desktop-conditions-menu"
                      hidden={!conditionsMenuOpen}
                      onClick={() => setConditionsMenuOpen(false)}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                    >
                      <div className="w-[600px] max-h-[calc(100dvh-7rem)] overflow-y-auto bg-[#020617]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 grid grid-cols-2 gap-x-8 gap-y-4">
                        {conditionNav.map((category, categoryIndex) => (
                          <div key={category.slug} className="group/category">
                            <Link
                              href={`/conditions?tab=${categoryIndex}`}
                              prefetch={false}
                              className="flex items-center justify-between py-2 border-b border-white/5 group-hover/category:border-[#D4AF37]/30 transition-colors hover:!text-white"
                            >
                              <span className="text-[#D4AF37] font-medium text-sm tracking-wide group-hover/category:text-[#F5E6B3] transition-colors">
                                {category.title}
                              </span>
                              <ChevronRightIcon
                                aria-hidden="true"
                                className="w-3.5 h-3.5 text-[#D4AF37]/50 group-hover/category:text-[#D4AF37] group-hover/category:translate-x-0.5 transition-all"
                              />
                            </Link>
                            <div className="mt-2 space-y-1">
                              {category.conditions.slice(0, 4).map((condition) => (
                                <Link
                                  key={condition.slug}
                                  href={`/conditions/${condition.slug}`}
                                  prefetch={false}
                                  className="block text-xs text-white/75 hover:text-white hover:translate-x-1 transition-all duration-200 py-1"
                                >
                                  {condition.name}
                                </Link>
                              ))}
                              {category.conditions.length > 4 && (
                                <Link
                                  href={`/conditions?tab=${conditionNav.indexOf(category)}`}
                                  prefetch={false}
                                  className="block text-[11px] text-[#F5E6B3] hover:text-white uppercase tracking-wider font-bold pt-1"
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
            )}

            {/* Right Actions - Vertically Aligned */}
            <div className="flex items-center gap-4 lg:gap-3 2xl:gap-6 flex-shrink-0 h-11">
              {/* Search */}
              {!isIntakePage ? (
                <motion.div className="hidden sm:block" variants={headerItemVariants}>
                  <button
                    onMouseEnter={primeSearchModal}
                    onFocus={primeSearchModal}
                    onClick={() => {
                      primeSearchModal();
                      setSearchModalOpen(true);
                    }}
                    aria-label="Open search"
                    className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 !text-white/70 hover:!text-[#D4AF37] transition-all duration-300 border border-white/5 hover:border-[#D4AF37]/30"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </motion.div>
              ) : null}

              {/* Phone */}
              <motion.div className="hidden 2xl:block" variants={headerItemVariants}>
                <Link
                  href="tel:+19056346000"
                  className="flex items-center gap-2 !text-white/70 hover:!text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:!text-slate-900 transition-all duration-300">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">905-634-6000</span>
                </Link>
              </motion.div>

              {/* Book Now Button */}
              <motion.div className={isIntakePage ? "block" : "hidden sm:block"} variants={headerItemVariants}>
                <Link
                  href={bookingHref}
                  data-booking-source="header"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className={`${isIntakePage ? 'flex px-4 py-2 sm:px-6 sm:py-2.5' : 'hidden sm:flex px-6 py-2.5'} group relative bg-[#D4AF37] overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <span className="relative flex items-center gap-2 text-slate-900 font-bold text-xs tracking-[0.1em] uppercase">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {isIntakePage ? (
                      <>
                        <span className="sm:hidden">Book</span>
                        <span className="hidden sm:inline">Book Assessment</span>
                      </>
                    ) : (
                      'Book Now'
                    )}
                  </span>
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle (hidden on the ads landing page) */}
              {!isIntakePage && (
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden relative z-50 w-11 h-11 flex items-center justify-center !text-white hover:!text-[#D4AF37] transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-panel"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-7 h-7" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-7 h-7" aria-hidden="true" />
                )}
              </button>
              )}
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
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[75] xl:hidden"
              data-dialog-backdrop
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              ref={mobileMenuPanelRef}
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              tabIndex={-1}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[min(22rem,100%)] bg-[#020617] border-l border-white/10 z-[80] xl:hidden overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="absolute right-4 top-3 flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="p-6 pt-20 space-y-6">
                {/* Mobile Search */}
                {!isIntakePage ? (
                  <button
                    onClick={() => {
                      primeSearchModal();
                      setSearchModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 !text-white/70 hover:!text-white hover:bg-white/10 transition-all border border-white/5"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Search...</span>
                  </button>
                ) : null}

                {/* Mobile Nav Links */}
                <nav aria-label="Main navigation" className="space-y-2">
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      {item.name === 'Conditions' ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => setConditionsExpanded(!conditionsExpanded)}
                            aria-expanded={conditionsExpanded}
                            aria-controls="mobile-conditions-submenu"
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                              isCurrentPath(item.href)
                                ? 'bg-[#D4AF37]/10 !text-[#D4AF37]'
                                : '!text-white/80 hover:bg-white/5 hover:!text-white'
                            }`}
                          >
                            <span className="font-medium tracking-wide">{item.name}</span>
                            <ChevronRightIcon
                              className={`w-4 h-4 transition-transform duration-300 ${conditionsExpanded ? 'rotate-90' : ''}`}
                            />
                          </button>

                          <AnimatePresence>
                            {conditionsExpanded && (
                              <motion.div
                                id="mobile-conditions-submenu"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-1 border-l border-white/10 ml-4 my-2">
                                  <Link href="/conditions" onClick={handleNavClick} className="block px-4 py-3 text-sm text-white">All conditions</Link>
                                  {conditionNav.map((category, idx) => (
                                    <Link
                                      key={category.slug}
                                      href={`/conditions?tab=${idx}`}
                                      prefetch={false}
                                      onClick={handleNavClick}
                                      className="block px-4 py-3 text-sm !text-white/80 hover:!text-[#D4AF37] transition-colors"
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
                          prefetch={false}
                          onClick={handleNavClick}
                          aria-current={isCurrentPath(item.href) ? 'page' : undefined}
                          className={`block px-4 py-3 rounded-xl font-medium tracking-wide transition-all ${
                            isCurrentPath(item.href)
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
                    href={bookingHref}
                    data-booking-source="header_menu"
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D4AF37] text-slate-900 font-bold text-sm tracking-wide hover:bg-[#E6C66A] transition-all shadow-lg"
                  >
                    <CalendarDaysIcon className="w-5 h-5" />
                    {isIntakePage ? 'Book Assessment' : 'Book Now'}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {searchModalOpen ? (
        <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      ) : null}
    </>
  );
});

export default React.memo(Header);
