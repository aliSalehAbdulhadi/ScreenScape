/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['e0.pxfuel.com', 'e1.pxfuel.com', 'image.tmdb.org'],
  },
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;
