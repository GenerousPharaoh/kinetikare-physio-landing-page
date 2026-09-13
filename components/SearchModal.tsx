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
import { JANE_BOOKING_URL } from '@/lib/booking';

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
        className="fixed inset-0 z-[75] bg-slate-950/65 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-search-title"
        tabIndex={-1}
        className="fixed inset-x-3 top-4 z-[80] mx-auto flex max-h-[calc(100dvh-2rem)] max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:inset-x-6 sm:top-[8vh] sm:max-h-[84dvh]"
      >
        <div className="shrink-0 bg-slate-900 p-4 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 id="site-search-title" className="text-base font-medium text-white sm:text-lg">
              Search conditions and treatments
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="relative">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
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
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-base text-slate-900 placeholder:text-slate-500"
            />
          </div>
        </div>
        <div className="min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6">
          {showEmergencyNote && (
            <p className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
              In a medical emergency,{' '}
              <a href="tel:911" className="font-semibold underline">
                call 911
              </a>
              . For non-emergency health advice,{' '}
              <a href="tel:811" className="font-semibold underline">
                call Health811
              </a>
              . This search cannot assess symptoms or urgency.
            </p>
          )}
          <p
            id="site-search-status"
            role="status"
            aria-live="polite"
            className={query.trim().length >= 2 ? 'mb-3 text-sm text-slate-600' : 'sr-only'}
          >
            {query.trim().length >= 2
              ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query.trim()}”`
              : query
                ? 'Enter at least two characters to search.'
                : 'Search by condition, treatment, or clinic information.'}
          </p>
          {query.trim().length >= 2 ? (
            results.length ? (
              <ul className="divide-y divide-slate-200">
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
                      className="group flex items-start gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="mb-1 block text-xs font-medium tracking-wide text-[#80650A]">
                          {result.kind}
                        </span>
                        <span className="block text-base font-semibold leading-snug text-slate-900">
                          {result.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                          {result.description}
                        </span>
                      </div>
                      <ArrowRightIcon
                        className="mt-6 h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-6">
                <p className="text-slate-600">
                  Try a body area or treatment name, or browse the full list.
                </p>
                <Link
                  href="/conditions"
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center font-medium text-slate-900 underline underline-offset-4"
                >
                  Browse conditions
                </Link>
              </div>
            )
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Common searches</h3>
                <div className="flex flex-wrap gap-2">
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
                      className="min-h-11 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-[#B08D57] hover:bg-slate-50"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              {recentSearches.length > 0 && (
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-900">Recent searches</h3>
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
                      className="min-h-11 px-3 text-sm text-slate-600 underline"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => chooseSuggestion(term)}
                        className="min-h-11 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200"
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
        <div className="grid shrink-0 grid-cols-2 gap-3 border-t border-slate-200 bg-slate-50 p-4">
          <a
            href={JANE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="button-gold inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-3 text-center text-sm font-semibold"
          >
            <CalendarDaysIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
            Book assessment
          </a>
          <a
            href="tel:+19056346000"
            onClick={onClose}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call clinic
          </a>
        </div>
      </div>
    </>
  );
}
