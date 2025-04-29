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
        return 'bg-gradient-to-b from-[#FDFDFD] to-[#F9F9F9]';
      case 'subtle':
        return 'bg-gradient-to-b from-neutral-50 to-white';
      case 'accent':
        return 'bg-gradient-to-b from-accent-50 to-accent-100/70';
      case 'primary':
        return 'bg-gradient-to-b from-primary-50 to-primary-100/70';
      case 'neutral':
        return 'bg-gradient-to-b from-neutral-100 to-neutral-50';
      case 'premium':
        return 'bg-premium-subtle';
      case 'premium-light':
        return 'bg-premium-light';
      case 'premium-dark':
        return 'bg-gradient-to-br from-primary-700 to-primary-900';
      case 'none':
        return 'bg-transparent';
      default:
        return 'bg-gradient-to-b from-[#FDFDFD] to-[#F9F9F9]';
    }
  };

  return (
    <div
      className={cn(
        getBgClasses(),
        rounded && 'rounded-xl',
        shadowed && 'shadow-premium-subtle',
        border && 'border border-neutral-100',
        variant === 'premium' && 'section-premium',
        padding,
        className
      )}
      style={{
        maxWidth: maxWidth !== 'none' ? maxWidth : undefined
      }}
    >
      {patternOverlay && (
        <div className="absolute inset-0 premium-dot-pattern opacity-[0.03] pointer-events-none"></div>
      )}
      
      {glowEffect && (
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/[0.03] blur-3xl" aria-hidden="true"></div>
      )}
      
      {children}
    </div>
  );
};

export default SectionBackground; 