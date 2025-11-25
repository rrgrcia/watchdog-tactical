'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, Search, Heart, User, DollarSign, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  // Mock data - replace with actual state management
  const isLoggedIn = false;
  const cartItemCount = cartItems.length;
  const wishlistCount = wishlistItems.length;
  const accountCredits = 150.00;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  const productCategories = [
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-zinc-900/95 backdrop-blur-md ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src="https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/WTDOG.png"
              alt="Watchdog Tactical"
              width={140}
              height={84}
              className="h-[9vh] w-auto transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
          </Link>

          {/* Right Side Actions with Navigation */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation - Positioned near search icon */}
            <nav className="hidden md:flex items-center space-x-5 mr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-medium tracking-wide transition-colors duration-200 relative group ${
                    pathname === link.path
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      pathname === link.path
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
              
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <Link
                  href="/products"
                  className={`text-base font-medium tracking-wide transition-colors duration-200 relative group flex items-center space-x-1 ${
                    pathname === '/products'
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      pathname === '/products'
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                    isProductsDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {productCategories.map((category) => {
                    // Map specific categories to their dedicated pages
                    const getCategoryLink = (id: string) => {
                      if (id === 'firearms') return '/firearms';
                      if (id === 'holsters') return '/holsters';
                      return `/products?category=${id}`;
                    };
                    
                    return (
                      <Link
                        key={category.id}
                        href={getCategoryLink(category.id)}
                        className="block px-4 py-3 text-sm text-zinc-400 hover:text-amber-500 hover:bg-zinc-800 transition-colors"
                      >
                        {category.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              {/* Contact Link */}
              <Link
                href="/contact"
                className={`text-base font-medium tracking-wide transition-colors duration-200 relative group ${
                  pathname === '/contact'
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    pathname === '/contact'
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </nav>

            {/* Search Icon - Now directly next to navigation */}
            <Link
              href="/search"
              className="hidden md:block p-2 text-zinc-400 hover:text-white transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            {/* Account Credits - Desktop Only */}
            {isLoggedIn && (
              <Link
                href="/account"
                className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-green-600/10 border border-green-600/20 rounded-lg hover:bg-green-600/20 transition-colors group"
              >
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  ${accountCredits.toFixed(2)}
                </span>
              </Link>
            )}

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              className="hidden md:block relative p-2 text-zinc-400 hover:text-white transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="hidden md:block relative p-2 text-zinc-400 hover:text-white transition-colors"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Account/Login */}
            {isLoggedIn ? (
              <Link
                href="/account"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Account</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-amber-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-zinc-900/95 backdrop-blur-md px-4 py-6 space-y-4 border-t border-zinc-800">
          {/* Mobile Account Credits */}
          {isLoggedIn && (
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 bg-green-600/10 border border-green-600/20 rounded-lg"
            >
              <span className="text-sm text-zinc-400">Account Credits</span>
              <span className="text-lg font-bold text-green-500">
                ${accountCredits.toFixed(2)}
              </span>
            </Link>
          )}

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium transition-colors duration-200 ${
                pathname === link.path
                  ? 'text-amber-500'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Products with Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className={`w-full flex items-center justify-between text-base font-medium transition-colors duration-200 ${
                pathname === '/products'
                  ? 'text-amber-500'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Products Submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileProductsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 space-y-2 py-2">
                <Link
                  href="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-zinc-500 hover:text-amber-500 transition-colors"
                >
                  All Products
                </Link>
                {productCategories.map((category) => {
                  // Map specific categories to their dedicated pages
                  const getCategoryLink = (id: string) => {
                    if (id === 'firearms') return '/firearms';
                    if (id === 'holsters') return '/holsters';
                    return `/products?category=${id}`;
                  };
                  
                  return (
                    <Link
                      key={category.id}
                      href={getCategoryLink(category.id)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-zinc-500 hover:text-amber-500 transition-colors"
                    >
                      {category.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Link - Mobile */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-base font-medium transition-colors duration-200 ${
              pathname === '/contact'
                ? 'text-amber-500'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Contact
          </Link>

          {/* Mobile Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Link
              href="/search"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Search</span>
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors relative"
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>

          <Link
            href="/cart"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors relative"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Cart ({cartItemCount})</span>
          </Link>

          {isLoggedIn ? (
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">My Account</span>
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Login / Register</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}


