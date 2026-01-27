# NUIT Renewal - デザイン要件定義書

## 1. デザイン分析

### 1.1 ブランドコンセプト
- **ブランド名**: NUIT（ニュイ）
- **運営会社**: ナイトビューティー株式会社（架空）
- **コンセプト**: 夜間美容で、目覚める潤い
- **ターゲット**: 髪のダメージ・乾燥に悩む大人の女性

### 1.2 カラーパレット

```typescript
// 主要カラー
const colors = {
  // グラデーション用
  lavender: '#E8E0F0',        // 淡いラベンダー
  deepBlue: '#1a1a3e',        // 深い群青色
  midnightBlue: '#0d0d2b',    // 夜空の青

  // アクセント
  purple: '#6B5B95',          // パープル
  softPurple: '#9B8AB8',      // ソフトパープル

  // テキスト
  textPrimary: '#FFFFFF',     // 白（メインテキスト）
  textSecondary: '#E0D8E8',   // 薄紫（サブテキスト）
  textDark: '#2D2D3A',        // ダークグレー（明背景用）

  // 装飾
  bubble: 'rgba(255, 255, 255, 0.1)',  // 泡の色
  glow: 'rgba(147, 112, 219, 0.3)',    // 光の粒子
}
```

### 1.3 タイポグラフィ

| 用途 | フォント | ウェイト | サイズ |
|-----|---------|---------|--------|
| 英語見出し | Tenor Sans | Regular | 32-48px |
| 日本語見出し | Zen Kaku Gothic New | Bold | 24-32px |
| 本文 | Zen Kaku Gothic New | Regular | 14-16px |
| キャッチコピー | Zen Kaku Gothic New | Medium | 18-24px |

### 1.4 レイアウト仕様

- **最大幅**: 750px（モバイルファースト）
- **余白**: 左右 20px、セクション間 80-120px
- **配置**: 中央揃え基本
- **行間**: 1.8-2.0

## 2. セクション詳細

### 2.1 ヒーローセクション
- グラデーション背景（ラベンダー → 深い青）
- 浮遊する泡・光の粒子（背景装飾）
- メインキャッチコピー: 「新しいNUIT体験。夜間美容で、目覚める潤い。」
- 製品画像とモデル画像

### 2.2 RENEWAL POINTセクション
- セクションタイトル: 「RENEWAL POINT」
- 3つのポイント:
  1. ナイトケラチン・アセチルグルコサミンを新配合
  2. 睡眠浸透成分にナイトセラミドEXを新配合
  3. ボトル・パッケージを新デザイン
- 各ポイントに説明テキスト
- モデル画像（髪の美しさを強調）

### 2.3 ベネフィットセクション
- 「翌朝、まとまりよく潤いあふれる艶髪へ」
- Before/After的な表現（夜→朝）
- 科学的根拠を示すビジュアル

### 2.4 LINE UPセクション
- 3つの製品ライン比較
  - **カームナイトリペア**: ダメージ補修、しっとり
  - **リラックスナイトリペア**: うねり・パサつき、さらさら
  - **ディープナイトリペア**: ハイダメージ、濃密補修
- 製品比較表
- 仕上がり比較

### 2.5 購入セクション
- ECサイトリンクボタン（Amazon、楽天、LOHACOなど）
- ブランドサイトへのリンク

## 3. アニメーション仕様

### 3.1 スクロール連動
```css
/* フェードインアニメーション */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 3.2 背景の浮遊演出
```css
/* 泡のフローティング */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.bubble {
  animation: float 6s ease-in-out infinite;
}
```

### 3.3 グラデーション変化
```css
/* 背景グラデーションのシフト */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## 4. 画像アセットマッピング

| アセット | 用途 | セクション |
|---------|------|-----------|
| asset_1.png | ヒーロー画像 | HeroSection |
| asset_2.png | 背景装飾（泡・光） | 全体背景 |
| asset_3.png | 夜のシーン | Benefit |
| asset_4.png | 朝のシーン | Benefit |
| asset_5.png | セラムテクスチャ | RenewalPoint |
| asset_6.png | シャンプーシーン | （未使用） |
| asset_7.png | 幻想的な花 | LineUp装飾 |
| asset_8.png | ストレートヘア | RenewalPoint |
| asset_9.png | リラックスシーン | RenewalPoint |
| asset_10.png | 髪の科学イメージ | RenewalPoint |

## 5. 架空会社情報

- **会社名**: ナイトビューティー株式会社
- **英語名**: Night Beauty Inc.
- **住所**: 〒150-0000 東京都渋谷区神宮前1-2-3 ナイトビル5F
- **電話番号**: 03-0000-1234
- **メールアドレス**: info@nuit-beauty.example.jp
- **公式サイト**: nuit-beauty.example.jp

## 6. 技術仕様

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animation**: CSS Keyframes + Intersection Observer
- **Fonts**: Google Fonts (Tenor Sans, Zen Kaku Gothic New)
- **ORM**: Prisma（将来の拡張用）
