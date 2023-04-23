/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['e0.pxfuel.com', 'e1.pxfuel.com'],
  },
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;
