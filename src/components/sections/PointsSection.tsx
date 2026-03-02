"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 3つのポイントデータ
const points = [
  {
    id: "01",
    title: "美白",
    titleNote: "※",
    subtitle: "薬用の安心感",
    description: "",
    note: "",
    descriptionNotes: [
      "※1：乾燥によるもの",
      "※2：クリアブライトAZセラムを除く",
    ],
    imageNotes: [
      "※メラニンの生成を抑え、しみ、そばかすを防ぐ",
      "※クリアブライトAZセラムを除く",
    ],
    image: "/other/other_image06.png",
    size: "85%",
  },
  {
    id: "02",
    title: "UV",
    titleNote: "※",
    subtitle: "肌にやさしい設計",
    description:
      "毎日使うものだからこそ、使いやすく肌にやさしい設計。",
    note: "",
    imageNotes: [
      "※対象：薬用リンクルUVエマルジョン",
    ],
    image: "/other/other_image07.png",
    size: "85%",
  },
  {
    id: "03",
    title: "デザイン",
    subtitle: "つい使いたくなる",
    description:
      "フル蒸着オーロラ加工で、つい使いたくなるパッケージデザイン。",
    note: "",
    image: "/other/other_image05.png",
    size: "85%",
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
      <div className="flex items-center gap-4 mb-3 ml-[30px]">
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
            {point.titleNote && <span className="text-[10px] align-super">{point.titleNote}</span>}
          </h3>
          <p className="text-xs text-primary tracking-wider mt-2">
            {point.subtitle}
          </p>
        </div>
      </div>

      {/* 注釈（画像の外・右上） */}
      {point.imageNotes && point.imageNotes.length > 0 && (
        <div className="mx-auto flex justify-end mb-2 mt-[-20px]" style={{ width: point.size }}>
          <div className="text-[9px] text-muted-foreground/70 text-left leading-relaxed relative z-20">
            {point.imageNotes.map((n, i) => (
              <p key={i}>{n}</p>
            ))}
          </div>
        </div>
      )}

      {/* 画像 */}
      <div
        className={`mx-auto rounded-lg overflow-hidden mt-8 mb-8 image-hover-zoom transition-all duration-700 ease-out ${
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
        {point.description ? (
          <p className="text-base md:text-lg text-muted-foreground leading-loose mb-3">
            {point.description}
          </p>
        ) : point.id === "01" ? (
          <p className="text-base md:text-lg text-muted-foreground leading-loose mb-3">
            ニキビ・シミ・くすみ<span className="text-xs align-super">*1</span>は明確なエビデンスと「薬用<span className="text-xs align-super">*2</span>」という安心感で。
          </p>
        ) : null}
        {point.descriptionNotes && point.descriptionNotes.length > 0 && (
          <div className="flex justify-end">
            <div className="text-[9px] text-muted-foreground/70 text-left leading-relaxed">
              {point.descriptionNotes.map((n, i) => (
                <p key={i}>{n}</p>
              ))}
            </div>
          </div>
        )}
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
