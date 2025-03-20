/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Export as static site
  images: {
    unoptimized: true, // For static export
  },
  trailingSlash: true, // Add trailing slashes to URLs
  assetPrefix: '/', // Ensure assets load correctly
  // No basePath needed for root domain deployment
}

module.exports = nextConfig
