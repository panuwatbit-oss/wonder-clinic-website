"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  label: string;
};

export function BeforeAfterSlider({ beforeSrc, afterSrc, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="before-after-slider" style={{ "--slider-position": `${position}%` } as React.CSSProperties}>
      <img src={afterSrc} alt={`${label} หลังทำ Mockup`} />
      <div className="before-layer" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeSrc} alt={`${label} ก่อนทำ Mockup`} />
      </div>
      <span className="slider-divider" aria-hidden="true"><i>↔</i></span>
      <input
        aria-label={`เลื่อนเพื่อเปรียบเทียบภาพ Mockup ก่อนและหลังของ ${label}`}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
    </div>
  );
}
