import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  subtitleClassName?: string;
  decorated?: boolean;
  badge?: React.ReactNode;
  accentLine?: boolean;
  containerClassName?: string;
  animate?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  titleClassName = '',
  subtitleClassName = '',
  decorated = true,
  badge,
  accentLine = true,
  containerClassName = '',
  animate = true,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  // Split title into words for staggered animation
  const titleWords = title.split(' ');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '100%', 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // The Component wrapper (motion.div or regular div)
  const Component = animate ? motion.div : 'div';
  const WordComponent = animate ? motion.span : 'span';
  const LineComponent = animate ? motion.span : 'span';

  return (
    <Component 
      className={cn('flex flex-col mb-14 md:mb-20', alignmentClasses[align], containerClassName)}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={animate ? { once: true, amount: 0.2 } : undefined}
      variants={animate ? containerVariants : undefined}
    >
      {badge && (
        <div className="mb-6">{badge}</div>
      )}
      
      <h2 className={cn(
        'section-heading relative',
        titleClassName,
      )}>
        <div className="inline-block">
          {titleWords.map((word, i) => (
            <WordComponent 
              key={i} 
              className="inline-block mr-[0.3em] last:mr-0"
              variants={animate ? wordVariants : undefined}
            >
              {word}
            </WordComponent>
          ))}
        </div>
        
        {accentLine && decorated && (
          <LineComponent 
            className={cn(
              "absolute h-1.5 bg-accent rounded-full",
              align === 'center' ? "-bottom-4 left-1/2 transform -translate-x-1/2 w-20" : "-bottom-4 left-0 w-20"
            )}
            variants={animate ? lineVariants : undefined}
            style={animate ? { width: 0 } : undefined}
          />
        )}
      </h2>
      
      {subtitle && (
        <p className={cn('section-subheading', subtitleClassName, {
          'mx-auto': align === 'center',
          'ml-auto': align === 'right',
        })}>
          {subtitle}
        </p>
      )}
    </Component>
  );
};

export default SectionHeading; 