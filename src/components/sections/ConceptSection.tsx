"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
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
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative z-10">
      <section
        id="concept"
        className="sticky top-0 relative pt-24 md:pt-32 pb-[150px] overflow-hidden"
        aria-label="コンセプト"
        style={{
          backgroundImage: "url('/back/back_image01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      {/* 背景動画 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/back/back_video01.mp4" type="video/mp4" />
      </video>

      {/* 上部グラデーション（前のセクションからの自然な遷移） */}
      <div
        className="absolute -top-px left-0 right-0 h-28 pointer-events-none z-20"
        aria-hidden="true"
      >
        {/* ベースの白グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent" />
        {/* 色味を加えるソフトレイヤー */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5]/40 via-[#E0F7FA]/20 to-transparent blur-2xl" />
      </div>

      {/* 装飾: 放射状の光 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 animate-breathe"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-[#E0F7FA]/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 blur-fade-in ${titleVisible ? "is-visible" : ""}`}
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
          className={`space-y-8 stagger-container ${copyVisible ? "is-visible" : ""}`}
        >
          {/* 画像 */}
          <div
            ref={imageRef}
            className={`relative w-full mb-8 image-float scale-fade-in ${imageVisible ? "is-visible" : ""}`}
            style={{
              maskImage: "radial-gradient(ellipse 85% 80% at center, black 50%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 80% at center, black 50%, transparent 100%)",
              transitionDelay: "200ms",
            }}
          >
            <Image
              src="/other/other_image02.png"
              alt="rumii製品イメージ"
              width={500}
              height={375}
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover w-full h-auto"
            />
          </div>

          <div
            ref={textRef}
            className={`fade-slide-up ${textVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            <p
              className="text-base md:text-lg text-center text-muted-foreground leading-loose mt-16"
              style={{ fontFamily: "var(--font-tenor), 'Hiragino Mincho ProN', 'Yu Mincho', serif" }}
            >
              美白も、UVも、デザインも。
              <br />
              rumiiで、肌に光を仕込む。
            </p>
          </div>

          <div
            className={`w-12 h-px bg-border mx-auto transition-all duration-1000 ${
              textVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          />

          <p
            className={`text-sm md:text-base text-center text-muted-foreground leading-loose fade-slide-up ${
              textVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "800ms" }}
          >
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

      </div>
      </section>
    </div>
  );
}
