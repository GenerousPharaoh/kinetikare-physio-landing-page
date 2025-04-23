'use client';

import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles applied to all buttons
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none overflow-hidden",
  {
    variants: {
      variant: {
        primary: 
          "bg-accent hover:bg-accent-dark text-white shadow-md hover:shadow-lg focus:ring-accent/30",
        secondary: 
          "bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 text-white shadow-md hover:shadow-lg focus:ring-white/30",
        outline: 
          "border-2 border-accent text-accent hover:bg-accent/10 focus:ring-accent/20",
        ghost: 
          "bg-transparent text-accent hover:bg-accent/10 focus:ring-accent/20",
        subtle: 
          "bg-neutral-100 hover:bg-neutral-200 text-gray-900 focus:ring-neutral-300",
        link: 
          "bg-transparent underline-offset-4 hover:underline text-accent focus:ring-accent/20 shadow-none",
      },
      size: {
        sm: "text-xs px-4 py-2 rounded-full",
        md: "text-sm px-6 py-3 rounded-full",
        lg: "text-base px-8 py-4 rounded-full",
        xl: "text-lg px-10 py-5 rounded-full",
        icon: "h-10 w-10 rounded-full p-0",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    // Default variant
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

// Shimmer effect for premium buttons
const ShimmerEffect = () => (
  <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></span>
  </span>
);

// Button props extending HTML button attributes and variant props
export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
  href?: string;
  premium?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Main Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant, 
    size, 
    fullWidth, 
    premium = false,
    href, 
    external = false,
    icon,
    iconPosition = 'right',
    ...props 
  }, ref) => {
    // If href is provided, render as Link
    if (href) {
      const linkProps = external ? { 
        target: "_blank", 
        rel: "noopener noreferrer" 
      } : {};
      
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant, size, fullWidth }),
            premium && "group",
            className
          )}
          {...linkProps}
        >
          {premium && <ShimmerEffect />}
          
          {icon && iconPosition === 'left' && (
            <span className="mr-2">{icon}</span>
          )}
          
          {children}
          
          {icon && iconPosition === 'right' && (
            <span className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300">{icon}</span>
          )}
        </Link>
      );
    }

    // Otherwise, render as button
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          premium && "group",
          className
        )}
        ref={ref}
        {...props}
      >
        {premium && <ShimmerEffect />}
        
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

// Add ripple effect CSS to our component
export function ButtonRippleStyles() {
  return (
    <style jsx global>{`
      .ripple-effect {
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
      }
      
      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        background-color: rgba(255, 255, 255, 0.25);
        pointer-events: none;
      }
      
      @keyframes ripple {
        to {
          transform: scale(2.5);
          opacity: 0;
        }
      }
    `}</style>
  );
} 