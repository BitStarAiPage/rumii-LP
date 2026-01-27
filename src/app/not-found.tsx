import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description: "お探しのページは見つかりませんでした。",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * 404 Not Found ページ
 * 存在しないURLにアクセスした際に表示
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center yolu-gradient-dark">
      <div className="container mx-auto px-5 max-w-[750px] text-center">
        {/* 404タイトル */}
        <h1
          className="text-8xl md:text-9xl font-bold text-white/20 mb-4"
          style={{ fontFamily: "var(--font-tenor), serif" }}
        >
          404
        </h1>

        {/* メッセージ */}
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
          ページが見つかりません
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          お探しのページは存在しないか、
          <br className="sm:hidden" />
          移動した可能性があります。
        </p>

        {/* トップページへのリンク */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-yolu-purple hover:bg-yolu-soft-purple text-white rounded-full transition-colors duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>トップページへ戻る</span>
        </Link>
      </div>
    </main>
  );
}
