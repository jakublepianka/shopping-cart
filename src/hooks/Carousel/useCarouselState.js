import { useMemo, useState } from "react";

export const useCarouselState = (images) => {
  const modifiedImageList = useMemo(() => {
    if (images.length === 0) return [];
    if (images.length === 1) return [images[0]];
    else return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  const [offset, setOffset] = useState(images.length > 1 ? 1 : 0);

  const next = () =>
    setOffset((prev) => (prev === modifiedImageList.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setOffset((prev) => (prev === 0 ? modifiedImageList.length - 1 : prev - 1));

  const goTo = (index) => setOffset(index);

  const fixOffset = () => {
    if (offset === modifiedImageList.length - 1) setOffset(1);
    if (offset === 0) setOffset(modifiedImageList.length - 2);
  };

  return {
    modifiedImageList,
    offset,
    next,
    prev,
    goTo,
    fixOffset,
  };
};
