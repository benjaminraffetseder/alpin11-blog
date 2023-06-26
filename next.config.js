/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_API: process.env.NEXT_API,
    }
}

module.exports = nextConfig
