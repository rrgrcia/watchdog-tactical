'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, ShoppingCart, Heart, ChevronDown, ChevronUp, X, Play, Youtube } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface Holster {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
  category: string;
  onSale?: boolean;
  videoUrl?: string; // YouTube video URL or ID
}

export default function Holsters() {
  const [sortBy, setSortBy] = useState('latest');
  const [productsPerPage, setProductsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const { addItem } = useCart();
  const { addItem: addToWishlist, items: wishlistItems } = useWishlist();

  // Holsters data from https://wdtactical.com/holsters/
  // To add YouTube videos:
  // 1. Visit the product page on wdtactical.com
  // 2. Find the YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
  // 3. Add it to the videoUrl field below
  // Example: videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  const holsters: Holster[] = [
    {
      id: '1',
      title: 'Leisure Carry Clip On Belt',
      price: 64.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'hardware-accessories',
    },
    {
      id: '2',
      title: 'Sticky Dog Holster',
      price: 47.99,
      originalPrice: 79.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'iwb',
      onSale: true,
    },
    {
      id: '3',
      title: 'Suppressor Holster',
      price: 30.00,
      originalPrice: 50.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'light-bearing',
      onSale: true,
    },
    {
      id: '4',
      title: 'Ulti Clip Holster (IWB)',
      price: 44.99,
      originalPrice: 74.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'iwb',
      onSale: true,
    },
    {
      id: '5',
      title: 'Watchdog Tactical Cobra EDC 1.5" Coyote Tan Belt',
      price: 84.95,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'hardware-accessories',
    },
    {
      id: '6',
      title: 'Guard Dog Holster (OWB & IWB)',
      price: 44.99,
      originalPrice: 74.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'owb',
      onSale: true,
    },
    {
      id: '7',
      title: 'Under Cover Holster (IWB)',
      price: 39.99,
      originalPrice: 64.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'iwb',
      onSale: true,
    },
    {
      id: '8',
      title: 'Attack Dog Holster (OWB & IWB)',
      price: 47.99,
      originalPrice: 79.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'owb',
      onSale: true,
    },
    {
      id: '9',
      title: 'Under Cover Elite Holster (IWB)',
      price: 41.99,
      originalPrice: 69.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'iwb',
      onSale: true,
    },
    {
      id: '10',
      title: 'Third Leg Holster (IWB)',
      price: 72.00,
      originalPrice: 120.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'iwb',
      onSale: true,
    },
    {
      id: '11',
      title: 'American Paddle Holster (OWB)',
      price: 41.99,
      originalPrice: 69.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'owb',
      onSale: true,
    },
    {
      id: '12',
      title: 'Safariland Drop Leg QLS with Watchdog Tactical Holster Shell',
      price: 119.99,
      originalPrice: 199.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'specialty',
      onSale: true,
      // videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE', // Add YouTube video URL here
    },
    {
      id: '13',
      title: 'Chest Rig with Holster',
      price: 83.99,
      originalPrice: 139.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'specialty',
      onSale: true,
      // videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE', // Add YouTube video URL here
    },
    {
      id: '14',
      title: 'Safariland QLS Holster',
      price: 59.99,
      originalPrice: 99.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'owb',
      onSale: true,
    },
    {
      id: '15',
      title: 'Desert Eagle Holster (OWB & IWB)',
      price: 65.99,
      originalPrice: 109.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'owb',
      onSale: true,
    },
    {
      id: '16',
      title: 'Single Magazine Holder (OWB/IWB)',
      price: 14.99,
      originalPrice: 24.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'mag-holders',
      onSale: true,
    },
    {
      id: '17',
      title: 'Double Magazine Holder',
      price: 23.99,
      originalPrice: 39.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'mag-holders',
      onSale: true,
    },
    {
      id: '18',
      title: 'AR-15/AK-47 PMAG Holder',
      price: 17.99,
      originalPrice: 29.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'mag-holders',
      onSale: true,
    },
    {
      id: '19',
      title: 'Elastic Holder for Single Multi-Tool/Magazine',
      price: 9.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'mag-holders',
    },
    {
      id: '20',
      title: 'Watchdog Tactical Cobra EDC 1.5" Black Belt',
      price: 79.95,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      inStock: true,
      category: 'hardware-accessories',
    },
  ];

  const categories = [
    { id: '', label: 'All Categories' },
    { id: 'owb', label: 'Outside the waistband (OWB)' },
    { id: 'iwb', label: 'Inside the waistband (IWB)' },
    { id: 'light-bearing', label: 'Light bearing' },
    { id: 'specialty', label: 'Specialty (drop leg)' },
    { id: 'mag-holders', label: 'Mag Holders' },
    { id: 'hardware-accessories', label: 'Hardware/Accessories' },
  ];

  // Filter and sort products
  let filteredHolsters = holsters.filter(holster => {
    if (inStockOnly && !holster.inStock) return false;
    if (selectedCategory && holster.category !== selectedCategory) return false;
    if (holster.price < priceRange.min || holster.price > priceRange.max) return false;
    return true;
  });

  // Sort products
  filteredHolsters = [...filteredHolsters].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'latest':
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredHolsters.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedHolsters = filteredHolsters.slice(startIndex, startIndex + productsPerPage);

  const handleAddToCart = (holster: Holster) => {
    addItem({
      id: parseInt(holster.id),
      title: holster.title,
      image: holster.image,
      price: holster.price,
      quantity: 1,
    });
  };

  const handleAddToWishlist = (holster: Holster) => {
    addToWishlist({
      id: parseInt(holster.id),
      title: holster.title,
      image: holster.image,
      price: `$${holster.price.toFixed(2)}`,
      inStock: holster.inStock,
    });
  };

  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === parseInt(id));
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url?: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleVideoClick = (videoUrl?: string) => {
    if (videoUrl) {
      setSelectedVideo(videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Category: <span className="text-amber-500">Holsters</span>
            </h1>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"
              >
                <Filter className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-zinc-400">Show Filters</span>
                {showFilters ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </button>
              <span className="text-sm text-zinc-400">
                Showing {startIndex + 1}–{Math.min(startIndex + productsPerPage, filteredHolsters.length)} of {filteredHolsters.length} results
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-400">Show:</span>
                <select
                  value={productsPerPage}
                  onChange={(e) => {
                    setProductsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value="latest">Sort by latest</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Filter by price
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => {
                        setPriceRange({ ...priceRange, min: Number(e.target.value) });
                        setCurrentPage(1);
                      }}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                    <span className="text-zinc-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => {
                        setPriceRange({ ...priceRange, max: Number(e.target.value) });
                        setCurrentPage(1);
                      }}
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Stock Filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Filter by stock
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => {
                        setInStockOnly(e.target.checked);
                        setCurrentPage(1);
                      }}
                      className="w-4 h-4 bg-zinc-950 border-zinc-800 rounded text-amber-600 focus:ring-amber-500"
                    />
                    <span className="text-sm text-zinc-400">In stock only</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || inStockOnly || priceRange.min > 0 || priceRange.max < 300) && (
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setInStockOnly(false);
                    setPriceRange({ min: 0, max: 300 });
                    setCurrentPage(1);
                  }}
                  className="mt-4 flex items-center space-x-2 text-sm text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Clear all filters</span>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative pt-4 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedHolsters.map((holster) => (
              <div
                key={holster.id}
                className="group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 hover:border-amber-500/50 flex flex-col h-full"
              >
                {/* Sale Badge */}
                {holster.onSale && (
                  <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">
                    Sale
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-zinc-950">
                  <Image
                    src={holster.image}
                    alt={holster.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />
                  
                  {/* Video Play Button */}
                  {holster.videoUrl && (
                    <button
                      onClick={() => handleVideoClick(holster.videoUrl)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors z-10 group"
                      aria-label="Play video"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                        </div>
                        <span className="text-white text-xs font-medium">Watch Video</span>
                      </div>
                    </button>
                  )}
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={() => handleAddToWishlist(holster)}
                    className={`absolute top-2 right-2 p-2 rounded-full transition-colors z-10 ${
                      isInWishlist(holster.id)
                        ? 'bg-amber-600 text-white'
                        : 'bg-zinc-900/80 text-zinc-400 hover:bg-amber-600 hover:text-white'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist(holster.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-amber-500 transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
                    {holster.title}
                  </h3>

                  <div className="flex items-start justify-between pt-2 min-h-[3rem]">
                    <div className="flex flex-col">
                      {holster.originalPrice ? (
                        <>
                          <span className="text-lg font-bold text-amber-500">
                            ${holster.price.toFixed(2)}
                          </span>
                          <span className="text-xs text-zinc-500 line-through">
                            ${holster.originalPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-amber-500">
                          ${holster.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 mt-auto">
                    {holster.inStock ? (
                      <button
                        onClick={() => handleAddToCart(holster)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-all duration-300"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Select options</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-zinc-800 text-zinc-500 text-sm font-medium rounded-lg cursor-not-allowed"
                      >
                        <span>Sold out</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {paginatedHolsters.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-lg mb-4">
                No holsters found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setInStockOnly(false);
                  setPriceRange({ min: 0, max: 300 });
                }}
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 transition-colors"
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? 'bg-amber-600 text-white'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* YouTube Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo)}?autoplay=1`}
                title="Product Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

