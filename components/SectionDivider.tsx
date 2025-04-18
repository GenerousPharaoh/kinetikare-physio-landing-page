import React from 'react';

type SectionDividerProps = {
  variant?: 'wave' | 'straight' | 'curve' | 'angled';
  className?: string;
};

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'wave',
  className = ''
}) => {
  if (variant === 'straight') {
    return <div className={`w-full h-4 ${className}`} aria-hidden="true" />;
  }
  
  if (variant === 'angled') {
    return (
      <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="50"
          viewBox="0 0 1440 74"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path d="M1440 0H0V74L1440 24V0Z" />
        </svg>
      </div>
    );
  }
  
  if (variant === 'curve') {
    return (
      <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="50"
          viewBox="0 0 1440 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path
            d="M0 48H1440C1440 48 1088.76 0 720 0C351.24 0 0 48 0 48Z"
          />
        </svg>
      </div>
    );
  }
  
  // Default is 'wave'
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="50"
        viewBox="0 0 1440 96"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <path
          d="M0 96L48 90.7C96 85 192 75 288 69.3C384 64 480 64 576 58.7C672 53 768 43 864 48C960 53 1056 75 1152 80C1248 85 1344 75 1392 69.3L1440 64V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V96Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider; 