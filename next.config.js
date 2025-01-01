/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/a4bi-org-web-portal',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
