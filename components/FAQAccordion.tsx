"use client";

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItemProps[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border-b border-primary-200 overflow-hidden last:border-0"
        >
          <button
            className="flex justify-between items-center w-full py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-accent/50 focus-visible:rounded-sm"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className="text-lg font-medium text-primary-800 hover:text-primary-900 transition-colors duration-200">
              {item.question}
            </span>
            {activeIndex === index ? (
              <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle premium-icon-badge-accent" style={{ boxShadow: "0 4px 12px rgba(231, 169, 49, 0.2)" }}>
                <ChevronUpIcon className="w-4 h-4 flex-shrink-0" />
              </div>
            ) : (
              <div className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
              </div>
            )}
          </button>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.33, 1, 0.68, 1]
                }}
              >
                <div className="pt-1 pb-4 text-primary-700 text-base leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 