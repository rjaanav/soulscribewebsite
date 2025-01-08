/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  } // Ensures assets use the correct path
};

module.exports = nextConfig;
