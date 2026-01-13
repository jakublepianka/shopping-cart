import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const mockAddToCart = vi.fn();
vi.mock("../../../../../context/Cart/useCart", () => ({
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));
import { AddToCartControls } from "./AddToCartControls";

describe("AddToCartControls component", () => {
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
    render(<AddToCartControls product={productFixture} />);
    mockAddToCart.mockClear();
  });

  it("addToCart is called on form submit", async () => {
    const user = userEvent.setup();
    const submitBtn = screen.getByRole("button", { name: "Add to cart" });
    await user.click(submitBtn);
    expect(mockAddToCart).toHaveBeenCalled();
  });
  it("renders CartInputControls component", () => {
    const cartInputControls = screen.getByTestId("cart-input-controls");
    expect(cartInputControls).toBeInTheDocument();
  });
});
