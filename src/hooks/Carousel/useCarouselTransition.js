import { useRef } from "react";

export const useCarouselTransition = ({ duration }) => {
  const listRef = useRef(null);
  const canSlideRef = useRef(true);

  const block = () => {
    canSlideRef.current = false;
  };

  const allow = () => {
    canSlideRef.current = true;
  };

  const enable = () => {
    listRef.current.style.transition = `transform ${duration}ms ease-in-out`;
  };

  const disable = () => {
    listRef.current.style.transition = "none";
  };

  return {
    listRef,
    canSlideRef,
    enable,
    disable,
    block,
    allow,
  };
};
