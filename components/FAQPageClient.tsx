"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon, MagnifyingGlassIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FAQAccordion, { FaqItem } from '@/components/FAQAccordion';
import { motion, AnimatePresence } from 'framer-motion';
import PatternBackground from '@/components/ui/PatternBackground';
import ContactCTA from '@/components/sections/ContactCTA';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/PageHeader';
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
  const iconProps = { className: "w-6 h-6 lg:w-7 lg:h-7" };
  
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
  // Removed floating search and back to top - not needed

  // Refs for each section
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const searchResultsRef = useRef<HTMLDivElement>(null);
  
  // Helper function to highlight search terms
  const highlightSearchTerms = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const terms = query.toLowerCase().split(' ').filter(t => t.length > 2);
    if (terms.length === 0) return text;
    
    const regex = new RegExp(`(${terms.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (terms.some(term => part.toLowerCase() === term.toLowerCase())) {
        return (
          <mark key={index} className="bg-[#D4AF37]/30 px-0.5 rounded">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

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
      
      // Removed floating search and back to top - not needed
      
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
    
    // Keywords mapping for common search variations
    const keywordMap: { [key: string]: string[] } = {
      'insurance': ['insurance', 'billing', 'coverage', 'direct billing', 'payment', 'reimburse'],
      'cost': ['cost', 'price', 'fee', 'billing', 'payment', 'insurance'],
      'first': ['first', 'initial', 'new patient', 'expect', 'assessment'],
      'hurt': ['hurt', 'pain', 'painful', 'discomfort', 'uncomfortable'],
      'exercises': ['exercise', 'exercises', 'home program', 'strength', 'training'],
      'sessions': ['sessions', 'appointments', 'visits', 'how many', 'frequency'],
      'cancel': ['cancel', 'reschedule', 'cancellation', 'policy'],
      'referral': ['referral', 'doctor', 'physician', 'prescription'],
      'manual': ['manual therapy', 'hands-on', 'manipulation'],
      'dry needling': ['dry needling', 'IMS', 'intramuscular stimulation'],
      'cupping': ['cupping', 'cupping therapy'],
      'graston': ['graston', 'IASTM', 'instrument assisted'],
    };
    
    // For exact phrase searches (e.g., "cupping therapy"), don't expand
    const isExactPhrase = searchQuery.includes('"') || 
                         (searchTerms.length > 1 && searchQuery.toLowerCase().includes('therapy'));
    
    // Expand search terms with related keywords
    const expandedTerms = isExactPhrase 
      ? [searchQuery.toLowerCase().replace(/"/g, '')] // Use exact phrase
      : searchTerms.flatMap(term => {
          const relatedTerms = [term];
          Object.entries(keywordMap).forEach(([key, values]) => {
            // Only expand if the term exactly matches a key
            if (key === term) {
              relatedTerms.push(...values);
            } else if (values.includes(term)) {
              // If term is in values, only add the key and the exact term
              relatedTerms.push(key);
            }
          });
          return [...new Set(relatedTerms)]; // Remove duplicates
        });
    
    // Score and filter questions
    const scoredQuestions = allQuestions.map(item => {
      let score = 0;
      const questionLower = item.question.toLowerCase();
      const answerLower = typeof item.answer === 'string' ? item.answer.toLowerCase() : '';
      const fullText = `${questionLower} ${answerLower}`;
      
      // For exact phrase search
      if (isExactPhrase) {
        const exactPhrase = searchQuery.toLowerCase().replace(/"/g, '');
        if (questionLower.includes(exactPhrase)) {
          score += 20; // High score for exact phrase in question
        } else if (answerLower.includes(exactPhrase)) {
          score += 10; // Medium score for exact phrase in answer
        }
      } else {
        // Check each search term
        expandedTerms.forEach(term => {
          // Higher score for question matches
          if (questionLower.includes(term)) {
            score += term === searchQuery.toLowerCase() ? 10 : 5;
          }
          // Lower score for answer matches
          if (answerLower && answerLower.includes(term)) {
            score += 2;
          }
        });
        
        // Bonus for matching ALL original terms (not just some)
        const allOriginalTermsMatch = searchTerms.every(term => 
          questionLower.includes(term) || answerLower.includes(term)
        );
        if (allOriginalTermsMatch && searchTerms.length > 1) {
          score += searchTerms.length * 5;
        }
      }
      
      return { ...item, score };
    });
    
    // Filter and sort by relevance
    const filtered = scoredQuestions
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...item }) => item);
    
    setFilteredQuestions(filtered);
    
    // Remove auto-scroll - let user control when to scroll
    // User can manually scroll or press Enter to see results
  }, [searchQuery, isMounted, faqCategories]);

  // Get current questions to display
  const currentQuestions = isSearching 
    ? filteredQuestions 
    : faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  // If not mounted yet (server-side), render a minimal version
  if (!isMounted) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <div className="text-center">Loading FAQ content...</div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 mb-6 mt-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#B08D57] transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">FAQ</span>
          {activeCategory && !isSearching && (
            <>
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              <span className="text-[#B08D57] font-medium">
                {faqCategories.find(c => c.id === activeCategory)?.name}
              </span>
            </>
          )}
          {isSearching && (
            <>
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              <span className="text-[#B08D57] font-medium">Search Results</span>
            </>
          )}
        </nav>
      </div>
      {/* Removed floating search - not needed on mobile */}
      {/* <AnimatePresence>
        {false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 md:top-4 right-4 z-40"
          >
            {searchQuery || isSearching ? (
              // Expanded search bar when active
              <motion.div
                initial={{ width: "48px", opacity: 0 }}
                animate={{ width: "300px", opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-lg shadow-lg rounded-full border border-neutral-200/50"
              >
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..." 
                    className="w-full bg-transparent py-3 pl-12 pr-10 text-sm placeholder-neutral-400 focus:outline-none"
                    autoFocus
                  />
                  
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-0 bottom-0 flex items-center justify-center"
                      aria-label="Clear search"
                    >
                      <span className="p-1 hover:bg-neutral-100 rounded-full transition-colors">
                        <svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              // Collapsed search button
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Create a temporary input to trigger search
                  const searchBar = document.querySelector('input[type="text"]') as HTMLInputElement;
                  if (searchBar) {
                    searchBar.focus();
                  } else {
                    setSearchQuery(' '); // Trigger expansion
                    setTimeout(() => setSearchQuery(''), 0);
                  }
                }}
                className="bg-white/90 backdrop-blur-lg shadow-lg rounded-full p-3 border border-neutral-200/50 hover:shadow-xl transition-all duration-300"
                aria-label="Search FAQ"
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-[#B08D57]" />
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Progress Indicator Bar */}
      <AnimatePresence>
        {showStickyNav && !isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 h-1 bg-neutral-100"
          >
            <div className="relative h-full flex">
              {faqCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`flex-1 h-full transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#B08D57]'
                      : 'bg-transparent hover:bg-neutral-200'
                  }`}
                  aria-label={`Go to ${category.name}`}
                >
                  <span className="sr-only">{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Beautiful modern search bar - matching conditions page */}
      <div className="max-w-3xl mx-auto mb-16 relative z-10">
        <div className="relative group">
          <div className="relative bg-white rounded-full border-2 border-slate-200 hover:border-[#B08D57] transition-all duration-300 shadow-xl hover:shadow-2xl">
            <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-[#B08D57]" />
            <input
              type="text"
              placeholder="Search FAQs (e.g., insurance, dry needling...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-14 py-5 bg-transparent rounded-full focus:outline-none focus:ring-4 focus:ring-[#B08D57]/20 text-sm md:text-lg font-medium text-slate-900 placeholder-slate-400 md:placeholder-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-0 bottom-0 flex items-center justify-center"
                aria-label="Clear search"
              >
                <span className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
        
        {/* Helpful search suggestions */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500 mb-3 font-light">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2 px-4 md:px-0">
            {['Direct billing', 'Insurance coverage', 'First appointment', 'Treatment duration', 'Manual therapy', 'Dry needling', 'Cupping therapy', 'Exercise programs', 'Sports injuries', 'Back pain', 'Neck pain', 'Referral needed'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setSearchQuery(suggestion)}
                className="text-xs px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#B08D57]/40 hover:bg-[#B08D57]/5 hover:text-[#B08D57] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Content */}
      <div className="max-w-6xl mx-auto">
        {/* Search Results */}
        {isSearching && (
          <div ref={searchResultsRef} className="max-w-4xl mx-auto scroll-mt-24">
            <div className="mb-10 bg-white shadow-lg rounded-2xl p-8 border border-neutral-100">
              <h2 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight">
                Search Results
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p className="text-primary-600 text-base md:text-lg">
                  {filteredQuestions.length === 0 
                    ? 'No questions found matching your search.' 
                    : `Found ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} matching "${searchQuery}"`}
                </p>
                {filteredQuestions.length > 0 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs md:text-sm font-medium bg-[#B08D57]/10 text-[#B08D57]">
                    {filteredQuestions.length} result{filteredQuestions.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              {filteredQuestions.length === 0 && (
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Try searching for: <span className="font-medium">insurance</span>, <span className="font-medium">treatment</span>, or <span className="font-medium">appointment</span>
                  </p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B08D57] text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Clear search and view all questions
                  </button>
                </div>
              )}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key="search-results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Show category label */}
                      {'category' in item && (
                        <div className="mb-2">
                          <span className="text-xs font-medium text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      )}
                      <FAQAccordion items={[item]} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        
        {/* Category Navigation (when not searching) */}
        {!isSearching && (
          <>
            <div className="sticky top-14 md:top-20 z-30 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 py-3 md:py-4 mb-8 md:mb-12 bg-white/90 md:bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`group flex flex-col items-center justify-center p-2 md:p-4 lg:p-6 rounded-lg md:rounded-xl transition-all duration-300 
                      md:transform md:hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-br from-[#B08D57]/15 to-[#D4AF37]/15 text-primary-900 border-2 border-[#B08D57] shadow-md'
                        : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-neutral-50 text-primary-700 border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className={`p-1.5 md:p-3 lg:p-4 rounded-lg mb-1 md:mb-2 transition-all duration-300 ${
                      activeCategory === category.id 
                        ? 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37] text-white shadow-sm scale-105' 
                        : 'bg-gradient-to-br from-neutral-50 to-neutral-100 text-primary-600 group-hover:from-primary-50 group-hover:to-primary-100 group-hover:text-primary-700'
                    }`}>
                      {getIcon(category.iconType)}
                    </div>
                    <span className="text-[10px] md:text-xs lg:text-sm font-semibold text-center leading-tight">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-20">
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  ref={(el) => sectionRefs.current[category.id] = el}
                  className="scroll-mt-40 md:scroll-mt-48"
                >
                  <FAQAccordion items={category.questions} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Removed Back to Top Button - already have one */}
    </>
  );
} 