import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /\/data\/.*\.json$/, // todos os ficheiros JSON em /public/data
      handler: "CacheFirst",
      options: {
        cacheName: "json-data-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 dias
        },
      },
    },
  ],
});

const nextConfig = {
  turbopack: {}, // ativa Turbopack
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default withPWA(nextConfig);
