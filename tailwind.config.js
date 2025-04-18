/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    extend: {
      colors: {
        // Updated Refined Color Palette
        'background': '#F9F8F6', // Warm ivory/off-white background
        'primary': {
          DEFAULT: '#1D4552', // Deeper, more sophisticated teal
          dark: '#102A33', 
          '50': '#E4EBEE',
          '100': '#C2D2D8',
          '200': '#A0BBC2',
          '300': '#7EA3AC',
          '400': '#4F8396',
          '500': '#2F6273',
          '600': '#1D4552', // Same as DEFAULT
          '700': '#183944',
          '800': '#122C35',
          '900': '#0D2027'
        },
        'accent': {
          DEFAULT: '#D8B458', // Refined gold accent
          light: '#E6CB81',
          dark: '#B69639',
          '50': '#FAF6E9',
          '100': '#F2E9CB',
          '200': '#EDDAAD',
          '300': '#E6CB81',
          '400': '#D8B458', // Same as DEFAULT
          '500': '#C9A43A',
          '600': '#B69639',
          '700': '#95792F',
          '800': '#745E25',
          '900': '#53431B'
        },
        'neutral': {
          DEFAULT: '#E6DED1', // Warm sand as requested
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
          DEFAULT: '#1D2023', // Richer black for better contrast
          secondary: '#3E4045', // Darker charcoal for better readability
          light: '#656871' // Refined medium gray for tertiary text
        },
        'border-color': '#E8E1D4', // Subtle neutral border
        'white': '#ffffff',
        'black': '#000000',
        'transparent': 'transparent',
        'error': '#B13A3A', // Refined error red
        'success': '#376A4C', // Elegant success green
        
        // For compatibility - using new color system
        'secondary': {
          '100': '#F3EFE8', // neutral-100
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
          '400': '#1D4552', // primary DEFAULT
          '500': '#183944', // primary-700
          '600': '#122C35'  // primary-800
        },
        
        // For backward compatibility - map to text
        'charcoal': {
          '400': '#656871', // text-light
          '600': '#3E4045', // text-secondary
          '700': '#4E4538', // neutral-900
          '800': '#1D2023'  // text DEFAULT
        },
      },
      
      fontFamily: {
        // Updated premium typography system
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        'heading': ['"Playfair Display"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'body': ['Montserrat', 'ui-sans-serif', 'system-ui']
      },
      
      boxShadow: {
        // Refined luxury shadow system
        'subtle': '0 2px 5px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 10px rgba(0, 0, 0, 0.07)',
        'large': '0 12px 24px rgba(0, 0, 0, 0.09)',
        'card': '0 6px 16px rgba(0, 0, 0, 0.06)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.15)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 12px 24px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.1)',
        'focus': '0 0 0 3px rgba(216, 180, 88, 0.35)', // Based on new accent gold
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
        'xs': ['0.75rem', { lineHeight: '1.125rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.375rem' }], // 14px
        'base': ['1.0625rem', { lineHeight: '1.625rem' }], // 17px
        'lg': ['1.1875rem', { lineHeight: '1.75rem' }], // 19px
        'xl': ['1.375rem', { lineHeight: '2rem' }],   // 22px
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }], // 26px
        '3xl': ['2rem', { lineHeight: '2.5rem' }],     // 32px
        '4xl': ['2.5rem', { lineHeight: '1.2' }],    // 40px
        '5xl': ['3.125rem', { lineHeight: '1.1' }],   // 50px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],    // 60px
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
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
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
      },
    },
  },
  plugins: [],
} 