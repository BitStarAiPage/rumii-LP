"use client";

/**
 * フッターコンポーネント
 * ブランドロゴ、コピーライト、各種リンクを表示
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden yolu-gradient-reverse">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="bubble w-20 h-20 top-10 left-10 animate-float-slow opacity-20" />
        <div className="bubble w-12 h-12 bottom-20 right-20 animate-float opacity-15" />
      </div>

      <div className="relative z-10 container mx-auto px-5 max-w-[750px]">
        {/* ブランドロゴ */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl tracking-[0.3em] text-white"
            style={{ fontFamily: "var(--font-tenor), serif" }}
          >
            NUIT
          </h2>
          <p className="text-sm text-white/60 mt-2 tracking-wider">
            夜間美容
          </p>
        </div>

        {/* リンク */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors duration-300"
          >
            公式サイト
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors duration-300"
          >
            X (Twitter)
          </a>
        </div>

        {/* 会社情報 */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-xs text-white/40">
            ナイトビューティー株式会社
          </p>
          <p className="text-xs text-white/40">
            〒150-0000 東京都渋谷区神宮前1-2-3 ナイトビル5F
          </p>
          <p className="text-xs text-white/40">
            TEL: 03-0000-1234 / E-mail: info@nuit-beauty.example.jp
          </p>
        </div>

        {/* 区切り線 */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* コピーライト */}
        <div className="text-center">
          <p className="text-xs text-white/50">
            &copy; {currentYear} Night Beauty Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
