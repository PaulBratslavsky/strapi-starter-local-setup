/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
