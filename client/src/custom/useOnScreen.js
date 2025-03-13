import { useState, useEffect, useMemo } from "react";

export const useOnScreen = (ref, tresh = 0.1) => {
  // Default threshold to 0.1
  const [isVisible, setIsVisible] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: tresh }
      ),
    [tresh]
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      console.log("is visible");
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  return isVisible;
};
