/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;
