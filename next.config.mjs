/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'flagcdn.com', 'upload.wikimedia.org'],
  }
};

export default nextConfig;
