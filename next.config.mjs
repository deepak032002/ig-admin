/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized:  true,
    domains: ['picsum.photos', 'kc-buck.s3.amazonaws.com'],
  },
}

export default nextConfig
