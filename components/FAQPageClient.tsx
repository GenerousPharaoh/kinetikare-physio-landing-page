"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon, MagnifyingGlassIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FAQAccordion, { FaqItem } from '@/components/FAQAccordion';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QuestionMarkCircleIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface FAQCategory {
  id: string;
  name: string;
  iconType: string;
  questions: FaqItem[];
}

interface FAQPageClientProps {
  faqCategories: FAQCategory[];
}

// Helper function to get icon component based on type
const getIcon = (iconType: string) => {
  const iconProps = { className: "w-5 h-5 lg:w-6 lg:h-6" };

  switch (iconType) {
    case 'question':
      return <QuestionMarkCircleIcon {...iconProps} />;
    case 'document':
      return <DocumentTextIcon {...iconProps} />;
    case 'clock':
      return <ClockIcon {...iconProps} />;
    case 'calendar':
      return <CalendarIcon {...iconProps} />;
    case 'currency':
      return <CurrencyDollarIcon {...iconProps} />;
    default:
      return <QuestionMarkCircleIcon {...iconProps} />;
  }
};

export default function FAQPageClient({ faqCategories }: FAQPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState<FaqItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  // Refs for each section
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Set mounted state once component mounts in browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll to show/hide sticky navigation and update active section
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide navigation when close to footer (within 300px of bottom)
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      const shouldShowNav = scrollY > 400 && distanceFromBottom > 300;

      setShowStickyNav(shouldShowNav);

      // Update active category based on scroll position (scroll spy)
      if (!isSearching) {
        const sections = Object.entries(sectionRefs.current);
        const currentSection = sections.find(([id, element]) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        });

        if (currentSection) {
          setActiveCategory(currentSection[0]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted, isSearching]);

  // Smooth scroll to section
  const scrollToSection = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Clear search when navigating
    setIsSearching(false);

    const element = sectionRefs.current[categoryId];
    if (element) {
      const yOffset = -120; // Account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Search functionality
  useEffect(() => {
    if (!isMounted) return;

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
  }, [searchQuery, isMounted, faqCategories]);

  if (!isMounted) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <div className="text-center text-slate-400 font-light">Loading content...</div>
      </div>
    );
  }

  return (
    <>
      {/* Search Section - Floats above content */}
      <div className="relative z-30 -mt-8 mb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/80 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-2 flex items-center transition-shadow duration-300 focus-within:shadow-[0_8px_30px_rgb(176,141,87,0.1)] focus-within:border-[#B08D57]/30">
              <MagnifyingGlassIcon className="w-6 h-6 text-[#B08D57] ml-4 mr-3" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent py-3 text-lg text-slate-800 placeholder-slate-400 focus:outline-none font-light"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-2 hover:bg-slate-50 rounded-full transition-colors mr-2"
                  aria-label="Clear search"
                >
                  <svg className="h-5 w-5 text-slate-400 hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation - Desktop Sidebar */}
      <AnimatePresence>
        {showStickyNav && !isSearching && (
          <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40"
          >
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-white/50 p-2 space-y-1">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`group relative flex items-center w-12 h-12 justify-center rounded-xl transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-[#B08D57] text-white shadow-lg shadow-[#B08D57]/20 scale-105'
                    : 'text-slate-400 hover:bg-slate-50 hover:text-[#B08D57]'
                    }`}
                  aria-label={`Go to ${category.name}`}
                >
                  {getIcon(category.iconType)}

                  {/* Tooltip */}
                  <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-slate-700">
                    {category.name}
                    <span className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-800"></span>
                  </span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Search Results */}
        {isSearching && (
          <div ref={searchResultsRef} className="animate-fadeIn">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-light text-slate-900 mb-2">
                Search Results
              </h2>
              <p className="text-slate-500 font-light">
                {filteredQuestions.length === 0
                  ? 'No questions found matching your search.'
                  : `Found ${filteredQuestions.length} result${filteredQuestions.length !== 1 ? 's' : ''}`}
              </p>
              {filteredQuestions.length === 0 && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-2.5 bg-[#B08D57] hover:bg-[#9A7B4F] text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide"
                >
                  Clear Search
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              {filteredQuestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {filteredQuestions.map((item, index) => (
                    <div key={index}>
                      {item.category && (
                        <div className="mb-2 ml-1">
                          <span className="text-[10px] font-bold text-[#B08D57] uppercase tracking-widest">
                            {item.category}
                          </span>
                        </div>
                      )}
                      <FAQAccordion items={[item]} />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Regular Category View */}
        {!isSearching && (
          <div className="space-y-24 md:space-y-32">
            {faqCategories.map((category) => (
              <div
                key={category.id}
                ref={(el) => { sectionRefs.current[category.id] = el; }}
                className="scroll-mt-32"
              >
                {/* Section Header */}
                <div className="flex items-end gap-4 mb-10 pb-4 border-b border-slate-100">
                  <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm text-[#B08D57]">
                    {getIcon(category.iconType)}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight">
                      {category.name}
                    </h2>
                  </div>
                </div>

                <FAQAccordion items={category.questions} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Sticky Nav Control */}
      {showStickyNav && !isSearching && (
        <div className="fixed bottom-6 right-6 lg:hidden z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-white/90 backdrop-blur shadow-lg border border-slate-200 rounded-full text-[#B08D57]"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
} 