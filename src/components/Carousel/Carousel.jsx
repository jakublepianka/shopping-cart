import styles from "./Carousel.module.css";
import { Link } from "react-router";
import { useCarousel } from "./hooks/useCarousel";
import { ImageList } from "./ImageList/ImageList";
import { Overlay } from "./Overlay/Overlay";

const defaultClassNames = {
  carousel: styles.carousel,
  carouselSection: styles.carouselSection,
  view: styles.view,
  emptyMsg: styles.emptyMsg,
  label: styles.label,
  textWrap: styles.textWrap,
};

export const Carousel = ({
  images = [],
  carouselOptions,
  showSideNav,
  showLabel = false,
  isLink = false,
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
          {showLabel && (
            <div className={classes.label}>
              <h1 className={classes.textWrap}>Top Picks</h1>
            </div>
          )}
          <div className={classes.view}></div>
          {isLink ? (
            <Link to="/shop" aria-label="Shop">
              <ImageList
                images={modifiedImageList}
                onTransitionStart={onTransitionStart}
                onTransitionEnd={onTransitionEnd}
                listRef={listRef}
                offset={offset}
                classNames={imageListClassNames}
              ></ImageList>
            </Link>
          ) : (
            <ImageList
              images={modifiedImageList}
              onTransitionStart={onTransitionStart}
              onTransitionEnd={onTransitionEnd}
              listRef={listRef}
              offset={offset}
              classNames={imageListClassNames}
            ></ImageList>
          )}
          {images.length === 0 ? (
            <span className={classes.emptyMsg}>No available images</span>
          ) : (
            images.length > 1 && (
              <Overlay
                originalImages={images}
                modifiedImages={modifiedImageList}
                showSideNav={showSideNav}
                onNext={() => change(next)}
                onPrev={() => change(prev)}
                onGoTo={(i) => change(() => goTo(i))}
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
