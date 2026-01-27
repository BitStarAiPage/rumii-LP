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
              プリズムセラミド配合で
              <wbr />
              光を纏う透明肌へ
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              独自のプリズムセラミドが肌表面を整え、光を美しく反射。まるでミラーのような透明感とツヤを実現します。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_10.png"
                alt="プリズムセラミドイメージ"
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
              モーニングブースト成分で
              <wbr />
              朝の輝きをサポート
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              目覚めの瞬間から肌に活力を与えるモーニングブースト成分。一日中続く透明感をサポートします。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_5.png"
                alt="モーニングブースト成分イメージ"
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
              シルバーボトルの新デザイン
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              光を反射するシルバーボトルは、まさにプリズムスキンを体現。洗練されたデザインで、毎日のスキンケアを特別な時間に。
            </p>
            <div className="mt-6 relative w-full aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src="/asset_9.png"
                alt="シルバーボトル"
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
              src="/asset_8.png"
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
