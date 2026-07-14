import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化設定
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 旧Vercelドメインから新ドメインへのリダイレクト
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://rumii.bitstar.tokyo/lp/",
        permanent: true,
      },
      {
        source: "/:path+",
        destination: "https://rumii.bitstar.tokyo/lp/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
