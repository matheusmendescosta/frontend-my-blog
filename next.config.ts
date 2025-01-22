import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone" as "standalone" | "export" | undefined,
};

export default nextConfig;
