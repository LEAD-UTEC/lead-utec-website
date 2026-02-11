import React from 'react';
import { cn } from '@/lib/utils';

interface DecorativeAsteriskProps {
  size?: number;
  className?: string;
}

export function DecorativeAsterisk({ size = 40, className }: DecorativeAsteriskProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <defs>
        <linearGradient id="asterisk-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#df3124" />
          <stop offset="100%" stopColor="#921ea2" />
        </linearGradient>
      </defs>
      {/* Center circle */}
      <circle cx="50" cy="50" r="8" fill="url(#asterisk-gradient)" />
      
      {/* 8 rays from center */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
        const radians = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(radians) * 12;
        const y1 = 50 + Math.sin(radians) * 12;
        const x2 = 50 + Math.cos(radians) * 45;
        const y2 = 50 + Math.sin(radians) * 45;
        
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#asterisk-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
