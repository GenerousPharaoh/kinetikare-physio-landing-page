import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'gold' | 'navy' | 'subtle' | 'frost';
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  glow?: boolean;
  animate?: boolean;
  onClick?: () => void;
  hoverEffect?: 'none' | 'lift' | 'scale' | 'shine';
  delayIndex?: number; // For staggered animations
}

const GlassCard = ({
  children,
  className = '',
  variant = 'light',
  blur = 'md',
  border = true,
  glow = false,
  animate = true,
  onClick,
  hoverEffect = 'none',
  delayIndex = 0
}: GlassCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Base styles for all glass cards
  const baseClasses = 'rounded-xl p-6 transition-all duration-300 will-change-transform';

  // Background and border styles by variant
  const variantClasses = {
    light: 'bg-white/80 backdrop-blur text-[#1A2036]',
    dark: 'bg-[#1A2036]/80 backdrop-blur text-white',
    gold: 'bg-gradient-to-br from-[#D4AF37]/90 to-[#C8A52E]/90 backdrop-blur text-[#1A2036]',
    navy: 'bg-gradient-to-br from-[#1A2036]/90 to-[#252E4A]/90 backdrop-blur text-white',
    subtle: 'bg-white/50 backdrop-blur text-[#1A2036]',
    frost: 'bg-white/30 backdrop-blur text-[#1A2036]',
  };

  // Blur amount
  const blurClasses = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };
  
  // Border variations
  const borderClasses = border ? {
    light: 'border border-white/50',
    dark: 'border border-white/10',
    gold: 'border border-[#D4AF37]/30',
    navy: 'border border-white/10',
    subtle: 'border border-white/40',
    frost: 'border border-white/30',
  }[variant] : '';
  
  // Glow effect
  const glowClasses = glow ? {
    light: 'shadow-[0_8px_32px_rgba(255,255,255,0.2)]',
    dark: 'shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
    gold: 'shadow-[0_8px_32px_rgba(212,175,55,0.25)]',
    navy: 'shadow-[0_8px_32px_rgba(26,32,54,0.3)]',
    subtle: 'shadow-[0_8px_32px_rgba(255,255,255,0.15)]',
    frost: 'shadow-[0_8px_32px_rgba(255,255,255,0.1)]',
  }[variant] : 'shadow-lg';

  // Hover effect classes
  const hoverClasses = {
    none: '',
    lift: 'hover:-translate-y-2 hover:shadow-xl',
    scale: 'hover:scale-[1.02] hover:shadow-xl',
    shine: 'overflow-hidden hover:shadow-xl glass-shine-effect',
  }[hoverEffect];

  // Animation variants for framer-motion
  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: delayIndex * 0.1,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  const CardComponent = animate && typeof window !== 'undefined' ? motion.div : 'div';
  
  const animationProps = animate ? {
    variants: animationVariants,
    initial: "hidden",
    animate: isVisible ? "visible" : "hidden"
  } : {};

  return (
    <CardComponent
      ref={animate ? ref : undefined}
      className={cn(
        baseClasses,
        variantClasses[variant],
        blurClasses[blur],
        borderClasses,
        glowClasses,
        hoverClasses,
        onClick && 'cursor-pointer',
        className
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
      {...animationProps}
    >
      {hoverEffect === 'shine' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </div>
      )}
      {children}
    </CardComponent>
  );
};

export default GlassCard; 