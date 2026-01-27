"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * スタイル提案セクション (04. Usage)
 * 選び方の提案 - 「選んで足す」コンセプトを図解
 */
export function UsageSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: flowRef, isVisible: flowVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="usage"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="スタイル提案"
    >
      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <p className="text-xs tracking-[0.3em] text-primary mb-4">
            HOW TO USE
          </p>
          <h2 className="text-xl md:text-2xl text-foreground leading-relaxed">
            今の自分に合わせて
            <br />
            <span className="inline-block px-2 py-1 mt-2 rounded bg-gradient-to-r from-[#FFF0F5] to-[#E0F7FA]">
              &ldquo;選んで足す&rdquo;
            </span>
            <br />
            スキンケア
          </h2>
        </div>

        {/* フローチャート */}
        <div
          ref={flowRef}
          className={`space-y-6 fade-in-up ${flowVisible ? "is-visible" : ""}`}
        >
          {/* BASE */}
          <div className="relative">
            <div className="bg-gradient-to-r from-[#F0FCFF] to-[#E0F7FA] rounded-2xl p-5 border border-[#A8D8EA]/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium tracking-wider bg-[#A8D8EA] text-white rounded-full">
                  BASE
                </span>
                <span className="text-xs text-muted-foreground">
                  全員におすすめ
                </span>
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">
                薬用クリアブライトローション
              </h3>
              <p className="text-sm text-muted-foreground">
                土台を整える。毎日のベースケアに。
              </p>
            </div>
            {/* 矢印 */}
            <div className="flex justify-center py-3">
              <div className="w-px h-8 bg-gradient-to-b from-[#A8D8EA] to-border" />
            </div>
          </div>

          {/* プラス記号 */}
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center">
              <span className="text-xl text-primary font-light">+</span>
            </div>
          </div>

          {/* AM / PM 選択 */}
          <div className="grid grid-cols-2 gap-4">
            {/* AM */}
            <div className="bg-gradient-to-br from-[#FFF8DC] to-[#FFFAF0] rounded-2xl p-4 border border-[#E8B4B8]/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium tracking-wider bg-[#E8B4B8] text-white rounded-full">
                  AM
                </span>
                <svg className="w-4 h-4 text-[#E8B4B8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                忙しい朝にこれ1本
              </p>
              <h4 className="text-sm font-medium text-foreground leading-relaxed">
                薬用リンクル
                <br />
                UVエマルジョン
              </h4>
              <p className="text-xs text-muted-foreground mt-2">
                美白 × UVケア
              </p>
            </div>

            {/* PM */}
            <div className="bg-gradient-to-br from-[#F0F0FF] to-[#F8F8FF] rounded-2xl p-4 border border-[#C9B1D4]/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium tracking-wider bg-[#C9B1D4] text-white rounded-full">
                  PM
                </span>
                <svg className="w-4 h-4 text-[#C9B1D4]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                夜のスペシャルケア
              </p>
              <h4 className="text-sm font-medium text-foreground leading-relaxed">
                お悩みに合わせて選ぶ
              </h4>
            </div>
          </div>

          {/* PM詳細 */}
          <div className="ml-[50%] pl-2 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1 h-full bg-[#C9B1D4]/30 rounded-full flex-shrink-0" />
              <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-[#C9B1D4]/20">
                <p className="text-xs text-[#A8D8EA] font-medium mb-1">
                  毛穴が気になる
                </p>
                <p className="text-sm text-foreground">
                  クリアブライトAZセラム
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-full bg-[#C9B1D4]/30 rounded-full flex-shrink-0" />
              <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-[#C9B1D4]/20">
                <p className="text-xs text-[#E8B4B8] font-medium mb-1">
                  くすみ・肌荒れが気になる
                </p>
                <p className="text-sm text-foreground">
                  薬用クリアブライトセラム
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 補足 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground leading-loose">
            あなたの肌に合わせて、
            <br className="sm:hidden" />
            自由に組み合わせてください。
          </p>
        </div>
      </div>
    </section>
  );
}
