import styles from "./Carousel.module.css";

export const ImageList = ({
  images,
  offset,
  listRef,
  onTransitionStart,
  onTransitionEnd,
}) => {
  return (
    <ul
      ref={listRef}
      className={styles.imageList}
      style={{ transform: `translateX(-${offset * 100}%)` }}
      onTransitionEnd={onTransitionEnd}
      onTransitionStart={onTransitionStart}
    >
      {images.map((image, i) => (
        <li key={i} className={styles.carouselItem} >
          <img src={image} className={styles.carouselImage} alt="Mobile accessory"></img>
        </li>
      ))}
    </ul>
  );
};
