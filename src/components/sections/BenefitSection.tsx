"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * ベネフィットセクション
 * 朝の光と透明感を表現
 */
export function BenefitSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: beforeRef, isVisible: beforeVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: afterRef, isVisible: afterVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="ベネフィット"
    >
      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <p className="text-primary text-sm tracking-widest mb-4">
            BEFORE &amp; AFTER
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
            光を反射する、透明肌へ。
          </h2>
        </div>

        {/* Before */}
        <div
          ref={beforeRef}
          className={`mb-12 fade-in-up ${beforeVisible ? "is-visible" : ""}`}
        >
          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/asset_3.png"
                alt="使用前の肌"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full bg-gray-400/50 flex items-center justify-center backdrop-blur-sm"
                  aria-hidden="true"
                >
                  <span className="text-white text-xs font-medium">B</span>
                </div>
                <span className="text-foreground/80 text-sm tracking-wider">
                  BEFORE
                </span>
              </div>
              <p className="text-foreground text-lg font-medium leading-relaxed">
                くすみが気になる朝の肌
              </p>
            </div>
          </div>
        </div>

        {/* 矢印 */}
        <div className="flex justify-center my-8" aria-hidden="true">
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-primary"
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

        {/* After */}
        <div
          ref={afterRef}
          className={`fade-in-up delay-200 ${afterVisible ? "is-visible" : ""}`}
        >
          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/asset_4.png"
                alt="使用後の輝く肌"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full bg-amber-400/60 flex items-center justify-center backdrop-blur-sm"
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
                <span className="text-foreground/80 text-sm tracking-wider">
                  AFTER
                </span>
              </div>
              <p className="text-foreground text-lg font-medium leading-relaxed">
                光を纏う、透明感あふれるミラー肌
              </p>
            </div>
          </div>
        </div>

        {/* 補足テキスト */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm leading-loose">
            プリズムセラミドが肌表面を整え、光の反射を最大化。
            <br className="hidden sm:block" />
            目覚めた瞬間から、透明感とツヤが続きます。
          </p>
        </div>
      </div>
    </section>
  );
}
