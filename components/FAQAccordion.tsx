"use client";

import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

// Function to parse HTML links and convert them to JSX Link components
const parseLinksInText = (text: string) => {
  // Regular expression to match anchor tags
  const linkRegex = /<a\s+href="([^"]*)"[^>]*className="([^"]*)"[^>]*>([^<]*)<\/a>/gi;
  
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the Link component
    const [fullMatch, href, className, linkText] = match;
    parts.push(
      <Link 
        key={`link-${match.index}`}
        href={href}
        className={className}
      >
        {linkText}
      </Link>
    );
    
    lastIndex = match.index + fullMatch.length;
  }
  
  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  // If no links were found, return the original text
  return parts.length > 1 ? parts : text;
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
              {beforeList && <p className="text-primary-600 leading-relaxed">{parseLinksInText(decodeHtmlEntities(beforeList))}</p>}
              <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                {listItems.map((item, j) => (
                  <li key={j} className="text-primary-600 pl-1 leading-relaxed">{parseLinksInText(decodeHtmlEntities(item))}</li>
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
              parseLinksInText(part) : 
              <span key={j} className="font-medium text-primary-600 italic">{part}</span>
          );
          
          return (
            <p key={i} className="text-primary-600 leading-relaxed">
              {formattedParts}
            </p>
          );
        }
        
        // Handle "Yes" answers with more subtle formatting (no color change)
        if (paragraph.trim().startsWith("Yes")) {
          return (
            <p key={i} className="text-primary-600 leading-relaxed pl-3 border-l-2 border-neutral-300">
              <span className="font-medium">Yes. </span>
              {parseLinksInText(decodeHtmlEntities(paragraph.substring(4)))}
            </p>
          );
        }
        
        // Bold first sentence of paragraphs that look like headers (shorter than 60 chars)
        const sentences = paragraph.split('. ');
        if (sentences.length > 1 && sentences[0].length < 60) {
          return (
            <p key={i} className="text-primary-600 leading-relaxed">
              <span className="font-medium text-primary-700">{decodeHtmlEntities(sentences[0])}. </span>
              {parseLinksInText(decodeHtmlEntities(sentences.slice(1).join('. ')))}
            </p>
          );
        }
        
        // Highlight key terms with consistent styling
        const keyTerms = ["Conversation:", "Assessment:", "Plan:", "I Reassess Thoroughly:", "We Adjust the Strategy:", "I Collaborate and Advocate:", "Listening Attentively:", "Communicating Clearly & Honestly:", "Empowering You:", "Dedicated Time & Attention:", "Looking Holistically:", "Emphasis on Education and Active Participation:", "Partnership in Goal Setting:"];
        for (const term of keyTerms) {
          if (paragraph.includes(term)) {
            const parts = paragraph.split(term);
            const formattedParts = [];
            
            for (let j = 0; j < parts.length; j++) {
              if (j > 0) {
                formattedParts.push(
                  <span key={`term-${j}`} className="font-semibold text-primary-800">{term} </span>
                );
              }
              if (parts[j]) {
                formattedParts.push(<span key={`content-${j}`}>{parseLinksInText(decodeHtmlEntities(parts[j]))}</span>);
              }
            }
            
            return (
              <p key={i} className="text-primary-600 leading-relaxed">
                {formattedParts}
              </p>
            );
          }
        }
        
        return <p key={i} className="text-primary-600 leading-relaxed">{parseLinksInText(decodeHtmlEntities(paragraph))}</p>;
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
          // Scroll to the item after a delay to ensure rendering and animation
          setTimeout(() => {
            const element = triggerRefs.current[index];
            if (element) {
              const headerOffset = 120; // Account for fixed header and some padding
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
              });
            }
          }, 600); // Longer delay for initial page load
        }
      }
    }
  }, [items]);

  const toggleQuestion = (index: number) => {
    const wasActive = activeIndex === index;
    setActiveIndex(activeIndex === index ? null : index);
    
    // If opening a question, scroll to it after a delay to ensure animation completes
    if (!wasActive) {
      setTimeout(() => {
        const element = triggerRefs.current[index]; // Use trigger ref for more accurate positioning
        if (element) {
          const headerOffset = 120; // Increased offset for better positioning
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
            behavior: 'smooth'
          });
        }
      }, 300); // Slightly longer delay for better animation timing
    }
  };

  // Track if all answer spans have been generated to assign unique IDs for accessibility
  const generateId = (index: number) => `${baseId}-faq-${index}`;

  return (
    <div className="space-y-8">
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
            className={`border rounded-2xl overflow-hidden transition-all duration-500 transform ${
              isActive 
                ? 'bg-gradient-to-br from-white to-neutral-50 border-primary-200 shadow-xl shadow-primary-100/20 scale-[1.02]'
                : isHovering === index
                  ? 'bg-white border-neutral-300 shadow-lg hover:shadow-xl scale-[1.01]'
                  : 'bg-white border-neutral-200 shadow-md'
            }`}
          >
            <button
              ref={(el) => {
                if (triggerRefs.current) {
                  triggerRefs.current[index] = el;
                }
              }}
              id={questionId}
              aria-expanded={isActive}
              aria-controls={answerId}
              onClick={() => toggleQuestion(index)}
              className={`flex items-center justify-between w-full p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-t-2xl
                transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-primary-50/50 to-transparent' : ''}`}
            >
              <span className="flex-1 pr-6">
                <span className={`font-semibold text-lg md:text-xl transition-colors duration-300 leading-tight ${
                  isActive ? 'text-primary-900' : 'text-primary-800'
                }`}>
                  {decodeHtmlEntities(item.question)}
                </span>
                {item.category && (
                  <span className="ml-3 inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 shadow-sm">
                    {item.category}
                  </span>
                )}
              </span>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`flex-shrink-0 w-7 h-7 rounded-full p-1 transition-all duration-300 ${
                  isActive 
                    ? 'text-accent-dark bg-accent/10'
                    : 'text-primary-400 hover:text-primary-600 hover:bg-primary-50'
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
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    initial={{ y: -15, opacity: 0.8 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="p-6 md:p-8 pt-4 md:pt-6 border-t border-neutral-200/60 bg-gradient-to-br from-neutral-50/30 to-transparent"
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
    </div>
  );
};

export default FAQAccordion; 