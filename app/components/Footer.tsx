'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wide">
              ABOUT
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Veteran-owned firearms gear company specializing in custom Kydex
              holsters, duty rigs, and gun parts.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
              PRODUCTS
            </h3>
            <ul className="space-y-2">
              {[
                'Custom Holsters',
                'Duty Rigs',
                'Gun Parts',
                'Accessories',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="tel:9802249835" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  (980) 224-9835
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:customerservice@wdtactical.com" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  customerservice@wdtactical.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-zinc-400">
                  10430 Harris Oaks Blvd, STE H
                  <br />
                  Charlotte, NC 28269
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Watchdog Tactical. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-amber-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-amber-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


