'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  opacity?: number;
  size?: number;
  color?: string;
  className?: string;
}

/**
 * GridBackground Component
 * 
 * Creates a consistent grid pattern background that can be used throughout the website
 * Matches the specific background pattern the user identified
 */
const GridBackground: React.FC<GridBackgroundProps> = ({
  opacity = 0.02,
  size = 20,
  color = 'rgba(26, 31, 54, 0.03)',
  className = '',
}) => {
  return (
    <div 
      className={cn(
        'absolute inset-0',
        className
      )}
      style={{ 
        opacity,
        backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px` 
      }}
      aria-hidden="true"
    />
  );
};

export default GridBackground; 