import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  size?: 'small' | 'medium' | 'large';
  accentBar?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
  size = 'medium',
  accentBar = true,
}) => {
  const alignmentClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
  };
  
  const sizeClasses = {
    'small': {
      title: 'text-2xl md:text-3xl font-semibold',
      subtitle: 'text-base md:text-lg max-w-2xl',
      spacing: 'mb-8',
      barWidth: '4rem',
      barHeight: '2px',
    },
    'medium': {
      title: 'text-3xl md:text-4xl lg:text-5xl font-bold',
      subtitle: 'text-lg md:text-xl max-w-3xl',
      spacing: 'mb-12',
      barWidth: '6rem',
      barHeight: '3px',
    },
    'large': {
      title: 'text-display font-bold',
      subtitle: 'subtitle-lg max-w-4xl',
      spacing: 'mb-16',
      barWidth: '8rem',
      barHeight: '4px',
    },
  };

  const currentSize = sizeClasses[size];
  
  return (
    <header className={`${currentSize.spacing} ${alignmentClasses[alignment]} ${className}`}>
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${currentSize.title} text-primary-900 mb-4`}>
          {title}
        </h1>
      </motion.div>
      
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className={`${currentSize.subtitle} text-primary-600 mx-auto opacity-90`}>
            {subtitle}
          </p>
        </motion.div>
      )}
      
      {accentBar && (
        <motion.div
          className="mt-6 bg-accent rounded-full" 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: currentSize.barWidth, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            height: currentSize.barHeight,
            margin: alignment === 'center' ? '0 auto' : alignment === 'right' ? '0 0 0 auto' : '0',
          }}
        />
      )}
    </header>
  );
};

export default PageHeader; 