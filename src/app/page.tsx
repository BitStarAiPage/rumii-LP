import { HeroSection } from "@/components/sections/HeroSection";
import { RenewalPointSection } from "@/components/sections/RenewalPointSection";
import { BenefitSection } from "@/components/sections/BenefitSection";
import { LineUpSection } from "@/components/sections/LineUpSection";
import { PurchaseSection } from "@/components/sections/PurchaseSection";
import { Footer } from "@/components/layout/Footer";

// 構造化データ（JSON-LD）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NUIT",
  alternateName: "ニュイ",
  url: "https://nuit-beauty.example.jp",
  logo: "https://nuit-beauty.example.jp/icon.svg",
  description:
    "NUITは、夜間美容に着目したヘアケアブランドです。寝ている間に髪を集中補修し、翌朝まとまりのある潤艶髪へ導きます。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "神宮前1-2-3 ナイトビル5F",
    addressLocality: "渋谷区",
    addressRegion: "東京都",
    postalCode: "150-0000",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-3-0000-1234",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
  sameAs: [],
};

// 製品の構造化データ
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "カームナイトリペア シャンプー＆トリートメント",
        description: "ダメージを受けた髪を夜間に集中補修。翌朝しっとりまとまる髪へ。",
        brand: {
          "@type": "Brand",
          name: "NUIT",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "リラックスナイトリペア シャンプー＆トリートメント",
        description: "くせ・うねりを抑えて、翌朝さらさらの指通りへ。",
        brand: {
          "@type": "Brand",
          name: "NUIT",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "ディープナイトリペア シャンプー＆トリートメント",
        description: "カラーやパーマで傷んだ髪を濃密に補修。翌朝しなやかな髪へ。",
        brand: {
          "@type": "Brand",
          name: "NUIT",
        },
      },
    },
  ],
};

/**
 * NUIT リニューアルページ
 * 夜間美容に着目したヘアケアブランドのプロモーションページ
 */
export default function Home() {
  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <main className="min-h-screen">
        {/* ヒーローセクション：ファーストビュー、メインビジュアル */}
        <HeroSection />

        {/* リニューアルポイントセクション：3つの進化ポイント */}
        <RenewalPointSection />

        {/* ベネフィットセクション：夜から朝への変化 */}
        <BenefitSection />

        {/* 製品ラインナップセクション：3つの製品ライン比較 */}
        <LineUpSection />

        {/* 購入セクション：ECサイトリンク */}
        <PurchaseSection />

        {/* フッター */}
        <Footer />
      </main>
    </>
  );
}
