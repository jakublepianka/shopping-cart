import { useCarouselState } from "./useCarouselState";
import { useCarouselAutoplay } from "./useCarouselAutoplay";
import { useCarouselTransition } from "./useCarouselTransition";

export const useCarousel = ({ images, carouselOptions = {} }) => {
  const {
    isAuto = false,
    transitionDelay = 5000,
    transitionDuration = 200,
  } = carouselOptions;
  const state = useCarouselState(images);
  const transition = useCarouselTransition({ duration: transitionDuration });
  const autoplay = useCarouselAutoplay({
    isAuto,
    delay: transitionDelay,
    onTick: () => {
      transition.enable();
      state.next();
    },
  });

  const change = (fn) => {
    if (!transition.canSlideRef.current) return;
    transition.enable();
    fn();
    if (isAuto) autoplay.reset();
  };

  const onTransitionStart = () => transition.block();

  const onTransitionEnd = () => {
    transition.allow();
    transition.disable();
    state.fixOffset();
  };

  return {
    modifiedImageList: state.modifiedImageList,
    offset: state.offset,
    next: () => state.next(),
    prev: () => state.prev(),
    goTo: (i) => state.goTo(i + 1),
    listRef: transition.listRef,
    onTransitionStart,
    onTransitionEnd,
    change,
  };
};
