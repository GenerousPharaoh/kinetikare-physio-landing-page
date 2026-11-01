"use client";

import { getScrollBehavior } from '@/lib/scroll';
import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import FAQAccordion, { FaqItem } from '@/components/FAQAccordion';
import Reveal from '@/components/home/Reveal';
import styles from '@/components/faq/Faq.module.css';

interface FAQCategory {
  id: string;
  name: string;
  iconType: string;
  questions: FaqItem[];
}

interface FAQPageClientProps {
  faqCategories: FAQCategory[];
  /** The opening's title block, rendered on the server. */
  hero?: ReactNode;
}

/**
 * The FAQ page body: the opening with the search beside it, the topics as
 * plain chips (a sticky column on laptops, a row on phones), then each
 * topic's questions as hairline disclosures, or the search results while a
 * search is typed. Every chip is a plain #anchor, so the topics work
 * without JavaScript.
 */
export default function FAQPageClient({ faqCategories, hero }: FAQPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState<FaqItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const pendingScroll = useRef<string | null>(null);

  // Which topic is being read: the last one whose top has passed a line
  // just under the header.
  useEffect(() => {
    if (isSearching) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = (document.querySelector('header')?.getBoundingClientRect().height ?? 80) + 120;
      let current = faqCategories[0]?.id ?? '';
      for (const category of faqCategories) {
        const el = document.getElementById(category.id);
        if (el && el.getBoundingClientRect().top <= line) current = category.id;
      }
      setActiveCategory(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isSearching, faqCategories]);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (!element) return;
    element.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
    window.history.replaceState(null, '', `#${categoryId}`);
  };

  // A topic chosen while a search is showing: clear the search first, then
  // scroll once the topics are back on the page.
  useEffect(() => {
    if (isSearching || !pendingScroll.current) return;
    const id = pendingScroll.current;
    pendingScroll.current = null;
    window.requestAnimationFrame(() => scrollToCategory(id));
  }, [isSearching]);

  const onChipClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    setActiveCategory(categoryId);
    if (isSearching) {
      pendingScroll.current = categoryId;
      setSearchQuery('');
      return;
    }
    scrollToCategory(categoryId);
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      setFilteredQuestions([]);
      return;
    }

    setIsSearching(true);

    // Flatten all questions from all categories
    const allQuestions = faqCategories.flatMap(category =>
      category.questions.map(q => ({
        ...q,
        category: category.name
      }))
    );

    // Smart search with relevance scoring
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 2);

    // Keywords mapping (simplified for performance)
    const keywordMap: { [key: string]: string[] } = {
      'insurance': ['insurance', 'billing', 'coverage', 'payment'],
      'cost': ['cost', 'price', 'fee', 'billing'],
      'pain': ['hurt', 'pain', 'sore', 'discomfort'],
    };

    // Expand search terms
    const expandedTerms = searchTerms.flatMap(term => {
      const relatedTerms = [term];
      Object.entries(keywordMap).forEach(([key, values]) => {
        if (key === term || values.includes(term)) {
          relatedTerms.push(key, ...values);
        }
      });
      return Array.from(new Set(relatedTerms));
    });

    // Score and filter questions
    const scoredQuestions = allQuestions.map(item => {
      let score = 0;
      const questionLower = item.question.toLowerCase();
      const answerLower = typeof item.answer === 'string' ? item.answer.toLowerCase() : '';

      expandedTerms.forEach(term => {
        if (questionLower.includes(term)) score += 10;
        if (answerLower.includes(term)) score += 2;
      });

      return { ...item, score };
    });

    // Filter and sort
    const filtered = scoredQuestions
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...item }) => item);

    setFilteredQuestions(filtered);
  }, [searchQuery, faqCategories]);

  return (
    <div className={styles.wrap}>
      <header className={styles.opening}>
        {hero}
        <div className={styles.search}>
          <MagnifyingGlassIcon aria-hidden="true" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search frequently asked questions"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className={`${styles.plain} ${styles.clearSearch}`}
              aria-label="Clear search"
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          )}
        </div>
      </header>

      <div className={styles.layout}>
        <nav className={styles.topics} aria-label="Question topics">
          <ul className={styles.chips}>
            {faqCategories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  aria-current={!isSearching && activeCategory === category.id ? 'true' : undefined}
                  onClick={(e) => onChipClick(e, category.id)}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.content}>
          {/* Search Results */}
          {isSearching && (
            <div className={styles.results} aria-live="polite">
              <h2 className={styles.h2}>
                Search Results
              </h2>
              <p className={styles.resultCount}>
                {filteredQuestions.length === 0
                  ? 'No questions found matching your search.'
                  : `Found ${filteredQuestions.length} result${filteredQuestions.length !== 1 ? 's' : ''}`}
              </p>
              {filteredQuestions.length === 0 && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`${styles.plain} ${styles.clearAll}`}
                >
                  Clear Search
                </button>
              )}

              {filteredQuestions.length > 0 && (
                <div className={styles.resultList}>
                  {filteredQuestions.map((item, index) => (
                    <div key={`${index}-${item.question}`} className={styles.result}>
                      {item.category && (
                        <span className={`${styles.resultCat} ${styles.mono}`}>
                          {item.category}
                        </span>
                      )}
                      <FAQAccordion items={[item]} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Regular Category View */}
          {!isSearching && (
            <div>
              {faqCategories.map((category) => (
                <section
                  key={category.id}
                  id={category.id}
                  className={styles.cat}
                  aria-labelledby={`${category.id}-title`}
                >
                  <Reveal as="div" className={styles.secHead}>
                    <Reveal as="span" variant="rule" className={styles.accentBar} />
                    <h2 id={`${category.id}-title`} className={styles.h2}>
                      {category.name}
                    </h2>
                  </Reveal>

                  <FAQAccordion items={category.questions} />
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
