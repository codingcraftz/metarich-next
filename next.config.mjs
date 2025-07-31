/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/metarich.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
