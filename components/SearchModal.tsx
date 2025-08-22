"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  MagnifyingGlassIcon,
  XMarkIcon,
  DocumentTextIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { getAllConditions } from '@/lib/conditions-data';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'condition' | 'faq' | 'service' | 'page';
  title: string;
  description?: string;
  url: string;
  category?: string;
  score: number;
}

// Fuzzy search helper
function fuzzyMatch(text: string, query: string): { matches: boolean; score: number } {
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();
  
  // Exact match - highest score
  if (textLower === queryLower) {
    return { matches: true, score: 100 };
  }
  
  // Contains exact phrase - high score
  if (textLower.includes(queryLower)) {
    const position = textLower.indexOf(queryLower);
    // Higher score if match is at the beginning
    const positionScore = position === 0 ? 90 : 80 - (position * 2);
    return { matches: true, score: Math.max(positionScore, 50) };
  }
  
  // All words present - medium score
  const queryWords = queryLower.split(/\s+/);
  const allWordsPresent = queryWords.every(word => textLower.includes(word));
  if (allWordsPresent) {
    return { matches: true, score: 40 + (queryWords.length * 5) };
  }
  
  // Some words present - lower score
  const matchingWords = queryWords.filter(word => textLower.includes(word));
  if (matchingWords.length > 0) {
    const score = 20 + (matchingWords.length / queryWords.length * 20);
    return { matches: true, score };
  }
  
  // Fuzzy character matching for typos
  let queryIndex = 0;
  let textIndex = 0;
  let matches = 0;
  
  while (queryIndex < queryLower.length && textIndex < textLower.length) {
    if (queryLower[queryIndex] === textLower[textIndex]) {
      matches++;
      queryIndex++;
    }
    textIndex++;
  }
  
  if (matches >= queryLower.length * 0.7) {
    return { matches: true, score: matches / queryLower.length * 30 };
  }
  
  return { matches: false, score: 0 };
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Improved search logic with fuzzy matching and scoring
  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const searchResults: SearchResult[] = [];
    const conditions = getAllConditions();

    // Search conditions with detailed matching
    conditions.forEach(condition => {
      const nameMatch = fuzzyMatch(condition.name, searchTerm);
      const categoryMatch = condition.category ? fuzzyMatch(condition.category, searchTerm) : { matches: false, score: 0 };
      const overviewMatch = condition.overview ? fuzzyMatch(condition.overview, searchTerm) : { matches: false, score: 0 };
      const symptomsMatch = condition.symptoms ? 
        fuzzyMatch(condition.symptoms.join(' '), searchTerm) : { matches: false, score: 0 };
      const treatmentsMatch = condition.treatments ? 
        fuzzyMatch(condition.treatments.map(t => t.name).join(' '), searchTerm) : { matches: false, score: 0 };
      
      // Calculate total score
      const totalScore = Math.max(
        nameMatch.score * 2, // Name matches are most important
        categoryMatch.score * 1.5,
        overviewMatch.score,
        symptomsMatch.score * 0.8,
        treatmentsMatch.score * 0.7
      );
      
      if (totalScore > 15) {
        searchResults.push({
          type: 'condition',
          title: condition.name,
          description: condition.overview?.substring(0, 150) || condition.shortDescription,
          url: `/conditions/${condition.slug}`,
          category: condition.category,
          score: totalScore
        });
      }
    });

    // Add FAQ matches
    const faqItems = [
      { q: 'How do I book an appointment?', keywords: ['book', 'appointment', 'schedule', 'booking'] },
      { q: 'Is physiotherapy covered by insurance?', keywords: ['insurance', 'coverage', 'ohip', 'billing'] },
      { q: 'What should I wear to my appointment?', keywords: ['wear', 'clothing', 'clothes', 'dress'] },
      { q: 'How many sessions will I need?', keywords: ['sessions', 'how many', 'duration', 'treatment length'] },
      { q: 'Do I need a referral?', keywords: ['referral', 'doctor', 'prescription'] },
      { q: 'What is direct billing?', keywords: ['direct billing', 'insurance', 'payment'] }
    ];

    faqItems.forEach(faq => {
      const questionMatch = fuzzyMatch(faq.q, searchTerm);
      const keywordMatch = fuzzyMatch(faq.keywords.join(' '), searchTerm);
      const score = Math.max(questionMatch.score, keywordMatch.score * 0.8);
      
      if (score > 20) {
        searchResults.push({
          type: 'faq',
          title: faq.q,
          url: '/faq',
          score
        });
      }
    });

    // Add service pages
    const services = [
      { 
        title: 'Manual Therapy',
        keywords: ['manual', 'hands on', 'manipulation', 'mobilization', 'massage'],
        description: 'Hands-on treatment techniques'
      },
      { 
        title: 'Dry Needling / IMS',
        keywords: ['dry needling', 'ims', 'needle', 'trigger point', 'acupuncture'],
        description: 'Intramuscular stimulation for pain relief'
      },
      { 
        title: 'Exercise Therapy',
        keywords: ['exercise', 'strengthening', 'rehab', 'rehabilitation', 'workout'],
        description: 'Customized exercise programs'
      },
      { 
        title: 'Sports Rehabilitation',
        keywords: ['sports', 'athlete', 'injury', 'performance', 'return to sport'],
        description: 'Get back to your sport safely'
      }
    ];

    services.forEach(service => {
      const titleMatch = fuzzyMatch(service.title, searchTerm);
      const keywordMatch = fuzzyMatch(service.keywords.join(' '), searchTerm);
      const score = Math.max(titleMatch.score * 1.5, keywordMatch.score);
      
      if (score > 20) {
        searchResults.push({
          type: 'service',
          title: service.title,
          description: service.description,
          url: '/services',
          score
        });
      }
    });

    // Static pages
    const staticPages = [
      { 
        title: 'About Kareem Hassanein',
        keywords: ['about', 'kareem', 'hassanein', 'physiotherapist', 'experience', 'credentials', 'bio'],
        url: '/about'
      },
      { 
        title: 'Contact & Location',
        keywords: ['contact', 'location', 'address', 'phone', 'email', 'burlington', 'palladium'],
        url: '/#contact'
      }
    ];

    staticPages.forEach(page => {
      const titleMatch = fuzzyMatch(page.title, searchTerm);
      const keywordMatch = fuzzyMatch(page.keywords.join(' '), searchTerm);
      const score = Math.max(titleMatch.score, keywordMatch.score);
      
      if (score > 20) {
        searchResults.push({
          type: 'page',
          title: page.title,
          url: page.url,
          score
        });
      }
    });

    // Sort by score (highest first) and limit results
    return searchResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, [searchTerm]);

  // Update results when search changes
  useEffect(() => {
    setResults(searchResults);
    setSelectedIndex(0);
  }, [searchResults]);

  // Save search when selecting a result
  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const newRecent = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    
    router.push(result.url);
    onClose();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'condition':
        return <HeartIcon className="h-5 w-5" />;
      case 'faq':
        return <QuestionMarkCircleIcon className="h-5 w-5" />;
      case 'service':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'page':
        return <SparklesIcon className="h-5 w-5" />;
      default:
        return <DocumentTextIcon className="h-5 w-5" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-[5%] md:top-[10%] md:left-1/2 md:-translate-x-1/2 md:w-[90%] lg:w-[80%] xl:w-[70%] max-w-4xl z-50"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 via-transparent to-[#D4AF37]/5 pointer-events-none"></div>
              
              <div className="relative flex flex-col h-full">
                {/* Search Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-5 sm:h-6 w-5 sm:w-6 text-white/60" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search conditions, treatments..."
                        className="w-full pl-10 sm:pl-14 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-base sm:text-lg"
                      />
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 sm:p-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <XMarkIcon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                    </button>
                  </div>
                  
                  {/* Quick Tips - Hide on mobile when typing */}
                  {(!searchTerm || searchTerm.length < 2) && (
                    <div className="flex items-center gap-2 mt-3">
                      <FireIcon className="h-4 w-4 text-[#D4AF37]" />
                      <p className="text-xs sm:text-sm text-white/80">
                        Popular: back pain, knee, insurance
                      </p>
                    </div>
                  )}
                </div>

                {/* Results - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                  {searchTerm.length >= 2 ? (
                    results.length > 0 ? (
                      <div className="p-2">
                        {results.map((result, index) => (
                          <button
                            key={`${result.type}-${result.title}-${index}`}
                            onClick={() => handleResultClick(result)}
                            className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all ${
                              index === selectedIndex 
                                ? 'bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 border border-[#B08D57]/30' 
                                : 'hover:bg-gray-50'
                            }`}
                            onMouseEnter={() => setSelectedIndex(index)}
                          >
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                                index === selectedIndex 
                                  ? 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37] text-white' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {getIcon(result.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start sm:items-center gap-2 flex-col sm:flex-row">
                                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{result.title}</h3>
                                  {result.category && (
                                    <span className="text-xs px-2 py-0.5 bg-[#B08D57]/10 text-[#B08D57] rounded-full">
                                      {result.category}
                                    </span>
                                  )}
                                </div>
                                {result.description && (
                                  <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                                    {result.description}
                                  </p>
                                )}
                              </div>
                              {index === selectedIndex && (
                                <ArrowRightIcon className="h-4 sm:h-5 w-4 sm:w-5 text-[#B08D57] flex-shrink-0 mt-1 hidden sm:block" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 sm:p-12 text-center">
                        <div className="inline-flex p-3 sm:p-4 bg-gray-100 rounded-full mb-4">
                          <MagnifyingGlassIcon className="h-6 sm:h-8 w-6 sm:w-8 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">No results found for "{searchTerm}"</p>
                        <p className="text-xs sm:text-sm text-gray-500">Try a different search term</p>
                      </div>
                    )
                  ) : searchTerm.length > 0 ? (
                    <div className="p-8 sm:p-12 text-center">
                      <p className="text-gray-500 text-sm sm:text-base">Keep typing to search...</p>
                    </div>
                  ) : (
                    <div className="p-4 sm:p-8">
                      {/* Recent Searches */}
                      {recentSearches.length > 0 && (
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <ClockIcon className="h-4 sm:h-5 w-4 sm:w-5" />
                            Recent Searches
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {recentSearches.map(term => (
                              <button
                                key={term}
                                onClick={() => setSearchTerm(term)}
                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-xs sm:text-sm text-gray-700"
                              >
                                {term}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Popular Searches */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Popular Searches</h3>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                          {['Back Pain', 'Knee Injury', 'Dry Needling', 'Insurance', 'Booking'].map(term => (
                            <button
                              key={term}
                              onClick={() => setSearchTerm(term.toLowerCase())}
                              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 border border-[#B08D57]/20 rounded-lg hover:border-[#B08D57]/40 transition-colors text-xs sm:text-sm font-medium text-gray-700"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer - Hide on mobile */}
                {results.length > 0 && searchTerm.length >= 2 && (
                  <div className="hidden sm:block border-t border-gray-100 px-6 py-3 bg-gray-50">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-500">
                        <span className="flex items-center gap-1">
                          <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs">↑↓</kbd>
                          Navigate
                        </span>
                        <span className="flex items-center gap-1">
                          <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs">Enter</kbd>
                          Select
                        </span>
                        <span className="flex items-center gap-1">
                          <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs">Esc</kbd>
                          Close
                        </span>
                      </div>
                      <span className="text-gray-500">
                        {results.length} result{results.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}