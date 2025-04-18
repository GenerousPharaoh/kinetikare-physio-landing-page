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
  variant?: 'default' | 'outline' | 'filled';
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
}: CardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    triggerOnce: true,
    threshold: 0.1,
  });

  const baseClasses = 'rounded-xl p-6 transition-all duration-300';

  const variantClasses = {
    default: 'bg-white shadow-md',
    outline: 'border-2 border-gray-200',
    filled: 'bg-secondary-100',
  };

  const hoverClasses = hoverEffect
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
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
      {icon && <div className="mb-4 text-teal-500">{icon}</div>}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      <div className={title || subtitle ? 'mt-4' : ''}>{children}</div>
    </div>
  );
};

export default Card; 