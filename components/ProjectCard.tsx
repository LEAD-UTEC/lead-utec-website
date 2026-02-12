import React from 'react';
import { Badge } from './Badge';

interface ProjectCardProps {
  title: string;
  type: string;
  date?: string;
  axis: string;
  description: string;
}

export function ProjectCard({ title, type, date, axis, description }: ProjectCardProps) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant="gradient">{axis}</Badge>
        <span className="text-xs text-white/50 font-medium uppercase tracking-wide">{type}</span>
      </div>
      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
        {title}
      </h4>
      {date && (
        <p className="text-sm text-white/40 mb-3">{date}</p>
      )}
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
