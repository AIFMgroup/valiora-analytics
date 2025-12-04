/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
}

module.exports = nextConfig

