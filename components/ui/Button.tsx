'use client';

import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles applied to all buttons
  "relative inline-flex items-center justify-center font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-70 disabled:pointer-events-none overflow-hidden will-change-transform",
  {
    variants: {
      variant: {
        primary: 
          "bg-gradient-to-br from-[#1A2036] to-[#252E4A] text-[#D4AF37] hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#C8A52E] hover:text-[#1A2036] shadow-md hover:shadow-lg focus:ring-[#D4AF37]/30 border border-transparent",
        secondary: 
          "bg-white/80 backdrop-blur-sm border border-[#1A2036]/10 text-[#1A2036] hover:bg-[#1A2036] hover:text-white hover:border-transparent focus:ring-[#1A2036]/30 hover:shadow-md",
        outline: 
          "bg-transparent border-2 border-[#D4AF37] text-[#1A2036] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] focus:ring-[#D4AF37]/20 hover:shadow-md",
        ghost: 
          "bg-transparent text-[#1A2036] hover:bg-[#F9F9F7] focus:ring-[#1A2036]/20",
        subtle: 
          "bg-[#F9F9F7] hover:bg-[#EFEFED] text-[#455070] focus:ring-[#D4AF37]/20 border border-[#1A2036]/5 hover:border-[#1A2036]/10",
        link: 
          "bg-transparent underline-offset-4 hover:underline text-[#1A2036] focus:ring-[#1A2036]/20 shadow-none p-0 hover:text-[#D4AF37]",
        gold:
          "bg-gradient-to-br from-[#B08D57] to-[#B08D57] text-white hover:bg-gradient-to-br hover:from-[#A17D47] hover:to-[#A17D47] hover:text-white shadow-md hover:shadow-lg focus:ring-[#B08D57]/30",
      },
      size: {
        sm: "text-xs h-9 px-4 py-2 rounded-lg",
        md: "text-sm h-10 px-6 py-2.5 rounded-lg",
        lg: "text-base h-12 px-8 py-3 rounded-lg",
        xl: "text-lg h-14 px-10 py-3.5 rounded-xl",
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

// Enhanced shimmer effect for buttons
const ShimmerEffect = () => (
  <span className="absolute inset-0 overflow-hidden rounded-inherit pointer-events-none">
    <span className="absolute inset-0 w-[400%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></span>
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
  showRipple?: boolean;
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
    showRipple = false,
    ...props 
  }, ref) => {
    const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
      if (!showRipple) return;
      
      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      element.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };
    
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
            premium && "group hover:-translate-y-1 premium-shine",
            showRipple && "ripple-effect",
            className
          )}
          onClick={handleRipple}
          {...linkProps}
        >
          {premium && <ShimmerEffect />}
          
          <span className="flex items-center justify-center">
          {icon && iconPosition === 'left' && (
              <span className="mr-2.5 inline-flex">{icon}</span>
          )}
          
            <span>{children}</span>
          
          {icon && iconPosition === 'right' && (
              <span className="ml-2.5 inline-flex group-hover:translate-x-0.5 transition-transform duration-300 ease-out">{icon}</span>
          )}
          </span>
        </Link>
      );
    }

    // Otherwise, render as button
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          premium && "group hover:-translate-y-1.5 premium-shine transition-transform",
          showRipple && "ripple-effect",
          className
        )}
        ref={ref}
        onClick={(e) => {
          handleRipple(e);
          props.onClick?.(e);
        }}
        {...props}
      >
        {premium && <ShimmerEffect />}
        
        <span className="flex items-center justify-center">
        {icon && iconPosition === 'left' && (
            <span className="mr-2.5 inline-flex">{icon}</span>
        )}
        
          <span>{children}</span>
        
        {icon && iconPosition === 'right' && (
            <span className="ml-2.5 inline-flex group-hover:translate-x-0.5 transition-transform duration-300 ease-out">{icon}</span>
        )}
        </span>
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
        animation: ripple 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
      }
      
      @keyframes ripple {
        to {
          transform: scale(2.5);
          opacity: 0;
        }
      }
      
      /* Better focus styles */
      button:focus-visible, a:focus-visible {
        outline: 2px solid #D4AF37;
        outline-offset: 2px;
        box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.15);
      }
      
      /* Premium button animation */
      .premium-shine {
        overflow: hidden;
        position: relative;
        transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      
      .premium-shine:hover {
        transform: translateY(-2px);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
      }
      
      .premium-shine:active {
        transform: translateY(1px);
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      }
    `}</style>
  );
} 