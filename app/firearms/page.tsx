'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, ShoppingCart, Heart, ChevronDown, ChevronUp, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface Firearm {
  id: string;
  title: string;
  price: number;
  image: string;
  inStock: boolean;
  manufacturer?: string;
  caliber?: string;
  type?: string;
}

export default function Firearms() {
  const [sortBy, setSortBy] = useState('latest');
  const [productsPerPage, setProductsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('');
  const [selectedCaliber, setSelectedCaliber] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [inStockOnly, setInStockOnly] = useState(false);

  const { addItem } = useCart();
  const { addItem: addToWishlist, items: wishlistItems } = useWishlist();

  // Firearms data from https://wdtactical.com/guns-firearms/
  // To get the actual product images:
  // 1. Visit https://wdtactical.com/guns-firearms/
  // 2. Right-click on each product image and select "Copy image address"
  // 3. Replace the placeholder image URLs below with the actual URLs
  // Note: Images are typically hosted on wdtactical.com or their CDN
  const firearms: Firearm[] = [
    {
      id: '1',
      title: 'SIG 365XCA9TWXR3TP P365 9MM 3.7 17R OR TPUSA',
      price: 699.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: false,
      manufacturer: 'SIG Sauer',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '2',
      title: 'CZ-USA 02345 CZ 457 Varmint MTR Full Size 22 LR 5+1 20" Black Nitride',
      price: 891.81,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'CZ-USA',
      caliber: '22 LR',
      type: 'Rifle',
    },
    {
      id: '3',
      title: 'GLK UA195S204MOSNOEF SC G19 9M G5 MOS 15R CERA',
      price: 692.65,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Glock',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '4',
      title: 'SPG EC9409BUCOMP15 ECHELON 9M 4 UDOT 15R',
      price: 666.77,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Springfield',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '5',
      title: 'FN 66101416 Reflex 9mm Luger 15+1 11+1 3.30" Micro-Compact',
      price: 499.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'FN',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '6',
      title: 'Walther Arms 4796033 PDP Pro-X 9mm 10rd 4.60"',
      price: 949.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Walther',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '7',
      title: 'Colt Mfg AR15A4 A4 5.56x45mm NATO 30+1 20"',
      price: 1197.86,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Colt',
      caliber: '5.56x45mm NATO',
      type: 'Rifle',
    },
    {
      id: '8',
      title: 'Aero Precision APBG310010C SOLUS 270 Win/30-06 Springfield',
      price: 949.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Aero Precision',
      caliber: '270 Win',
      type: 'Rifle',
    },
    {
      id: '9',
      title: 'ATI ATIGAX55613ML Alpha Maxx 5.56x45mm 30+1 16"',
      price: 379.25,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'ATI',
      caliber: '5.56x45mm',
      type: 'Rifle',
    },
    {
      id: '10',
      title: 'Diamondback DB1018C001 DB10 308 Win 20+1 16"',
      price: 973.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Diamondback',
      caliber: '308 Win',
      type: 'Rifle',
    },
    {
      id: '11',
      title: 'Ruger 3818 Security-9 Compact 9mm Luger 3.42" Barrel 10+1',
      price: 283.08,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Ruger',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '12',
      title: 'Ruger 1704 GP100 Medium Frame 357 Mag 6rd 6"',
      price: 748.91,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Ruger',
      caliber: '357 Mag',
      type: 'Revolver',
    },
    {
      id: '13',
      title: 'OA OA-2311-FPRO-KIT-HDB-PRT-21 9X19 5 21/17R HDB',
      price: 2749.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'OA Defense',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '14',
      title: 'Daniel Defense 0215813210067 DD5 V4 7.62x51mm NATO 18"',
      price: 2730.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Daniel Defense',
      caliber: '7.62x51mm NATO',
      type: 'Rifle',
    },
    {
      id: '15',
      title: 'Daniel Defense 0214213175055 DDM4 MK12 SPR 5.56x45mm NATO 18"',
      price: 2565.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Daniel Defense',
      caliber: '5.56x45mm NATO',
      type: 'Rifle',
    },
    {
      id: '16',
      title: 'Daniel Defense 0214515175055 DDM4 V9 5.56x45mm NATO 16"',
      price: 2185.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Daniel Defense',
      caliber: '5.56x45mm NATO',
      type: 'Rifle',
    },
    {
      id: '17',
      title: 'Diamondback DB1018C071 DB10 308 Win 16" 20+1',
      price: 1022.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Diamondback',
      caliber: '308 Win',
      type: 'Rifle',
    },
    {
      id: '18',
      title: 'Diamondback DB1717K004 DB15 223 Rem,5.56x45mm NATO 16"',
      price: 628.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Diamondback',
      caliber: '5.56x45mm NATO',
      type: 'Rifle',
    },
    {
      id: '19',
      title: 'Chiappa Firearms 340282 Rhino 60DS Large Frame 357 Mag 6 Shot, 6"',
      price: 1223.19,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Chiappa',
      caliber: '357 Mag',
      type: 'Revolver',
    },
    {
      id: '20',
      title: 'Sig Sauer 320SXG59STAS P320 9mm Luger 21+1 5" Optic Ready',
      price: 1799.99,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'SIG Sauer',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '21',
      title: 'Taurus 2-85635NSVZ 856 Defender Small 38 Special +P 6 Shot 3"',
      price: 466.82,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Taurus',
      caliber: '38 Special',
      type: 'Revolver',
    },
    {
      id: '22',
      title: 'OA OA-2311-FPRO-KIT-HDS-PRT-21 9X19 5 21/17R HDS',
      price: 2567.98,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'OA Defense',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '23',
      title: 'Oa Defense OA2311CPROKITBLKPRT15 2311 Compact Pro 9×19 15rd 4.25"',
      price: 2349.00,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'OA Defense',
      caliber: '9mm',
      type: 'Handgun',
    },
    {
      id: '24',
      title: 'Chiappa Firearms 340165 Rhino 40DS Medium Frame 9mm Luger 6 Shot 4"',
      price: 1048.21,
      image: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      inStock: true,
      manufacturer: 'Chiappa',
      caliber: '9mm',
      type: 'Revolver',
    },
  ];

  // Get unique manufacturers and calibers for filters
  const manufacturers = Array.from(new Set(firearms.map(f => f.manufacturer).filter(Boolean)));
  const calibers = Array.from(new Set(firearms.map(f => f.caliber).filter(Boolean)));

  // Filter and sort products
  let filteredFirearms = firearms.filter(firearm => {
    if (inStockOnly && !firearm.inStock) return false;
    if (selectedManufacturer && firearm.manufacturer !== selectedManufacturer) return false;
    if (selectedCaliber && firearm.caliber !== selectedCaliber) return false;
    if (firearm.price < priceRange.min || firearm.price > priceRange.max) return false;
    return true;
  });

  // Sort products
  filteredFirearms = [...filteredFirearms].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'latest':
      default:
        return 0; // Keep original order for latest
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredFirearms.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedFirearms = filteredFirearms.slice(startIndex, startIndex + productsPerPage);

  const handleAddToCart = (firearm: Firearm) => {
    addItem({
      id: parseInt(firearm.id),
      title: firearm.title,
      image: firearm.image,
      price: firearm.price,
      quantity: 1,
    });
  };

  const handleAddToWishlist = (firearm: Firearm) => {
    addToWishlist({
      id: parseInt(firearm.id),
      title: firearm.title,
      image: firearm.image,
      price: `$${firearm.price.toFixed(2)}`,
      inStock: firearm.inStock,
    });
  };

  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === parseInt(id));
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Guns & <span className="text-amber-500">Firearms</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
              Modern Firearms are defined by the ATF as firearms built after 1898.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"
              >
                <Filter className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-zinc-400">Filters</span>
                {showFilters ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </button>
              <span className="text-sm text-zinc-400">
                Showing {startIndex + 1}–{Math.min(startIndex + productsPerPage, filteredFirearms.length)} of {filteredFirearms.length} results
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Manufacturer Filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Firearm Manufacturer
                  </label>
                  <select
                    value={selectedManufacturer}
                    onChange={(e) => {
                      setSelectedManufacturer(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="">All Manufacturers</option>
                    {manufacturers.map((mfg) => (
                      <option key={mfg} value={mfg}>
                        {mfg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Caliber Filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Caliber or Gauge
                  </label>
                  <select
                    value={selectedCaliber}
                    onChange={(e) => {
                      setSelectedCaliber(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="">All Calibers</option>
                    {calibers.map((cal) => (
                      <option key={cal} value={cal}>
                        {cal}
                      </option>
                    ))}
                  </select>
                </div>

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
              {(selectedManufacturer || selectedCaliber || inStockOnly || priceRange.min > 0 || priceRange.max < 5000) && (
                <button
                  onClick={() => {
                    setSelectedManufacturer('');
                    setSelectedCaliber('');
                    setInStockOnly(false);
                    setPriceRange({ min: 0, max: 5000 });
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
            {paginatedFirearms.map((firearm) => (
              <div
                key={firearm.id}
                className="group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 hover:border-amber-500/50 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-zinc-950">
                  <Image
                    src={firearm.image}
                    alt={firearm.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />
                  
                  {/* Stock Badge */}
                  {!firearm.inStock && (
                    <div className="absolute top-2 right-2 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      Sold out
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => handleAddToWishlist(firearm)}
                    className={`absolute top-2 left-2 p-2 rounded-full transition-colors ${
                      isInWishlist(firearm.id)
                        ? 'bg-amber-600 text-white'
                        : 'bg-zinc-900/80 text-zinc-400 hover:bg-amber-600 hover:text-white'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist(firearm.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-white group-hover:text-amber-500 transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
                    {firearm.title}
                  </h3>

                  <div className="flex items-start justify-between pt-2 min-h-[3rem]">
                    <span className="text-lg font-bold text-amber-500">
                      ${firearm.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 mt-auto">
                    {firearm.inStock ? (
                      <button
                        onClick={() => handleAddToCart(firearm)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-all duration-300"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to cart</span>
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
          {paginatedFirearms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-lg mb-4">
                No firearms found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedManufacturer('');
                  setSelectedCaliber('');
                  setInStockOnly(false);
                  setPriceRange({ min: 0, max: 5000 });
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

      <Footer />
    </div>
  );
}

