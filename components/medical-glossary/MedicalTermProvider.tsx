'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import VisualReferenceModal from './VisualReferenceModal';
import TermHighlighter from './TermHighlighter';
import { MedicalTermData } from '@/lib/medical-glossary-data';

interface MedicalTermContextValue {
  openModal: (termData: MedicalTermData) => void;
  highlightedTerms: Set<string>;
}

const MedicalTermContext = createContext<MedicalTermContextValue | null>(null);

export const useMedicalTermContext = () => {
  const context = useContext(MedicalTermContext);
  if (!context) {
    throw new Error('useMedicalTermContext must be used within MedicalTermProvider');
  }
  return context;
};

interface MedicalTermProviderProps {
  children: React.ReactNode;
}

export const MedicalTermProvider: React.FC<MedicalTermProviderProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<MedicalTermData | null>(null);
  const [highlightedTerms] = useState(() => new Set<string>());

  const openModal = useCallback((termData: MedicalTermData) => {
    setSelectedTerm(termData);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    // Keep selected term for animation to complete
    setTimeout(() => setSelectedTerm(null), 300);
  }, []);

  const contextValue = useMemo(() => ({
    openModal,
    highlightedTerms
  }), [openModal, highlightedTerms]);

  return (
    <MedicalTermContext.Provider value={contextValue}>
      {children}
      <VisualReferenceModal
        isOpen={modalOpen}
        onClose={closeModal}
        termData={selectedTerm}
      />
    </MedicalTermContext.Provider>
  );
};

// Enhanced paragraph component that processes text for medical terms
interface EnhancedParagraphProps {
  children: string;
  className?: string;
}

export const EnhancedParagraph: React.FC<EnhancedParagraphProps> = ({ 
  children, 
  className = "text-primary-600 leading-relaxed mb-4" 
}) => {
  const { openModal, highlightedTerms } = useMedicalTermContext();
  
  return (
    <p className={className}>
      <TermHighlighter 
        text={children} 
        onOpenModal={openModal}
        highlightedTerms={highlightedTerms}
      />
    </p>
  );
};

// Export a wrapper component for easy integration
interface MedicalGlossaryWrapperProps {
  children: React.ReactNode;
}

export const MedicalGlossaryWrapper: React.FC<MedicalGlossaryWrapperProps> = ({ children }) => {
  return (
    <MedicalTermProvider>
      {children}
    </MedicalTermProvider>
  );
};