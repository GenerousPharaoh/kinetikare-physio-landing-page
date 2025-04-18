import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundOpacity?: number;
  blurStrength?: 'sm' | 'md' | 'lg';
  borderStyle?: 'light' | 'accent' | 'none';
  hoverEffect?: boolean;
  animate?: boolean;
  tabIndex?: number;
}

export default function GlassCard({
  children,
  className = '',
  backgroundOpacity = 0.05,
  blurStrength = 'md',
  borderStyle = 'light',
  hoverEffect = false,
  animate = true,
  tabIndex,
}: GlassCardProps) {
  // Get blur strength class
  const getBlurClass = () => {
    switch (blurStrength) {
      case 'sm': return 'backdrop-blur-sm';
      case 'lg': return 'backdrop-blur-lg';
      case 'md':
      default: return 'backdrop-blur-md';
    }
  };
  
  // Get border style class
  const getBorderClass = () => {
    switch (borderStyle) {
      case 'accent': return 'border border-accent/30';
      case 'none': return '';
      case 'light':
      default: return 'border border-white/10';
    }
  };
  
  // Base classes
  const baseClasses = twMerge(
    'rounded-xl bg-white/[var(--bg-opacity)] relative transition-all duration-300',
    getBlurClass(),
    getBorderClass(),
    hoverEffect ? 'hover:bg-white/[calc(var(--bg-opacity)+0.02)] hover:shadow-lg' : '',
    className,
    // Add focus visible styling for keyboard navigation
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-60'
  );
  
  // Set CSS variable for background opacity
  const style = {
    '--bg-opacity': backgroundOpacity.toString(),
  } as React.CSSProperties;

  return animate ? (
    <motion.div
      className={baseClasses}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      tabIndex={tabIndex}
    >
      {children}
    </motion.div>
  ) : (
    <div className={baseClasses} style={style} tabIndex={tabIndex}>
      {children}
    </div>
  );
} 