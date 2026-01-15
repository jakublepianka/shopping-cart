import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartInputControls } from "./CartInputControls";

const onIncrement = vi.fn();
const onDecrement = vi.fn();
const onChange = vi.fn();

describe("CartInputControls component", () => {
  beforeEach(() => {
    onIncrement.mockClear();
    onDecrement.mockClear();
    onChange.mockClear();
  });

  it("calls increment and decrement handlers when buttons are clicked", async () => {
    const user = userEvent.setup();
    render(
      <CartInputControls onIncrement={onIncrement} onDecrement={onDecrement} />
    );

    const minusButton = screen.getByRole("button", {
      name: "Decrement quantity",
    });
    const plusButton = screen.getByRole("button", {
      name: "Increment quantity",
    });

    await user.click(minusButton);
    expect(onDecrement).toHaveBeenCalledOnce();

    await user.click(plusButton);
    expect(onIncrement).toHaveBeenCalledOnce();
  });

  it("input field shows correct value on render", () => {
    const number = 44;
    render(<CartInputControls quantity={number} />);

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(input).toHaveValue(number);
  });

  it("calls onChange when quantity input changes", async () => {
    const user = userEvent.setup();
    render(<CartInputControls onChange={onChange} />);

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.type(input, "1");

    expect(onChange).toHaveBeenCalledOnce();
  });

  it("calls onChange when input is empty and unfocused", async () => {
    const user = userEvent.setup();
    render(<CartInputControls quantity={""} onChange={onChange} />);

    const nonInputElement = screen.getByTestId("cart-input-controls");
    const input = screen.getByRole("spinbutton", { name: "Quantity" });
    await user.click(input);
    expect(input).toHaveTextContent("");
    await user.click(nonInputElement);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("renders validation alert when quantity is invalid", () => {
    render(<CartInputControls isValid={false} />);

    const alert = screen.getByRole("alert", { id: "quantity-error" });

    expect(alert).toBeInTheDocument();
  });

  it("Doesn't render validation alert when quantity is valid", () => {
    render(<CartInputControls isValid={true} />);

    const alert = screen.queryByRole("alert", { id: "quantity-error" });

    expect(alert).not.toBeInTheDocument();
  });

  it("alert shows accurate available quantity", () => {
    const stock = 53;
    render(<CartInputControls isValid={false} availableQuantity={stock} />);

    const alert = screen.getByRole("alert", { id: "quantity-error" });

    expect(alert).toHaveTextContent(`Must be between 1 and ${stock}`);
  });

  it("marks input as invalid when isValid is false", () => {
    render(<CartInputControls isValid={false} />);

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("associates input with validation message when invalid", () => {
    render(<CartInputControls isValid={false} />);

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    expect(input).toHaveAttribute("aria-describedby", "quantity-error");
  });
});
