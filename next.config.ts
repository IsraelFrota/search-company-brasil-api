import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/search-company",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;