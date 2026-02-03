import { HeroSection } from "@/components/sections/HeroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { PointsSection } from "@/components/sections/PointsSection";
import { UsageSection } from "@/components/sections/UsageSection";
import { LineUpSection } from "@/components/sections/LineUpSection";
import { Footer } from "@/components/layout/Footer";
import { FixedSidebars } from "@/components/layout/FixedSidebars";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";

// 構造化データ（JSON-LD）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "rumii",
  alternateName: "ルミー",
  url: "https://rumii.jp",
  logo: "https://rumii.jp/icon.svg",
  description:
    "rumiiは、光をまとわせるスキンケアブランドです。乾燥から肌を守り、澄みわたる透明肌へ導きます。",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "株式会社BitStar",
  },
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
        name: "薬用クリアブライトローション",
        description: "W有効成分配合。肌荒れを防いで透きとおる肌へ。",
        brand: { "@type": "Brand", name: "rumii" },
        offers: {
          "@type": "Offer",
          price: "1650",
          priceCurrency: "JPY",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "薬用リンクルUVエマルジョン",
        description: "SPF37 PA+++。これ1本で美白もUVも。",
        brand: { "@type": "Brand", name: "rumii" },
        offers: {
          "@type": "Offer",
          price: "1650",
          priceCurrency: "JPY",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "クリアブライトAZセラム",
        description: "アゼライン酸11%配合。毛穴の目立ちを徹底ケア。",
        brand: { "@type": "Brand", name: "rumii" },
        offers: {
          "@type": "Offer",
          price: "2200",
          priceCurrency: "JPY",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "薬用クリアブライトセラム",
        description: "W有効成分配合。透けるようなつるん肌へ。",
        brand: { "@type": "Brand", name: "rumii" },
        offers: {
          "@type": "Offer",
          price: "1980",
          priceCurrency: "JPY",
        },
      },
    },
  ],
};

/**
 * rumii ランディングページ
 * 光をまとわせるスキンケアブランドのプロモーションページ
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

      {/* 背景エフェクト：オーロラヴェール＆レンズフレア */}
      <BackgroundEffects />

      {/* PC向け左右固定装飾エリア */}
      <FixedSidebars />

      <main className="min-h-screen main-content-with-sidebars rumii-gradient">
        {/* 01. メインビジュアル (FV) */}
        <HeroSection />

        {/* 02. コンセプト (Intro) */}
        <ConceptSection />

        {/* 03. rumiiの3つのポイント (Reason to Believe) */}
        <PointsSection />

        {/* 04. スタイル提案 (Usage) */}
        <UsageSection />

        {/* 05. ラインナップ (CTA) */}
        <LineUpSection />

        {/* 06. フッター */}
        <Footer />
      </main>
    </>
  );
}
