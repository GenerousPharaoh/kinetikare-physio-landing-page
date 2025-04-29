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
    circle: 'icon-badge-circle',
    square: 'icon-badge-square',
    hexagon: 'icon-badge-hexagon',
  };

  // Color classes with enhanced gradients
  const colorClasses = {
    primary: gradient 
      ? 'bg-gradient-to-br from-primary-200 via-primary-100 to-primary-200/80 text-primary-700 shadow-md' 
      : 'icon-badge-primary',
    accent: gradient 
      ? 'bg-gradient-to-br from-accent-200 via-accent-100 to-accent-200/80 text-accent-700 shadow-md' 
      : 'icon-badge-accent',
    neutral: gradient 
      ? 'bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200/80 text-neutral-700 shadow-md' 
      : 'icon-badge-neutral',
  };

  // Size classes
  const sizeClasses = {
    sm: 'icon-badge-sm',
    md: '', // Default size
    lg: 'icon-badge-lg',
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
      scale: 1.08,
      rotate: [0, 5, 0, -5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: 'easeInOut'
        },
        scale: {
          duration: 0.2,
          ease: 'easeOut'
        }
      }
    }
  };

  // Use motion component if animation is enabled
  const Component = animate ? motion.div : 'div';

  return (
    <Component 
      className={cn(
        'icon-badge relative',
        variantClasses[variant],
        colorClasses[color],
        sizeClasses[size],
        gradient && 'shadow-lg',
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
      {/* Add subtle inner shadow and border for depth */}
      <div className="absolute inset-[1px] bg-white/10 rounded-full opacity-40"></div>
      
      {/* Add subtle animated glow effects for gradient badges */}
      {gradient && (
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-inherit opacity-50 blur-md"></div>
        </div>
      )}
      
      <div className={cn('w-5 h-5 relative z-10', iconClassName)}>
        {icon}
      </div>
    </Component>
  );
};

export default IconBadge; 