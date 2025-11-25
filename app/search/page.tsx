'use client';

import { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform search
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="relative pt-32 pb-16 min-h-screen bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Search <span className="text-amber-500">Products</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Find the perfect tactical gear for your needs
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-5 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-lg focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="Search for holsters, duty rigs, parts..."
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
          </form>

          {/* Search Results */}
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Results for "{searchQuery}"
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </div>
          ) : searchQuery ? (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-lg mb-4">
                No results found for "{searchQuery}"
              </p>
              <p className="text-zinc-500">Try different keywords or browse our products</p>
            </div>
          ) : (
            <div className="text-center py-16">
              <SearchIcon className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-400 text-lg">
                Enter a search term to find products
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}


