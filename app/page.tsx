'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Award,
  Users,
  ChevronRight,
  Star,
  ExternalLink,
  CheckCircle,
  Play,
  X,
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import FeatureCard from './components/FeatureCard';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      title: 'Custom Kydex Holsters',
      description:
        'Precision-molded holsters tailored to your firearm. Built for comfort, retention, and quick draw.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/holster-detail.png',
      price: '$89.99',
    },
    {
      title: 'Duty Rig Systems',
      description:
        'Complete duty belt systems engineered for law enforcement and security professionals.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/duty-rig.png',
      price: '$149.99',
    },
    {
      title: 'Premium Gun Parts',
      description:
        'High-quality aftermarket parts and accessories to enhance your firearms performance.',
      image:
        'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png',
      price: '$49.99',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Veteran Owned',
      description:
        'Founded and operated by military veterans who understand the importance of reliable gear.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description:
        'Every product is crafted with precision using the highest quality materials available.',
    },
    {
      icon: Users,
      title: 'Custom Solutions',
      description:
        'Personalized designs tailored to your specific needs and preferences.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/hero-gear.png"
            alt="Tactical Gear"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-amber-500 font-medium">
                Veteran Owned & Operated
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Precision Crafted
              <br />
              <span className="text-amber-500">Tactical Gear</span>
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
              Custom Kydex holsters, duty rigs, and premium gun parts designed
              by veterans for professionals who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 group"
              >
                <span>Shop Products</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg border border-zinc-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <span>Our Story</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '15+', label: 'Years Experience' },
                { number: '5★', label: 'Customer Rating' },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-amber-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-500 rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose <span className="text-amber-500">Watchdog</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Built by veterans, tested by professionals, trusted by thousands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Featured <span className="text-amber-500">Products</span>
              </h2>
              <p className="text-lg text-zinc-400">
                Explore our most popular tactical gear and accessories.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors group"
            >
              <span className="font-medium">View All</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors group"
            >
              <span className="font-medium">View All Products</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* YouTube Video Section */}
          <div className="mt-16">
            <div className="text-center mb-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                See Our <span className="text-amber-500">Holsters</span> in Action
              </h3>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Watch how our precision-crafted holsters perform in real-world scenarios.
              </p>
            </div>

            {/* Video Thumbnail/Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div
                onClick={() => setShowVideoModal(true)}
                className="group relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-500/20"
              >
                {/* YouTube Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black">
                  <Image
                    src={`https://img.youtube.com/vi/W7fccUgSy5s/maxresdefault.jpg`}
                    alt="Watchdog Tactical Holsters Video"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="relative bg-amber-600 group-hover:bg-amber-500 rounded-full p-6 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <Play className="w-12 h-12 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-1">
                    Watchdog Tactical Holsters
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Click to play video
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {showVideoModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setShowVideoModal(false)}
            >
              <div
                className="relative w-full max-w-5xl bg-zinc-900 rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-colors duration-300 group"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* YouTube Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/W7fccUgSy5s?autoplay=1"
                    title="Watchdog Tactical Holsters"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Customer <span className="text-amber-500">Reviews</span>
              </h2>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              <p className="text-lg text-zinc-400">
                <strong className="text-white">233 Google reviews</strong>
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Watchdog+Tactical,+10430+Harris+Oaks+Blvd+STE+H,+Charlotte,+NC+28269/@35.3528,-80.7844,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d35.3528!4d-80.7844!16s%2Fg%2F11c0v8x9q1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-sm"
            >
              Write a review
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: 'Adam Mullings',
                rating: 5,
                text: "I came in to replace one gun holster. Bobby treated me like we have been best friends for years. Even took my side arm to reoil it. I ended up leaving with three different holsters. Excellent guy to deal with great place to shop.",
                date: 'Posted on Google',
                verified: true,
              },
              {
                name: 'John Buchanan',
                rating: 3,
                text: "I really wanted to like this place. I had a kydex holster made for my handgun. When I got it home (didn't have the gun with me to test at the shop) it didn't fit. They forgot to account for the compensator. In hindsight I would have left my gun with them to be used as the mold but they assured me they could do it without it. I called and told them about it and they said to bring it back and they could fix it in 5 minutes. This means they were just going to heat it up and push the gun in with the compensator. So, I did that myself. It is a serviceable holster now but still not great quality. It is not a very tight fit and even when tightened all the way up the gun still moves around. It's just not as high a quality holster as the price would suggest. I threw it in the old holster bucket and ordered one from Tier 1. For $20 more I got a much higher quality holster that I love. The staff were very nice and professional. I have no complaints there, just wouldn't order another holster from them.",
                date: 'Posted on Google',
                verified: true,
              },
              {
                name: 'Patsy Messina',
                rating: 5,
                text: 'Awesome tactical shop and very knowledgeable staff.',
                date: 'Posted on Google',
                verified: true,
              },
              {
                name: 'MICHAEL BLAIN',
                rating: 5,
                text: 'Great customer service',
                date: 'Posted on Google',
                verified: true,
              },
              {
                name: 'Billy',
                rating: 5,
                text: "Great place, never heard of them until a friend of mine recommended contacting them when I was looking for a micro gas tube, didnt want to order it and guess what, they had it instock at a unbelievable price, made the 45 min trip and glad I did.. it was a great experience.. Will return.",
                date: 'Posted on Google',
                verified: true,
              },
              {
                name: 'Samantha Argo',
                rating: 5,
                text: "Bobby is amazing at what he does!! Super informative, kind, detailed and took time to answer all my questions and get me the gear I needed at a great price. I could not praise him enough!",
                date: 'Posted on Google',
                verified: true,
              },
            ].map((review, index) => (
              <a
                key={index}
                href="https://www.google.com/maps/place/Watchdog+Tactical,+10430+Harris+Oaks+Blvd+STE+H,+Charlotte,+NC+28269/@35.3528,-80.7844,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d35.3528!4d-80.7844!16s%2Fg%2F11c0v8x9q1?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-zinc-900 rounded-lg border border-zinc-800 p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-white group-hover:text-amber-500 transition-colors">
                          {review.name}
                        </h3>
                        {review.verified && (
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" title="Verified by Trustindex" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-amber-500 fill-amber-500'
                                  : 'text-zinc-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500">{review.date}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4 group-hover:text-zinc-300 transition-colors">
                    {review.text}
                  </p>

                  {/* Trustindex Note */}
                  {review.verified && (
                    <p className="text-xs text-zinc-600 italic">
                      Trustindex verifies that the original source of the review is Google.
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Trustindex Badge Info */}
          <div className="text-center space-y-2 pt-8 border-t border-zinc-800">
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              <span>
                <strong className="text-white">Verified by Trustindex</strong>
              </span>
            </div>
            <p className="text-xs text-zinc-600 max-w-2xl mx-auto">
              Trustindex verified badge is the Universal Symbol of Trust. Only the greatest companies can get the verified badge who has a review score above 4.5, based on customer reviews over the past 12 months.{' '}
              <a
                href="https://www.trustindex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 underline"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-600 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Upgrade Your Gear?
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Watchdog Tactical
            for their mission-critical equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 hover:shadow-xl group"
            >
              <span>Browse Products</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-amber-700 transition-all duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


