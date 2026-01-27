"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

/**
 * ヒーローセクション (01. メインビジュアル FV)
 * 世界観への没入 - 一目で「どんな肌になれるか」を伝える
 */
export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="メインビジュアル"
    >
      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-5 pt-16 pb-20 max-w-[500px]">
        {/* ブランドロゴ */}
        <header className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl tracking-[0.3em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            rumii
          </h1>
        </header>

        {/* バッジ */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E8B4B8] to-[#A8D8EA]" />
            <span className="text-xs tracking-wider text-foreground/80">
              光をまとう ミラー肌
            </span>
          </span>
        </div>

        {/* メインビジュアル */}
        <div
          ref={ref}
          className={`relative fade-in-up ${isVisible ? "is-visible" : ""}`}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/asset_1.png"
              alt="シルバーボトルが輝くrumii製品集合写真"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority
            />
            {/* 光の反射オーバーレイ */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40"
              aria-hidden="true"
            />
          </div>

          {/* スポットライトエフェクト */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial from-white/60 to-transparent blur-2xl"
            aria-hidden="true"
          />
        </div>

        {/* キャッチコピー */}
        <div className="text-center mt-12 space-y-4">
          <h2
            className="text-2xl md:text-3xl leading-relaxed text-foreground"
            style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
          >
            光をまとわせる、スキンケア
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            乾燥から肌を守り、澄みわたる透明肌へ
          </p>
        </div>

        {/* CTAボタン */}
        <div className="flex justify-center mt-10">
          <a href="#lineup" className="btn-rumii">
            <Button
              variant="outline"
              className="px-8 py-6 text-sm tracking-wider border-foreground/20 bg-white/60 hover:bg-white/80 text-foreground backdrop-blur-sm transition-all duration-300"
            >
              Line upを見る
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Button>
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div className="flex justify-center mt-16">
          <div
            className="scroll-indicator flex flex-col items-center gap-2 text-muted-foreground"
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
