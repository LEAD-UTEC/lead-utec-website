import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#df3124] text-white hover:bg-[#c72a49] active:scale-95',
    secondary: 'bg-[#921ea2] text-white hover:bg-[#7a1689] active:scale-95',
    outline: 'border-2 border-[#df3124] text-[#df3124] hover:bg-[#df3124] hover:text-white active:scale-95',
    gradient: 'bg-gradient-to-b from-[#df3124] to-[#921ea2] text-white hover:shadow-lg hover:shadow-[#df3124]/30 active:scale-95',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
