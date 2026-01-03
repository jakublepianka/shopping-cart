import styles from "./Carousel.module.css";
import { useCarousel } from "../../hooks/Carousel/useCarousel";
import { ImageList } from "./ImageList";
import { Overlay } from "./Overlay";

export const Carousel = ({ images = [], carouselOptions }) => {
  const {
    modifiedImageList,
    offset,
    next,
    prev,
    goTo,
    listRef,
    onTransitionStart,
    onTransitionEnd,
    change,
  } = useCarousel({ images, carouselOptions });

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.view}></div>
        <ImageList
          images={modifiedImageList}
          offset={offset}
          listRef={listRef}
          onTransitionStart={onTransitionStart}
          onTransitionEnd={onTransitionEnd}
        ></ImageList>
        <Overlay
          onNext={() => change(next)}
          onPrev={() => change(prev)}
          onGoTo={(i) => change(() => goTo(i))}
          originalImages={images}
          modifiedImages={modifiedImageList}
          offset={offset}
        ></Overlay>
      </div>
    </>
  );
};
