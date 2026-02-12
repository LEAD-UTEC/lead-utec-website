import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

export function TeamMemberCard({ name, role, imageUrl }: TeamMemberCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n.charAt(0))
    .join('');

  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 text-center">
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-b from-[#df3124]/30 to-[#921ea2]/30 border-2 border-white/10 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl font-bold text-white/40">
            {initials}
          </span>
        )}
      </div>
      <h4 className="text-sm font-bold text-white mb-1">{name}</h4>
      <p className="text-xs font-medium bg-gradient-to-r from-[#df3124] to-[#921ea2] bg-clip-text text-transparent">
        {role}
      </p>
    </div>
  );
}
