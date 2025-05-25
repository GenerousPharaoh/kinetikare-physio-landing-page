"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';
import { 
  DocumentTextIcon, 
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
  BeakerIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';

export default function CommitmentSection() {
  const commitmentItems = [
    {
      id: 'assessment',
      title: 'Thorough Assessment',
      description: 'A comprehensive evaluation in a comfortable, judgment-free environment',
      icon: DocumentTextIcon
    },
    {
      id: 'communication',
      title: 'Clear Communication',
      description: 'Easy-to-understand explanations of findings in accessible language',
      icon: ChatBubbleBottomCenterTextIcon
    },
    {
      id: 'customization',
      title: 'Custom Treatment',
      description: 'A tailored therapy plan addressing your specific recovery goals',
      icon: AdjustmentsHorizontalIcon
    },
    {
      id: 'attention',
      title: 'Dedicated Attention',
      description: 'One-on-one, unhurried focus during every treatment session',
      icon: UserIcon
    },
    {
      id: 'evidence',
      title: 'Evidence-Based Care',
      description: 'Proven interventions combining manual therapy, movement retraining, and self-management',
      icon: BeakerIcon
    },
    {
      id: 'collaboration',
      title: 'Collaborative Approach',
      description: 'A partnership that respects your input and preferences',
      icon: UserGroupIcon
    }
  ];

  return (
    <section 
      id="commitment" 
      className="py-20 section-subtle"
    >      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#B08D57] text-sm font-medium rounded-full mb-4">
            My Professional Guarantee
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            My Commitment to You
          </h2>
          <div className="w-40 h-0.5 bg-[#B08D57] mx-auto mb-8"></div>
          
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Every aspect of your care is delivered with precision and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {commitmentItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#B08D57]/10 text-center flex flex-col items-center premium-card"
            >
              <div className="w-14 h-14 bg-[#1A2036] rounded-full flex items-center justify-center mb-6 shadow-md">
                <item.icon className="h-7 w-7 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                {item.title}
              </h3>
              
              <p className="text-primary-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 