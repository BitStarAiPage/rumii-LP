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
      "W有効成分ナイアシンアミド、グリチルリチン酸ジカリウムが肌荒れを予防する。\n肌荒れを防いで透きとおる肌へ。",
    size: "150mL",
    price: "¥1,650",
    priceNote: "（税込）",
    image: "/product/product_Lotion_image01.png",
    tags: ["透明感※", "肌荒れ予防", "ニキビ予防"],
    note: "※肌にうるおいを与えることによる",
    darkTags: true,
  },
  {
    id: "uv",
    category: "UV乳液",
    nameEn: "WRINKLE UV EMULSION",
    nameJa: "薬用リンクルUVエマルジョン",
    description:
      "これ1本で！美白もUVケアも！",
    descriptionNote: true,
    descriptionAfter: "有効成分ナイアシンアミド配合で、シミ、シワもケア。",
    size: "50mL",
    price: "¥1,650",
    priceNote: "（税込）",
    image: "/product/product_UVem_image01.png",
    tags: ["UV", "保湿", "敏感肌設計(パッチテスト済※2)"],
    darkTags: true,
    note: "※1 メラニンの生成を抑え、しみ、そばかすを防ぐ\n※2 全ての方に皮ふ刺激が発生しないということではありません",
  },
  {
    id: "serum",
    category: "美容液",
    nameEn: "CLEAR BRIGHT SERUM",
    nameJa: "薬用クリアブライトセラム",
    description:
      "W有効成分ナイアシンアミド、グリチルリチン酸ジカリウムが肌荒れを予防する。\n透けるようなつるん肌へ。",
    descriptionNote: true,
    size: "30mL",
    price: "¥1,980",
    priceNote: "（税込）",
    image: "/product/product_Serum_image01.png",
    tags: ["毛穴ケア※2", "肌荒れ予防", "くすみ予防※3"],
    darkTags: true,
    note: "※1 肌にうるおいを与えることによる\n※2 肌を整えることによる\n※3 乾燥による",
  },
  {
    id: "az-serum",
    category: "美容液",
    nameEn: "CLEAR BRIGHT AZ SERUM",
    nameJa: "クリアブライトAZセラム",
    description:
      "アゼライン酸11％配合（肌荒れを防ぐ）\n毛穴の目立ちを徹底ケア",
    size: "30mL",
    price: "¥2,200",
    priceNote: "（税込）",
    image: "/product/product_AZSerum_image01.png",
    tags: ["キメ", "毛穴ケア※1", "敏感肌設計(パッチテスト済※2)"],
    tagStyle: "pink",
    note: "※1 肌を整えることによる\n※2 全ての方に皮ふ刺激が発生しないということではありません",
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

      {/* 装飾的な背景エフェクト */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-40 -right-20 w-60 h-60 bg-gradient-radial from-[#FFF0F5]/40 to-transparent rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-60 -left-20 w-80 h-80 bg-gradient-radial from-[#E0F7FA]/30 to-transparent rounded-full blur-3xl animate-breathe" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 blur-fade-in ${titleVisible ? "is-visible" : ""}`}
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
      className={`w-[90%] mx-auto bg-white/70 backdrop-blur-sm rounded-2xl pt-12 pb-6 px-8 shadow-sm border border-white/80 card-hover-lift scale-fade-in ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
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
        <div className={`absolute top-0 flex gap-1.5 ${product.nameJa.includes("薬用") ? "-left-[4.5rem]" : "-left-10"}`}>
          <span className="px-2.5 py-1 text-[11px] tracking-wider text-[#4BACB8] bg-[#E0F7FA] rounded-full">
            {product.category}
          </span>
          {product.nameJa.includes("薬用") && (
            <span className="px-2.5 py-1 text-[11px] tracking-wider text-[#9B8AB8] bg-[#F0E8F5] rounded-full">
              薬用
            </span>
          )}
        </div>
      </div>

      {/* 英語名 */}
      <p className="text-xs tracking-wider text-[#4BACB8] mb-1">
        {product.nameEn}
      </p>

      {/* 日本語名 */}
      <h3
        className={`${product.id === "lotion" ? "text-[16px]" : "text-lg"} font-medium text-foreground mb-4`}
        style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
      >
        {product.nameJa}
      </h3>

      {/* SPF表記（UV乳液のみ） */}
      {product.id === "uv" && (
        <p className="text-sm text-[#4BACB8] font-medium mb-2">SPF37 PA+++</p>
      )}

      {/* 説明文 */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
        {product.description}
        {product.descriptionNote && <span className="text-[9px] align-super">※1</span>}
        {product.descriptionAfter && `\n${product.descriptionAfter}`}
      </p>

      {/* 容量・価格 */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-sm text-foreground">{product.size}</p>
        <p className="text-lg font-medium text-foreground">
          {product.price}
          <span className="text-xs text-muted-foreground ml-1">
            {product.priceNote}
          </span>
        </p>
      </div>

      {/* タグ */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E0F7FA]">
        {product.tags.map((tag) => {
          let tagClassName = "bg-[#E0F7FA] text-[#4BACB8]";
          if (product.darkTags) {
            tagClassName = "bg-[#1e3a5f] text-white";
          } else if (product.tagStyle === "pink") {
            tagClassName = "bg-[#F27B89] text-white";
          }
          const hasParentheses = tag.includes("(");
          const hasNote = tag.includes("※");
          return (
            <span
              key={tag}
              className={`text-[11px] px-3 py-1 rounded-full transition-transform hover:scale-105 ${tagClassName}`}
            >
              {hasParentheses ? (
                <>
                  {tag.split("(")[0]}
                  <span className="text-[9px]">({tag.split("(")[1]}</span>
                </>
              ) : hasNote ? (
                <>
                  {tag.split("※")[0]}
                  <span className="text-[9px]">※{tag.split("※")[1]}</span>
                </>
              ) : (
                tag
              )}
            </span>
          );
        })}
      </div>

      {/* 購入ボタン */}
      <div className="mt-6">
        <a
          href="#"
          className="btn-shine flex items-center justify-center gap-2 w-[70%] md:w-[55%] mx-auto py-3 rounded-full bg-[#1E3A5F] text-white text-sm tracking-wider transition-all duration-300 hover:opacity-90 hover:scale-110"
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

      {/* 注釈 */}
      {product.note && (
        <div className="flex justify-end mt-3">
          <p className="text-[9px] text-muted-foreground/70 text-left whitespace-pre-line">
            {product.note}
          </p>
        </div>
      )}
    </article>
  );
}
