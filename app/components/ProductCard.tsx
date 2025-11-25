'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 hover:border-amber-500/50 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-zinc-950">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-white group-hover:text-amber-500 transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2 min-h-[3rem]">
          {price && (
            <span className="text-lg font-bold text-amber-500">{price}</span>
          )}
          <button className="flex items-center space-x-2 text-sm font-medium text-white hover:text-amber-500 transition-colors duration-300 group">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-600/20" />
      </div>
    </div>
  );
}


