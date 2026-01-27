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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuit-beauty.example.jp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d0d2b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NUIT | 夜間美容で、目覚める潤い。",
    template: "%s | NUIT",
  },
  description:
    "NUITは、夜間美容に着目したヘアケアブランドです。寝ている間に髪を集中補修し、翌朝まとまりのある潤艶髪へ導きます。",
  keywords: [
    "NUIT",
    "ニュイ",
    "ヘアケア",
    "シャンプー",
    "トリートメント",
    "夜間美容",
    "ナイトケア",
  ],
  authors: [{ name: "ナイトビューティー株式会社" }],
  creator: "ナイトビューティー株式会社",
  publisher: "ナイトビューティー株式会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NUIT | 夜間美容で、目覚める潤い。",
    description: "NUITは、夜間美容に着目したヘアケアブランドです。",
    url: siteUrl,
    siteName: "NUIT - ナイトビューティー",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NUIT - 夜間美容で、目覚める潤い。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NUIT | 夜間美容で、目覚める潤い。",
    description: "NUITは、夜間美容に着目したヘアケアブランドです。",
    images: ["/og-image.png"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
