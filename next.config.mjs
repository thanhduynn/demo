/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['i.imgur.com', 'tinypic.host'],
    },
};

export default nextConfig;