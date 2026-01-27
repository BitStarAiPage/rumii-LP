"use client";

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
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="コンセプト"
    >
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

        {/* 装飾: プリズム効果 */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            {/* ミラー円形 */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white via-[#F0FCFF] to-[#E0F7FA] shadow-lg flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF0F5]/50 via-white to-[#E0F7FA]/50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-foreground/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            {/* 光の輪 */}
            <div
              className="absolute -inset-4 rounded-full border border-white/30 animate-pulse-glow"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
