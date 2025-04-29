"use client";

import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
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

// Function to decode HTML entities to their respective characters
const decodeHtmlEntities = (text: string): string => {
  // Use a pure string replacement approach instead of DOM manipulation
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
};

// Function to format answers with special formatting
const formatAnswer = (answer: string) => {
  // Split answer by paragraphs
  const paragraphs = answer.split('\n\n');
  
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, i) => {
        // Check if paragraph contains list-like content (starting with -)
        if (paragraph.includes('- ')) {
          // This is a list paragraph
          const listItems = paragraph.split('- ').filter(item => item.trim().length > 0);
          const beforeList = paragraph.split('- ')[0].trim();
          
          return (
            <div key={i} className="space-y-2">
              {beforeList && <p className="text-primary-700 font-medium">{decodeHtmlEntities(beforeList)}</p>}
              <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                {listItems.map((item, j) => (
                  <li key={j} className="text-primary-600 pl-1">{decodeHtmlEntities(item)}</li>
                ))}
              </ul>
            </div>
          );
        }
        
        // Check for emphasized phrases like "... understand the 'why' ..."
        const hasEmphasis = paragraph.includes("'") && paragraph.split("'").length > 2;
        
        if (hasEmphasis) {
          const parts = paragraph.split("'");
          const formattedParts = parts.map((part, j) => 
            j % 2 === 0 ? 
              part : 
              <span key={j} className="font-medium text-accent-dark italic">{part}</span>
          );
          
          return (
            <p key={i} className="text-primary-600 leading-relaxed">
              {formattedParts}
            </p>
          );
        }
        
        // Highlight key phrases like "assessment" with accent color, "Yes" with accent background
        if (paragraph.trim().startsWith("Yes")) {
          return (
            <p key={i} className="text-primary-700 leading-relaxed pl-3 border-l-2 border-accent">
              <span className="font-medium text-accent-dark">Yes. </span>
              {decodeHtmlEntities(paragraph.substring(4))}
            </p>
          );
        }
        
        // Bold first sentence of paragraphs that look like headers (shorter than 60 chars)
        const sentences = paragraph.split('. ');
        if (sentences.length > 1 && sentences[0].length < 60) {
          return (
            <p key={i} className="text-primary-600 leading-relaxed">
              <span className="font-medium text-primary-800">{decodeHtmlEntities(sentences[0])}. </span>
              {decodeHtmlEntities(sentences.slice(1).join('. '))}
            </p>
          );
        }
        
        // Highlight conversation, assessment, plan type of words
        const keyTerms = ["Conversation:", "Assessment:", "Plan:", "I Reassess Thoroughly:", "We Adjust the Strategy:", "I Collaborate and Advocate:"];
        for (const term of keyTerms) {
          if (paragraph.includes(term)) {
            const parts = paragraph.split(term);
            const formattedParts = [];
            
            for (let j = 0; j < parts.length; j++) {
              if (j > 0) {
                formattedParts.push(
                  <span key={`term-${j}`} className="font-semibold text-accent-dark">{term} </span>
                );
              }
              if (parts[j]) {
                formattedParts.push(<span key={`content-${j}`}>{parts[j]}</span>);
              }
            }
            
            return (
              <p key={i} className="text-primary-600 leading-relaxed bg-primary-50/60 p-2 rounded">
                {formattedParts}
              </p>
            );
          }
        }
        
        return <p key={i} className="text-primary-600 leading-7">{decodeHtmlEntities(paragraph)}</p>;
      })}
    </div>
  );
};

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
    <div className="space-y-6">
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
            onMouseEnter={() => setIsHovering(index)}
            onMouseLeave={() => setIsHovering(null)}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              isActive 
                ? 'bg-white border-accent shadow-lg' 
                : isHovering === index
                  ? 'bg-white border-neutral-300 shadow-sm'
                  : 'bg-white border-neutral-200'
            }`}
          >
            <button
              id={questionId}
              aria-expanded={isActive}
              aria-controls={answerId}
              onClick={() => toggleQuestion(index)}
              className={`flex items-center justify-between w-full p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-t-xl
                transition-all duration-300 ${isActive ? 'bg-accent/5' : ''}`}
            >
              <span className="flex-1 pr-4">
                <span className={`font-medium text-lg md:text-xl transition-colors duration-200 ${
                  isActive ? 'text-primary-900' : 'text-primary-800'
                }`}>
                  {decodeHtmlEntities(item.question)}
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
                className={`flex-shrink-0 w-6 h-6 rounded-full ${
                  isActive 
                    ? 'bg-accent/20 text-accent-dark p-1' 
                    : 'text-primary-400'
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
                    initial={{ y: -10, opacity: 0.8 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 md:p-6 pt-3 md:pt-4 border-t border-neutral-100"
                  >
                    <div className="text-primary-600 leading-relaxed prose prose-sm md:prose max-w-none">
                      {formatAnswer(item.answer)}
                    </div>
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
            className="px-4 py-2 text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors font-medium"
          >
            Reset All Questions
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion; 