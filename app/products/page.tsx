'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Redirect to specific pages when categories are selected
  useEffect(() => {
    if (selectedCategory === 'firearms') {
      router.push('/firearms');
    } else if (selectedCategory === 'holsters') {
      router.push('/holsters');
    }
  }, [selectedCategory, router]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'firearms', label: 'Firearms' },
    { id: 'holsters', label: 'Holsters' },
    { id: 'handgun-parts', label: 'Handgun Parts' },
    { id: 'rifle-parts', label: 'Rifle Parts' },
    { id: 'suppressors', label: 'Suppressors' },
    { id: 'gun-cases', label: 'Gun Cases' },
    { id: 'knives', label: 'Knives' },
    { id: 'gear-apparel', label: 'Gear & Apparel' },
    { id: 'training', label: 'Training' },
  ];

  const products = [
    {
      title: 'OWB Kydex Holster',
      description:
        'Outside-the-waistband holster with adjustable retention. Perfect for duty and range use.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      price: '$89.99',
      category: 'holsters',
    },
    {
      title: 'IWB Concealment Holster',
      description:
        'Low-profile inside-the-waistband design for comfortable all-day concealed carry.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      price: '$79.99',
      category: 'holsters',
    },
    {
      title: 'Competition Speed Holster',
      description:
        'Race-ready holster designed for competitive shooting with lightning-fast draws.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      price: '$99.99',
      category: 'holsters',
    },
    {
      title: 'Complete Duty Belt System',
      description:
        'Professional-grade duty belt with integrated holster and magazine pouches.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/duty-rig.png',
      price: '$149.99',
      category: 'duty-rigs',
    },
    {
      title: 'Tactical Drop Leg Rig',
      description:
        'Adjustable drop leg platform with quick-release buckles and MOLLE compatibility.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/duty-rig.png',
      price: '$129.99',
      category: 'duty-rigs',
    },
    {
      title: 'Battle Belt Setup',
      description:
        'Modular battle belt system with inner/outer belt configuration for maximum versatility.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/duty-rig.png',
      price: '$169.99',
      category: 'duty-rigs',
    },
    {
      title: 'Extended Magazine Base Plates',
      description:
        'Aluminum base plates adding 2-5 rounds capacity with enhanced grip.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$29.99',
      category: 'parts',
    },
    {
      title: 'Aftermarket Trigger Kit',
      description:
        'Precision trigger upgrade kit reducing pull weight and improving reset.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$89.99',
      category: 'parts',
    },
    {
      title: 'Night Sights Set',
      description:
        'Tritium night sights with bright daytime visibility and glow-in-the-dark capability.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$119.99',
      category: 'parts',
    },
    {
      title: 'Magazine Pouch Double Stack',
      description:
        'Kydex double magazine carrier with adjustable retention and belt clips.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$39.99',
      category: 'accessories',
    },
    {
      title: 'Tactical Flashlight Mount',
      description:
        'Universal weapon light mount compatible with most rail systems.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$49.99',
      category: 'accessories',
    },
    {
      title: 'Belt Keepers Set of 4',
      description:
        'Heavy-duty belt keepers to secure inner and outer duty belts together.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$19.99',
      category: 'accessories',
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-amber-500">Products</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
              Premium tactical gear engineered for professionals who demand the best.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800">
              <Filter className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-zinc-400">Filter:</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative pt-2 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-400 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Need Something <span className="text-amber-500">Custom?</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We specialize in custom orders tailored to your specific
            requirements. Contact us to discuss your unique needs.
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
            <span>Request Custom Quote</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}


