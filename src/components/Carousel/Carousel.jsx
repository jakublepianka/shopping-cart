// import { useRef, useEffect, useState, useMemo } from "react";
import styles from "./Carousel.module.css";
import { useCarousel } from "../../hooks/useCarousel";

export const Carousel = ({ images, carouselOptions }) => {
  const {
    modifiedImageList,
    imageListOffset,
    imageListRef,
    isSlideAllowedRef,
    advanceSlide,
    retreatSlide,
    goToSlide,
    handleChange,
    fixOffset,
  } = useCarousel({ images, carouselOptions });

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
              <button key={i} onClick={() => handleChange(() => goToSlide(i))}>
                {i}
              </button>
            )
        )}
      </div>
    </>
  );
};
