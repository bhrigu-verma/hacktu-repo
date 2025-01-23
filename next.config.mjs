/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  domains: ['utfs.io','images.unsplash.com'], // Add your allowed domains here
},
  reactStrictMode:false,
  images:{
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'wordpress-1269066-4577871.cloudwaysapps.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Add this
      },
    ],
  }
};

export default nextConfig;