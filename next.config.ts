import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/institut-le-rosey",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
