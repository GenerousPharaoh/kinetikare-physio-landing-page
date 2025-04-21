"use client"; // Required for useState

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import FAQAccordion from '@/components/FAQAccordion';

interface FaqItemProps {
  question: string;
  answer: string;
}

// Accordion Item Component - Adjusted for light theme
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Light border
    <div className="border-b border-primary-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-accent/50 focus-visible:rounded-sm"
        aria-expanded={isOpen}
      >
        {/* Darker text for better visibility */}
        <span className="text-lg font-medium text-primary-800 hover:text-primary-900 transition-colors duration-200">
          {question}
        </span>
        {/* Accent icon color */}
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-accent flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        {/* Darker answer text for better contrast */}
        <div className="pt-1 pb-4 text-primary-700 text-base leading-relaxed">
          {/* Use dangerouslySetInnerHTML if answer contains HTML, otherwise just render */} 
          {/* For simplicity now, assuming plain text */} 
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  // FAQ categories with their questions
  const faqCategories = [
    {
      title: "Initial Visits",
      questions: [
        {
          question: "What should I expect during my first appointment?",
          answer: "Your initial appointment will typically last 45-60 minutes and includes a comprehensive assessment. I'll discuss your health history, current concerns, and goals. After a physical examination, I'll explain my findings, discuss your treatment plan, and begin initial treatment if appropriate."
        },
        {
          question: "What should I wear to my appointment?",
          answer: "Please wear comfortable, loose-fitting clothing that allows movement and access to the area(s) requiring treatment. For lower body issues, shorts are ideal. For upper body concerns, a tank top or t-shirt works well."
        },
        {
          question: "Should I bring anything to my first appointment?",
          answer: "Please bring any relevant medical documentation (imaging reports, specialist letters), a list of medications, your health insurance information if applicable, and comfortable clothing. If you've been using aids like braces or orthotics, bring those as well."
        }
      ]
    },
    {
      title: "Treatment & Services",
      questions: [
        {
          question: "How many sessions will I need?",
          answer: "The number of sessions varies based on your condition, its severity, and how your body responds to treatment. After your initial assessment, I'll provide an estimate of the recommended treatment duration and frequency. Most patients see improvement within 4-6 sessions, though complex conditions may require longer care."
        },
        {
          question: "Do you offer virtual physiotherapy sessions?",
          answer: "Yes, I offer secure virtual physiotherapy sessions for follow-ups, exercise progression, and conditions suitable for remote management. These sessions are effective for ongoing care and situations where in-person visits aren't possible."
        },
        {
          question: "What physiotherapy techniques do you use?",
          answer: "I utilize a wide range of evidence-based techniques including manual therapy, therapeutic exercise, movement retraining, instrument assisted soft tissue mobilization, dry needling, and education for self-management. Your treatment plan will be customized to your specific needs and may incorporate various approaches."
        }
      ]
    },
    {
      title: "Insurance & Payment",
      questions: [
        {
          question: "Is physiotherapy covered by insurance?",
          answer: "Most extended health insurance plans cover physiotherapy services. The coverage amount and requirements vary between providers. I recommend checking your specific plan details regarding physiotherapy coverage, referral requirements, and claiming procedures before your first appointment."
        },
        {
          question: "Do I need a doctor's referral for physiotherapy?",
          answer: "No, you do not need a doctor's referral to see a physiotherapist in Ontario. Physiotherapists are primary care providers whom you can access directly. However, some insurance plans may require a referral for coverage, so check your policy details."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept debit cards, credit cards (Visa, Mastercard, American Express), and e-transfer. Payment is required at the time of service. If your insurance covers direct billing, we can submit claims on your behalf where possible."
        }
      ]
    },
    {
      title: "Specialized Care",
      questions: [
        {
          question: "Do you treat sports injuries?",
          answer: "Yes, I specialize in treating a wide range of sports injuries. Whether you're a weekend warrior, competitive athlete, or fitness enthusiast, I can help with injury assessment, treatment, and return-to-sport planning. I emphasize both recovery and injury prevention strategies."
        },
        {
          question: "Can physiotherapy help with dizziness or vertigo?",
          answer: "Yes, physiotherapy is effective for many types of dizziness and vertigo, particularly Benign Paroxysmal Positional Vertigo (BPPV). After a thorough assessment, I can provide appropriate vestibular rehabilitation exercises and maneuvers to address your specific condition."
        },
        {
          question: "Do you treat work-related injuries and motor vehicle accidents?",
          answer: "Yes, I treat injuries from workplace incidents and motor vehicle accidents. I work with WSIB and motor vehicle insurance claims, providing necessary documentation and progress reports. Please inform us of your claim details when booking your appointment."
        }
      ]
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm">
            <Link href="/" className="text-primary-600 hover:text-accent">Home</Link>
            <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400 self-center" />
            <span className="text-primary-800 font-medium">FAQ</span>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary-800 mb-4">
          Frequently Asked Questions
        </h1>
          <p className="text-lg text-primary-700">
            Find answers to common questions about physiotherapy services, treatment approaches, and what to expect during your care.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-heading font-semibold text-primary-800 mb-6 pb-2 border-b border-neutral-200">
                {category.title}
              </h2>
              <FAQAccordion items={category.questions} />
            </div>
          ))}
        </div>
        
        {/* Additional Questions CTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-heading font-semibold text-primary-800 mb-3">
              Still Have Questions?
            </h2>
            <p className="text-primary-700 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Feel free to contact me directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-md font-medium transition"
              >
                Contact Us
              </Link>
              <Link 
                href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                target="_blank"
                className="inline-block px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium transition"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
      </div>
      </main>
    </div>
  );
} 