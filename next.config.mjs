/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NEXT_PUBLIC_BUILD_STANDALONE === 'true' ? 'export' : undefined,
    images: {
        unoptimized: true,
    },
    basePath: process.env.NEXT_PUBLIC_BUILD_STANDALONE === 'true' ? '/abenezertaye.github.io' : '',
    assetPrefix: process.env.NEXT_PUBLIC_BUILD_STANDALONE === 'true' ? '/abenezertaye.github.io/' : '',
};

export default nextConfig;
