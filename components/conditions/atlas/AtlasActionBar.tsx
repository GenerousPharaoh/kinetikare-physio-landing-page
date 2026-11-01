'use client';

import { useEffect, useState } from 'react';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import styles from './Atlas.module.css';

/**
 * Phone booking bar. Slides up once the opening panel has scrolled away and
 * steps back out of sight while the closing band (which has its own Book
 * button) or the pattern quiz is on screen. Replaces the site's floating
 * pills on atlas pages (FloatingButtons steps aside when it finds
 * [data-atlas-page]).
 */
export default function AtlasActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const opening = document.querySelector('[data-atlas-opening]');
    const closing = document.querySelector('[data-atlas-closing]');
    const footer = document.querySelector('footer');
    const zones = Array.from(document.querySelectorAll('[data-hide-floating]'));
    const visible = new Set<Element>();
    const recompute = () => setShow(visible.size === 0 && window.scrollY > 80);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        recompute();
      },
      { threshold: 0.05 },
    );
    [opening, closing, footer, ...zones].forEach((el) => el && io.observe(el));
    const onScroll = () => recompute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.actionBar} data-show={show ? 'true' : 'false'} aria-hidden={!show}>
      <a
        href={JANE_ASSESSMENT_URL}
        data-booking-source="condition_bar"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
        tabIndex={show ? 0 : -1}
      >
        Book an assessment
        <ArrowRightIcon aria-hidden="true" />
      </a>
      <a href="tel:+19056346000" className={styles.btnGhost} aria-label="Call the clinic at 905-634-6000" tabIndex={show ? 0 : -1}>
        <PhoneIcon aria-hidden="true" />
      </a>
    </div>
  );
}
