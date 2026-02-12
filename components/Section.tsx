import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({ id, children, className, container = true }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      {container ? (
        <div className="max-w-7xl mx-auto px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className={cn('text-lg text-white/70 leading-relaxed', centered && 'max-w-3xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
