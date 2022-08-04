/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ["www.restfullysleep.com", "www.himgs.com"],
  },
};

module.exports = nextConfig;
