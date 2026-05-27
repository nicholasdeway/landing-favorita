import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF (smallest) with WebP fallback — both cached for 31 days.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
    // Next.js 16 requires an explicit allowlist for quality values.
    qualities: [60, 75, 85],
  },
};

export default nextConfig;
