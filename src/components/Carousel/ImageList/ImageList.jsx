import styles from "../Carousel.module.css";

const defaultClassNames = {
  imageList: styles.imageList,
  carouselItem: styles.carouselItem,
  carouselImage: styles.carouselImage,
};

export const ImageList = ({
  images,
  offset,
  listRef,
  onTransitionStart,
  onTransitionEnd,
  classNames = {},
}) => {
  const classes = { ...defaultClassNames, ...classNames };
  return (
    <ul
      ref={listRef}
      className={classes.imageList}
      style={{ transform: `translateX(-${offset * 100}%)` }}
      onTransitionEnd={onTransitionEnd}
      onTransitionStart={onTransitionStart}
    >
      {images.map((image, i) => (
        <li key={i} className={classes.carouselItem}>
          <img
            src={image}
            className={classes.carouselImage}
            alt="Mobile accessory"
          ></img>
        </li>
      ))}
    </ul>
  );
};
