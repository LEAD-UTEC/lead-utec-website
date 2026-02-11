import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-white/90">
        {label}
      </label>
      <input
        className={cn(
          'w-full px-4 py-3 rounded-lg',
          'bg-white/5 border border-white/10',
          'text-white placeholder:text-white/40',
          'focus:outline-none focus:ring-2 focus:ring-[#df3124] focus:border-transparent',
          'transition-all duration-200',
          error && 'border-[#df3124] focus:ring-[#df3124]',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-[#df3124]">{error}</p>
      )}
    </div>
  );
}
