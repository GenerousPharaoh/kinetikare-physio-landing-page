"use client";

import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
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

// Function to parse markdown in text and convert to React elements
const parseMarkdown = (text: string): React.ReactNode => {
  // Handle bold text
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove the ** markers and render as bold
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-semibold text-slate-800">{boldText}</strong>;
    }
    return part;
  });
};

// Function to parse HTML links and convert them to JSX Link components
const parseLinksInText = (text: string | React.ReactNode | React.ReactNode[]): React.ReactNode => {
  // If it's already a React node array, return it
  if (Array.isArray(text) || React.isValidElement(text)) {
    return text;
  }

  // If it's not a string, return as is
  if (typeof text !== 'string') {
    return text;
  }

  // First parse markdown
  const withMarkdown = parseMarkdown(text);

  // If parseMarkdown returned a string, parse links
  if (typeof withMarkdown === 'string') {
    // Regular expression to match anchor tags
    const linkRegex = /<a\s+href="([^"]*)"[^>]*className="([^"]*)"[^>]*>([^<]*)<\/a>/gi;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(withMarkdown)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(withMarkdown.substring(lastIndex, match.index));
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
    if (lastIndex < withMarkdown.length) {
      parts.push(withMarkdown.substring(lastIndex));
    }

    // If no links were found, return the markdown parsed text
    return parts.length > 1 ? parts : withMarkdown;
  }

  // If parseMarkdown returned an array, process each element for links
  if (Array.isArray(withMarkdown)) {
    return withMarkdown.map((element, idx) => {
      if (typeof element === 'string') {
        // Regular expression to match anchor tags
        const linkRegex = /<a\s+href="([^"]*)"[^>]*className="([^"]*)"[^>]*>([^<]*)<\/a>/gi;

        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(element)) !== null) {
          // Add text before the link
          if (match.index > lastIndex) {
            parts.push(element.substring(lastIndex, match.index));
          }

          // Add the Link component
          const [fullMatch, href, className, linkText] = match;
          parts.push(
            <Link
              key={`link-${idx}-${match.index}`}
              href={href}
              className={className}
            >
              {linkText}
            </Link>
          );

          lastIndex = match.index + fullMatch.length;
        }

        // Add remaining text after the last link
        if (lastIndex < element.length) {
          parts.push(element.substring(lastIndex));
        }

        // If no links were found, return the original element
        return parts.length > 1 ? <React.Fragment key={idx}>{parts}</React.Fragment> : element;
      }
      return element;
    });
  }

  return withMarkdown;
};

// Function to format answers with special formatting
const formatAnswer = (answer: string | React.ReactNode) => {
  // If answer is already a React node (JSX), return it directly
  if (typeof answer !== 'string') {
    return answer;
  }

  // Continue with existing string processing for string answers
  // Split answer by paragraphs
  const paragraphs = answer.split('\n\n');

  return (
    <div className="space-y-4 text-slate-600 leading-relaxed font-light">
      {paragraphs.map((paragraph, i) => {
        // Check if paragraph contains list-like content (starting with -)
        if (paragraph.includes('- ')) {
          // This is a list paragraph
          const listItems = paragraph.split('- ').filter(item => item.trim().length > 0);
          const beforeList = paragraph.split('- ')[0].trim();

          return (
            <div key={i} className="space-y-3">
              {beforeList && <p className="text-slate-600 leading-relaxed">{parseLinksInText(decodeHtmlEntities(beforeList))}</p>}
              <ul className="list-none pl-4 space-y-2">
                {listItems.map((item, j) => (
                  <li key={j} className="text-slate-600 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#B08D57]/60">
                    {parseLinksInText(decodeHtmlEntities(item))}
                  </li>
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
              <span key={j} className="font-medium text-slate-700 italic">{part}</span>
          );

          return (
            <p key={i} className="text-slate-600 leading-relaxed">
              {formattedParts}
            </p>
          );
        }

        // Handle "Yes" answers with more subtle formatting (no color change)
        if (paragraph.trim().startsWith("Yes")) {
          return (
            <p key={i} className="text-slate-600 leading-relaxed pl-4 border-l-2 border-[#B08D57]/30">
              <span className="font-semibold text-slate-800">Yes. </span>
              {parseLinksInText(decodeHtmlEntities(paragraph.substring(4)))}
            </p>
          );
        }

        // Bold first sentence of paragraphs that look like headers (shorter than 60 chars)
        const sentences = paragraph.split('. ');
        if (sentences.length > 1 && sentences[0].length < 60) {
          return (
            <p key={i} className="text-slate-600 leading-relaxed">
              <span className="font-medium text-slate-800">{decodeHtmlEntities(sentences[0])}. </span>
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
                  <span key={`term-${j}`} className="font-semibold text-slate-800 block mb-1">{term} </span>
                );
              }
              if (parts[j]) {
                formattedParts.push(<span key={`content-${j}`}>{parseLinksInText(decodeHtmlEntities(parts[j]))}</span>);
              }
            }

            return (
              <p key={i} className="text-slate-600 leading-relaxed">
                {formattedParts}
              </p>
            );
          }
        }

        return <p key={i} className="text-slate-600 leading-relaxed">{parseLinksInText(decodeHtmlEntities(paragraph))}</p>;
      })}
    </div>
  );
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpen = null }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultOpen);
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
              const headerOffset = 180; // Account for fixed header and some padding
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
          const headerOffset = 180; // Increased offset for better positioning
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
    <div className="space-y-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const questionId = `${baseId}-question-${index}`;
        const answerId = `${baseId}-answer-${index}`;

        return (
          <div
            key={index}
            className={`border-b border-slate-100 last:border-0 transition-all duration-300 ${isActive ? 'pb-6' : 'pb-0'
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
              className="flex items-start justify-between w-full py-6 text-left group focus:outline-none"
            >
              <span className="flex-1 pr-6 flex items-start gap-4">
                <span className={`text-2xl font-light tabular-nums opacity-20 transition-colors duration-300 ${isActive ? 'text-[#B08D57] opacity-100' : 'group-hover:text-[#B08D57] group-hover:opacity-40'
                  }`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="flex flex-col">
                  <span className={`text-lg transition-colors duration-300 font-medium leading-relaxed ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                    {decodeHtmlEntities(item.question)}
                  </span>
                  {item.category && (
                    <span className="mt-1 text-xs font-medium text-[#B08D57] uppercase tracking-wider opacity-80">
                      {item.category}
                    </span>
                  )}
                </span>
              </span>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${isActive
                    ? 'border-[#B08D57] text-[#B08D57] bg-[#B08D57]/5'
                    : 'text-slate-400 group-hover:border-[#B08D57]/50 group-hover:text-[#B08D57]'
                  }`}
              >
                <ChevronDownIcon className="w-4 h-4" strokeWidth={2} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pl-12 md:pl-14 pr-4 pb-2">
                    <div className="prose prose-sm prose-slate max-w-none text-slate-600 font-light">
                      {formatAnswer(item.answer)}
                    </div>
                  </div>
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