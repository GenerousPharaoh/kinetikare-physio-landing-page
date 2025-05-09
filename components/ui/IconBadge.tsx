import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface IconBadgeProps {
  icon: React.ReactNode;
  variant?: 'circle' | 'square' | 'hexagon';
  color?: 'primary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  iconClassName?: string;
  gradient?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  variant = 'circle',
  color = 'primary',
  size = 'md',
  className = '',
  iconClassName = '',
  gradient = false,
  onClick,
  animate = true,
}) => {
  // Shape classes
  const variantClasses = {
    circle: 'rounded-full',
    square: 'rounded-lg',
    hexagon: 'rounded-lg',
  };

  // Color classes with navy/gold theme
  const colorClasses = {
    primary: gradient 
      ? 'bg-[#1A1F36] text-[#D4AF37]' 
      : 'bg-[#1A1F36] text-[#D4AF37]',
    accent: gradient 
      ? 'bg-[#D4AF37] text-[#1A1F36]' 
      : 'bg-[#D4AF37] text-[#1A1F36]',
    neutral: gradient 
      ? 'bg-[#F7F7F5] text-[#1A1F36]' 
      : 'bg-[#F7F7F5] text-[#1A1F36]',
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', // Default size
    lg: 'w-12 h-12',
  };

  // Animation variants
  const badgeVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.1
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  // Use motion component if animation is enabled
  const Component = animate ? motion.div : 'div';

  return (
    <Component 
      className={cn(
        'flex items-center justify-center shadow-sm',
        variantClasses[variant],
        colorClasses[color],
        sizeClasses[size],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      whileHover={animate ? "hover" : undefined}
      viewport={animate ? { once: true, amount: 0.8 } : undefined}
      variants={animate ? badgeVariants : undefined}
    >
      {/* Safely render the icon with proper dimensions */}
      <div className={cn('relative z-10 flex items-center justify-center', iconClassName)}>
        {icon}
      </div>
    </Component>
  );
};

export default IconBadge; 