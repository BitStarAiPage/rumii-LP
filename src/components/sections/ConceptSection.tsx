"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * コンセプトセクション (02. Intro)
 * 情緒的価値の提示 - なぜ「光」なのか？
 */
export function ConceptSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: copyRef, isVisible: copyVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="concept"
      className="sticky top-0 relative py-24 md:py-32 overflow-hidden z-10"
      aria-label="コンセプト"
      style={{
        backgroundImage: "url('/back/back_image01.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 上部グラデーション（前のセクションからの自然な遷移） */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 装飾: 放射状の光 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-[#E0F7FA]/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-2xl md:text-3xl leading-loose text-foreground font-medium"
            style={{ fontFamily: "var(--font-tenor), 'Hiragino Mincho ProN', 'Yu Mincho', serif" }}
          >
            すべては&ldquo;肌がキレイ&rdquo;を
            <br />
            つくるために。
          </h2>
        </div>

        {/* ボディコピー */}
        <div
          ref={copyRef}
          className={`space-y-8 fade-in-up delay-200 ${copyVisible ? "is-visible" : ""}`}
        >
          {/* 画像 */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/asset_1.png"
              alt="rumii製品イメージ"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>

          <p
            className="text-base md:text-lg text-center text-muted-foreground leading-loose"
            style={{ fontFamily: "var(--font-tenor), 'Hiragino Mincho ProN', 'Yu Mincho', serif" }}
          >
            美白も、UVも、デザインも。
            <br />
            rumiiで、肌に光を仕込む。
          </p>

          <div className="w-12 h-px bg-border mx-auto" />

          <p className="text-sm md:text-base text-center text-muted-foreground leading-loose">
            整える、うるおう、毎日のベースケア。
            <br />
            肌悩みに合わせて、
            <br className="sm:hidden" />
            今の自分に
            <span className="inline-block px-2 py-0.5 mx-1 rounded bg-gradient-to-r from-[#FFF0F5] to-[#E0F7FA] text-foreground font-medium">
              &ldquo;選んで足す&rdquo;
            </span>
            ケア。
          </p>
        </div>

      </div>
    </section>
  );
}
