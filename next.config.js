/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for GitHub Pages (no Image Optimization server)
  },
  output: 'export', // Enables static HTML export
  basePath: '/Devashish_Portfolio', // Required for GitHub Pages hosted under a subpath
  assetPrefix: '/Devashish_Portfolio/', // Ensures CSS/JS loads correctly
};

module.exports = nextConfig;
