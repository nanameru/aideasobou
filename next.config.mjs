/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Add cache-busting timestamp to force fresh deployments
  generateBuildId: async () => {
    return `build-${Date.now()}`
  }
};

export default nextConfig;
