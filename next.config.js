/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: { unoptimized: true },
}

module.exports = nextConfig
