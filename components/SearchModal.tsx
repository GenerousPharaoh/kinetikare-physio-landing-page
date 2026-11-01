'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowRightIcon,
  PhoneIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { useModalDialog } from '@/hooks/useModalDialog';
import { searchSite } from '@/lib/site-search';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const results = useMemo(() => searchSite(query), [query]);
  useModalDialog(isOpen, panelRef, onClose, inputRef);

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      if (Array.isArray(saved))
        setRecentSearches(
          saved.filter((item): item is string => typeof item === 'string').slice(0, 5)
        );
    } catch {
      /* Search remains usable when browser storage is unavailable. */
    }
  }, []);

  const rememberSearch = () => {
    const term = query.trim();
    if (term) {
      const recent = [term, ...recentSearches.filter((item) => item !== term)].slice(0, 5);
      setRecentSearches(recent);
      try {
        localStorage.setItem('recentSearches', JSON.stringify(recent));
      } catch {
        /* Optional history. */
      }
    }
    onClose();
  };
  const chooseSuggestion = (term: string) => {
    setQuery(term);
    inputRef.current?.focus();
  };
  if (!isOpen) return null;

  // Navigation search is not a triage tool. Keep emergency help separate from booking.
  // Sources: ontario.ca/page/emergency-rooms and ontario.ca/page/your-health
  const showEmergencyNote =
    /\b(emergency|urgent)\b|severe pain|can['’]?t (walk|move)|help now/i.test(query);

  return (
    <>
      <div
        data-dialog-backdrop
        aria-hidden="true"
        onClick={onClose}
        className={styles.backdrop}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-search-title"
        tabIndex={-1}
        className={styles.dialog}
      >
        <div className={styles.head}>
          <div className={styles.headRow}>
            <h2 id="site-search-title" className={styles.title}>
              Search conditions and treatments
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className={styles.close}
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <div className={styles.field}>
            <MagnifyingGlassIcon aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              maxLength={120}
              autoComplete="off"
              spellCheck={false}
              aria-label="Search conditions and treatments"
              aria-describedby="site-search-status"
              placeholder="Try knee pain, cupping, or fees"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (!results.length) return;
                if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                  event.preventDefault();
                  resultRefs.current[event.key === 'ArrowDown' ? 0 : results.length - 1]?.focus();
                } else if (event.key === 'Enter') {
                  event.preventDefault();
                  resultRefs.current[0]?.click();
                }
              }}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.body}>
          {showEmergencyNote && (
            <p className={styles.emergency}>
              In a medical emergency,{' '}
              <a href="tel:911">
                call 911
              </a>
              . For non-emergency health advice,{' '}
              <a href="tel:811">
                call Health811
              </a>
              . This search cannot assess symptoms or urgency.
            </p>
          )}
          <p
            id="site-search-status"
            role="status"
            aria-live="polite"
            className={query.trim().length >= 2 ? styles.status : 'sr-only'}
          >
            {query.trim().length >= 2
              ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query.trim()}”`
              : query
                ? 'Enter at least two characters to search.'
                : 'Search by condition, treatment, or clinic information.'}
          </p>
          {query.trim().length >= 2 ? (
            results.length ? (
              <ul className={styles.results}>
                {results.map((result, index) => (
                  <li key={result.url}>
                    <Link
                      ref={(element) => {
                        resultRefs.current[index] = element;
                      }}
                      href={result.url}
                      prefetch={false}
                      target={result.kind === 'Booking' ? '_blank' : undefined}
                      rel={result.kind === 'Booking' ? 'noopener noreferrer' : undefined}
                      onClick={rememberSearch}
                      onKeyDown={(event) => {
                        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
                        event.preventDefault();
                        (
                          resultRefs.current[index + (event.key === 'ArrowDown' ? 1 : -1)] ??
                          inputRef.current
                        )?.focus();
                      }}
                      className={styles.result}
                    >
                      <div className={styles.resultText}>
                        <span className={styles.kind}>
                          {result.kind}
                        </span>
                        <span className={styles.resultTitle}>
                          {result.title}
                        </span>
                        <span className={styles.resultDesc}>
                          {result.description}
                        </span>
                      </div>
                      <ArrowRightIcon aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.empty}>
                <p className={styles.emptyText}>
                  Try a body area or treatment name, or browse the full list.
                </p>
                <Link
                  href="/conditions"
                  onClick={onClose}
                  className={styles.browse}
                >
                  Browse conditions
                </Link>
              </div>
            )
          ) : (
            <div className={styles.groups}>
              <div>
                <h3 className={styles.label}>Common searches</h3>
                <div className={styles.chips}>
                  {[
                    'knee pain',
                    'hip pain',
                    'sports rehab',
                    'dry needling',
                    'cupping',
                    'insurance',
                  ].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => chooseSuggestion(term)}
                      className={styles.chip}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              {recentSearches.length > 0 && (
                <div>
                  <div className={styles.groupHead}>
                    <h3 className={styles.label}>Recent searches</h3>
                    <button
                      type="button"
                      onClick={() => {
                        setRecentSearches([]);
                        try {
                          localStorage.removeItem('recentSearches');
                        } catch {
                          /* Optional history. */
                        }
                      }}
                      className={styles.clear}
                    >
                      Clear
                    </button>
                  </div>
                  <div className={styles.chips}>
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => chooseSuggestion(term)}
                        className={`${styles.chip} ${styles.chipRecent}`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={styles.foot}>
          <a
            href={JANE_ASSESSMENT_URL} data-booking-source="search"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={styles.book}
          >
            <CalendarDaysIcon aria-hidden="true" />
            Book assessment
          </a>
          <a
            href="tel:+19056346000"
            onClick={onClose}
            className={styles.call}
          >
            <PhoneIcon aria-hidden="true" />
            Call clinic
          </a>
        </div>
      </div>
    </>
  );
}
