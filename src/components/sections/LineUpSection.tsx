"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useCallback } from "react";

// 製品データ
const products = [
  {
    id: "lotion",
    category: "化粧水",
    name: "薬用クリアブライトローション",
    price: "¥1,650",
    image: "/asset_1.png",
  },
  {
    id: "uv",
    category: "UV乳液",
    name: "薬用リンクルUVエマルジョン",
    price: "¥1,650",
    image: "/asset_3.png",
  },
  {
    id: "az-serum",
    category: "美容液",
    name: "クリアブライトAZセラム",
    price: "¥2,200",
    image: "/asset_5.png",
  },
  {
    id: "serum",
    category: "美容液",
    name: "薬用クリアブライトセラム",
    price: "¥1,980",
    image: "/asset_8.png",
  },
];

// 2つずつのスライドに分割
const slides = [];
for (let i = 0; i < products.length; i += 2) {
  slides.push(products.slice(i, i + 2));
}

/**
 * ラインナップセクション
 * シンプルなスライダー形式
 */
export function LineUpSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自動スライド
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="lineup"
      className="relative py-20 md:py-28 overflow-hidden z-20"
      aria-label="製品ラインナップ"
    >
      {/* 背景 */}
      <div className="absolute inset-0 bg-white" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
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

        {/* スライダー */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideProducts, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid grid-cols-2 gap-4"
              >
                {slideProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* スライドインジケーター */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-foreground w-6"
                  : "bg-foreground/30"
              }`}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
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
      {/* カテゴリラベル（斜め上） */}
      <span className="absolute -top-1 -left-1 z-10 px-2 py-0.5 text-[10px] tracking-wider text-white bg-foreground/70 rounded">
        {product.category}
      </span>

      {/* 製品画像 */}
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="200px"
          className="object-contain p-2"
        />
      </div>

      {/* 製品情報 */}
      <div className="text-center">
        <h3 className="text-xs text-foreground leading-relaxed mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p
          className="text-sm font-medium text-foreground"
          style={{ fontFamily: "var(--font-tenor), serif" }}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
}
