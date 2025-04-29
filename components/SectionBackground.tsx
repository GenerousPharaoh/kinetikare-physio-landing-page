"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'subtle' | 'accent' | 'primary' | 'neutral' | 'premium' | 'premium-light' | 'premium-dark' | 'none';
  rounded?: boolean;
  shadowed?: boolean;
  maxWidth?: string;
  padding?: string;
  border?: boolean;
  patternOverlay?: boolean;
  glowEffect?: boolean;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  className = '',
  variant = 'light',
  rounded = false,
  shadowed = false,
  maxWidth = 'none',
  padding = 'p-0',
  border = false,
  patternOverlay = false,
  glowEffect = false
}) => {
  const getBgClasses = () => {
    switch (variant) {
      case 'light':
        return 'bg-white';
      case 'subtle':
        return 'bg-gradient-to-br from-neutral-50 via-white to-neutral-50/80';
      case 'accent':
        return 'bg-gradient-to-br from-accent-50 via-accent-50/80 to-accent-100/80';
      case 'primary':
        return 'bg-gradient-to-br from-primary-50 via-primary-50/90 to-primary-100/80';
      case 'neutral':
        return 'bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100/70';
      case 'premium':
        return 'bg-premium-subtle';
      case 'premium-light':
        return 'bg-premium-light';
      case 'premium-dark':
        return 'bg-gradient-to-br from-primary-800 to-primary-900';
      case 'none':
        return 'bg-transparent';
      default:
        return 'bg-white';
    }
  };

  const getBorderClass = () => {
    if (!border) return '';
    
    switch (variant) {
      case 'accent':
        return 'border-t border-b border-accent-200/30';
      case 'primary':
        return 'border-t border-b border-primary-200/30';
      case 'neutral':
        return 'border-t border-b border-neutral-200/70';
      default:
        return 'border-t border-b border-neutral-100/80';
    }
  };

  return (
    <div
      className={cn(
        getBgClasses(),
        getBorderClass(),
        rounded && 'rounded-2xl',
        shadowed && 'shadow-premium-subtle',
        variant === 'premium' && 'section-premium',
        padding,
        'relative overflow-hidden',
        className
      )}
      style={{
        maxWidth: maxWidth !== 'none' ? maxWidth : undefined
      }}
    >
      {patternOverlay && (
        <div className="absolute inset-0 pattern-dots opacity-[0.025] pointer-events-none animate-[pulse_15s_ease-in-out_infinite]"></div>
      )}
      
      {glowEffect && variant === 'accent' && (
        <>
          <div 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-3xl animate-[pulse_20s_ease-in-out_infinite]" 
            aria-hidden="true"
          ></div>
          <div 
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl animate-[pulse_15s_ease-in-out_2s_infinite]" 
            aria-hidden="true"
          ></div>
        </>
      )}

      {glowEffect && variant === 'primary' && (
        <>
          <div 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl animate-[pulse_20s_ease-in-out_infinite]" 
            aria-hidden="true"
          ></div>
          <div 
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl animate-[pulse_15s_ease-in-out_2s_infinite]" 
            aria-hidden="true"
          ></div>
        </>
      )}

      {glowEffect && variant === 'subtle' && (
        <>
          <div 
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-neutral-200/[0.4] blur-3xl animate-[pulse_25s_ease-in-out_infinite]" 
            aria-hidden="true"
          ></div>
          <div 
            className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-neutral-300/[0.2] blur-3xl animate-[pulse_20s_ease-in-out_3s_infinite]" 
            aria-hidden="true"
          ></div>
        </>
      )}
      
      {children}
    </div>
  );
};

export default SectionBackground; 