import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/home',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig
