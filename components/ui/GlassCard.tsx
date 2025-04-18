import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animated?: boolean;
  backgroundOpacity?: 'light' | 'medium' | 'heavy' | number;
  blurStrength?: 'sm' | 'md' | 'lg' | 'xl' | number;
  borderStyle?: 'none' | 'light' | 'medium' | 'accent';
  onClick?: () => void;
  animate?: boolean;
  delay?: number;
  duration?: number;
}

const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  animated = true,
  backgroundOpacity = 'medium',
  blurStrength = 'md',
  borderStyle = 'light',
  onClick,
  animate = true,
  delay = 0,
  duration = 0.5,
}: GlassCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Base classes for the glass effect
  const baseClasses = 'rounded-xl backdrop-blur transition-all duration-300 overflow-hidden';

  // Determine background opacity
  let bgOpacityClass = '';
  if (typeof backgroundOpacity === 'number') {
    bgOpacityClass = `bg-white/[${backgroundOpacity}]`;
  } else {
    switch (backgroundOpacity) {
      case 'light':
        bgOpacityClass = 'bg-white/[0.15]';
        break;
      case 'medium':
        bgOpacityClass = 'bg-white/[0.25]';
        break;
      case 'heavy':
        bgOpacityClass = 'bg-white/[0.40]';
        break;
      default:
        bgOpacityClass = 'bg-white/[0.25]';
    }
  }

  // Determine blur strength
  let blurClass = '';
  if (typeof blurStrength === 'number') {
    blurClass = `backdrop-blur-[${blurStrength}px]`;
  } else {
    switch (blurStrength) {
      case 'sm':
        blurClass = 'backdrop-blur-sm';
        break;
      case 'md':
        blurClass = 'backdrop-blur-md';
        break;
      case 'lg':
        blurClass = 'backdrop-blur-lg';
        break;
      case 'xl':
        blurClass = 'backdrop-blur-xl';
        break;
      default:
        blurClass = 'backdrop-blur-md';
    }
  }

  // Determine border style
  let borderClass = '';
  switch (borderStyle) {
    case 'none':
      borderClass = '';
      break;
    case 'light':
      borderClass = 'border border-white/20';
      break;
    case 'medium':
      borderClass = 'border-2 border-white/30';
      break;
    case 'accent':
      borderClass = 'border border-accent/30';
      break;
    default:
      borderClass = 'border border-white/20';
  }

  // Hover effect classes
  const hoverClasses = hoverEffect
    ? 'hover:shadow-xl hover:-translate-y-1 hover:bg-white/[0.35] hover:border-white/40 cursor-pointer'
    : '';

  // Set animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  // Combine all classes
  const combinedClasses = cn(
    baseClasses,
    bgOpacityClass,
    blurClass,
    borderClass,
    hoverClasses,
    'shadow-lg',
    className
  );

  // Use Framer Motion for animations
  if (animate) {
    return (
      <motion.div
        ref={animated ? ref : undefined}
        className={combinedClasses}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  // Standard render without Framer Motion
  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(
        combinedClasses,
        animated && (isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8')
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default GlassCard; 