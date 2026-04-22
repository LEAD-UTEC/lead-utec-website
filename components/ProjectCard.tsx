import React from 'react';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  type: string;
  date?: string;
  axis: string;
  description: string;
  imageUrl?: string;
  size?: 'large' | 'small';
  className?: string;
}

export function ProjectCard({
  title,
  type,
  date,
  axis,
  description,
  imageUrl,
  size = 'small',
  className,
}: ProjectCardProps) {
  const isLarge = size === 'large';

  if (imageUrl) {
    return (
      <div
        className={cn(
          'group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300',
          isLarge ? 'min-h-[400px]' : 'min-h-[260px]',
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010b3d] via-[#010b3d]/80 to-[#010b3d]/20" />
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="gradient">{axis}</Badge>
            <span className="text-xs text-white/70 font-medium uppercase tracking-wide">
              {type}
            </span>
          </div>
          <h4
            className={cn(
              'font-bold text-white mb-2',
              isLarge ? 'text-2xl md:text-3xl' : 'text-lg'
            )}
          >
            {title}
          </h4>
          {date && <p className="text-sm text-white/60 mb-2">{date}</p>}
          <p
            className={cn(
              'text-white/80 leading-relaxed',
              isLarge ? 'text-sm md:text-base' : 'text-sm line-clamp-3'
            )}
          >
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300',
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant="gradient">{axis}</Badge>
        <span className="text-xs text-white/50 font-medium uppercase tracking-wide">
          {type}
        </span>
      </div>
      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
        {title}
      </h4>
      {date && <p className="text-sm text-white/40 mb-3">{date}</p>}
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
