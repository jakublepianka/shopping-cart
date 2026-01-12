import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const mockAddToCart = vi.fn();
vi.mock("../../../../../context/Cart/useCart.js", () => ({
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));
import { ProductCardOverlay } from "./ProductCardOverlay.jsx";

describe("ProductCardOverlay component", () => {
  const productFixture = {
    id: 99,
    title: "Amazon Echo Plus",
    description: "amazon echo description",
    price: 99.99,
    rating: 4.99,
    stock: 61,
    thumbnail: "#",
  };

  it("Shows Rating component", () => {
    render(<ProductCardOverlay product={productFixture} />);
    const rating = screen.getByRole("img", {
      name: `Rating: ${productFixture.rating} out of 5`,
    });
    expect(rating).toBeInTheDocument();
  });

  it("adds product to cart when add button is clicked", async () => {
    const user = userEvent.setup();
    render(<ProductCardOverlay product={productFixture} />);

    const button = screen.getByRole("button", {
      name: `Add ${productFixture.title} to cart`,
    });

    await user.click(button);

    expect(mockAddToCart).toHaveBeenCalled();
  });
});
