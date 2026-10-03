import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.109"],
  images: {
    remotePatterns: [
      {
        hostname: new URL(process.env.NEXT_PUBLIC_SUPABASE_URL!).hostname,
        pathname: "/storage/v1/object/public/project-images/**",
      },
    ],
  },
};

export default nextConfig;
