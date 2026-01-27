# NUIT Renewal - プロジェクト構成図

```
yolu-25renewal/
├── public/
│   ├── asset_1.png          # ヒーロー画像（眠る女性とNUIT製品）
│   ├── asset_2.png          # 背景装飾（水の泡・光の粒子）
│   ├── asset_3.png          # 夜のシーン（眠る女性）
│   ├── asset_4.png          # 朝のシーン（目覚める女性）
│   ├── asset_5.png          # テクスチャ（セラム/ジェル）
│   ├── asset_6.png          # シャンプーシーン
│   ├── asset_7.png          # 幻想的な花
│   ├── asset_8.png          # 美しいストレートヘア
│   ├── asset_9.png          # リラックスシーン
│   └── asset_10.png         # 科学的イメージ（髪の構造）
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # ルートレイアウト（フォント設定含む）
│   │   ├── page.tsx         # メインページ
│   │   └── globals.css      # グローバルスタイル・アニメーション定義
│   │
│   ├── components/
│   │   ├── ui/              # shadcn/ui コンポーネント
│   │   │   └── button.tsx
│   │   │
│   │   ├── layout/
│   │   │   └── Footer.tsx   # フッターコンポーネント
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.tsx       # ヒーローセクション
│   │       ├── RenewalPointSection.tsx # RENEWAL POINT セクション
│   │       ├── BenefitSection.tsx    # ベネフィット紹介セクション
│   │       ├── LineUpSection.tsx     # LINE UP セクション（製品比較）
│   │       └── PurchaseSection.tsx   # 購入リンクセクション
│   │
│   ├── lib/
│   │   ├── utils.ts         # ユーティリティ関数（cn関数など）
│   │   └── colors.ts        # カスタムカラー定義
│   │
│   └── hooks/
│       └── useScrollAnimation.ts  # スクロールアニメーション用フック
│
├── prisma/
│   └── schema.prisma        # Prismaスキーマ（将来の拡張用）
│
├── next.config.ts           # Next.js設定
├── tsconfig.json            # TypeScript設定
├── package.json             # 依存関係
├── structure.md             # 本ファイル
├── claude.md                # デザイン要件定義書
└── reference_design.png     # デザイン参照画像
```

## セクション構成

1. **HeroSection** - ファーストビュー、キャッチコピー、メインビジュアル
2. **RenewalPointSection** - リニューアルの3つのポイント解説
3. **BenefitSection** - 夜から朝への変化（Before/After的表現）
4. **LineUpSection** - 3つの製品ライン比較表
5. **PurchaseSection** - ECサイト購入ボタン
6. **Footer** - ブランドロゴ、会社情報、リンク集

## 架空会社情報

- **ブランド名**: NUIT（ニュイ）
- **会社名**: ナイトビューティー株式会社
- **住所**: 〒150-0000 東京都渋谷区神宮前1-2-3 ナイトビル5F
- **電話**: 03-0000-1234
- **メール**: info@nuit-beauty.example.jp
