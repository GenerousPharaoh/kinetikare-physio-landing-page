"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
  const iconProps = { className: "w-6 h-6" };
  
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
  const [showFloatingSearch, setShowFloatingSearch] = useState(false);

  // Refs for each section
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
      
      // Show floating search when scrolled past the main search bar
      setShowFloatingSearch(scrollY > 300);
      
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
      'technique': ['technique', 'manual', 'dry needling', 'cupping', 'graston', 'IASTM', 'treatment'],
    };
    
    // Expand search terms with related keywords
    const expandedTerms = searchTerms.flatMap(term => {
      const relatedTerms = [term];
      Object.entries(keywordMap).forEach(([key, values]) => {
        if (values.some(v => v.includes(term) || term.includes(v))) {
          relatedTerms.push(...values);
        }
      });
      return relatedTerms;
    });
    
    // Score and filter questions
    const scoredQuestions = allQuestions.map(item => {
      let score = 0;
      const questionLower = item.question.toLowerCase();
      const answerLower = typeof item.answer === 'string' ? item.answer.toLowerCase() : '';
      
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
      
      // Bonus for matching multiple terms
      const matchedOriginalTerms = searchTerms.filter(term => 
        questionLower.includes(term) || answerLower.includes(term)
      );
      if (matchedOriginalTerms.length > 1) {
        score += matchedOriginalTerms.length * 3;
      }
      
      return { ...item, score };
    });
    
    // Filter and sort by relevance
    const filtered = scoredQuestions
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...item }) => item);
    
    setFilteredQuestions(filtered);
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
      {/* Floating Search Bar */}
      <AnimatePresence>
        {showFloatingSearch && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-50 px-4"
          >
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-3 border border-neutral-200">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
                  </div>
                  
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search FAQ..." 
                    className="block w-full bg-white/80 border border-neutral-300 rounded-full py-2.5 pl-10 pr-10 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                  />
                  
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 mr-3 flex items-center"
                      aria-label="Clear search"
                    >
                      <svg className="h-4 w-4 text-neutral-400 hover:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Back to Top / Categories Button */}
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => {
                if (isSearching) {
                  setSearchQuery('');
                  setIsSearching(false);
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative bg-[#B08D57] text-white p-4 rounded-full shadow-2xl hover:bg-[#D4AF37] transition-all duration-300 hover:scale-110"
              aria-label={isSearching ? "Clear search and go to top" : "Back to top"}
            >
              {isSearching ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              )}
              
              {/* Tooltip */}
              <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isSearching ? "Clear search" : "Back to top"}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced search bar */}
      <div className="max-w-2xl mx-auto mb-16 relative z-10">
        <div className="bg-white shadow-xl rounded-2xl p-4 border border-neutral-100 hover:shadow-2xl transition-all duration-300">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 group-hover:text-accent group-focus-within:text-accent transition-colors duration-200" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for questions..." 
              className="block w-full bg-white border border-neutral-300 rounded-full py-3.5 pl-12 pr-12 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent shadow-sm group-hover:shadow-md transition-all duration-200"
            />
            
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 mr-3 flex items-center justify-center h-8 w-8 my-auto rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                aria-label="Clear search"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* FAQ Content */}
      <div className="max-w-6xl mx-auto">
        {/* Search Results */}
        {isSearching && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 bg-white shadow-lg rounded-2xl p-8 border border-neutral-100">
              <h2 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight">
                Search Results
              </h2>
              <p className="text-primary-600 text-lg">
                {filteredQuestions.length === 0 
                  ? 'No questions found matching your search.' 
                  : `Found ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} matching "${searchQuery}"`}
              </p>
              {filteredQuestions.length === 0 && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Clear search and view all questions
                </button>
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
                          <span className="text-xs font-medium text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded-full">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`group flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 
                    transform hover:scale-105 hover:-translate-y-1 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-br from-primary-50 to-primary-100 text-primary-900 border-2 border-primary-200 shadow-xl shadow-primary-100/50'
                      : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-neutral-50 text-primary-700 border border-neutral-200 hover:border-neutral-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`p-4 rounded-xl mb-4 transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-to-br from-primary-100 to-primary-200 text-primary-900 shadow-lg' 
                      : 'bg-gradient-to-br from-neutral-50 to-neutral-100 text-primary-600 group-hover:from-primary-50 group-hover:to-primary-100 group-hover:text-primary-700'
                  }`}>
                    {getIcon(category.iconType)}
                  </div>
                  <span className="text-sm font-semibold text-center leading-tight">{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Sections */}
            <div className="space-y-20">
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  ref={(el) => sectionRefs.current[category.id] = el}
                  className="scroll-mt-32"
                >
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl mb-6 shadow-lg">
                      <div className="text-primary-700">
                        {getIcon(category.iconType)}
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 tracking-tight">
                      {category.name}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto rounded-full"></div>
                  </div>
                  
                  <FAQAccordion items={category.questions} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
} 