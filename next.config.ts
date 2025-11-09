// import nextPWA from 'next-pwa';
// const withPWA = nextPWA({ ... });

const nextConfig = {
  turbopack: {}, // ativa Turbopack
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
