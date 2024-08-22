import React from 'react';
import useElementOnScreen from './useElementOnScreen';

const AnimateOnScroll = ({ children, reappear, threshold = 0.1, direction = "right" }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  // Determine class based on visibility and direction
  const animationClass = isVisible ? "on-screen" : (direction === "right" ? "off-screen-right" : "off-screen-left");

  return (
    <div
      ref={containerRef}
      className={`transition-all ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
