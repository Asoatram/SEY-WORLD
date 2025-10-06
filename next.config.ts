import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        // ✅ Ignore type errors during production builds
        ignoreBuildErrors: true,
    },
    eslint: {
        // ✅ Ignore ESLint errors during builds
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;