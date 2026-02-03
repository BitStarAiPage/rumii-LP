"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 製品データ
const products = [
  {
    id: "lotion",
    category: "化粧水",
    name: "薬用クリアブライトローション",
    volume: "150mL",
    price: "¥1,650",
    image: "/product/product_Lotion_image01.png",
    tags: ["透明感", "肌荒れ予防", "ニキビ予防"],
  },
  {
    id: "uv",
    category: "UV乳液",
    name: "薬用リンクルUVエマルジョン",
    volume: "50mL",
    price: "¥1,650",
    image: "/product/product_UVem_image01.png",
    tags: ["UV", "保湿", "敏感肌設計"],
  },
  {
    id: "serum",
    category: "美容液",
    name: "薬用クリアブライトセラム",
    volume: "30mL",
    price: "¥1,980",
    image: "/product/product_Serum_image01.png",
    tags: ["毛穴ケア", "肌荒れ予防", "くすみ予防"],
  },
  {
    id: "az-serum",
    category: "美容液",
    name: "クリアブライトAZセラム",
    volume: "30mL",
    price: "¥2,200",
    image: "/product/product_AZSerum_image01.png",
    tags: ["キメ", "毛穴ケア", "敏感肌設計"],
  },
];

/**
 * ラインナップセクション
 * スワイプスクロール対応スライダー
 */
export function LineUpSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: buttonRef, isVisible: buttonVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="lineup"
      className="relative py-20 md:py-28 overflow-hidden z-20"
      aria-label="製品ラインナップ"
    >
      {/* 背景 */}
      <div className="absolute inset-0 bg-white" aria-hidden="true" />

      {/* 装飾的な背景エフェクト */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-radial from-[#E0F7FA]/30 to-transparent rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-gradient-radial from-[#FFF0F5]/30 to-transparent rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-8 blur-fade-in ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-2xl md:text-3xl tracking-[0.2em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            LINE UP
          </h2>
        </div>

        {/* スワイプスクロールスライダー */}
        <div className="relative">
          {/* 左右のフェードオーバーレイ */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-8 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[160px] snap-center"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* スクロールヒント */}
        <div className="flex justify-center items-center gap-2 mt-6 text-muted-foreground">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-xs tracking-wider">スワイプ</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* CTAボタン */}
        <div
          ref={buttonRef}
          className={`mt-10 flex justify-center scale-fade-in ${buttonVisible ? "is-visible" : ""}`}
        >
          <a
            href="#"
            className="btn-shine inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1E3A5F] text-white text-sm tracking-wider transition-all duration-300 hover:opacity-90 hover:scale-110"
          >
            購入する
          </a>
        </div>
      </div>
    </section>
  );
}

// 製品カードコンポーネント
function ProductCard({
  product,
}: {
  product: (typeof products)[0];
}) {
  return (
    <div className="relative group cursor-pointer">
      {/* 製品画像 */}
      <div className="relative w-[80%] mx-auto aspect-square overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="130px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* カテゴリラベル（左上） */}
        <span className="absolute top-0 left-0 px-2 py-0.5 text-[10px] tracking-wider text-[#4BACB8] bg-[#E0F7FA] rounded-full transition-transform group-hover:scale-105">
          {product.category}
        </span>
      </div>

      {/* 製品情報 */}
      <div className="text-center transition-transform duration-300 group-hover:translate-y-[-2px]">
        <h3
          className="text-xs text-foreground leading-relaxed mb-1 line-clamp-2"
          style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm font-medium text-foreground mb-2"
          style={{ fontFamily: "var(--font-tenor), serif" }}
        >
          {product.price}
        </p>
        {/* ハッシュタグ */}
        <div className="flex flex-wrap justify-center gap-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E3A5F] text-white transition-all duration-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
