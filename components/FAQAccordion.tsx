"use client";

import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string; // Optional property for search results
  id?: string; // Optional ID for direct linking
}

interface FAQAccordionProps {
  items: FaqItem[];
  defaultOpen?: number | null;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpen = null }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultOpen);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  useEffect(() => {
    // Handle direct link to a specific FAQ via URL hash
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const faqId = hash.replace('#', '');
        // Only try to find by ID if the items have an id property
        const index = items.findIndex(item => item.id && item.id === faqId);
        if (index !== -1) {
          setActiveIndex(index);
          // Scroll to the item after a slight delay to ensure rendering
          setTimeout(() => {
            accordionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    }
  }, [items]);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Track if all answer spans have been generated to assign unique IDs for accessibility
  const generateId = (index: number) => `${baseId}-faq-${index}`;

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const questionId = `${baseId}-question-${index}`;
        const answerId = `${baseId}-answer-${index}`;
        
        return (
          <div 
            key={index} 
            ref={(el) => {
              if (accordionRefs.current) {
                accordionRefs.current[index] = el;
              }
            }}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              isActive 
                ? 'bg-white border-accent shadow-md' 
                : 'bg-white border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <button
              id={questionId}
              aria-expanded={isActive}
              aria-controls={answerId}
              onClick={() => toggleQuestion(index)}
              className="flex items-center justify-between w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-t-xl"
            >
              <span className="flex-1 pr-4">
                <span className={`font-medium text-lg transition-colors duration-200 ${
                  isActive ? 'text-primary-900' : 'text-primary-800'
                }`}>
                  {item.question}
                </span>
                {item.category && (
                  <span className="ml-2 inline-block px-2 py-0.5 text-xs rounded-full bg-primary-100 text-primary-800">
                    {item.category}
                  </span>
                )}
              </span>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 w-5 h-5 transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-primary-400'
                }`}
              >
                <ChevronDownIcon />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isActive && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 pt-0 border-t border-neutral-100"
                  >
                    <p className="text-primary-600 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      
      {items.length > 10 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setActiveIndex(null)}
            className="text-accent hover:text-accent-dark transition-colors font-medium"
          >
            Reset All Questions
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion; 