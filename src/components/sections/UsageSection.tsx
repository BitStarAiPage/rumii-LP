"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 製品データ
const products = [
  {
    id: "lotion",
    category: "化粧水",
    nameEn: "CLEAR BRIGHT LOTION",
    nameJa: "薬用クリアブライトローション",
    description:
      "W有効成分配合。肌荒れを防いで透きとおる肌へ。毎日のベースケアに。",
    size: "150mL",
    price: "¥1,650",
    priceNote: "（税込）",
    image: "/product/product_Lotion_image01.png",
    tags: ["美白", "肌荒れ防止", "W有効成分"],
  },
  {
    id: "uv",
    category: "UV乳液",
    nameEn: "WRINKLE UV EMULSION",
    nameJa: "薬用リンクルUVエマルジョン",
    description:
      "忙しい朝にこれ1本。美白×UVケアで、日中の紫外線から肌を守りながら透明感をキープ。",
    size: "50mL",
    price: "¥1,650",
    priceNote: "（税込）",
    image: "/product/product_UVem_image01.png",
    tags: ["SPF37 PA+++", "美白", "UV対策"],
  },
  {
    id: "az-serum",
    category: "美容液",
    nameEn: "CLEAR BRIGHT AZ SERUM",
    nameJa: "クリアブライトAZセラム",
    description:
      "アゼライン酸11%配合。毛穴の目立ちを徹底ケア。肌のざらつきや毛穴悩みにダイレクトに届きます。",
    size: "30mL",
    price: "¥2,200",
    priceNote: "（税込）",
    image: "/product/product_AZSerum_image01.png",
    tags: ["アゼライン酸11%", "毛穴ケア"],
  },
  {
    id: "serum",
    category: "美容液",
    nameEn: "CLEAR BRIGHT SERUM",
    nameJa: "薬用クリアブライトセラム",
    description:
      "W有効成分配合。透けるようなつるん肌へ。くすみ・肌荒れが気になる方に。",
    size: "30mL",
    price: "¥1,980",
    priceNote: "（税込）",
    image: "/product/product_Serum_image01.png",
    tags: ["W有効成分", "透明感", "くすみケア"],
  },
];

/**
 * スタイル提案セクション (04. Usage)
 * シンプルな製品カード一覧
 */
export function UsageSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="product"
      className="relative py-20 md:py-28 overflow-hidden z-20"
      aria-label="製品一覧"
    >
      {/* 背景 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#F8FCFD] via-[#E8F4F8] to-[#F0F8FF]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <p className="text-xs tracking-[0.3em] text-[#4BACB8] mb-3">
            PRODUCTS
          </p>
          <h2
            className="text-xl md:text-2xl tracking-[0.1em] text-foreground"
            style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
          >
            製品ラインナップ
          </h2>
        </div>

        {/* 製品カード一覧 */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* 補足 */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            ※価格は参考小売価格です（お店によって異なる場合があります）。
          </p>
        </div>
      </div>
    </section>
  );
}

// 製品カードコンポーネント
function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className={`w-[90%] mx-auto bg-white/70 backdrop-blur-sm rounded-2xl pt-12 pb-6 px-8 shadow-sm border border-white/80 fade-in-up ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* 製品画像 */}
      <div className="relative w-[45%] mx-auto aspect-square mb-6">
        <Image
          src={product.image}
          alt={product.nameJa}
          fill
          sizes="(max-width: 768px) 45vw, 180px"
          className="object-contain"
        />
        {/* カテゴリラベル（左上） */}
        <span className="absolute top-0 -left-8 px-2 py-0.5 text-[10px] tracking-wider text-[#4BACB8] bg-[#E0F7FA] rounded-full">
          {product.category}
        </span>
      </div>

      {/* 英語名 */}
      <p className="text-xs tracking-wider text-[#4BACB8] mb-1">
        {product.nameEn}
      </p>

      {/* 日本語名 */}
      <h3
        className="text-lg font-medium text-foreground mb-4"
        style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
      >
        {product.nameJa}
      </h3>

      {/* 説明文 */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {product.description}
      </p>

      {/* 容量・価格 */}
      <div className="mb-4">
        <p className="text-sm text-foreground">{product.size}</p>
        <p className="text-lg font-medium text-foreground">
          {product.price}
          <span className="text-xs text-muted-foreground ml-1">
            {product.priceNote}
          </span>
        </p>
      </div>

      {/* タグ */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E0F7FA]">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-[#E0F7FA] text-[#4BACB8]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 購入ボタン */}
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center justify-center gap-2 w-[70%] md:w-[55%] mx-auto py-3 rounded-full bg-foreground text-white text-sm tracking-wider transition-opacity hover:opacity-90"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          カートに入れる
        </a>
      </div>
    </article>
  );
}
