import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'primary', children, className }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold';
  
  const variants = {
    primary: 'bg-[#df3124] text-white',
    secondary: 'bg-[#921ea2] text-white',
    gradient: 'bg-gradient-to-r from-[#df3124] to-[#921ea2] text-white',
  };
  
  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
