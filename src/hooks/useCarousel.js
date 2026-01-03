import { useRef, useEffect, useState, useMemo } from "react";

export const useCarousel = ({ images, carouselOptions = {} }) => {
  const {
    isAuto = false,
    transitionDelay = 5000,
    transitionDuration = 200,
  } = carouselOptions;
  const modifiedImageList = useMemo(() => {
    if (images.length === 0) return [];
    if (images.length === 1) return [images[0]];
    else return [images[images.length - 1], ...images, images[0]];
  }, [images]);
  const [imageListOffset, setImageListOffset] = useState(1);
  const [autoSlideTick, setAutoSlideTick] = useState(0);
  const imageListRef = useRef(null);
  const isSlideAllowedRef = useRef(true);

  useEffect(() => {
    if (!isAuto || modifiedImageList.length <= 1) return;
    const intervalId = setInterval(() => {
      imageListRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      setImageListOffset((prev) => {
        return prev === modifiedImageList.length - 1 ? 0 : prev + 1;
      });
    }, transitionDelay);
    return () => clearInterval(intervalId);
  }, [
    modifiedImageList,
    autoSlideTick,
    isAuto,
    transitionDelay,
    transitionDuration,
  ]);

  function advanceSlide() {
    enableTransition(transitionDuration);
    setImageListOffset((prev) =>
      prev === modifiedImageList.length - 1 ? 0 : prev + 1
    );
  }

  function retreatSlide() {
    enableTransition(transitionDuration);
    setImageListOffset((prev) =>
      prev === 0 ? modifiedImageList.length - 1 : prev - 1
    );
  }

  function goToSlide(index) {
    enableTransition(transitionDuration);
    setImageListOffset(index);
  }

  function resetInterval() {
    setAutoSlideTick((prev) => prev + 1);
  }

  function handleChange(fn) {
    enableTransition(transitionDuration);
    if (isSlideAllowedRef.current) {
      fn();
      if (isAuto) resetInterval();
    }
  }

  function fixOffset() {
    isSlideAllowedRef.current = true;
    if (imageListOffset === modifiedImageList.length - 1) {
      disableTransition();
      setImageListOffset(1);
    } else if (imageListOffset === 0) {
      disableTransition();
      setImageListOffset(modifiedImageList.length - 2);
    }
  }

  function enableTransition(duration) {
    imageListRef.current.style.transition = `transform ${duration}ms ease-in-out`;
  }

  function disableTransition() {
    imageListRef.current.style.transition = "none";
  }

  return {
    modifiedImageList,
    imageListOffset,
    imageListRef,
    isSlideAllowedRef,
    advanceSlide,
    retreatSlide,
    goToSlide,
    handleChange,
    fixOffset,
  };
};
