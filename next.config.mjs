/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/.*'
      },
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
        port: '',
        pathname: '/img/.*'
      }
    ]
  },
};

export default nextConfig;