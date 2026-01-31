"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * スタイル提案セクション (04. Usage)
 * 朝・夜の使い分け提案 - rumiiブランドに合わせたエレガントなデザイン
 */
export function UsageSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: morningRef, isVisible: morningVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: nightRef, isVisible: nightVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="usage"
      className="relative overflow-hidden z-20"
      aria-label="スタイル提案"
    >
      {/* ================== 朝セクション ================== */}
      <div className="relative py-20 md:py-28">
        {/* 背景グラデーション */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/back/back_image06.png')" }}
          aria-hidden="true"
        />
        {/* 装飾：光の粒子 */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFE4B5]/30 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-40 left-5 w-24 h-24 rounded-full bg-[#FFDAB9]/20 blur-2xl" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
          {/* 朝ラベル */}
          <div
            ref={morningRef}
            className={`flex items-center justify-between mb-10 fade-in-up ${morningVisible ? "is-visible" : ""}`}
          >
            <div>
              <p className="text-xs tracking-[0.3em] text-[#D4A574] mb-1">MORNING ROUTINE</p>
              <h2 className="text-2xl tracking-wide text-foreground" style={{ fontFamily: "var(--font-tenor), serif" }}>
                朝のケア
              </h2>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFD700]/80 to-[#FFA500]/60 flex items-center justify-center shadow-lg backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* 製品画像エリア */}
          <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 fade-in-up delay-100 ${morningVisible ? "is-visible" : ""}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8DC]/80 to-[#FFE4B5]/60 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">🌤️</span>
                </div>
                <p className="text-sm text-[#B8860B]/60">製品画像</p>
              </div>
            </div>
          </div>

          {/* 製品カード */}
          <div className={`card-rumii mb-6 fade-in-up delay-200 ${morningVisible ? "is-visible" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1.5 text-xs font-medium tracking-wider bg-gradient-to-r from-[#FFB347] to-[#FFCC33] text-white rounded-full shadow-sm">
                AM
              </span>
              <span className="px-3 py-1.5 text-xs tracking-wider bg-white/80 text-[#D4A574] rounded-full border border-[#FFE4B5]">
                UV対策
              </span>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              薬用リンクルUVエマルジョン
            </h3>
            <p className="text-xs tracking-wider text-[#D4A574] mb-3">
              WRINKLE UV EMULSION
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              忙しい朝にこれ1本。美白×UVケアで、日中の紫外線から肌を守りながら透明感をキープ。
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#FFE4B5]/50">
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8DC] text-foreground/70">SPF37 PA+++</span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8DC] text-foreground/70">美白</span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8DC] text-foreground/70">W有効成分</span>
            </div>
          </div>

          {/* 特徴 */}
          <div className={`grid grid-cols-2 gap-3 fade-in-up delay-300 ${morningVisible ? "is-visible" : ""}`}>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/80">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 flex items-center justify-center">
                <span className="text-lg">☀️</span>
              </div>
              <p className="text-xs font-medium text-foreground">紫外線カット</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/80">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 flex items-center justify-center">
                <span className="text-lg">✨</span>
              </div>
              <p className="text-xs font-medium text-foreground">透明感キープ</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================== 夜セクション ================== */}
      <div className="relative py-20 md:py-28">
        {/* 背景グラデーション */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F5F0FF] via-[#EDE7F6] to-[#E8E0F0]"
          aria-hidden="true"
        />
        {/* 装飾 */}
        <div className="absolute top-32 left-10 w-40 h-40 rounded-full bg-[#E0D4F0]/40 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 right-5 w-28 h-28 rounded-full bg-[#D4C4E8]/30 blur-2xl" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
          {/* 夜ラベル */}
          <div
            ref={nightRef}
            className={`flex items-center justify-between mb-10 fade-in-up ${nightVisible ? "is-visible" : ""}`}
          >
            <div>
              <p className="text-xs tracking-[0.3em] text-[#9B8AB8] mb-1">NIGHT ROUTINE</p>
              <h2 className="text-2xl tracking-wide text-foreground" style={{ fontFamily: "var(--font-tenor), serif" }}>
                夜のケア
              </h2>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9B8AB8]/80 to-[#6B5B95]/60 flex items-center justify-center shadow-lg backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </div>

          {/* 製品画像エリア */}
          <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 fade-in-up delay-100 ${nightVisible ? "is-visible" : ""}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E0F0]/80 to-[#D4C4E8]/60 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">🌙</span>
                </div>
                <p className="text-sm text-[#6B5B95]/60">製品画像</p>
              </div>
            </div>
          </div>

          {/* ベースケア */}
          <div className={`card-rumii mb-6 fade-in-up delay-200 ${nightVisible ? "is-visible" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1.5 text-xs font-medium tracking-wider bg-gradient-to-r from-[#A8D8EA] to-[#87CEEB] text-white rounded-full shadow-sm">
                BASE
              </span>
              <span className="text-xs text-muted-foreground">毎日の土台ケア</span>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              薬用クリアブライトローション
            </h3>
            <p className="text-xs tracking-wider text-[#A8D8EA] mb-3">
              CLEAR BRIGHT LOTION
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              W有効成分配合。肌荒れを防いで透きとおる肌へ。毎日のベースケアに。
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E0F7FA]/50">
              <span className="text-xs px-3 py-1 rounded-full bg-[#E0F7FA] text-foreground/70">W有効成分</span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#E0F7FA] text-foreground/70">美白</span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#E0F7FA] text-foreground/70">肌荒れ防止</span>
            </div>
          </div>

          {/* 悩み別セクション */}
          <div className={`mb-8 fade-in-up delay-300 ${nightVisible ? "is-visible" : ""}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#9B8AB8]/30" />
              <p className="text-xs tracking-wider text-[#9B8AB8]">お悩みに合わせて</p>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#9B8AB8]/30" />
            </div>

            {/* 毛穴ケア */}
            <div className="card-rumii mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 text-xs font-medium tracking-wider bg-gradient-to-r from-[#A8D8EA] to-[#87CEEB] text-white rounded-full shadow-sm">
                    毛穴ケア
                  </span>
                </div>
                <span className="px-2 py-1 text-xs bg-[#A8D8EA]/10 text-[#A8D8EA] rounded-full border border-[#A8D8EA]/20">
                  おすすめ
                </span>
              </div>
              <h4 className="text-base font-medium text-foreground mb-1">
                クリアブライトAZセラム
              </h4>
              <p className="text-xs tracking-wider text-[#A8D8EA] mb-2">
                CLEAR BRIGHT AZ SERUM
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                アゼライン酸11%配合。毛穴の目立ちを徹底ケア。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[#E0F7FA]/50 text-foreground/60">アゼライン酸11%</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#E0F7FA]/50 text-foreground/60">毛穴ケア</span>
              </div>
            </div>

            {/* 透明感ケア */}
            <div className="card-rumii">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1.5 text-xs font-medium tracking-wider bg-gradient-to-r from-[#C9B1D4] to-[#9B8AB8] text-white rounded-full shadow-sm">
                  透明感ケア
                </span>
              </div>
              <h4 className="text-base font-medium text-foreground mb-1">
                薬用クリアブライトセラム
              </h4>
              <p className="text-xs tracking-wider text-[#C9B1D4] mb-2">
                CLEAR BRIGHT SERUM
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                W有効成分配合。透けるようなつるん肌へ。くすみ・肌荒れが気になる方に。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[#F0E8F8]/50 text-foreground/60">W有効成分</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#F0E8F8]/50 text-foreground/60">透明感</span>
              </div>
            </div>
          </div>

          {/* 補足 */}
          <div
            ref={titleRef}
            className={`mt-12 text-center fade-in-up ${titleVisible ? "is-visible" : ""}`}
          >
            <p className="text-sm text-muted-foreground leading-loose">
              あなたの肌に合わせて、
              <br className="sm:hidden" />
              自由に組み合わせてください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
