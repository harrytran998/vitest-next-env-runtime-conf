/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com'],
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    ENV: process.env.NEXT_PUBLIC_ENV,
  }
}

module.exports = nextConfig
