import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  backgroundOpacity?: number;
  blurStrength?: 'sm' | 'md' | 'lg';
  borderStyle?: 'light' | 'dark' | 'accent' | 'none';
  hoverEffect?: boolean;
  animate?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  backgroundOpacity = 0.1,
  blurStrength = 'md',
  borderStyle = 'light',
  hoverEffect = false,
  animate = true,
  onClick
}: GlassCardProps) {
  // Map blur strength values
  const blurMap = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  };
  
  // Map border styles
  const borderMap = {
    light: 'border border-white/10',
    dark: 'border border-primary-700/80',
    accent: 'border border-accent/20',
    none: ''
  };
  
  // Generate hover classes - improved to avoid harsh white background
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 hover:bg-primary-800/30' 
    : '';
  
  // Base card classes
  const baseClasses = `
    relative rounded-xl overflow-hidden shadow-sm
    ${blurMap[blurStrength]}
    ${borderMap[borderStyle]}
    ${hoverClasses}
    ${className}
  `;
  
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  // Conditionally wrap with motion
  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={variants}
        style={{ backgroundColor: `rgba(16, 24, 39, ${backgroundOpacity})` }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div
      className={baseClasses}
      style={{ backgroundColor: `rgba(16, 24, 39, ${backgroundOpacity})` }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
} 