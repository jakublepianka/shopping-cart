import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Carousel } from "./Carousel.jsx";
import { MemoryRouter } from "react-router";

describe("Carousel component", () => {
  it("Informs of lack of available images to display", () => {
    render(<Carousel images={[]} />);

    const info = screen.getByText("No available images");
    expect(
      screen.queryAllByRole("img", { name: "Mobile accessory" })
    ).toHaveLength(0);
    expect(info).toBeInTheDocument();
  });

  it("Doesn't inform of lack of available images when there's at least 1 image", () => {
    render(<Carousel images={["#"]} />);

    const image = screen.getByRole("img", { name: "Mobile accessory" });
    expect(screen.queryByText("No available images")).not.toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it("Shows 1 image but doesn't show overlay", () => {
    render(<Carousel images={["#"]} />);

    const image = screen.getByRole("img", { name: "Mobile accessory" });
    const buttons = screen.queryAllByRole("button");
    expect(image).toBeInTheDocument();
    expect(buttons).toHaveLength(0);
  });

  it("Shows overlay and images for more than 1 image element", () => {
    render(<Carousel images={["#", "#"]} />);

    const images = screen.getAllByRole("img", { name: "Mobile accessory" });
    const nextButton = screen.getByRole("button", { name: "Next image" });
    const prevButton = screen.getByRole("button", { name: "Previous image" });
    const goToButtons = screen.queryAllByRole("button", {
      name: /show image/i,
    });
    expect(images.length).toBeGreaterThan(1);
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(goToButtons).toHaveLength(2);
  });

  it("Shows label when showLabel prop is true", () => {
    render(<Carousel showLabel={true} images={["#", "#"]} />);
    const label = screen.getByRole("heading", { level: 1, name: "Top Picks" });
    expect(label).toBeInTheDocument();
  });

  it("wraps ImageList in Link to shop when isLink is true", () => {
    render(
      <MemoryRouter>
        <Carousel isLink={true} images={["#", "#"]} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "Shop" });
    expect(link).toBeInTheDocument();
  });
});
