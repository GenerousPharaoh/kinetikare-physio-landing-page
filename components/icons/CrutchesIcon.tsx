import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CrutchesIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m14.5 11-1-1"/>
      <path d="m10.5 15-1-1"/>
      <path d="m17.5 8.5c-.3.3-.5.7-.5 1s.2.7.5 1"/>
      <path d="m7.5 18.5-.9-1.1"/>
      <path d="m15.5 6.5c1 .7 1.7 1.7 2 3"/>
      <path d="m6.5 12.5c0-1 .4-2.2 1-3"/>
      <path d="M4.21 10.22c-.2.5-.29 1.06-.21 1.78.25 2.42 2.66 4 5 4s4.75-1.58 5-4c.08-.72-.01-1.28-.21-1.78"/>
      <path d="M16.5 13h-9"/>
      <path d="M14 2v3.5c0 .8-.7 1.5-1.5 1.5h0c-.8 0-1.5-.7-1.5-1.5V2"/>
      <path d="M7 2v3.5c0 .8.7 1.5 1.5 1.5h0c.8 0 1.5-.7 1.5-1.5V2"/>
    </svg>
  );
};

export default CrutchesIcon; 