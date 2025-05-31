import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false, // đổi thành true nếu muốn redirect 301
      },
    ]
  },
}

export default nextConfig;
