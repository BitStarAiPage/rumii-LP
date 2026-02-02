"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 製品データ
const products = [
  {
    id: "lotion",
    category: "化粧水",
    name: "薬用クリアブライトローション",
    price: "¥1,650",
    image: "/product/product_Lotion_image01.png",
    tags: ["美白", "肌荒れ防止"],
  },
  {
    id: "uv",
    category: "UV乳液",
    name: "薬用リンクルUVエマルジョン",
    price: "¥1,650",
    image: "/product/product_UVem_image01.png",
    tags: ["UV対策", "美白"],
  },
  {
    id: "az-serum",
    category: "美容液",
    name: "クリアブライトAZセラム",
    price: "¥2,200",
    image: "/product/product_AZSerum_image01.png",
    tags: ["毛穴ケア", "AZ11%"],
  },
  {
    id: "serum",
    category: "美容液",
    name: "薬用クリアブライトセラム",
    price: "¥1,980",
    image: "/product/product_Serum_image01.png",
    tags: ["透明感", "W有効成分"],
  },
];

/**
 * ラインナップセクション
 * 無限スクロール（マーキー）形式
 */
export function LineUpSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();

  // 無限スクロール用に製品を複製
  const duplicatedProducts = [...products, ...products];

  return (
    <section
      id="lineup"
      className="relative py-20 md:py-28 overflow-hidden z-20"
      aria-label="製品ラインナップ"
    >
      {/* 背景 */}
      <div className="absolute inset-0 bg-white" aria-hidden="true" />

      <div className="relative z-10">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-8 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-2xl md:text-3xl tracking-[0.2em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            LINE UP
          </h2>
        </div>

        {/* 無限スクロールスライダー */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {duplicatedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-[160px] mx-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* CTAボタン */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-foreground text-white text-sm tracking-wider transition-opacity hover:opacity-90"
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
    <div className="relative">
      {/* 製品画像 */}
      <div className="relative w-[80%] mx-auto aspect-square overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="130px"
          className="object-contain"
        />
        {/* カテゴリラベル（左上） */}
        <span className="absolute top-0 left-0 px-2 py-0.5 text-[10px] tracking-wider text-[#4BACB8] bg-[#E0F7FA] rounded-full">
          {product.category}
        </span>
      </div>

      {/* 製品情報 */}
      <div className="text-center">
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
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#E0F7FA] text-[#4BACB8]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
