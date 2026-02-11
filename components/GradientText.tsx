import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-b from-[#df3124] to-[#921ea2] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
