"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="before-after-slider" style={{ "--slider-position": `${position}%` } as React.CSSProperties}>
      <img src="/media/mockups/after-mockup.png" alt="Mockup after" />
      <div className="before-layer" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src="/media/mockups/before-mockup.png" alt="Mockup before" />
      </div>
      <span className="slider-divider" aria-hidden="true"><i>↔</i></span>
      <input
        aria-label="เลื่อนเพื่อเปรียบเทียบภาพ Mockup ก่อนและหลัง"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
    </div>
  );
}
