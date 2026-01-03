import styles from "./Carousel.module.css";
import { useCarousel } from "../../hooks/useCarousel";
import { ImageList } from "./ImageList";
import { Overlay } from "./Overlay";

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
        <ImageList
          images={modifiedImageList}
          offset={imageListOffset}
          listRef={imageListRef}
          onTransitionStart={() => (isSlideAllowedRef.current = false)}
          onTransitionEnd={fixOffset}
        ></ImageList>
        <Overlay
          onNext={() => handleChange(advanceSlide)}
          onPrev={() => handleChange(retreatSlide)}
          onGoTo={(i) => handleChange(() => goToSlide(i + 1))}
          originalImages={images}
          modifiedImages={modifiedImageList}
          offset={imageListOffset}
        ></Overlay>
      </div>
    </>
  );
};
