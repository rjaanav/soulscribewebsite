/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: '/soulscribewebsite', // Replace <repository-name> with your GitHub repository name
  assetPrefix: '/soulscribewebsite', // Ensures assets use the correct path
};

module.exports = nextConfig;
