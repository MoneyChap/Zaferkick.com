import React, { useRef, useEffect } from 'react';
import './AnimatedBorderButton.css';

export default function AnimatedBorderButton({ children }) {
  const rectRef = useRef(null);

  useEffect(() => {
    const rect      = rectRef.current;
    const perimeter = rect.getTotalLength();   // real pixel perimeter
    const dashPx    = 120;                     // ◉ change this to make the dash longer/shorter
    const gapPx     = perimeter - dashPx;      // exactly one dash + one gap = full loop

    // apply the dash+gap so you only ever get 1 dash
    rect.style.strokeDasharray  = `${dashPx} ${gapPx}`;
    rect.style.strokeDashoffset = '0';

    // store the full-perimeter in a CSS var so our keyframes can use it
    rect.style.setProperty('--cycle-px', `${perimeter}px`);
  }, []);

  return (
    <button className="animated-border-btn">
      <span className="label">{children}</span>
      <svg
        className="border-svg"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <rect
          ref={rectRef}
          x="1" y="1"
          width="98" height="38"
          rx="8" ry="8"
          fill="none"
          stroke="#ff9900"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
}
