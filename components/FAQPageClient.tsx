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
      {/* Minimalist Floating Search - Collapsed by default */}
      <AnimatePresence>
        {showFloatingSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 z-40"
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
                    placeholder="Search questions..." 
                    className="w-full bg-transparent py-3 pl-12 pr-10 text-sm placeholder-neutral-400 focus:outline-none"
                    autoFocus
                  />
                  
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 mr-3 flex items-center"
                    aria-label="Clear search"
                  >
                    <svg className="h-4 w-4 text-neutral-400 hover:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
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


      {/* Beautiful modern search bar */}
      <div className="max-w-3xl mx-auto mb-16 relative z-10">
        <div className="relative group">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#B08D57]/20 to-[#D4AF37]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100">
            <div className="flex items-center">
              <div className="pl-6 pr-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#B08D57]" />
              </div>
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What would you like to know?" 
                className="flex-1 py-4 pr-4 text-base placeholder-neutral-400 focus:outline-none bg-transparent"
              />
              
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchQuery('')}
                  className="mr-2 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              )}
              
              {/* Search button */}
              <button className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white px-6 py-2 rounded-full mr-2 font-medium hover:shadow-lg transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
        
        {/* Helpful search suggestions */}
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral-500 mb-2">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Insurance', 'First visit', 'How many sessions', 'Does it hurt'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setSearchQuery(suggestion)}
                className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 hover:bg-[#B08D57]/10 hover:text-[#B08D57] transition-all duration-200"
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