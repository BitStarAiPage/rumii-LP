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
      className="relative py-24 md:py-32 yolu-gradient-dark overflow-hidden"
      aria-label="リニューアルポイント"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble w-40 h-40 -top-10 -right-10 animate-float-slow opacity-20" />
        <div className="bubble w-28 h-28 bottom-20 -left-10 animate-float opacity-15" />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[750px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-3xl md:text-4xl tracking-[0.2em] text-white"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            RENEWAL
            <br />
            POINT
          </h2>
          <p className="section-title-jp mt-4">さらに進化したポイント</p>
        </div>

        {/* ポイント1 */}
        <article
          ref={point1Ref}
          className={`mb-16 fade-in-up ${point1Visible ? "is-visible" : ""}`}
        >
          <div className="card-yolu">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-yolu-soft-purple text-sm tracking-widest">
                POINT 01
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-white">
              ナイトケラチン・
              <wbr />
              アセチルグルコサミンを新配合
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              髪の主成分であるケラチンと、うるおい成分のアセチルグルコサミンを新たに配合。寝ている間に髪の内部まで浸透し、ダメージを集中補修します。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_10.png"
                alt="髪の補修成分イメージ"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
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
          <div className="card-yolu">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-yolu-soft-purple text-sm tracking-widest">
                POINT 02
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-white">
              睡眠浸透成分に
              <wbr />
              ナイトセラミドEXを新配合
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              睡眠中の髪は、日中に比べて成分が浸透しやすい状態に。新配合のナイトセラミドEXが、その時間を最大限に活かして髪を潤いで満たします。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_5.png"
                alt="ナイトセラミドEXイメージ"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
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
          <div className="card-yolu">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-yolu-soft-purple text-sm tracking-widest">
                POINT 03
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-white">
              ボトル・パッケージを新デザイン
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              夜の静けさと癒しを表現した新デザイン。バスルームに置くだけで、特別なナイトケアタイムを演出します。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_9.png"
                alt="リラックスシーン"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
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
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/asset_8.png"
              alt="美しく輝く髪"
              fill
              sizes="(max-width: 768px) 100vw, 750px"
              loading="lazy"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-yolu-midnight/60 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                翌朝、まとまりよく
                <br />
                潤いあふれる艶髪へ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
