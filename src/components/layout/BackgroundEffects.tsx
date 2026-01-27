"use client";

/**
 * 背景エフェクトコンポーネント
 * - オーロラヴェール（ゆらめく真珠色の波形）
 * - レンズフレア（光の輪と放射状の光）
 */
export function BackgroundEffects() {
  return (
    <>
      {/* オーロラヴェール */}
      <div className="aurora-container" aria-hidden="true">
        <div className="aurora-veil aurora-veil-1" />
        <div className="aurora-veil aurora-veil-2" />
        <div className="aurora-veil aurora-veil-3" />
      </div>

      {/* レンズフレア */}
      <div className="lens-flare-container" aria-hidden="true">
        {/* 光の輪 */}
        <div className="lens-flare lens-flare-1" />
        <div className="lens-flare lens-flare-2" />
        <div className="lens-flare lens-flare-3" />
        {/* 放射状の光 */}
        <div className="lens-rays" />
      </div>
    </>
  );
}
