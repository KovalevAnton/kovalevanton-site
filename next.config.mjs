/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/arkanoid", destination: "/arkanoid/index.html" },
      { source: "/arkanoid/", destination: "/arkanoid/index.html" },
    ];
  },
};

export default nextConfig;
