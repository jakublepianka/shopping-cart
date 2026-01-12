import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductModal } from "./ProductModal.jsx";
import userEvent from "@testing-library/user-event";
const onClose = vi.fn();

describe("ProductModal component", () => {
  const productFixture = {
    id: 99,
    title: "Amazon Echo Plus",
    description: "amazon echo description",
    price: 99.99,
    rating: 4.99,
    stock: 61,
    thumbnail: "#",
  };

  beforeEach(() => {
    onClose.mockClear();
  });

  it("onClose prop is attached & called correctly", async () => {
    const user = userEvent.setup();
    render(<ProductModal product={productFixture} onClose={onClose} />);

    const button = screen.getByRole("button", { name: "Close" });
    await user.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);

    const backdrop = screen.getByTestId("modal-backdrop");
    Object.assign(backdrop.style, {
      width: "100px",
      height: "100px",
    });
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("onClick doesn't propagate onto backdrop through modal", async () => {
    const style = {
      width: "100px",
      height: "100px",
    };
    const user = userEvent.setup();
    render(<ProductModal product={productFixture} onClose={onClose} />);

    const modal = screen.getByRole("dialog");
    const backdrop = screen.getByTestId("modal-backdrop");
    Object.assign(modal.style, style);
    Object.assign(backdrop.style, style);

    await user.click(modal);
    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders carousel without sideNav buttons", () => {
    render(<ProductModal product={productFixture} onClose={onClose} />);

    const prevBtn = screen.queryByRole("button", { name: "Previous Image" });
    const nextBtn = screen.queryByRole("button", { name: "Next Image" });
    const carousel = screen.getByRole("region", { name: "Product images" });

    expect(prevBtn).not.toBeInTheDocument();
    expect(nextBtn).not.toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
  });

  it("Shows AddToCartControls", () => {
    render(<ProductModal product={productFixture} onClose={onClose} />);

    const addForm = screen.getByRole("form", { name: "Add to cart" });
    const addButton = screen.getByRole("button", { name: "Add to cart" });

    expect(addForm).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("Shows product description", () => {
    render(<ProductModal product={productFixture} onClose={onClose} />);

    const description = screen.getByRole("heading", {
      level: 2,
      name: "Description",
    });
    const text = screen.getByText(productFixture.description);

    expect(description).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
