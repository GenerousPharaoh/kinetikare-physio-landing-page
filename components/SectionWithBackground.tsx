'use client';

import React from 'react';
import SectionBackground from './SectionBackground';
import SectionDivider from './SectionDivider';
import { cn } from '@/lib/utils';

interface SectionWithBackgroundProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgVariant?: 'light' | 'subtle' | 'accent' | 'primary' | 'neutral' | 'none';
  spacing?: 'normal' | 'large' | 'small' | 'none';
  hasDividerTop?: boolean;
  hasDividerBottom?: boolean;
  dividerShape?: 'wave' | 'curve' | 'tilt' | 'arrow';
  dividerColor?: string;
  dividerHeight?: number;
  border?: boolean;
  patternOverlay?: boolean;
  glowEffect?: boolean;
}

const SectionWithBackground: React.FC<SectionWithBackgroundProps> = ({
  children,
  id,
  className = '',
  bgVariant = 'light',
  spacing = 'normal',
  hasDividerTop = false,
  hasDividerBottom = false,
  dividerShape = 'curve',
  dividerColor = '#ffffff',
  dividerHeight = 80,
  border = false,
  patternOverlay = false,
  glowEffect = false,
}) => {
  // Determine spacing classes
  const spacingClasses = {
    normal: 'py-20 md:py-24 lg:py-28',
    large: 'py-24 md:py-32 lg:py-36',
    small: 'py-12 md:py-16 lg:py-20',
    none: '',
  };

  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', className)}
    >
      {hasDividerTop && (
        <SectionDivider
          position="top"
          shape={dividerShape}
          fillColor={dividerColor}
          height={dividerHeight}
        />
      )}
      
      <SectionBackground 
        variant={bgVariant}
        border={border}
        patternOverlay={patternOverlay}
        glowEffect={glowEffect}
        className={cn(spacingClasses[spacing])}
      >
        <div className="container mx-auto px-4 relative">
          {children}
        </div>
      </SectionBackground>
      
      {hasDividerBottom && (
        <SectionDivider
          position="bottom"
          shape={dividerShape}
          fillColor={dividerColor}
          height={dividerHeight}
        />
      )}
    </section>
  );
};

export default SectionWithBackground; 