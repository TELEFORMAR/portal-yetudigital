import nextPWA from 'next-pwa';
import { join } from 'path';

const isProd = process.env.NODE_ENV === 'production';

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable:!isProd,
});

const nextConfig = {
  // Configuração de imagens moderna
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Turbopack não precisa de configuração especial se não tiveres webpack custom
 // experimental: {
 //   turbo: true,
 // },
};

export default withPWA(nextConfig);
