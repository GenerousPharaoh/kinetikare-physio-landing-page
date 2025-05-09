'use client';

import React from 'react';
import SectionBackground from './SectionBackground';
import SectionDivider from './SectionDivider';
import { cn } from '@/lib/utils';

// Define allowed background variants
type BackgroundVariant = 'white' | 'light' | 'navy' | 'gold' | 'primary' | 'subtle' | 'accent' | 'dark' | 'none';

interface SectionWithBackgroundProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgVariant?: BackgroundVariant;
  spacing?: 'normal' | 'large' | 'small' | 'none';
  hasDividerTop?: boolean;
  hasDividerBottom?: boolean;
  dividerShape?: 'wave' | 'curve' | 'tilt' | 'arrow';
  dividerColor?: string;
  dividerHeight?: number;
  border?: boolean;
  patternOverlay?: boolean;
  glowEffect?: boolean;
  texture?: 'dots' | 'grid' | 'fine' | 'none';
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
  texture = 'none',
}) => {
  // Remove all padding
  const spacingClasses = {
    normal: '',
    large: '',
    small: '',
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
        glowEffect={false}
        texture={texture}
        className={cn(spacingClasses[spacing])}
      >
        <div className="container mx-auto px-4 md:px-5 lg:px-6 relative">
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