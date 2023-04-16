/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com', "upload.wikimedia.org", "mms.businesswire.com"],
  },
}

module.exports = nextConfig
