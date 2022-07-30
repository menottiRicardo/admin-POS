/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: false,
  images: {
    domains: ["metrodashcontent112606-dev.s3.us-east-1.amazonaws.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
