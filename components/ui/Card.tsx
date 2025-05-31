import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animated?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'filled' | 'premium' | 'glass' | 'minimal' | 'gradient';
  accentBorder?: boolean;
  shine?: boolean;
  elevate?: boolean;
  animationDelay?: number;
}

const Card = ({
  title,
  subtitle,
  children,
  className = '',
  hoverEffect = false,
  animated = true,
  icon,
  onClick,
  variant = 'default',
  accentBorder = false,
  shine = false,
  elevate = false,
  animationDelay = 0,
}: CardProps) => {
  const { ref, isInView } = useScrollAnimation({
    yOffset: 20,
    threshold: 0.01,
    rootMargin: '0px 0px 150px 0px'
  });

  const baseClasses = 'rounded-xl p-6 transition-all duration-250 will-change-transform';

  const variantClasses = {
    default: 'bg-white shadow-md',
    outline: 'border border-gray-200 hover:border-gray-300',
    filled: 'bg-gray-50',
    premium: 'premium-card',
    glass: 'bg-white/90 backdrop-blur-lg border border-white/50 shadow-md',
    minimal: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-white to-gray-50 shadow-md',
  };

  const hoverClasses = hoverEffect
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';

  // Enhanced animation variants
  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: animationDelay * 0.1,
        ease: [0.2, 0.8, 0.2, 1] 
      }
    }
  };

  const CardComponent = animated && typeof window !== 'undefined' ? motion.div : 'div';
  
  const animationProps = animated ? {
    variants: animationVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden"
  } : {};

  return (
    <CardComponent
      ref={animated ? ref : undefined}
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        accentBorder && 'border-l-4 border-l-[#D4AF37] pl-6',
        shine && 'premium-shine overflow-hidden',
        elevate && 'hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300 ease-out',
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
      {shine && (
        <div className="absolute inset-0 overflow-hidden rounded-xl -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-30 translate-x-[200%] animate-shine"></div>
        </div>
      )}
      
      {icon && <div className="mb-4 text-[#D4AF37] flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-100">{icon}</div>}
      
      {title && (
        <h3 className="text-xl font-bold mb-2 text-[#1A2036]">
          {title}
          {variant === 'premium' && (
            <div className="h-1 w-16 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/20 mt-2 rounded-full"></div>
          )}
        </h3>
      )}
      
      {subtitle && <p className="text-[#455070] mb-4 leading-relaxed text-[15px]">{subtitle}</p>}
      
      <div className={title || subtitle ? 'mt-4' : ''}>{children}</div>
    </CardComponent>
  );
};

export default Card; 