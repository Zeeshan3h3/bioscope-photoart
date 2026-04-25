/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    webpack: (config) => {
        config.watchOptions = {
            ...(config.watchOptions || {}),
            ignored: /node_modules|\.git|pagefile\.sys|hiberfil\.sys|swapfile\.sys|DumpStack\.log\.tmp/i
        };
        return config;
    }
};

export default nextConfig;
