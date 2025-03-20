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
  env: {
    // Default values for development (these will be overridden in production)
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-supabase-url.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
  },
}

module.exports = nextConfig
