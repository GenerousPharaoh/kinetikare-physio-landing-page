import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  delay?: number;
}

export function Card({ title, description, icon, className, children, delay = 0 }: CardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-out',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5',
        delay > 0 ? `transition-delay-${delay}` : '',
        className
      )}
    >
      {icon && <div className="text-primary mb-4 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
} 