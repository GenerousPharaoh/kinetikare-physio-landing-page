'use client';

import React, { useMemo } from 'react';
import MedicalTerm from './MedicalTerm';
import { medicalGlossary, MedicalTermData } from '@/lib/medical-glossary-data';

interface TermHighlighterProps {
  text: string;
  onOpenModal?: (termData: MedicalTermData) => void;
  highlightedTerms?: Set<string>;
}

const TermHighlighter: React.FC<TermHighlighterProps> = ({ 
  text, 
  onOpenModal,
  highlightedTerms = new Set()
}) => {
  const processedContent = useMemo(() => {
    // Create a map of terms to match (case-insensitive)
    const termsToMatch = Object.keys(medicalGlossary).map(term => ({
      original: term,
      pattern: term.toLowerCase(),
      regex: new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(s)?\\b`, 'gi')
    }));

    // Sort terms by length (longest first) to handle overlapping terms
    termsToMatch.sort((a, b) => b.pattern.length - a.pattern.length);

    // Track which parts of text have been processed
    let processedText = text;
    const replacements: { start: number; end: number; term: string; match: string }[] = [];

    // Find all term occurrences
    termsToMatch.forEach(({ original, regex }) => {
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        
        // Check if this position overlaps with existing replacements
        const hasOverlap = replacements.some(r => 
          (start >= r.start && start < r.end) || 
          (end > r.start && end <= r.end) ||
          (start <= r.start && end >= r.end)
        );
        
        if (!hasOverlap && !highlightedTerms.has(original)) {
          replacements.push({
            start,
            end,
            term: original,
            match: match[0]
          });
          highlightedTerms.add(original);
        }
      }
    });

    // Sort replacements by position
    replacements.sort((a, b) => a.start - b.start);

    // Build the result with React elements
    const result: React.ReactNode[] = [];
    let lastIndex = 0;

    replacements.forEach((replacement, index) => {
      // Add text before the term
      if (replacement.start > lastIndex) {
        result.push(
          <span key={`text-${index}`}>
            {text.substring(lastIndex, replacement.start)}
          </span>
        );
      }

      // Add the highlighted term
      result.push(
        <MedicalTerm 
          key={`term-${index}`}
          term={replacement.term}
          onOpenModal={onOpenModal}
        >
          {replacement.match}
        </MedicalTerm>
      );

      lastIndex = replacement.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      result.push(
        <span key="text-final">
          {text.substring(lastIndex)}
        </span>
      );
    }

    return result.length > 0 ? result : text;
  }, [text, onOpenModal, highlightedTerms]);

  return <>{processedContent}</>;
};

export default TermHighlighter;