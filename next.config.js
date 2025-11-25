/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mocha-cdn.com',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;


