import React from 'react';

type DividerShape = 'wave' | 'curve' | 'tilt' | 'arrow';
type DividerPosition = 'top' | 'bottom';

interface SectionDividerProps {
  shape?: DividerShape;
  position?: DividerPosition;
  fillColor?: string;
  bgColor?: string;
  className?: string;
  height?: number;
  invertX?: boolean;
  invertY?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  shape = 'curve',
  position = 'bottom',
  fillColor = '#ffffff',
  bgColor = 'transparent',
  className = '',
  height = 60,
  invertX = false,
  invertY = false,
}) => {
  // Apply transform if needed
  const getTransform = () => {
    let transform = '';
    
    if (invertX) transform += ' scaleX(-1)';
    if (invertY || position === 'top') transform += ' scaleY(-1)';
    
    return transform.trim();
  };

  // Get the SVG path based on the shape
  const getPath = () => {
    switch (shape) {
      case 'wave':
        return (
          <path 
            d="M0,96L60,80C120,64,240,32,360,37.3C480,43,600,85,720,90.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" 
            fill={fillColor}
          />
        );
      case 'curve':
        return (
          <path 
            d="M0,160L1440,32L1440,320L0,320Z" 
            fill={fillColor}
          />
        );
      case 'tilt':
        return (
          <path 
            d="M0,180L1440,40L1440,320L0,320Z" 
            fill={fillColor}
          />
        );
      case 'arrow':
        return (
          <path 
            d="M0,0L720,100L1440,0L1440,320L720,320L0,320Z" 
            fill={fillColor}
          />
        );
      default:
        return (
          <path 
            d="M0,160L1440,32L1440,320L0,320Z" 
            fill={fillColor}
          />
        );
    }
  };

  return (
    <div
      className={`section-divider relative w-full overflow-hidden ${className}`}
      style={{ 
        height: `${height}px`,
        backgroundColor: bgColor,
        marginTop: position === 'top' ? 0 : '-1px',
        marginBottom: position === 'bottom' ? 0 : '-1px',
      }}
    >
      <svg
        className="absolute w-full h-full"
        style={{ 
          transform: getTransform(),
          bottom: position === 'bottom' ? 0 : 'auto',
          top: position === 'top' ? 0 : 'auto',
          left: 0,
          right: 0,
        }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {getPath()}
      </svg>
    </div>
  );
};

export default SectionDivider; 