"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * ベネフィットセクション
 * 夜のケアから朝の目覚めまでの流れを表現
 */
export function BenefitSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: nightRef, isVisible: nightVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: morningRef, isVisible: morningVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-yolu-midnight"
      aria-label="ベネフィット"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yolu-deep-blue to-transparent opacity-50" />
        <div className="bubble w-36 h-36 top-1/4 -right-12 animate-float-slow opacity-20" />
        <div className="bubble w-20 h-20 bottom-1/3 left-10 animate-float opacity-25" />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[750px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <p className="text-yolu-soft-purple text-sm tracking-widest mb-4">
            NIGHT TO MORNING
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            夜のケアで、朝が変わる。
          </h2>
        </div>

        {/* 夜のシーン */}
        <div
          ref={nightRef}
          className={`mb-12 fade-in-up ${nightVisible ? "is-visible" : ""}`}
        >
          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/asset_3.png"
                alt="夜のヘアケアシーン"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                loading="lazy"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-yolu-midnight/80 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full bg-yolu-purple/50 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm tracking-wider">
                  NIGHT
                </span>
              </div>
              <p className="text-white text-lg font-medium leading-relaxed">
                眠っている間に、髪を集中補修
              </p>
            </div>
          </div>
        </div>

        {/* 矢印 */}
        <div className="flex justify-center my-8" aria-hidden="true">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* 朝のシーン */}
        <div
          ref={morningRef}
          className={`fade-in-up delay-200 ${morningVisible ? "is-visible" : ""}`}
        >
          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/asset_4.png"
                alt="朝の目覚めシーン"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                loading="lazy"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-yolu-midnight/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full bg-amber-500/50 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm tracking-wider">
                  MORNING
                </span>
              </div>
              <p className="text-white text-lg font-medium leading-relaxed">
                目覚めた瞬間から、まとまる潤艶髪
              </p>
            </div>
          </div>
        </div>

        {/* 補足テキスト */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm leading-loose">
            寝ている間は、髪が枕との摩擦でダメージを受けやすい時間。
            <br className="hidden sm:block" />
            NUITは夜間美容に着目し、睡眠中の髪を守りながら補修します。
          </p>
        </div>
      </div>
    </section>
  );
}
