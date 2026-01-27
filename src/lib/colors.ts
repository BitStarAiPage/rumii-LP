/**
 * NUITブランドカラー定義
 * Tailwind CSSのglobals.cssと同期して使用
 */

export const colors = {
  // グラデーション用カラー
  lavender: "#E8E0F0",
  deepBlue: "#1a1a3e",
  midnight: "#0d0d2b",

  // アクセントカラー
  purple: "#6B5B95",
  softPurple: "#9B8AB8",

  // テキストカラー
  text: {
    primary: "#FFFFFF",
    secondary: "#E0D8E8",
    dark: "#2D2D3A",
  },

  // 装飾カラー
  bubble: "rgba(255, 255, 255, 0.1)",
  glow: "rgba(147, 112, 219, 0.3)",
} as const;

/**
 * 製品ラインカラー
 */
export const productColors = {
  calmNight: {
    primary: "#4B6FA5", // 青系
    secondary: "#7B9CC9",
    gradient: "linear-gradient(135deg, #4B6FA5, #7B9CC9)",
  },
  relaxNight: {
    primary: "#8B7BA5", // 紫系
    secondary: "#B5A5C9",
    gradient: "linear-gradient(135deg, #8B7BA5, #B5A5C9)",
  },
  deepNight: {
    primary: "#5B4B95", // 深い紫系
    secondary: "#8B7BC9",
    gradient: "linear-gradient(135deg, #5B4B95, #8B7BC9)",
  },
} as const;

export type ProductLine = keyof typeof productColors;
