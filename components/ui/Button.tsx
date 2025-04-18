import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-1 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent-dark shadow-elevation-1 hover:shadow-elevation-2 hover:-translate-y-0.5",
        secondary: "bg-primary text-white hover:bg-primary-dark shadow-elevation-1 hover:shadow-elevation-2 hover:-translate-y-0.5",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-primary hover:bg-primary-50/50 hover:text-primary-dark",
        light: "bg-white/10 border border-white/20 text-white hover:bg-white/15 shadow-sm",
        dark: "bg-primary-800 text-white hover:bg-primary-900 shadow-elevation-1",
        link: "bg-transparent text-primary underline-offset-4 hover:underline hover:text-primary-dark p-0 shadow-none",
      },
      size: {
        xs: "text-xs px-2.5 py-1.5 rounded-md",
        sm: "text-sm px-4 py-2 rounded-md",
        md: "text-base px-6 py-3",
        lg: "text-lg px-8 py-4",
        icon: "p-2",
      },
      fullWidth: {
        true: "w-full",
      },
      withRipple: {
        true: "ripple-effect",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      withRipple: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    withRipple, 
    href, 
    external, 
    leftIcon, 
    rightIcon, 
    children, 
    ...props 
  }, ref) => {
    const classes = cn(
      buttonVariants({ variant, size, fullWidth, withRipple }),
      className
    );
    
    // Handle ripple effect for buttons with withRipple
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!withRipple) return;
      
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple';
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // If href is provided, render as Link
    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          onClick={handleRipple as any}
        >
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button
        className={classes}
        ref={ref}
        onClick={(e) => {
          handleRipple(e);
          props.onClick?.(e);
        }}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

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