import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartSummary } from "./CartSummary";

describe("CartSummary component", () => {
  it("shows correct quantity", () => {
    render(<CartSummary quantity={3} price={0.0} />);
    const totalQuantity = screen.getByRole("heading", {
      level: 3,
      name: "Items: 3",
    });
    expect(totalQuantity).toBeInTheDocument();
  });

  it("shows correct price", () => {
    render(<CartSummary quantity={0} price={324.99} />);
    const totalPrice = screen.getByRole("heading", {
      level: 3,
      name: "Amount: $ 324.99",
    });
    expect(totalPrice).toBeInTheDocument();
  });

  it("displays total values correctly together", () => {
    render(<CartSummary quantity={5} price={529.95} />);

    const totalQuantity = screen.getByRole("heading", {
      level: 3,
      name: "Items: 5",
    });
    const totalPrice = screen.getByRole("heading", {
      level: 3,
      name: "Amount: $ 529.95",
    });

    expect(totalQuantity).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });
});
