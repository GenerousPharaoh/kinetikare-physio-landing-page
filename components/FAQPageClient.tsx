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
    
    // Filter questions based on search query
    const filtered = allQuestions.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
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
      {/* Minimal Dot Navigation */}
      <AnimatePresence>
        {showStickyNav && !isSearching && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
          >
            <div className="flex flex-col space-y-3 relative">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group relative flex items-center"
                >
                  {/* Dot */}
                  <button
                    onClick={() => scrollToSection(category.id)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm relative z-10 ${
                      activeCategory === category.id
                        ? 'bg-[#B08D57] scale-125 shadow-md'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to ${category.name} section`}
                  />
                  
                  {/* Static label - always present but invisible */}
                  <div 
                    className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  >
                    <div className="bg-slate-800/90 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap backdrop-blur-sm shadow-lg border border-slate-700/50">
                      {category.name}
                      {/* Arrow */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-[4px] border-b-[4px] border-r-[4px] border-transparent border-r-slate-800/90"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                <FAQAccordion items={filteredQuestions} />
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