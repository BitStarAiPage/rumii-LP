"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { JQueryRipple } from "@/components/ui/jquery-ripple";

// ナビゲーションメニュー項目
const navItems = [
  { id: "top", label: "TOP", href: "#" },
  { id: "concept", label: "CONCEPT", href: "#concept" },
  { id: "points", label: "POINTS", href: "#points" },
  { id: "product", label: "PRODUCT", href: "#product" },
  { id: "lineup", label: "LINE UP", href: "#lineup" },
];

/**
 * PC向け左右固定装飾エリア
 * 水の波紋エフェクト（jQuery Ripples）付き
 */
export function FixedSidebars() {
  const [activeSection, setActiveSection] = useState("top");

  // スクロール連動
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["lineup", "product", "points", "concept"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (window.scrollY < 100) {
        setActiveSection("top");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      setActiveSection("concept");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 左サイドバー */}
      <aside
        className="fixed-sidebar fixed-sidebar-left"
        aria-label="サイドナビゲーション（左）"
      >
        <JQueryRipple imageUrl="/back/back_image04.jpg">
          <div className="fixed-sidebar-content justify-between py-8 relative z-10 h-full">
            <div className="flex-1" />

            <div className="flex-shrink-0">
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <Image
                  src="/logo/logo_image02.png"
                  alt="rumii"
                  width={240}
                  height={90}
                  className="h-auto"
                />
              </a>
            </div>

            <div className="flex-1" />

            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-6">
                <a
                  href="https://x.com/rumii_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/rumii_official_jp/?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://lin.ee/LkTkFAd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LINE"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground/70 tracking-wider">
                <a href="#" className="hover:text-foreground transition-colors">
                  CONTACT
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  COMPANY
                </a>
              </div>
            </div>
          </div>
        </JQueryRipple>
      </aside>

      {/* 右サイドバー */}
      <aside
        className="fixed-sidebar fixed-sidebar-right"
        aria-label="サイドナビゲーション（右）"
      >
        <JQueryRipple imageUrl="/back/back_image04.jpg">
          <div className="h-full flex flex-col items-center justify-center relative z-10">
            <div className="flex flex-col items-center gap-12">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`text-base tracking-[0.15em] transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#lineup"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 text-foreground"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm tracking-wider">購入する</span>
              </a>
            </div>
          </div>
        </JQueryRipple>
      </aside>
    </>
  );
}
