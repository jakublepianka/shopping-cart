import { useRef, useEffect, useState, useMemo } from "react";
import styles from "./Carousel.module.css";

export const Carousel = ({ images, isAuto = false }) => {
  const modifiedImageList = useMemo(
    () => [images[images.length - 1], ...images, images[0]],
    [images]
  );
  const [imageListOffset, setImageListOffset] = useState(1);
  const imagesLengthRef = useRef(0);
  const intervalRef = useRef(null);
  const imageListRef = useRef(null);
  const isSlideAllowedRef = useRef(true);

  useEffect(() => {
    imagesLengthRef.current = modifiedImageList.length;

    if (isAuto) {
      intervalRef.current = setInterval(() => {
        imageListRef.current.style.transition = "transform 1s ease-in-out";
        setImageListOffset((prev) => {
          return prev === imagesLengthRef.current - 1 ? 0 : prev + 1;
        });
      }, 2000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [modifiedImageList, isAuto]);

  const advanceSlide = () => {
    imageListRef.current.style.transition = "transform 1s ease-in-out";
    setImageListOffset((prev) =>
      prev === imagesLengthRef.current - 1 ? 0 : prev + 1
    );
  };

  const retreatSlide = () => {
    imageListRef.current.style.transition = "transform 1s ease-in-out";
    setImageListOffset((prev) =>
      prev === 0 ? imagesLengthRef.current - 1 : prev - 1
    );
  };

  function resetInterval() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advanceSlide, 2000);
  }

  function handleChange(fn) {
    if (isSlideAllowedRef.current) {
      fn();
      if (isAuto) resetInterval();
    }
  }

  function fixOffset() {
    isSlideAllowedRef.current = true;
    if (imageListOffset === modifiedImageList.length - 1) {
      imageListRef.current.style.transition = "none";
      setImageListOffset(1);
    } else if (imageListOffset === 0) {
      imageListRef.current.style.transition = "none";
      setImageListOffset(modifiedImageList.length - 2);
    }
  }

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.view}></div>
        <div
          ref={imageListRef}
          className={styles.imageList}
          style={{ transform: `translateX(-${imageListOffset * 100}%)` }}
          onTransitionEnd={fixOffset}
          onTransitionStart={() => (isSlideAllowedRef.current = false)}
        >
          {modifiedImageList.map((image, i) => (
            <img key={i} src={image} className={styles.carouselImage}></img>
          ))}
        </div>
      </div>
      <button onClick={() => handleChange(retreatSlide)}>prev</button>
      <button onClick={() => handleChange(advanceSlide)}>next</button>
      <div>
        {Array.from({ length: modifiedImageList.length }).map(
          (_, i) =>
            i !== 0 &&
            i !== modifiedImageList.length - 1 && (
              <button
                key={i}
                onClick={() => handleChange(() => setImageListOffset(i))}
              >
                {i}
              </button>
            )
        )}
      </div>
    </>
  );
};
