import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
  };

  return (
    <header className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-primary-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className="mt-4 mx-auto w-24 h-1 bg-accent rounded-full" 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '6rem', opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={alignment === 'center' ? { margin: '0 auto' } : alignment === 'right' ? { marginLeft: 'auto' } : {}}
      />
    </header>
  );
};

export default PageHeader; 