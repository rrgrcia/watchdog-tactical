'use client';

import Image from 'next/image';
import { Shield, Target, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We stand behind every product we make with unwavering commitment to quality and honesty.',
    },
    {
      icon: Target,
      title: 'Precision',
      description:
        'Every holster and piece of gear is crafted with meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Service',
      description:
        'Our commitment to serving those who serve continues through exceptional customer care.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We never settle for good enough. We strive for perfection in everything we create.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/veteran-owned.png"
            alt="Veteran Owned"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Our <span className="text-amber-500">Story</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Built by veterans who understand what it means to depend on your
              gear when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Veteran Owned,
                <br />
                <span className="text-amber-500">Mission Driven</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Watchdog Tactical was founded by military veterans who saw a
                  gap in the market for high-quality, reliable tactical gear.
                  After years of service, we understood firsthand the importance
                  of equipment you can trust with your life.
                </p>
                <p>
                  Our journey began in a small workshop, crafting custom Kydex
                  holsters for fellow service members and law enforcement
                  officers. Word spread quickly about the quality and precision
                  of our work, and Watchdog Tactical grew into the trusted brand
                  it is today.
                </p>
                <p>
                  Every product we create is built with the same attention to
                  detail and commitment to excellence that defined our military
                  service. We don't just make gear—we create solutions that
                  professionals can depend on in any situation.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/craftsmanship.png"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-lg border border-amber-500/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-amber-500">Values</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-amber-500">Commitment</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We pledge to continue serving those who serve by providing the
            highest quality tactical gear available. Every holster, every rig,
            every product that bears the Watchdog Tactical name is backed by our
            unwavering commitment to excellence and our dedication to the
            professional community.
          </p>
          <div className="pt-8">
            <div className="inline-block p-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg">
              <div className="bg-zinc-950 px-8 py-4 rounded-md">
                <p className="text-amber-500 font-semibold text-lg">
                  "Excellence in Every Detail"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


