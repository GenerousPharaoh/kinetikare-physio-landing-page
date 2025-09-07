'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, TagIcon } from '@heroicons/react/24/outline';
import { MedicalTermData } from '@/lib/medical-glossary-data';

interface VisualReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  termData: MedicalTermData | null;
}

const VisualReferenceModal: React.FC<VisualReferenceModalProps> = ({ 
  isOpen, 
  onClose, 
  termData 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setImageLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !termData) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, termData, currentImageIndex]);

  if (!termData) return null;

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = termData.visualReferences.length;
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
    setImageLoading(true);
  };

  const currentImage = termData.visualReferences[currentImageIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:max-w-4xl md:w-[90vw] md:max-h-[85vh] z-[101]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="px-6 py-5 border-b border-neutral-200 bg-gradient-to-r from-neutral-50 to-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 id="modal-title" className="text-2xl font-semibold text-primary-900">
                      {termData.term}
                    </h2>
                    {termData.pronunciation && (
                      <p className="text-sm text-neutral-600 mt-1 italic">
                        [{termData.pronunciation}]
                      </p>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="w-6 h-6 text-neutral-500" />
                  </button>
                </div>
                
                {/* Category badge */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full 
                                 bg-gradient-to-r from-[#B08D57]/10 to-[#B08D57]/5 text-[#8B6F43] border border-[#B08D57]/20">
                    <TagIcon className="w-3 h-3" />
                    {termData.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  {/* Definition */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Definition
                    </h3>
                    <p className="text-primary-600 leading-relaxed">
                      {termData.definition}
                    </p>
                  </div>

                  {/* Visual References */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4">
                      Visual Reference {termData.visualReferences.length > 1 && `(${currentImageIndex + 1}/${termData.visualReferences.length})`}
                    </h3>
                    
                    {/* Image container */}
                    <div className="relative bg-neutral-100 rounded-lg overflow-hidden">
                      {/* Loading skeleton */}
                      {imageLoading && (
                        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
                      )}
                      
                      {/* Main image */}
                      <img
                        src={currentImage.url}
                        alt={currentImage.alt}
                        className={`w-full h-auto max-h-[400px] object-contain transition-opacity duration-300 ${
                          imageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => setImageLoading(false)}
                      />
                      
                      {/* Navigation arrows for multiple images */}
                      {termData.visualReferences.length > 1 && (
                        <>
                          <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white 
                                     rounded-full shadow-lg transition-all hover:scale-110"
                            aria-label="Previous image"
                          >
                            <ChevronLeftIcon className="w-5 h-5 text-primary-800" />
                          </button>
                          <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white 
                                     rounded-full shadow-lg transition-all hover:scale-110"
                            aria-label="Next image"
                          >
                            <ChevronRightIcon className="w-5 h-5 text-primary-800" />
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Image caption */}
                    {currentImage.caption && (
                      <p className="mt-2 text-sm text-neutral-600 text-center italic">
                        {currentImage.caption}
                      </p>
                    )}
                    
                    {/* Image type badge */}
                    <div className="mt-3 flex justify-center">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md
                        ${currentImage.type === 'animation' 
                          ? 'bg-purple-100 text-purple-800' 
                          : currentImage.type === 'photo'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                        }`}>
                        {currentImage.type === 'animation' ? '📹 Animation' : 
                         currentImage.type === 'photo' ? '📷 Photo' : '📊 Diagram'}
                      </span>
                    </div>
                  </div>

                  {/* Related Terms */}
                  {termData.relatedTerms && termData.relatedTerms.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Related Terms
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {termData.relatedTerms.map((term, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-neutral-100 text-primary-700 rounded-full 
                                     hover:bg-neutral-200 transition-colors cursor-default"
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer - Image indicators */}
              {termData.visualReferences.length > 1 && (
                <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50">
                  <div className="flex justify-center gap-2">
                    {termData.visualReferences.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setImageLoading(true);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-[#B08D57] w-6' 
                            : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VisualReferenceModal;