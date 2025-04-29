/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Performance classes that must not be purged
    'is-scrolling',
    'fast-scrolling',
    'is-visible',
    'will-change-transform',
    'motion-parent',
    'optimized-animation',
    'js-loaded',
    'reduced-motion',
    'animation-delay-1000',
    'animate-pulse-slow'
  ],
  future: {
    hoverOnlyWhenSupported: true, // Only generate hover styles for devices that support hover
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    screens: {
      'xs': '370px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        // More vibrant color palette
        'background': {
          DEFAULT: '#ffffff',
          alt: '#f9fafc',
          subtle: '#f5f7fa',
        },
        'primary': {
          // New Primary: Professional Dark Blue
          DEFAULT: '#2C3E50',
          dark: '#1B2631',
          '50': '#f0f6ff',
          '100': '#e4edff',
          '200': '#ABB2B9',
          '300': '#808B96',
          '400': '#566573',
          '500': '#2C3E50', // Same as DEFAULT
          '600': '#212F3D',
          '700': '#1B2631', // Same as dark
          '800': '#151D25',
          '900': '#0E141A'
        },
        'accent': {
          // New Accent: Richer Gold
          DEFAULT: '#D4AF37', 
          light: '#E6C66A',
          dark: '#B8860B',
          '50': '#FDF8E1',
          '100': '#FBF0C4',
          '200': '#F7E8A7',
          '300': '#F3DF8A',
          '400': '#E6C66A', // Same as light
          '500': '#D4AF37', // Same as DEFAULT
          '600': '#B8860B', // Same as dark
          '700': '#9C6F09',
          '800': '#7F5807',
          '900': '#624105'
        },
        'neutral': {
          DEFAULT: '#E6DED1', // Keep existing warm sand
          light: '#F3EFE8',
          dark: '#BCAD96',
          '50': '#FAF8F5',
          '100': '#F3EFE8',
          '200': '#EDE6DB',
          '300': '#E6DED1',
          '400': '#D4C7B3',
          '500': '#BCAD96',
          '600': '#A89478',
          '700': '#8A7A64',
          '800': '#6C604F',
          '900': '#4E4538'
        },
        'text': {
          DEFAULT: '#1A202C', // Darker text for better contrast
          secondary: '#3D4A59', // Darker secondary text
          light: '#5A6A7F' // Darker tertiary text for better readability
        },
        'border-color': '#E8E1D4', // Subtle neutral border
        'white': '#ffffff',
        'black': '#000000',
        'transparent': 'transparent',
        'error': '#C93535', // More vibrant error red
        'success': '#2E855A', // More vibrant success green
        
        // For compatibility - using new color system
        'secondary': {
          '50': '#f8f9fa',
          '100': '#eef1f5',
          '200': '#EDE6DB', // neutral-200
          '300': '#E6DED1', // neutral-300
          '400': '#D4C7B3', // neutral-400
          '500': '#BCAD96', // neutral-500
          '600': '#A89478', // neutral-600
          '700': '#8A7A64', // neutral-700
          '800': '#6C604F', // neutral-800
          '900': '#4E4538'  // neutral-900
        },
        
        // For backward compatibility - map to new primary
        'teal': {
          '400': '#2C3E50', // new primary DEFAULT
          '500': '#212F3D', // new primary-600
          '600': '#1B2631'  // new primary-700
        },
        
        // For backward compatibility - map to text
        'charcoal': {
          '400': '#5A6A7F', // text-light
          '600': '#3D4A59', // text-secondary
          '700': '#4E4538', // neutral-900
          '800': '#1A202C'  // text DEFAULT
        },
      },
      
      fontFamily: {
        // Updated premium typography system
        'sans': ['var(--font-montserrat)', 'Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        'heading': ['var(--font-playfair)', '"Playfair Display"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'body': ['var(--font-montserrat)', 'Montserrat', 'ui-sans-serif', 'system-ui']
      },
      
      boxShadow: {
        // Enhanced luxury shadow system with more depth
        'subtle': '0 2px 5px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'large': '0 15px 30px rgba(0, 0, 0, 0.12)',
        'card': '0 8px 20px rgba(0, 0, 0, 0.08)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.18)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 15px 30px rgba(0, 0, 0, 0.18), 0 6px 10px rgba(0, 0, 0, 0.12)',
        'focus': '0 0 0 3px rgba(231, 169, 49, 0.35)', // Based on new accent gold
        'glow': '0 0 25px rgba(231, 169, 49, 0.25)', // Enhanced glow effect
      },
      
      borderRadius: {
        'xs': '0.125rem', // 2px
        'sm': '0.25rem',  // 4px
        'md': '0.375rem', // 6px
        'lg': '0.5rem',   // 8px
        'xl': '0.75rem',  // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
      },
      
      spacing: {
        // Add spacing utilities for consistent layout
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      
      lineHeight: {
        // Adjusted for larger base font size
        'tighter': '1.1',
        'tight': '1.25',
        'snug': '1.4',
        'normal': '1.6',
        'relaxed': '1.75',
        'loose': '2',
        'prose': '1.75',
      },
      
      fontSize: {
        // Further refined font sizes for better balance
        'xxs': ['0.6875rem', { lineHeight: '1rem' }], // 11px
        'xs': ['0.75rem', { lineHeight: '1.125rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.375rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }], // 16px, adjusted for better scaling
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px, adjusted for better scaling
        'xl': ['1.25rem', { lineHeight: '1.875rem' }], // 20px, adjusted for better scaling
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px
      },
      
      maxWidth: {
        'prose': '38em',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
      },
      
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform-opacity': 'transform, opacity',
      },
      
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        slideInRight: {
          'from': { transform: 'translateX(20px)', opacity: 0 },
          'to': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-20px)', opacity: 0 },
          'to': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      
      // Add gradient configurations
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right, rgba(100, 130, 210, 0.05), rgba(100, 130, 210, 0))',
      },
      
      // Add z-index values to prevent stacking issues
      zIndex: {
        '-10': '-10',
        '-1': '-1',
      },

      // Add utility for animation delays
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
    },
  },
  variants: {
    // Limit variant generation to improve performance
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
      textColor: ['hover', 'focus', 'active'],
      opacity: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'group-hover'],
      transform: ['hover', 'focus'],
      translate: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
      borderColor: ['hover', 'focus'],
      animation: [], // Disable animation variants - use classes instead
      backdropFilter: [], // Disable backdrop variants - use classes instead
      blur: [], // Disable blur variants - use classes instead
    },
  },
  plugins: [
    // Add custom plugin for animation delay utility classes
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2000ms',
        },
        '.animation-delay-3000': {
          'animation-delay': '3000ms',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 