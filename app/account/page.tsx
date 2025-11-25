'use client';

import { User, CreditCard, Package, MapPin, Settings, LogOut } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Account() {
  const accountCredits = 150.00;

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="relative pt-32 pb-16 min-h-screen bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-amber-500">Account</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Manage your profile and orders
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 sticky top-32">
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-zinc-800">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">John Doe</h3>
                    <p className="text-sm text-zinc-400">john@example.com</p>
                  </div>
                </div>

                {/* Account Credits */}
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400">Account Credits</span>
                    <CreditCard className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-2xl font-bold text-amber-500">
                    ${accountCredits.toFixed(2)}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Available for your next purchase
                  </p>
                </div>

                <nav className="space-y-2">
                  {[
                    { icon: User, label: 'Profile', active: true },
                    { icon: Package, label: 'Orders', active: false },
                    { icon: MapPin, label: 'Addresses', active: false },
                    { icon: Settings, label: 'Settings', active: false },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        item.active
                          ? 'bg-amber-600 text-white'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-zinc-800 rounded-lg transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Info */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Profile Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="(555) 123-4567"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
                <button className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors">
                  Save Changes
                </button>
              </div>

              {/* Recent Orders */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Recent Orders
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      id: '#12345',
                      date: 'Nov 20, 2025',
                      status: 'Delivered',
                      total: '$89.99',
                    },
                    {
                      id: '#12344',
                      date: 'Nov 15, 2025',
                      status: 'In Transit',
                      total: '$149.99',
                    },
                  ].map((order, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-zinc-950 rounded-lg border border-zinc-800"
                    >
                      <div>
                        <p className="text-white font-medium mb-1">
                          Order {order.id}
                        </p>
                        <p className="text-sm text-zinc-400">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium mb-1">
                          {order.total}
                        </p>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            order.status === 'Delivered'
                              ? 'bg-green-500/10 text-green-500'
                              : 'bg-amber-500/10 text-amber-500'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


