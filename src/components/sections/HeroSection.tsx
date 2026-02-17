"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * ヒーローセクション (01. メインビジュアル FV)
 * 世界観への没入 - 一目で「どんな肌になれるか」を伝える
 */
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // ページロード後にアニメーションを開始
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden hero-bg"
      aria-label="メインビジュアル"
    >
      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-5 pt-16 pb-20 max-w-[500px]">
        {/* ブランドロゴ */}
        <header
          className={`flex justify-center mb-8 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
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
            className={`text-2xl md:text-3xl leading-relaxed text-foreground transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "var(--font-zen-kaku), sans-serif" }}
          >
            光をまとわせる、スキンケア<span className="text-xs align-super">※1</span>
          </h2>
          <p
            className={`text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            乾燥から肌を守り、澄みわたる透明肌へ<span className="text-xs align-super">※2</span>
          </p>
        </div>

        {/* 注釈 */}
        <div
          className={`flex justify-end mt-[320px] md:mt-[400px] transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[10px] text-muted-foreground text-left">
            ※1 肌にツヤを与えることによる<br />
            ※2 肌にうるおいを与えることによる
          </p>
        </div>

        {/* CTAボタン */}
        <div
          className={`flex justify-center mt-6 transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#lineup"
            className="btn-shine inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1E3A5F] text-white text-sm tracking-wider transition-all duration-300 hover:opacity-90 hover:scale-110"
          >
            Line upを見る
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div
          className={`flex justify-center mt-6 md:mt-16 transition-all duration-1000 ease-out delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
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
        className="absolute bottom-0 left-0 right-0 h-64 md:h-32 pointer-events-none"
        aria-hidden="true"
      >
        {/* ベースのソフトグラデーション - スマホはより強く・広く */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F4FC] via-[#E8F4FC]/70 md:from-white md:via-white/60 to-transparent" />
        {/* 中間レイヤー（スマホのみ） */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent md:hidden" />
        {/* 色味を加えるレイヤー */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F4FC] md:from-[#FFF0F5]/40 via-[#E0F7FA]/40 md:via-[#E0F7FA]/20 to-transparent blur-lg md:blur-2xl" />
      </div>
    </section>
  );
}
