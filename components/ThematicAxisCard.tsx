import React from 'react';

interface ThematicAxisCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ThematicAxisCard({ icon, title, description }: ThematicAxisCardProps) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#df3124]/20 to-[#921ea2]/20 flex items-center justify-center mb-4 text-[#df3124] group-hover:from-[#df3124]/30 group-hover:to-[#921ea2]/30 transition-all">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
