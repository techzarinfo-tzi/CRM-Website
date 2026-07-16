import type { NextConfig } from "next";

interface RemotePattern {
  protocol: "http" | "https";
  hostname: string;
  port: string;
  pathname: string;
}

// The blog API host is only known at deploy time (NEXT_PUBLIC_API_ADMIN_URL),
// so the allowed image host is derived from it instead of being hardcoded —
// otherwise next/image silently blocks every blog image in any environment
// whose backend host isn't hardcoded here.
const adminApiRemotePattern = (): RemotePattern[] => {
  const url = process.env.NEXT_PUBLIC_API_ADMIN_URL || "http://localhost:5001";
  try {
    const { protocol, hostname, port } = new URL(url);
    return [
      {
        protocol: protocol.replace(":", "") as "http" | "https",
        hostname,
        port,
        pathname: "/uploads/**",
      },
    ];
  } catch {
    return [];
  }
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: adminApiRemotePattern(),
  },
};

export default nextConfig;
