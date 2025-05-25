import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark' | 'gold';
  className?: string;
  subtitleClassName?: string;
  decorated?: boolean;
  animateOnScroll?: boolean;
  as?: 'h1' | 'h2' | 'h3'; 
  highlight?: string;
  eyebrow?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  align = 'left',
  size = 'md',
  theme = 'light',
  className = '',
  subtitleClassName = '',
  decorated = true,
  animateOnScroll = true,
  as: Component = 'h2',
  highlight,
  eyebrow,
}: SectionHeadingProps) => {
  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Size classes for the heading
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl',
  };

  // Size classes for the subtitle
  const subtitleSizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
  };

  // Theme classes
  const themeClasses = {
    light: 'text-[#1A2036]',
    dark: 'text-white',
    gold: 'text-[#D4AF37]',
  };

  const subtitleThemeClasses = {
    light: 'text-[#455070]',
    dark: 'text-white/80',
    gold: 'text-[#1A2036]',
  };

  // Max width based on alignment
  const maxWidthClasses = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };

  // Function to highlight parts of the title if highlight is provided
  const renderTitle = () => {
    if (!highlight) return title;
    
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    
    return parts.map((part, i) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return <span key={i} className="text-[#D4AF37]">{part}</span>;
      }
      return part;
    });
  };

  // Determine which component to use based on animateOnScroll
  const MainComponent = animateOnScroll ? motion.div : 'div';
  const HeadingComponent = animateOnScroll ? motion.h2 : Component;
  const SubtitleComponent = animateOnScroll ? motion.p : 'p';
  const DecorativeElement = animateOnScroll ? motion.div : 'div';
  const EyebrowComponent = animateOnScroll ? motion.div : 'div';

  // Animation props
  const mainAnimationProps = animateOnScroll ? {
    variants: containerVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" }
  } : {};

  const childAnimationProps = animateOnScroll ? {
    variants: itemVariants
  } : {};

  return (
    <MainComponent 
      className={cn(
        alignClasses[align],
        maxWidthClasses,
        'mb-10',
        className
      )}
      {...mainAnimationProps}
    >
      {eyebrow && (
        <EyebrowComponent 
          className={cn(
            "mb-3 inline-block font-medium tracking-wide text-[#D4AF37] text-sm uppercase",
            align === 'center' && 'mx-auto'
          )}
          {...childAnimationProps}
              >
          {eyebrow}
        </EyebrowComponent>
      )}

      <HeadingComponent
        className={cn(
          'font-bold font-serif leading-tight tracking-tight',
          sizeClasses[size],
          themeClasses[theme]
        )}
        {...childAnimationProps}
      >
        {renderTitle()}
      </HeadingComponent>
      
      {decorated && (
        <DecorativeElement 
          className={cn(
            'h-1 bg-gradient-to-r from-[#D4AF37] to-transparent w-16 mt-4 mb-4 rounded-full',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto'
          )}
          {...childAnimationProps}
        />
      )}
      
      {subtitle && (
        <SubtitleComponent
          className={cn(
            'mt-4 leading-relaxed',
            subtitleSizeClasses[size],
            subtitleThemeClasses[theme],
            subtitleClassName
          )}
          {...childAnimationProps}
        >
          {subtitle}
        </SubtitleComponent>
      )}
    </MainComponent>
  );
};

export default SectionHeading; 