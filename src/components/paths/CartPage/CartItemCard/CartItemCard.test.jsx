import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartItemCard } from "./CartItemCard";
import userEvent from "@testing-library/user-event";

describe("CartItemCard component", () => {
  let user;
  const onDelete = vi.fn();
  const onIncrement = vi.fn();
  const onDecrement = vi.fn();
  const onQuantityChange = vi.fn();
  beforeEach(() => {
    user = userEvent.setup();
    render(
      <CartItemCard
        name={"Amazon Echo Plus"}
        price={99.99}
        cartQuantity={3}
        availableQuantity={67}
        image={"#"}
        onDelete={onDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onQuantityChange={onQuantityChange}
      />
    );
  });

  it("Shows item image & name correctly", () => {
    const image = screen.getByRole("img", { name: "Amazon Echo Plus" });
    const heading = screen.getByRole("heading", { name: "Amazon Echo Plus" });
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("#");
    expect(heading).toBeInTheDocument();
  });

  it("Shows total price for an item correctly", () => {
    const total = screen.getByRole("heading", { level: 3, name: "$ 299.97" });
    expect(total).toBeInTheDocument();
  });

  it("Shows price of one item when quantity is not declared", () => {
    render(
      <CartItemCard
        name={"Amazon Echo Plus"}
        price={99.99}
        cartQuantity={""}
        availableQuantity={67}
        image={"#"}
        onDelete={onDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onQuantityChange={onQuantityChange}
      />
    );
    const total = screen.getByRole("heading", { level: 3, name: "$ 99.99" });
    expect(total).toBeInTheDocument();
  });

  it("attaches onDelete correctly", async () => {
    const deleteButton = screen.getByRole("button", {
      name: `Remove Amazon Echo Plus from cart`,
    });
    await user.click(deleteButton);
    expect(onDelete).toHaveBeenCalledOnce();
  });
});
