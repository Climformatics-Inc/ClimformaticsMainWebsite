import { useEffect, useRef, useState } from 'react';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    // If the element is intersecting, make it visible
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
    // No else here - we do not automatically hide it when it's not intersecting
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
