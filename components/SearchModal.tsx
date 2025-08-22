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
  SparklesIcon
} from '@heroicons/react/24/outline';
import { getAllConditions } from '@/lib/conditions-data';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'condition' | 'faq' | 'service';
  title: string;
  description?: string;
  url: string;
  category?: string;
  matches?: string[];
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search logic
  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const term = searchTerm.toLowerCase();
    const searchResults: SearchResult[] = [];
    const conditions = getAllConditions();

    // Search conditions
    conditions.forEach(condition => {
      const nameMatch = condition.name.toLowerCase().includes(term);
      const categoryMatch = condition.category?.toLowerCase().includes(term);
      const overviewMatch = condition.overview?.toLowerCase().includes(term);
      
      if (nameMatch || categoryMatch || overviewMatch) {
        searchResults.push({
          type: 'condition',
          title: condition.name,
          description: condition.overview?.split('.')[0] + '.' || condition.shortDescription,
          url: `/conditions/${condition.slug}`,
          category: condition.category,
          matches: [
            nameMatch && 'name',
            categoryMatch && 'category',
            overviewMatch && 'overview'
          ].filter(Boolean) as string[]
        });
      }
    });

    // Add static pages
    const staticPages = [
      { 
        type: 'service' as const, 
        title: 'Services', 
        description: 'Our comprehensive physiotherapy treatments',
        url: '/services',
        keywords: ['treatment', 'therapy', 'manual', 'dry needling', 'exercise']
      },
      { 
        type: 'faq' as const, 
        title: 'FAQ', 
        description: 'Frequently asked questions',
        url: '/faq',
        keywords: ['question', 'insurance', 'booking', 'appointment', 'cost']
      },
      { 
        type: 'service' as const, 
        title: 'About', 
        description: 'Learn about Kareem Hassanein',
        url: '/about',
        keywords: ['kareem', 'physiotherapist', 'experience', 'credentials']
      }
    ];

    staticPages.forEach(page => {
      if (page.title.toLowerCase().includes(term) || 
          page.keywords.some(k => k.includes(term))) {
        searchResults.push({
          type: page.type,
          title: page.title,
          description: page.description,
          url: page.url
        });
      }
    });

    // Sort by relevance (exact matches first)
    return searchResults.sort((a, b) => {
      const aExact = a.title.toLowerCase() === term;
      const bExact = b.title.toLowerCase() === term;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return 0;
    }).slice(0, 8); // Limit to 8 results
  }, [searchTerm]);

  // Update results when search changes
  useEffect(() => {
    setResults(searchResults);
    setSelectedIndex(0);
  }, [searchResults]);

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
            router.push(results[selectedIndex].url);
            onClose();
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, router, onClose]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'condition':
        return <HeartIcon className="h-5 w-5" />;
      case 'faq':
        return <QuestionMarkCircleIcon className="h-5 w-5" />;
      case 'service':
        return <DocumentTextIcon className="h-5 w-5" />;
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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-20 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 pointer-events-none"></div>
              
              <div className="relative">
                {/* Search Header */}
                <div className="bg-gradient-to-r from-blue-900 to-purple-700 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 relative">
                      <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white/60" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search conditions, services, or FAQs..."
                        className="w-full pl-14 pr-4 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-lg"
                      />
                    </div>
                    <button
                      onClick={onClose}
                      className="p-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                  
                  {/* Quick Tips */}
                  <div className="flex items-center gap-2 mt-3">
                    <SparklesIcon className="h-4 w-4 text-blue-200" />
                    <p className="text-sm text-blue-200">
                      Try: "back pain", "knee", "insurance", or "booking"
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {searchTerm.length >= 2 ? (
                    results.length > 0 ? (
                      <div className="p-2">
                        {results.map((result, index) => (
                          <Link
                            key={`${result.type}-${result.title}`}
                            href={result.url}
                            onClick={onClose}
                            className={`block p-4 rounded-xl transition-all ${
                              index === selectedIndex 
                                ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200' 
                                : 'hover:bg-gray-50'
                            }`}
                            onMouseEnter={() => setSelectedIndex(index)}
                          >
                            <div className="flex items-start gap-4">
                              <div className={`p-2 rounded-lg ${
                                index === selectedIndex 
                                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {getIcon(result.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-gray-900">{result.title}</h3>
                                  {result.category && (
                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                      {result.category}
                                    </span>
                                  )}
                                </div>
                                {result.description && (
                                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    {result.description}
                                  </p>
                                )}
                              </div>
                              {index === selectedIndex && (
                                <ArrowRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-12 text-center">
                        <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                          <MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-2">No results found for "{searchTerm}"</p>
                        <p className="text-sm text-gray-500">Try searching for a different term</p>
                      </div>
                    )
                  ) : searchTerm.length > 0 ? (
                    <div className="p-12 text-center">
                      <p className="text-gray-500">Keep typing to search...</p>
                    </div>
                  ) : (
                    <div className="p-8">
                      <h3 className="font-semibold text-gray-900 mb-4">Popular Searches</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Back Pain', 'Knee Injury', 'Dry Needling', 'Insurance', 'Book Appointment'].map(term => (
                          <button
                            key={term}
                            onClick={() => setSearchTerm(term.toLowerCase())}
                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg hover:border-blue-200 transition-colors text-sm font-medium text-gray-700"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {results.length > 0 && searchTerm.length >= 2 && (
                  <div className="border-t border-gray-100 px-6 py-3 bg-gray-50">
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