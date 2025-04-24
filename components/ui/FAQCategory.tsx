'use client';

import React from 'react';
import FAQAccordion from './FAQAccordion';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategoryProps {
  category: string;
  faqs: FAQ[];
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category, faqs }) => {
  if (faqs.length === 0) return null;
  
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-neutral-200">{category}</h2>
      <div>
        {faqs.map((faq) => (
          <FAQAccordion
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory; 