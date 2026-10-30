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
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { NAV_MENU, NAV_MENU_FOOTER_LINKS } from '@/lib/nav-menu';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL, JANE_INTAKE_BOOKING_URL } from '@/lib/booking';
import Image from 'next/image';
import { m as motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useModalDialog } from '@/hooks/useModalDialog';
import styles from './Header.module.css';

/** Small round pictures beside each column of the Conditions panel. */
const MENU_MEDALS: Record<string, string> = {
  knee: '/images/regions/knee.webp',
  hip: '/images/regions/hip-pelvis.webp',
  'foot-ankle': '/images/regions/foot-ankle.webp',
  shoulder: '/images/regions/shoulder.webp',
  back: '/images/regions/spinal-health.webp',
  treatments: '/images/illustrations/step-ups.webp',
};

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
  const hoverOpenedAt = useRef(0);
  const closeTimer = useRef<number | undefined>(undefined);
  const [menuEverOpened, setMenuEverOpened] = useState(false);
  const openConditions = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setMenuEverOpened(true);
    setConditionsMenuOpen(true);
  }, []);
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
      if (window.innerWidth >= 1180 && mobileMenuOpen) {
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
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Treatments', href: '/treatments' },
      { name: 'Conditions', href: '/conditions' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Fees & first visit', href: '/fees-and-first-visit' },
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
        // Site chrome: scripts/content-dates.mjs leaves it out of each page's
        // fingerprint, so a menu change does not re-date every page.
        data-site-chrome=""
        // The bar is always on, in the home page's night navy so it runs
        // straight into the dark hero. Desktop is a fixed 84px.
        className={`${styles.bar} fixed w-full top-0 z-50 border-b !bg-[#0a1628]/[0.94] backdrop-blur-xl border-[#d6bf8e]/[0.14] ${
          shouldTransition ? 'transition-shadow duration-300' : ''
        } ${isIntakePage ? 'py-2.5 lg:py-5' : 'py-3 lg:py-0 lg:h-[84px]'} ${scrolled ? 'shadow-[0_12px_32px_rgba(0,0,0,0.35)]' : ''}`}
        onPointerLeave={(event) => {
          if (event.pointerType !== 'mouse') return;
          window.clearTimeout(closeTimer.current);
          closeTimer.current = window.setTimeout(() => setConditionsMenuOpen(false), 140);
        }}
        onPointerEnter={() => window.clearTimeout(closeTimer.current)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setConditionsMenuOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && conditionsMenuOpen) {
            event.preventDefault();
            setConditionsMenuOpen(false);
            conditionsToggleRef.current?.focus();
          }
        }}
      >
        <div className={`container mx-auto px-4 lg:px-8 h-full ${styles.barInner}`}>
          <motion.div
            className="flex items-center justify-between h-full"
            initial={shouldAnimate ? 'hidden' : 'visible'}
            animate="visible"
            variants={headerContainerVariants}
          >
            {/* Logo Section */}
            <motion.div variants={headerItemVariants}>
              <Link href="/" className="flex items-center gap-2 group relative z-50">
                <div className={`relative ${isIntakePage ? 'w-8 h-8 min-[360px]:w-10 min-[360px]:h-10' : 'w-10 h-10'} lg:w-11 lg:h-11 transition-transform duration-500 group-hover:scale-105 flex-shrink-0`}>
                  <Image
                    src="/images/kinetikare-logo-without-text.webp"
                    alt="Kinetikare Logo"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    sizes="44px"
                  />
                </div>
                {/* Text Container - Moved down slightly (mt-1) */}
                <div className="flex flex-row items-center gap-1 mt-1.5 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
                  {/* One literal text node for the name. It used to be Kineti + K + are in
                      three spans, which parsers read as "KinetiKarePhysio" and re-split
                      as "Kinetika Rephysio". */}
                  <span className={`${isIntakePage ? 'text-xs min-[360px]:text-sm' : 'text-sm'} sm:text-lg lg:text-[15px] font-light !text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.22em] leading-none`}>
                    Kinetikare
                  </span>
                  {' '}

                  {/* Desktop Separator */}
                  <div className="hidden lg:block h-4 w-[1px] bg-[#D4AF37] mx-3" />

                  <span className={`${isIntakePage ? 'text-[10px] min-[360px]:text-xs' : 'text-xs'} sm:text-[10px] lg:text-[15px] !text-white font-light tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.22em] uppercase lg:mt-0 group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap`}>
                    Physio
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop navigation, from 1180px (hidden on the ads landing page to
                reduce exits). Conditions opens a full-width panel under the bar. */}
            {!isIntakePage && (
            <nav aria-label="Main navigation" className={styles.nav}>
              {mainNavItems.map((item) =>
                item.name === 'Conditions' ? (
                  <button
                    key={item.name}
                    ref={conditionsToggleRef}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={conditionsMenuOpen}
                    aria-controls="desktop-conditions-menu"
                    data-current={isCurrentPath(item.href)}
                    onPointerEnter={(event) => {
                      if (event.pointerType !== 'mouse') return;
                      hoverOpenedAt.current = Date.now();
                      openConditions();
                    }}
                    onClick={() => {
                      // A mouse that has just opened the panel by hovering
                      // should not close it again with the same gesture.
                      if (conditionsMenuOpen && Date.now() - hoverOpenedAt.current < 700) return;
                      if (conditionsMenuOpen) setConditionsMenuOpen(false);
                      else openConditions();
                    }}
                  >
                    {item.name}
                    <ChevronDownIcon aria-hidden="true" className={styles.chevron} />
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={false}
                    aria-current={isCurrentPath(item.href) ? 'page' : undefined}
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') setConditionsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )
              )}
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
                    className={styles.search}
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </motion.div>
              ) : null}

              {/* Phone, from 1440px */}
              {!isIntakePage && (
                <a href="tel:+19056346000" className={styles.phone}>
                  <PhoneIcon aria-hidden="true" />
                  905-634-6000
                </a>
              )}

              {/* Book Now Button */}
              <motion.div className={isIntakePage ? "block" : "hidden sm:block"} variants={headerItemVariants}>
                <Link
                  href={bookingHref}
                  data-booking-source="header"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className={
                    isIntakePage
                      ? 'flex px-4 py-2 sm:px-6 sm:py-2.5 group relative bg-[#D4AF37] overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105'
                      : styles.book
                  }
                >
                  {isIntakePage ? (
                    <span className="relative flex items-center gap-2 text-slate-900 font-bold text-xs tracking-[0.1em] uppercase">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span className="sm:hidden">Book</span>
                      <span className="hidden sm:inline">Book Assessment</span>
                    </span>
                  ) : (
                    <>
                      Book Now
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </>
                  )}
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle (hidden on the ads landing page) */}
              {!isIntakePage && (
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-[1180px]:hidden relative z-50 w-11 h-11 flex items-center justify-center !text-white hover:!text-[#D4AF37] transition-colors"
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

        {/* The Conditions panel (desktop). Always in the HTML; closed it is
            hidden from view and from the keyboard (inert). The region medallions
            only load once the panel has been opened. */}
        {!isIntakePage && (
          <div
            id="desktop-conditions-menu"
            className={styles.panel}
            data-open={conditionsMenuOpen}
            inert={!conditionsMenuOpen}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) setConditionsMenuOpen(false);
            }}
          >
            <div className={styles.panelInner}>
              <div className={styles.feature}>
                <p className={styles.eyebrow} data-rise="" style={{ '--r': 0 } as React.CSSProperties}>
                  Conditions
                </p>
                <p className={styles.featureTitle} data-rise="" style={{ '--r': 1 } as React.CSSProperties}>
                  Where does it hurt?
                </p>
                <p className={styles.featureText} data-rise="" style={{ '--r': 2 } as React.CSSProperties}>
                  Region-level overviews that sort common patterns and point you to the right detailed condition page.
                </p>
                <ul className={styles.featureLinks} data-rise="" style={{ '--r': 3 } as React.CSSProperties}>
                  {NAV_MENU_FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} prefetch={false}>
                        {link.name}
                        <ChevronRightIcon aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className={styles.regions}>
                {NAV_MENU.map((column, i) => (
                  <li key={column.key} data-rise="" style={{ '--r': i + 1 } as React.CSSProperties}>
                    <Link href={column.href} prefetch={false} className={styles.regionHead}>
                      <span className={styles.medal} aria-hidden="true">
                        {menuEverOpened && MENU_MEDALS[column.key] && (
                          <Image src={MENU_MEDALS[column.key]} alt="" fill sizes="40px" quality={70} />
                        )}
                      </span>
                      <span className={styles.regionName}>{column.title}</span>
                      <ChevronRightIcon aria-hidden="true" className={styles.regionArrow} />
                    </Link>
                    <ul className={styles.regionLinks}>
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} prefetch={false}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={column.viewAll.href} prefetch={false} className={styles.viewAll}>
                          {column.viewAll.name}
                        </Link>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Dims the page while the Conditions panel is open (desktop). */}
      {!isIntakePage && (
        <div className={styles.scrim} data-open={conditionsMenuOpen} aria-hidden="true" onClick={() => setConditionsMenuOpen(false)} />
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[75] min-[1180px]:hidden"
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
              className="fixed top-0 right-0 bottom-0 w-[min(22rem,calc(100%-3.5rem))] bg-[#020617] border-l border-white/10 z-[80] min-[1180px]:hidden overflow-y-auto"
            >
              {/* The close button stays pinned while the drawer scrolls (an
                  expanded Conditions list scrolled it out of reach), and the
                  drawer leaves at least 3.5rem of backdrop to tap on any phone. */}
              <div className="sticky top-0 z-10 flex h-[68px] items-center justify-end bg-[#020617] px-4">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="p-6 pt-3 space-y-6">
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
                                  {NAV_MENU.filter((column) => column.key !== 'treatments').map((column) => (
                                    <Link
                                      key={column.key}
                                      href={column.href}
                                      prefetch={false}
                                      onClick={handleNavClick}
                                      className="block px-4 py-3 text-sm !text-white/80 hover:!text-[#D4AF37] transition-colors"
                                    >
                                      {column.title}
                                    </Link>
                                  ))}
                                  {NAV_MENU_FOOTER_LINKS.filter((link) => link.href !== '/conditions').map((link) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      prefetch={false}
                                      onClick={handleNavClick}
                                      className="block px-4 py-3 text-sm !text-white/60 hover:!text-[#D4AF37] transition-colors"
                                    >
                                      {link.name}
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
