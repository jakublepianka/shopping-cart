import styles from "./Carousel.module.css";
import { useCarousel } from "../../hooks/Carousel/useCarousel";
import { ImageList } from "./ImageList/ImageList";
import { Overlay } from "./Overlay/Overlay";

const defaultClassNames = {
  carousel: styles.carousel,
  carouselSection: styles.carouselSection,
  view: styles.view,
  emptyMsg: styles.emptyMsg,
};

export const Carousel = ({
  images = [],
  carouselOptions,
  carouselClassNames = {},
  imageListClassNames,
  overlayClassNames,
}) => {
  const classes = { ...defaultClassNames, ...carouselClassNames };
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
      <div className={classes.carousel}>
        <section
          className={classes.carouselSection}
          aria-label="Product images"
        >
          <div className={classes.view}></div>
          <ImageList
            images={modifiedImageList}
            offset={offset}
            listRef={listRef}
            onTransitionStart={onTransitionStart}
            onTransitionEnd={onTransitionEnd}
            classNames={imageListClassNames}
          ></ImageList>
          {images.length === 0 ? (
            <span className={classes.emptyMsg}>No available images</span>
          ) : (
            images.length > 1 && (
              <Overlay
                onNext={() => change(next)}
                onPrev={() => change(prev)}
                onGoTo={(i) => change(() => goTo(i))}
                originalImages={images}
                modifiedImages={modifiedImageList}
                offset={offset}
                classNames={overlayClassNames}
              ></Overlay>
            )
          )}
        </section>
      </div>
    </>
  );
};
