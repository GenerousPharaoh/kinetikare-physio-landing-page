import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animated?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'filled' | 'premium' | 'glass';
  accentBorder?: boolean;
  shine?: boolean;
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
}: CardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    triggerOnce: true,
    threshold: 0.1,
  });

  const baseClasses = 'rounded-xl p-6 transition-all duration-300';

  const variantClasses = {
    default: 'bg-white shadow-modern-subtle',
    outline: 'border-2 border-gray-200',
    filled: 'bg-secondary-100',
    premium: 'premium-card',
    glass: 'bg-white/80 backdrop-blur-lg border border-white/70 shadow-modern-subtle',
  };

  const hoverClasses = hoverEffect
    ? 'hover:shadow-premium-card hover:-translate-y-1 cursor-pointer'
    : '';

  const animationClasses = animated
    ? isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'
    : '';

  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        animationClasses,
        accentBorder && 'border-accent-subtle pl-6',
        shine && 'premium-shine',
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
    >
      {icon && <div className="mb-4 text-accent-dark">{icon}</div>}
      {title && <h3 className="text-xl font-bold mb-2 text-premium-heading">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-4 leading-relaxed text-premium-subheading">{subtitle}</p>}
      <div className={title || subtitle ? 'mt-4' : ''}>{children}</div>
    </div>
  );
};

export default Card; 