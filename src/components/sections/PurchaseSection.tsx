"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

// ECサイトリンク（架空のプレースホルダーリンク）
const ecLinks = [
  {
    name: "Amazon",
    url: "#",
  },
  {
    name: "楽天市場",
    url: "#",
  },
  {
    name: "LOHACO",
    url: "#",
  },
  {
    name: "@cosme SHOPPING",
    url: "#",
  },
];

/**
 * 購入セクション
 * ECサイトへのリンクを表示
 */
export function PurchaseSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: linksRef, isVisible: linksVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="購入"
    >
      <div className="relative z-10 container mx-auto px-5 max-w-[500px]">
        {/* セクションタイトル */}
        <div
          ref={titleRef}
          className={`text-center mb-12 fade-in-up ${titleVisible ? "is-visible" : ""}`}
        >
          <h2
            className="text-2xl md:text-3xl tracking-[0.15em] text-foreground"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            PURCHASE
          </h2>
          <p className="text-sm text-muted-foreground tracking-wider mt-4">お買い求めはこちら</p>
        </div>

        {/* ECサイトリンク */}
        <div
          ref={linksRef}
          className={`grid grid-cols-2 gap-4 fade-in-up ${linksVisible ? "is-visible" : ""}`}
        >
          {ecLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              className="btn-rumii block"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Button
                variant="outline"
                className="w-full h-14 text-sm font-medium border-border bg-white/50 hover:bg-white/80 text-foreground transition-all duration-300 backdrop-blur-sm"
              >
                {link.name}
              </Button>
            </a>
          ))}
        </div>

        {/* ブランドサイトリンク */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm tracking-wider">rumii 公式サイトはこちら</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* キャンペーン情報 */}
        <div className="mt-16 card-rumii text-center">
          <p className="text-primary text-xs tracking-widest mb-2">
            CAMPAIGN
          </p>
          <h3 className="text-lg font-medium text-foreground mb-4">
            リニューアル記念キャンペーン実施中
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            期間限定で特別セットをご用意しています。
            <br className="hidden sm:block" />
            詳しくは各ECサイトをご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
}
