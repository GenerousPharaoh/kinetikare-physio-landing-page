'use client';

import React from 'react';
import BackgroundPattern from './BackgroundPattern';

interface SectionWithBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'minimal';
  id?: string;
  noPadding?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  withContainer?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

/**
 * A premium section wrapper with elegant background patterns
 */
export default function SectionWithBackground({
  children,
  className = '',
  variant = 'primary',
  id,
  noPadding = false,
  spacing = 'md',
  withContainer = false,
  containerSize = 'xl',
}: SectionWithBackgroundProps) {
  // Get background styling based on variant
  const getBackgroundStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bgColor: 'bg-white',
          pattern: <BackgroundPattern variant="pinstripe" opacity={0.025} color="100, 130, 210" />,
          additionalClass: ''
        };
      case 'secondary':
        return {
          bgColor: 'bg-neutral-50',
          pattern: <BackgroundPattern variant="dots" opacity={0.03} color="100, 130, 210" />,
          additionalClass: ''
        };
      case 'accent':
        return {
          bgColor: 'bg-white',
          pattern: <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-transparent"></div>
            <BackgroundPattern variant="dots" opacity={0.02} color="80, 120, 210" />
          </>,
          additionalClass: 'accent-section'
        };
      case 'minimal':
      default:
        return {
          bgColor: 'bg-white',
          pattern: <BackgroundPattern variant="minimal" opacity={0.012} color="100, 130, 210" />,
          additionalClass: ''
        };
    }
  };

  const { bgColor, pattern, additionalClass } = getBackgroundStyles();
  
  // Determine spacing classes based on the spacing prop
  const getSpacingClasses = () => {
    if (noPadding) return '';
    
    switch (spacing) {
      case 'sm':
        return 'py-12 md:py-16';
      case 'lg':
        return 'py-20 md:py-28';
      case 'none':
        return '';
      case 'md':
      default:
        return 'py-16 md:py-20';
    }
  };

  const spacingClasses = getSpacingClasses();
  
  // Container width classes based on the containerSize prop
  const containerClasses = {
    'sm': 'max-w-screen-sm',
    'md': 'max-w-screen-md',
    'lg': 'max-w-screen-lg',
    'xl': 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    'full': 'max-w-full',
  };

  // Content with optional container
  const content = withContainer ? (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerClasses[containerSize]}`}>
      {children}
    </div>
  ) : children;

  return (
    <section 
      id={id} 
      className={`relative ${bgColor} ${spacingClasses} ${additionalClass} ${className}`}
    >
      {/* Professional background pattern */}
      {pattern}
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
      
      {/* Section content with proper z-index */}
      <div className="relative z-10">
        {content}
      </div>
    </section>
  );
} 