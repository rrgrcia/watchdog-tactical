'use client';

import Image from 'next/image';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useWishlist } from '../contexts/WishlistContext';

export default function Wishlist() {
  const { items: wishlistItems, removeItem } = useWishlist();

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="relative pt-32 pb-16 min-h-screen bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-amber-500">Wishlist</span>
            </h1>
            <p className="text-lg text-zinc-400">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-full md:w-48 h-48 flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-amber-500">
                          {item.price}
                        </span>
                        {item.inStock && (
                          <span className="text-sm text-green-500">In Stock</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center space-x-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="flex items-center space-x-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-5 h-5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-zinc-400 mb-6">
                Save items you love to your wishlist
              </p>
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <span>Browse Products</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}


