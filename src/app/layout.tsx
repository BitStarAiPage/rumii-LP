import type { Metadata, Viewport } from "next";
import { Zen_Kaku_Gothic_New, Tenor_Sans } from "next/font/google";
import "./globals.css";

// 日本語本文用フォント
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

// 英語見出し用フォント
const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor",
  display: "swap",
});

// サイトURL（本番環境では環境変数から取得）
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rumii.jp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFCFD",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "rumii | 光をまとわせる、スキンケア",
    template: "%s | rumii",
  },
  description:
    "rumiiは、光をまとわせるスキンケアブランドです。乾燥から肌を守り、澄みわたる透明肌へ導きます。",
  keywords: [
    "rumii",
    "ルミー",
    "スキンケア",
    "化粧水",
    "美容液",
    "透明肌",
    "美白",
    "毛穴ケア",
  ],
  authors: [{ name: "株式会社BitStar" }],
  creator: "株式会社BitStar",
  publisher: "株式会社BitStar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "rumii | 光をまとわせる、スキンケア",
    description: "rumiiは、光をまとわせるスキンケアブランドです。乾燥から肌を守り、澄みわたる透明肌へ導きます。",
    url: siteUrl,
    siteName: "rumii",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/SCREEN_image01.png",
        width: 2940,
        height: 1594,
        alt: "rumii - 光をまとわせる、スキンケア",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rumii | 光をまとわせる、スキンケア",
    description: "rumiiは、光をまとわせるスキンケアブランドです。",
    images: ["/SCREEN_image01.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon_image01.png", type: "image/png" }],
    apple: [{ url: "/favicon_image01.png", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${tenorSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
