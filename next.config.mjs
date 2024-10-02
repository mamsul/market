/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'fakestoreapi.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
    ],
  },

  productionBrowserSourceMaps: false,
  experimental: {
    webpackBuildWorker: true,
  },
};

export default nextConfig;
