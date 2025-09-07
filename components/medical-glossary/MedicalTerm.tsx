'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { getTermData, MedicalTermData } from '@/lib/medical-glossary-data';

interface MedicalTermProps {
  term: string;
  children?: React.ReactNode;
  onOpenModal?: (termData: MedicalTermData) => void;
}

const MedicalTerm: React.FC<MedicalTermProps> = ({ term, children, onOpenModal }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const termRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const termData = getTermData(term);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!termData) {
    return <span>{children || term}</span>;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMobile) {
      // On mobile, first tap shows tooltip, second tap opens modal
      if (showTooltip) {
        onOpenModal?.(termData);
        setShowTooltip(false);
      } else {
        setShowTooltip(true);
      }
    } else {
      // On desktop, click opens modal
      onOpenModal?.(termData);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowTooltip(false);
    }
  };

  // Close tooltip when clicking outside on mobile
  useEffect(() => {
    if (isMobile && showTooltip) {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          termRef.current && 
          !termRef.current.contains(e.target as Node) &&
          tooltipRef.current &&
          !tooltipRef.current.contains(e.target as Node)
        ) {
          setShowTooltip(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, showTooltip]);

  return (
    <span className="relative inline">
      <span
        ref={termRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-help border-b border-dotted border-[#B08D57] text-primary-800 hover:text-[#B08D57] transition-colors duration-200 inline-flex items-center gap-0.5"
        aria-label={`Learn more about ${termData.term}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e as any);
          }
        }}
      >
        {children || term}
        <InformationCircleIcon className="w-3 h-3 opacity-60" />
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute z-50 p-4 bg-white rounded-lg shadow-xl border border-neutral-200
              ${isMobile ? 'left-0 right-0 mx-auto' : 'left-1/2 -translate-x-1/2'}
              ${isMobile ? 'top-full mt-2' : 'bottom-full mb-2'}
              ${isMobile ? 'w-64' : 'w-72'}
              pointer-events-auto
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tooltip arrow */}
            <div 
              className={`
                absolute w-3 h-3 bg-white border-neutral-200 transform rotate-45
                ${isMobile ? 'top-0 -mt-1.5 left-4 border-t border-l' : 'bottom-0 -mb-1.5 left-1/2 -translate-x-1/2 border-b border-r'}
              `}
            />
            
            {/* Content */}
            <div className="relative">
              <h4 className="font-semibold text-primary-900 mb-1">
                {termData.term}
              </h4>
              {termData.pronunciation && (
                <p className="text-xs text-neutral-500 mb-2 italic">
                  [{termData.pronunciation}]
                </p>
              )}
              <p className="text-sm text-primary-600 leading-relaxed mb-3">
                {termData.definition}
              </p>
              
              {/* Visual preview */}
              {termData.visualReferences[0] && (
                <div className="mb-3">
                  <img 
                    src={termData.visualReferences[0].url}
                    alt={termData.visualReferences[0].alt}
                    className="w-full h-24 object-cover rounded border border-neutral-200"
                    loading="lazy"
                  />
                </div>
              )}
              
              <button
                onClick={() => {
                  onOpenModal?.(termData);
                  setShowTooltip(false);
                }}
                className="text-xs font-medium text-[#B08D57] hover:text-[#8B6F43] transition-colors flex items-center gap-1"
                aria-label={`View visual references for ${termData.term}`}
              >
                View visual references
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default MedicalTerm;