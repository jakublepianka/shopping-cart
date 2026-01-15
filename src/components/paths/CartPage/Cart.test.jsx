import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
const mockUseCart = vi.fn();
vi.mock("../../../context/Cart/useCart", () => ({
  useCart: () => mockUseCart(),
}));
import { Cart } from "./Cart";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe("Cart component", () => {
  const emptyCart = { cart: [] };
  const cartFixture = {
    cart: [
      {
        id: 99,
        name: "Amazon Echo Plus",
        price: 99.99,
        quantity: 4,
        availableQuantity: 61,
        image: "#",
      },
      {
        id: 100,
        name: "Apple Airpods",
        price: 129.99,
        quantity: 1,
        availableQuantity: 67,
        image: "#",
      },
    ],
    sumQuantity: 5,
    sumPrice: 529.95,
  };

  it("renders info with link to shop when cart is empty", () => {
    mockUseCart.mockReturnValue(emptyCart);
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const emptyInfo = screen.getByRole("heading", {
      level: 2,
      name: "Nothing in your cart yet!",
    });
    const link = screen.getByRole("link", { name: "Go Shopping!" });

    expect(emptyInfo).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("renders cart item cards when cart has items", () => {
    mockUseCart.mockReturnValue(cartFixture);
    render(<Cart />);

    const cardOneHeading = screen.getByRole("heading", {
      level: 2,
      name: cartFixture.cart[0].name,
    });
    const cardTwoHeading = screen.getByRole("heading", {
      level: 2,
      name: cartFixture.cart[1].name,
    });

    expect(cardOneHeading).toBeInTheDocument();
    expect(cardTwoHeading).toBeInTheDocument();
  });

  it("Deletes cart item card when delete button is clicked", async () => {
    const user = userEvent.setup();
    let currentCart = [...cartFixture.cart];
    const mockDeleteFromCart = vi.fn((id) => {
      currentCart = cartFixture.cart.filter((item) => item.id !== id);
    });

    mockUseCart.mockImplementation(() => ({
      cart: currentCart,
      deleteFromCart: mockDeleteFromCart,
    }));

    const { rerender } = render(<Cart />);

    const deleteButton = screen.getByRole("button", {
      name: `Remove ${cartFixture.cart[1].name} from cart`,
    });
    expect(deleteButton).toBeInTheDocument();
    await user.click(deleteButton);

    rerender(<Cart />);

    expect(
      screen.queryByRole("button", {
        name: `Remove ${cartFixture.cart[1].name} from cart`,
      })
    ).not.toBeInTheDocument();
  });

  it("passes correct props to CartSummary when cart has items", () => {
    mockUseCart.mockReturnValue(cartFixture);
    render(<Cart />);

    const quantityHeading = screen.getByRole("heading", {
      level: 3,
      name: "Items: 5",
    });
    const priceHeading = screen.getByRole("heading", {
      level: 3,
      name: "Amount: $ 529.95",
    });
    expect(quantityHeading).toBeInTheDocument();
    expect(priceHeading).toBeInTheDocument();
  });

  it("Doesn't render cart summary when cart is empty", () => {
    mockUseCart.mockReturnValue(emptyCart);
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const totalHeading = screen.queryByRole("heading", {
      level: 2,
      name: "Total",
    });

    expect(totalHeading).not.toBeInTheDocument();
  });
});
