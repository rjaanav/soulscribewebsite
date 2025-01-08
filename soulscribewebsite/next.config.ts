/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: '/<repository-name>', // Replace <repository-name> with your GitHub repository name
  assetPrefix: '/<repository-name>/', // Ensures assets use the correct path
};

module.exports = nextConfig;
