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
import { NAV_MENU, NAV_MENU_FOOTER_LINKS, TREATMENTS_MENU, TREATMENTS_FOOTER_LINKS } from '@/lib/nav-menu';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL, JANE_INTAKE_BOOKING_URL } from '@/lib/booking';
import Image from 'next/image';
import { m as motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useModalDialog } from '@/hooks/useModalDialog';
import styles from './Header.module.css';

/** The region plates beside each column of the Conditions panel and in the phone menu. */
const MENU_MEDALS: Record<string, string> = {
  knee: '/images/regions/knee.webp',
  hip: '/images/regions/hip-pelvis.webp',
  'foot-ankle': '/images/regions/foot-ankle.webp',
  shoulder: '/images/regions/shoulder.webp',
  back: '/images/regions/spinal-health.webp',
};

/** The two desktop panels. Conditions and Treatments each open under the bar. */
type PanelName = 'conditions' | 'treatments';

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
  const [treatmentsExpanded, setTreatmentsExpanded] = useState(false);
  // Which desktop panel is open, if any. One at a time.
  const [openPanel, setOpenPanel] = useState<PanelName | null>(null);
  const conditionsMenuOpen = openPanel === 'conditions';
  const treatmentsMenuOpen = openPanel === 'treatments';
  const toggleRefs = useRef<Record<PanelName, HTMLButtonElement | null>>({ conditions: null, treatments: null });
  const hoverOpenedAt = useRef(0);
  const closeTimer = useRef<number | undefined>(undefined);
  const [menuEverOpened, setMenuEverOpened] = useState(false);
  const closePanels = useCallback(() => setOpenPanel(null), []);
  const showPanel = useCallback((which: PanelName) => {
    window.clearTimeout(closeTimer.current);
    setMenuEverOpened(true);
    setOpenPanel(which);
  }, []);
  const pathname = usePathname();
  const isIntakePage = pathname === BOOKING_PAGE_PATH;
  // Always route the header Book button straight to Jane. The /intake page
  // is reserved for paid traffic landing on it via Google Ads; organic
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
    setOpenPanel(null);
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
          closeTimer.current = window.setTimeout(closePanels, 140);
        }}
        onPointerEnter={() => window.clearTimeout(closeTimer.current)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) closePanels();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && openPanel) {
            event.preventDefault();
            const which = openPanel;
            closePanels();
            toggleRefs.current[which]?.focus();
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
                reduce exits). Conditions and Treatments each open a full-width
                panel under the bar. */}
            {!isIntakePage && (
            <nav aria-label="Main navigation" className={styles.nav}>
              {mainNavItems.map((item) => {
                const panel: PanelName | null = item.name === 'Conditions' ? 'conditions' : item.name === 'Treatments' ? 'treatments' : null;
                if (panel) {
                  const isOpen = openPanel === panel;
                  return (
                    <button
                      key={item.name}
                      ref={(el) => { toggleRefs.current[panel] = el; }}
                      type="button"
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={`desktop-${panel}-menu`}
                      data-current={isCurrentPath(item.href)}
                      onPointerEnter={(event) => {
                        if (event.pointerType !== 'mouse') return;
                        hoverOpenedAt.current = Date.now();
                        showPanel(panel);
                      }}
                      onClick={() => {
                        // A mouse that has just opened the panel by hovering
                        // should not close it again with the same gesture.
                        if (isOpen && Date.now() - hoverOpenedAt.current < 700) return;
                        if (isOpen) closePanels();
                        else showPanel(panel);
                      }}
                    >
                      {item.name}
                      <ChevronDownIcon aria-hidden="true" className={styles.chevron} />
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={false}
                    aria-current={isCurrentPath(item.href) ? 'page' : undefined}
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') closePanels();
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
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
              if ((event.target as HTMLElement).closest('a')) closePanels();
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

        {/* The Treatments panel (desktop): the eleven treatment pages in three groups. */}
        {!isIntakePage && (
          <div
            id="desktop-treatments-menu"
            className={styles.panel}
            data-open={treatmentsMenuOpen}
            inert={!treatmentsMenuOpen}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) closePanels();
            }}
          >
            <div className={styles.panelInner}>
              <div className={styles.feature}>
                <p className={styles.eyebrow} data-rise="" style={{ '--r': 0 } as React.CSSProperties}>
                  Treatments
                </p>
                <p className={styles.featureTitle} data-rise="" style={{ '--r': 1 } as React.CSSProperties}>
                  What happens in the room
                </p>
                <p className={styles.featureText} data-rise="" style={{ '--r': 2 } as React.CSSProperties}>
                  Hands-on work, exercise and education, chosen from your assessment rather than from a fixed menu.
                </p>
                <ul className={styles.featureLinks} data-rise="" style={{ '--r': 3 } as React.CSSProperties}>
                  {TREATMENTS_FOOTER_LINKS.map((link) => (
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
                {TREATMENTS_MENU.map((group, i) => (
                  <li key={group.key} data-rise="" style={{ '--r': i + 1 } as React.CSSProperties}>
                    <p className={styles.groupHead}>{group.title}</p>
                    <ul className={styles.regionLinks}>
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} prefetch={false}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Dims the page while a panel is open (desktop). */}
      {!isIntakePage && (
        <div className={styles.scrim} data-open={openPanel !== null} aria-hidden="true" onClick={closePanels} />
      )}

      {/* Phone and tablet menu: a dark drawer in the condition pages' language. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.backdrop}
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
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className={styles.drawer}
            >
              {/* The close button stays pinned while the drawer scrolls (an
                  expanded Conditions list scrolled it out of reach), and the
                  drawer leaves at least 3.5rem of backdrop to tap on any phone. */}
              <div className={styles.drawerTop}>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className={styles.iconButton}
                >
                  <XMarkIcon aria-hidden="true" />
                </button>
              </div>
              <div className={styles.drawerBody}>
                {/* Mobile Search */}
                {!isIntakePage ? (
                  <button
                    type="button"
                    onClick={() => {
                      primeSearchModal();
                      setSearchModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className={styles.searchRow}
                  >
                    <MagnifyingGlassIcon aria-hidden="true" />
                    <span>Search...</span>
                  </button>
                ) : null}

                {/* Mobile Nav Links */}
                <nav aria-label="Main navigation" className={styles.drawerNav}>
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      {item.name === 'Conditions' ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setConditionsExpanded(!conditionsExpanded)}
                            aria-expanded={conditionsExpanded}
                            aria-controls="mobile-conditions-submenu"
                            data-current={isCurrentPath(item.href)}
                            className={styles.row}
                          >
                            <span>{item.name}</span>
                            <ChevronRightIcon aria-hidden="true" />
                          </button>

                          <AnimatePresence initial={false}>
                            {conditionsExpanded && (
                              <motion.div
                                id="mobile-conditions-submenu"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className={styles.sub}
                              >
                                <ul className={styles.subList}>
                                  <li>
                                    <Link href="/conditions" onClick={handleNavClick} className={styles.subRow}>All conditions</Link>
                                  </li>
                                  {NAV_MENU.map((column) => (
                                    <li key={column.key}>
                                      <Link
                                        href={column.href}
                                        prefetch={false}
                                        onClick={handleNavClick}
                                        className={styles.subRow}
                                      >
                                        {MENU_MEDALS[column.key] && (
                                          <span className={styles.subThumb} aria-hidden="true">
                                            <Image src={MENU_MEDALS[column.key]} alt="" fill sizes="34px" quality={70} />
                                          </span>
                                        )}
                                        {column.title}
                                      </Link>
                                    </li>
                                  ))}
                                  {NAV_MENU_FOOTER_LINKS.filter((link) => link.href !== '/conditions').map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        prefetch={false}
                                        onClick={handleNavClick}
                                        className={`${styles.subRow} ${styles.subQuiet}`}
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : item.name === 'Treatments' ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setTreatmentsExpanded(!treatmentsExpanded)}
                            aria-expanded={treatmentsExpanded}
                            aria-controls="mobile-treatments-submenu"
                            data-current={isCurrentPath(item.href)}
                            className={styles.row}
                          >
                            <span>{item.name}</span>
                            <ChevronRightIcon aria-hidden="true" />
                          </button>

                          <AnimatePresence initial={false}>
                            {treatmentsExpanded && (
                              <motion.div
                                id="mobile-treatments-submenu"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className={styles.sub}
                              >
                                <ul className={styles.subList}>
                                  <li>
                                    <Link href="/treatments" onClick={handleNavClick} className={styles.subRow}>All treatments</Link>
                                  </li>
                                  {TREATMENTS_MENU.map((group) => (
                                    <React.Fragment key={group.key}>
                                      <li className={styles.subLabelItem}>
                                        <p className={styles.subLabel}>{group.title}</p>
                                      </li>
                                      {group.links.map((link) => (
                                        <li key={link.href}>
                                          <Link href={link.href} prefetch={false} onClick={handleNavClick} className={styles.subRow}>
                                            {link.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          prefetch={false}
                          onClick={handleNavClick}
                          aria-current={isCurrentPath(item.href) ? 'page' : undefined}
                          className={styles.row}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className={styles.drawerActions}>
                  <Link
                    href="tel:+19056346000"
                    className={styles.callRow}
                  >
                    <PhoneIcon aria-hidden="true" />
                    <span>905-634-6000</span>
                  </Link>
                  <Link
                    href={bookingHref}
                    data-booking-source="header_menu"
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    onClick={() => setMobileMenuOpen(false)}
                    className={styles.bookRow}
                  >
                    <CalendarDaysIcon aria-hidden="true" />
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
