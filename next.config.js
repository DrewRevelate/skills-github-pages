/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Export as static site
  images: {
    unoptimized: true, // For static export
  },
  trailingSlash: true, // Add trailing slashes to URLs
}

module.exports = nextConfig
