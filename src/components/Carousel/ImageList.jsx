import styles from "./Carousel.module.css";

export const ImageList = ({
  images,
  offset,
  listRef,
  onTransitionStart,
  onTransitionEnd,
}) => {
  return (
    <div
      ref={listRef}
      className={styles.imageList}
      style={{ transform: `translateX(-${offset * 100}%)` }}
      onTransitionEnd={onTransitionEnd}
      onTransitionStart={onTransitionStart}
    >
      {images.map((image, i) => (
        <img key={i} src={image} className={styles.carouselImage}></img>
      ))}
    </div>
  );
};
