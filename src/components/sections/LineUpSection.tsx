"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 製品ラインデータ
const productLines = [
  {
    id: "calm",
    name: "カームナイトリペア",
    nameEn: "CALM NIGHT REPAIR",
    color: "#4B6FA5",
    concern: "ダメージ・乾燥",
    finish: "しっとり",
    description:
      "ダメージを受けた髪を夜間に集中補修。翌朝しっとりまとまる髪へ。",
    features: ["ダメージ補修", "保湿", "しっとり仕上げ"],
  },
  {
    id: "relax",
    name: "リラックスナイトリペア",
    nameEn: "RELAX NIGHT REPAIR",
    color: "#8B7BA5",
    concern: "うねり・パサつき",
    finish: "さらさら",
    description: "くせ・うねりを抑えて、翌朝さらさらの指通りへ。",
    features: ["くせ抑制", "なめらか", "さらさら仕上げ"],
  },
  {
    id: "deep",
    name: "ディープナイトリペア",
    nameEn: "DEEP NIGHT REPAIR",
    color: "#5B4B95",
    concern: "ハイダメージ",
    finish: "濃密補修",
    description:
      "カラーやパーマで傷んだ髪を濃密に補修。翌朝しなやかな髪へ。",
    features: ["濃密補修", "集中ケア", "しなやか仕上げ"],
  },
];

/**
 * 製品ラインナップセクション
 * 3つの製品ラインを比較表形式で紹介
 */
export function LineUpSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: productsRef, isVisible: productsVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: tableRef, isVisible: tableVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="製品ラインナップ"
    >
      {/* 背景グラデーション */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-yolu-midnight via-yolu-deep-blue to-yolu-midnight"
        aria-hidden="true"
      />

      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/asset_2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20 mix-blend-screen"
        />
        <div className="bubble w-48 h-48 -top-20 left-1/4 animate-float-slow opacity-15" />
        <div className="bubble w-32 h-32 bottom-40 -right-10 animate-float opacity-20" />
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
            LINE UP
          </h2>
          <p className="section-title-jp mt-4">
            あなたにぴったりのシリーズを見つけて
          </p>
        </div>

        {/* 製品カード */}
        <div
          ref={productsRef}
          className={`grid gap-6 mb-16 fade-in-up ${productsVisible ? "is-visible" : ""}`}
        >
          {productLines.map((product, index) => (
            <div
              key={product.id}
              className="card-yolu relative overflow-hidden"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* アクセントライン */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: product.color }}
              />

              <div className="pt-4">
                {/* 製品名 */}
                <div className="mb-4">
                  <p
                    className="text-xs tracking-widest mb-1"
                    style={{ color: product.color }}
                  >
                    {product.nameEn}
                  </p>
                  <h3 className="text-lg font-medium text-white">
                    {product.name}
                  </h3>
                </div>

                {/* 悩み・仕上がり */}
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">お悩み</p>
                    <p className="text-sm text-white">{product.concern}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">
                      仕上がり
                    </p>
                    <p className="text-sm text-white">{product.finish}</p>
                  </div>
                </div>

                {/* 説明 */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* 特徴タグ */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${product.color}20`,
                        color: product.color,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 比較表 */}
        <div
          ref={tableRef}
          className={`fade-in-up ${tableVisible ? "is-visible" : ""}`}
        >
          <div className="card-yolu overflow-x-auto">
            <h3 className="text-center text-lg font-medium text-white mb-6">
              製品比較表
            </h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col" className="text-left">シリーズ</th>
                  <th scope="col">お悩み</th>
                  <th scope="col">仕上がり</th>
                </tr>
              </thead>
              <tbody>
                {productLines.map((product) => (
                  <tr key={product.id}>
                    <td className="text-left">
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: product.color }}
                      />
                      <span className="text-white text-sm">{product.name}</span>
                    </td>
                    <td className="text-white text-sm">{product.concern}</td>
                    <td className="text-white text-sm">{product.finish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 装飾画像 */}
        <div className="mt-16 relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
          <Image
            src="/asset_7.png"
            alt="幻想的なイメージ"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            loading="lazy"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-yolu-midnight/60 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
