/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;
