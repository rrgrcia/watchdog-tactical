'use client';

import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10">
      <div className="relative z-10 space-y-4">
        <div className="inline-flex p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-amber-500" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />
    </div>
  );
}


