import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ImageList } from "./ImageList.jsx";

describe("ImageList component", () => {
  it("renders correct number of images", () => {
    render(<ImageList images={["#", "#", "#", "#"]} />);
    const images = screen.queryAllByRole("img", { name: "Mobile accessory" });
    expect(images).toHaveLength(4);
  });

  it("applies proper styling", () => {
    render(<ImageList offset={1} images={["#"]} />);
    const imageList = screen.getByRole("list");
    expect(imageList).toHaveStyle("transform: translateX(-100%)");
  });

  it("attaches onTransition callbacks properly", () => {
    const onEnd = vi.fn();
    const onStart = vi.fn();
    render(
      <ImageList
        images={["#", "#", "#", "#"]}
        onTransitionEnd={onEnd}
        onTransitionStart={onStart}
      />
    );

    const imageList = screen.getByRole("list");
    fireEvent.transitionStart(imageList);
    expect(onStart).toHaveBeenCalled();
    fireEvent.transitionEnd(imageList);
    expect(onEnd).toHaveBeenCalled();
  });
});
