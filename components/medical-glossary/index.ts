export { default as MedicalTerm } from './MedicalTerm';
export { default as VisualReferenceModal } from './VisualReferenceModal';
export { default as TermHighlighter, ConditionTextHighlighter, ParagraphHighlighter } from './TermHighlighter';
export { default as MedicalTermProvider, useMedicalTerms, useConditionTerms } from './MedicalTermProvider';

// Re-export types for convenience
export type { MedicalTerm as MedicalTermType, VisualReference } from '@/lib/medical-glossary-data';