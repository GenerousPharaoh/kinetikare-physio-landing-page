'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQAccordion, { FaqItem } from '@/components/FAQAccordion';
import SearchBar from '@/components/ui/SearchBar';
import Link from 'next/link';

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  questions: FaqItem[];
}

interface FAQClientProps {
  faqCategories: FAQCategory[];
}

export default function FAQClient({ faqCategories }: FAQClientProps) {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState<FaqItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
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
  }, [searchQuery, faqCategories]);

  // Get current questions to display
  const currentQuestions = isSearching 
    ? filteredQuestions 
    : faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  return (
    <>
      {/* Enhanced search bar */}
      <div className="max-w-2xl mx-auto mb-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-3 border border-neutral-200">
          <SearchBar 
            placeholder="Search for questions..." 
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onClear={() => setSearchQuery('')}
          />
        </div>
      </div>
      
      {!isSearching && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center p-5 rounded-xl transition-all duration-300 
                transform hover:scale-[1.02] ${
                activeCategory === category.id
                  ? 'bg-primary-100 text-primary-900 border-2 border-primary-300 shadow-md'
                  : 'bg-white hover:bg-neutral-50 text-primary-700 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
              }`}
            >
              <div className={`p-3 rounded-full mb-3 ${
                activeCategory === category.id 
                  ? 'bg-primary-200 text-primary-900' 
                  : 'bg-neutral-100 text-primary-600'
              }`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>
      )}
      
      <div className="max-w-3xl mx-auto">
        {isSearching && (
          <div className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-neutral-200">
            <h2 className="text-2xl font-semibold text-primary-900 mb-2">
              Search Results
            </h2>
            <p className="text-primary-600">
              {filteredQuestions.length === 0 
                ? 'No questions found matching your search.' 
                : `Found ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} matching "${searchQuery}"`}
            </p>
            {filteredQuestions.length === 0 && (
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent hover:text-accent-dark rounded-lg transition-colors"
              >
                Clear search and view all questions
              </button>
            )}
          </div>
        )}
        
        {!isSearching && (
          <div className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="bg-primary-100 p-3 rounded-full">
                {faqCategories.find(cat => cat.id === activeCategory)?.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary-900 mb-1">
                  {faqCategories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                <p className="text-primary-600">
                  {faqCategories.find(cat => cat.id === activeCategory)?.questions.length} questions in this category
                </p>
              </div>
            </div>
          </div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={isSearching ? 'search' : activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FAQAccordion items={currentQuestions} />
          </motion.div>
        </AnimatePresence>
        
        {currentQuestions.length > 0 && !isSearching && (
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-neutral-200">
              <p className="text-primary-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 