/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static site generation settings
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure assets load correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  // Environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-supabase-url.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
    NEXT_PUBLIC_MOCK_SUPABASE: 'true',
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
}
module.exports = nextConfig
