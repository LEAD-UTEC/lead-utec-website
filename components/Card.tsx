import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'default' | 'gradient-border' | 'gradient-bg';
  children: React.ReactNode;
  className?: string;
}

export function Card({ variant = 'default', children, className }: CardProps) {
  const baseStyles = 'rounded-xl p-6';
  
  const variants = {
    default: 'bg-white/5 border border-white/10 backdrop-blur-sm',
    'gradient-border': 'relative bg-[#010b3d] before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-b before:from-[#df3124] before:to-[#921ea2] before:-z-10 before:content-[""]',
    'gradient-bg': 'bg-gradient-to-b from-[#df3124] to-[#921ea2] text-white',
  };
  
  if (variant === 'gradient-border') {
    return (
      <div className={cn('relative', className)}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#df3124] to-[#921ea2] p-[2px]">
          <div className={cn(baseStyles, 'bg-[#010b3d] h-full rounded-xl')}>
            {children}
          </div>
        </div>
        <div className={cn(baseStyles, 'relative')}>
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn(baseStyles, variants[variant], className)}>
      {children}
    </div>
  );
}
