"use client";

// This is an example showing integration points for the medical glossary system
// Replace the imports section in the existing ConditionPageClient.tsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronRightIcon,
  CheckCircleIcon,
  // ... other existing imports
} from '@heroicons/react/24/outline';
import { Condition } from '@/lib/conditions-data';

// ADD THESE NEW IMPORTS:
import { 
  MedicalTermProvider, 
  ParagraphHighlighter,
  ConditionTextHighlighter,
  useConditionTerms 
} from '@/components/medical-glossary';

interface ConditionPageClientProps {
  condition: Condition;
  relatedConditions: Condition[];
}

// CREATE THIS NEW COMPONENT TO WRAP THE EXISTING CLIENT:
function ConditionPageClientWithMedicalTerms({ condition, relatedConditions }: ConditionPageClientProps) {
  // Hook for preloading condition-specific terms
  useConditionTerms(condition.slug, condition.category);

  return <ConditionPageClientCore condition={condition} relatedConditions={relatedConditions} />;
}

// RENAME THE EXISTING COMPONENT TO THIS:
function ConditionPageClientCore({ condition, relatedConditions }: ConditionPageClientProps) {
  // ... existing state and logic remains the same

  return (
    <div className="min-h-screen">
      {/* ... existing header content remains the same */}

      {/* MODIFY THE OVERVIEW TAB CONTENT - REPLACE EXISTING PARAGRAPHS: */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Understanding Your Condition Section - WITH MEDICAL TERMS */}
          {condition.overview && !condition.pathophysiology && (
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Understanding Your Condition
              </h2>
              {/* REPLACE THIS SECTION: */}
              <ParagraphHighlighter
                paragraphs={condition.overview.split('\n\n')}
                conditionCategory={condition.category}
                variant="subtle"
              />
            </div>
          )}

          {/* Contributing Factors Section - WITH MEDICAL TERMS */}
          {condition.biomechanics && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Contributing Factors
              </h2>
              {/* REPLACE THIS SECTION: */}
              <ParagraphHighlighter
                paragraphs={condition.biomechanics.split('\n\n')}
                conditionCategory={condition.category}
                variant="subtle"
              />
            </div>
          )}

          {/* Pathophysiology Section - WITH MEDICAL TERMS */}
          {condition.pathophysiology && (
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                How It Develops
              </h2>
              {/* REPLACE PLAIN PARAGRAPHS WITH: */}
              <ParagraphHighlighter
                paragraphs={condition.pathophysiology.split('\n\n')}
                conditionCategory={condition.category}
                variant="subtle"
                maxHighlights={8} // More highlights for detailed pathophysiology
              />
            </div>
          )}

          {/* ... rest of existing content remains the same */}
        </div>
      )}

      {/* MODIFY THE SYMPTOMS TAB - ADD MEDICAL TERMS TO DESCRIPTIONS: */}
      {activeTab === 'symptoms' && (
        <div className="space-y-6">
          {condition.clinicalPresentation && (
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Clinical Presentation
              </h2>
              
              {/* ... existing primary symptoms list remains the same */}
              
              {condition.clinicalPresentation.typicalPattern && (
                <div className="p-4 bg-[#B08D57]/5 rounded-lg border border-[#B08D57]/20">
                  <h3 className="font-semibold text-slate-900 mb-2">Typical Pattern</h3>
                  {/* ENHANCE PATTERN DESCRIPTION WITH MEDICAL TERMS: */}
                  <div className="text-slate-600">
                    <ConditionTextHighlighter
                      text={condition.clinicalPresentation.typicalPattern}
                      conditionCategory={condition.category}
                      variant="inline"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ... rest of symptoms tab remains the same */}
        </div>
      )}

      {/* ... all other existing content remains unchanged */}
    </div>
  );
}

// EXPORT THE WRAPPED COMPONENT:
export default function ConditionPageClient(props: ConditionPageClientProps) {
  return (
    <MedicalTermProvider defaultEnabled={true}>
      <ConditionPageClientWithMedicalTerms {...props} />
    </MedicalTermProvider>
  );
}

/* 
INTEGRATION SUMMARY:

1. Add the MedicalTermProvider wrapper around the entire component
2. Replace paragraph rendering with ParagraphHighlighter component
3. Use ConditionTextHighlighter for single text blocks
4. Add useConditionTerms hook for performance optimization
5. All existing functionality and styling remains intact

SPECIFIC CHANGES NEEDED IN EXISTING FILE:
- Add imports for medical glossary components
- Wrap component in MedicalTermProvider
- Replace lines 332-336 with ParagraphHighlighter
- Replace lines 347-351 with ParagraphHighlighter  
- Add similar replacements for pathophysiology sections
- Add ConditionTextHighlighter for typicalPattern descriptions
*/