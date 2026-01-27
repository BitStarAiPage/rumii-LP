"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * ヒーローセクション
 * ファーストビュー、メインビジュアル、キャッチコピーを表示
 */
export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      className="relative min-h-screen overflow-hidden yolu-gradient"
      aria-label="ヒーローセクション"
    >
      {/* 背景装飾：泡と光の粒子 */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/asset_2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-screen"
          priority
        />
        {/* 泡の装飾 */}
        <div className="bubble w-20 h-20 top-[20%] left-[10%] animate-float opacity-40" />
        <div className="bubble w-32 h-32 top-[40%] right-[5%] animate-float-slow opacity-30" />
        <div className="bubble w-16 h-16 bottom-[30%] left-[20%] animate-float-reverse opacity-50" />
        <div className="bubble w-24 h-24 top-[60%] right-[15%] animate-float opacity-25" />
        <div className="bubble w-12 h-12 top-[15%] right-[25%] animate-float-slow opacity-35" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-5 pt-16 pb-20 max-w-[750px]">
        {/* ブランドロゴ */}
        <header className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl tracking-[0.3em] text-white"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            NUIT
          </h1>
        </header>

        {/* メインビジュアル */}
        <div
          ref={ref}
          className={`relative fade-in-up ${isVisible ? "is-visible" : ""}`}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/asset_1.png"
              alt="新しいNUIT体験。夜間美容で、目覚める潤い。"
              fill
              sizes="(max-width: 768px) 100vw, 750px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* キャッチコピー */}
        <div className="text-center mt-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-white">
            新しいNUIT体験。
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            夜間美容で、目覚める潤い。
          </p>
        </div>

        {/* サブキャッチ */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-yolu-soft-purple tracking-wider">
            リニューアル記念キャンペーン実施中
          </p>
        </div>

        {/* スクロールインジケーター */}
        <div className="flex justify-center mt-16">
          <div
            className="scroll-indicator flex flex-col items-center gap-2 text-white/60"
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
