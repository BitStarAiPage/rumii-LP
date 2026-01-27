"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

// 製品データ
const products = [
  {
    id: "lotion",
    category: "土台ケア（化粧水）",
    name: "薬用クリアブライトローション",
    nameEn: "CLEAR BRIGHT LOTION",
    features: ["W有効成分", "美白", "肌荒れ防止"],
    description: "肌荒れを防いで透きとおる肌へ。毎日のベースケアに。",
    price: "¥1,650",
    volume: "110mL",
    color: "#A8D8EA",
    badge: "BASE",
  },
  {
    id: "uv",
    category: "朝用UV乳液",
    name: "薬用リンクルUVエマルジョン",
    nameEn: "WRINKLE UV EMULSION",
    features: ["SPF37 PA+++", "美白", "UV"],
    description: "これ1本で美白もUVも。忙しい朝の時短ケアに。",
    price: "¥1,650",
    volume: "80mL",
    color: "#E8B4B8",
    badge: "AM",
  },
  {
    id: "az-serum",
    category: "毛穴ケア美容液",
    name: "クリアブライトAZセラム",
    nameEn: "CLEAR BRIGHT AZ SERUM",
    features: ["アゼライン酸11%", "毛穴ケア"],
    description: "高濃度アゼライン酸で毛穴の目立ちを徹底ケア。",
    price: "¥2,200",
    volume: "30mL",
    color: "#A8D8EA",
    badge: "PM",
    highlight: true,
  },
  {
    id: "serum",
    category: "透明感美容液",
    name: "薬用クリアブライトセラム",
    nameEn: "CLEAR BRIGHT SERUM",
    features: ["W有効成分", "透明感"],
    description: "透けるようなつるん肌へ。くすみ・肌荒れが気になる方に。",
    price: "¥1,980",
    volume: "30mL",
    color: "#C9B1D4",
    badge: "PM",
  },
];

/**
 * ラインナップセクション (05. LINE UP / CTA)
 * 比較検討と購入 - スペックを並べて迷わせない
 */
export function LineUpSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="lineup"
      className="relative py-24 md:py-32 overflow-hidden z-20"
      aria-label="製品ラインナップ"
    >
      {/* 背景レイヤー */}
      <div
        className="absolute inset-0 rumii-gradient-light"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-3xl md:text-4xl tracking-[0.2em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            LINE UP
          </h2>
          <p className="text-sm text-muted-foreground tracking-wider mt-4">
            あなたの肌悩みに合わせて選ぶ
          </p>
        </div>

        {/* 製品カード */}
        <div className="space-y-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* 購入リンク */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            各ECサイトでお求めいただけます
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Amazon", "楽天市場", "LOHACO", "@cosme"].map((store) => (
              <a key={store} href="#" className="btn-rumii">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-border bg-white/60 hover:bg-white/80 text-foreground backdrop-blur-sm"
                >
                  {store}
                </Button>
              </a>
            ))}
          </div>
        </div>

        {/* 装飾画像 */}
        <div className="mt-16 relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asset_7.png"
            alt="rumii製品イメージ"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            loading="lazy"
            className="object-cover"
          />
          {/* バナー画像 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-[500px] px-5">
              <Image
                src="/banner/banner_image01.png"
                alt="バナー"
                width={500}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
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
      className={`fade-in-up ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border shadow-sm overflow-hidden ${
          product.highlight
            ? "border-[#A8D8EA] ring-2 ring-[#A8D8EA]/20"
            : "border-white/80"
        }`}
      >
        {/* アクセントライン */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: product.color }}
        />

        {/* ヘッダー */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs text-muted-foreground">
              {product.category}
            </span>
            <span
              className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full text-white"
              style={{ backgroundColor: product.color }}
            >
              {product.badge}
            </span>
          </div>
          {product.highlight && (
            <span className="px-2 py-0.5 text-xs bg-[#A8D8EA] text-white rounded-full">
              おすすめ
            </span>
          )}
        </div>

        {/* 製品名 */}
        <h3 className="text-lg font-medium text-foreground mb-1">
          {product.name}
        </h3>
        <p
          className="text-xs tracking-wider mb-3"
          style={{ color: product.color }}
        >
          {product.nameEn}
        </p>

        {/* 特徴タグ */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/80"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 説明 */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {product.description}
        </p>

        {/* 価格・容量 */}
        <div className="flex items-baseline gap-2 pt-3 border-t border-border">
          <span
            className="text-xl font-medium"
            style={{
              fontFamily: "var(--font-tenor), serif",
              color: product.color,
            }}
          >
            {product.price}
          </span>
          <span className="text-xs text-muted-foreground">
            ({product.volume})
          </span>
        </div>
      </div>
    </article>
  );
}
