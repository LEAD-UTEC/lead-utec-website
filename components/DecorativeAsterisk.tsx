import React from 'react';

interface DecorativeAsteriskProps {
  size?: number;
  className?: string;
}

export function DecorativeAsterisk({ size = 48, className = '' }: DecorativeAsteriskProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="asteriskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#df3124" />
          <stop offset="100%" stopColor="#921ea2" />
        </linearGradient>
      </defs>
      <path 
        d="M12 2L12 22M2 12L22 12M5.64 5.64L18.36 18.36M5.64 18.36L18.36 5.64" 
        stroke="url(#asteriskGradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
    </svg>
  );
}
