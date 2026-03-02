"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * リニューアルポイント紹介セクション
 * 3つのリニューアルポイントを紹介
 */
export function RenewalPointSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: point1Ref, isVisible: point1Visible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: point2Ref, isVisible: point2Visible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: point3Ref, isVisible: point3Visible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="リニューアルポイント"
    >
      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-3xl md:text-4xl tracking-[0.2em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            RENEWAL
            <br />
            POINT
          </h2>
          <p className="text-sm text-muted-foreground tracking-wider mt-4">さらに進化したポイント</p>
        </div>

        {/* ポイント1 */}
        <article
          ref={point1Ref}
          className={`mb-16 fade-in-up ${point1Visible ? "is-visible" : ""}`}
        >
          <div className="card-rumii">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-sm tracking-widest">
                POINT 01
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
              美白
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              ニキビ・シミ・くすみは明確なエビデンスと「薬用」という安心感で。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/other/other_image04.webp"
                alt="美白イメージ"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </article>

        {/* ポイント2 */}
        <article
          ref={point2Ref}
          className={`mb-16 fade-in-up delay-200 ${point2Visible ? "is-visible" : ""}`}
        >
          <div className="card-rumii">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-sm tracking-widest">
                POINT 02
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
              UV
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              毎日使うものだからこそ、使いやすく肌にやさしい設計。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_5.webp"
                alt="UVケアイメージ"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </article>

        {/* ポイント3 */}
        <article
          ref={point3Ref}
          className={`mb-16 fade-in-up delay-300 ${point3Visible ? "is-visible" : ""}`}
        >
          <div className="card-rumii">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-sm tracking-widest">
                POINT 03
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
              デザイン
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              フル蒸着オーロラ加工で、つい使いたくなるパッケージデザイン。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_9.png"
                alt="パッケージデザイン"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </article>

        {/* モデル画像 */}
        <div
          ref={imageRef}
          className={`mt-20 fade-in-up ${imageVisible ? "is-visible" : ""}`}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/other/other_image03.webp"
              alt="透明感あふれる肌"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              loading="lazy"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed">
                目覚めた瞬間から
                <br />
                輝く透明肌へ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
