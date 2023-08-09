/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost", 
      "images.pexels.com", 
      // "leading-friends-510da24050.media.strapiapp.com"
    ],
  },
};

module.exports = nextConfig;
