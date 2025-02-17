import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'hzk0l2gckf.ufs.sh',
        port: '',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
