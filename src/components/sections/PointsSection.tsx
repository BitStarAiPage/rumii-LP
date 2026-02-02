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
    image: "/other/other_image05.png",
    size: "85%",
  },
  {
    id: "02",
    title: "W有効成分配合",
    subtitle: "透明感と肌荒れ防止",
    description:
      "ナイアシンアミド×グリチルリチン酸ジカリウムを配合。美白※1と抗炎症のダブル効果で、透けるような「つるん肌」へ。",
    note: "※1 メラニンの生成を抑え、シミ・そばかすを防ぐ",
    image: "/other/other_image03.png",
    size: "65%",
  },
  {
    id: "03",
    title: "敏感肌設計",
    subtitle: "毎日使える優しさ",
    description:
      "パッチテスト済み。高機能でありながら、刺激が気になる敏感肌でも使いやすい処方で安心。",
    note: "※すべての方に刺激が起こらないわけではありません",
    image: "/other/other_image04.png",
    size: "65%",
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
      className="relative py-[120px] overflow-hidden z-20 bg-[#E8F4FC]"
      aria-label="rumiiの3つのポイント"
    >
      {/* 装飾的な背景エフェクト */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 -left-20 w-60 h-60 bg-gradient-radial from-white/40 to-transparent rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-radial from-[#E0F7FA]/30 to-transparent rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 blur-fade-in ${titleVisible ? "is-visible" : ""}`}
        >
          <p className="text-xs tracking-[0.3em] text-primary mb-3">
            REASON TO BELIEVE
          </p>
          <h2
            className="text-xl md:text-2xl tracking-[0.1em] text-foreground"
            style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
          >
            rumiiの3つのポイント
          </h2>
        </div>

        {/* ポイント */}
        <div className="space-y-12">
          {points.map((point, index) => (
            <PointCard
              key={point.id}
              point={point}
              index={index}
              isLast={index === points.length - 1}
            />
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
  isLast,
}: {
  point: (typeof points)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={`${isEven ? 'slide-in-left' : 'slide-in-right'} ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* 番号 + タイトル */}
      <div className="flex items-center gap-4 mb-6 ml-[30px]">
        <span
          className={`text-5xl text-primary/60 font-light transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            fontFamily: "var(--font-tenor), serif",
            transitionDelay: `${index * 150 + 200}ms`
          }}
        >
          {point.id}
        </span>
        <div>
          <h3
            className="text-lg md:text-xl font-medium text-foreground leading-tight"
            style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
          >
            {point.title}
          </h3>
          <p className="text-xs text-primary tracking-wider mt-2">
            {point.subtitle}
          </p>
        </div>
      </div>

      {/* 画像 */}
      <div
        className={`mx-auto rounded-lg overflow-hidden mb-8 image-hover-zoom image-float transition-all duration-700 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 150 + 300}ms`, width: point.size }}
      >
        <Image
          src={point.image}
          alt={point.title}
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>

      {/* 説明文 */}
      <div
        className={`max-w-[90%] mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${index * 150 + 400}ms` }}
      >
        <p className="text-base md:text-lg text-muted-foreground leading-loose mb-3">
          {point.description}
        </p>
        {point.note && (
          <p className="text-xs text-muted-foreground/60 mt-2">
            {point.note}
          </p>
        )}
      </div>

      {/* 区切り線 */}
      {!isLast && (
        <div className="flex justify-center mt-12">
          <div
            className={`h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent transition-all duration-1000 ${
              isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150 + 500}ms` }}
          />
        </div>
      )}
    </article>
  );
}
