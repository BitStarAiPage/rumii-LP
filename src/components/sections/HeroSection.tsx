"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * ヒーローセクション (01. メインビジュアル FV)
 * 世界観への没入 - 一目で「どんな肌になれるか」を伝える
 */
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="メインビジュアル"
      style={{
        backgroundImage: "url('/back/back_image05.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-5 pt-16 pb-20 max-w-[500px]">
        {/* ブランドロゴ */}
        <header className="flex justify-center mb-8">
          <h1>
            <Image
              src="/logo/logo_image02.png"
              alt="rumii"
              width={150}
              height={50}
              className="h-auto"
              priority
            />
          </h1>
        </header>

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
        <div className="flex justify-center mt-[400px]">
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

      {/* 下部グラデーション（次のセクションへの自然な遷移） */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
      >
        {/* ベースのソフトグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        {/* 色味を加えるレイヤー */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF0F5]/40 via-[#E0F7FA]/20 to-transparent blur-2xl" />
      </div>
    </section>
  );
}
