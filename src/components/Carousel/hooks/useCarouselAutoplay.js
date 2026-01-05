import { useEffect, useRef } from "react";

export const useCarouselAutoplay = ({ isEnabled, delay, onTick }) => {
  const tickRef = useRef(0);
  const reset = () => (tickRef.current += 1);

  useEffect(() => {
    if (!isEnabled) return;

    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [isEnabled, delay, onTick]);

  return { reset };
};
