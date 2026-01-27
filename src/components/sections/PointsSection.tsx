"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 3つのポイントデータ
const points = [
  {
    id: "01",
    title: "アゼライン酸11%配合",
    subtitle: "毛穴の目立ちを徹底ケア",
    description:
      "「クリアブライトAZセラム」に高濃度のアゼライン酸を配合。肌のざらつきや毛穴悩みにダイレクトに届きます。",
    note: "※整肌成分",
    image: "/asset_5.png",
  },
  {
    id: "02",
    title: "W有効成分配合",
    subtitle: "透明感と肌荒れ防止",
    description:
      "ナイアシンアミド×グリチルリチン酸ジカリウムを配合。美白※1と抗炎症のダブル効果で、透けるような「つるん肌」へ。",
    note: "※1 メラニンの生成を抑え、シミ・そばかすを防ぐ",
    image: "/asset_10.png",
  },
  {
    id: "03",
    title: "敏感肌設計",
    subtitle: "毎日使える優しさ",
    description:
      "パッチテスト済み。高機能でありながら、刺激が気になる敏感肌でも使いやすい処方で安心。",
    note: "※すべての方に刺激が起こらないわけではありません",
    image: "/asset_8.png",
  },
];

/**
 * ポイントセクション (03. rumiiの3つのポイント)
 * シンプルで端的なデザイン - 参考画像に合わせたレイアウト
 */
export function PointsSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="points"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="rumiiの3つのポイント"
    >
      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-20 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <p className="text-xs tracking-[0.3em] text-primary mb-4">
            REASON TO BELIEVE
          </p>
          <h2
            className="text-2xl md:text-3xl tracking-[0.1em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            rumiiの3つのポイント
          </h2>
        </div>

        {/* ポイント */}
        <div className="space-y-24">
          {points.map((point, index) => (
            <PointCard key={point.id} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ポイントカードコンポーネント
function PointCard({
  point,
  index,
}: {
  point: (typeof points)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className={`fade-in-up ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* 番号バッジ */}
      <div className="flex justify-center mb-8">
        <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-border/50">
          <span
            className="text-lg text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            {point.id}
          </span>
        </div>
      </div>

      {/* タイトル */}
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-2">
          {point.title}
        </h3>
        <p className="text-sm text-primary tracking-wider">
          {point.subtitle}
        </p>
      </div>

      {/* 画像 */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-8">
        <Image
          src={point.image}
          alt={point.title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* 説明文 */}
      <div className="text-center">
        <p className="text-sm md:text-base text-muted-foreground leading-loose mb-4">
          {point.description}
        </p>
        {point.note && (
          <p className="text-xs text-muted-foreground/70">
            {point.note}
          </p>
        )}
      </div>

    </article>
  );
}
