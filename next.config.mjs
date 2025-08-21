/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fashionkingbd.com",
      },
    ],
  },
};

export default nextConfig;
