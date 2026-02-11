/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/AB_P' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/AB_P/' : '',
};

export default nextConfig;
