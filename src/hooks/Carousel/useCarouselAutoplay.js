import { useEffect, useRef } from "react";

export const useCarouselAutoplay = ({ isAuto, delay, onTick }) => {
  const tickRef = useRef(0);
  const reset = () => (tickRef.current += 1);

  useEffect(() => {
    if (!isAuto) return;

    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [isAuto, delay, onTick]);

  return { reset };
};
