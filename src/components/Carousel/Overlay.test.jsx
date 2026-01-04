import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Overlay } from "./Overlay.jsx";

describe("Overlay component", () => {
  let next;
  let prev;
  let goTo;
  let user;

  beforeEach(() => {
    next = vi.fn();
    prev = vi.fn();
    goTo = vi.fn();
    user = userEvent.setup();
    render(
      <Overlay
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
        originalImages={["1", "2"]}
        modifiedImages={["2", "1", "2", "1"]}
        offset={1}
      />
    );
  });

  it("calls onNext and onPrev when buttons are clicked", async () => {
    const nextBtn = screen.getByRole("button", { name: "Next image" });
    const prevBtn = screen.getByRole("button", { name: "Previous image" });

    await user.click(nextBtn);
    expect(next).toHaveBeenCalled();

    await user.click(prevBtn);
    expect(prev).toHaveBeenCalled();
  });

  it("onGoTo is called with the correct index", async () => {
    const secondButton = screen.getByRole("button", { name: "Show image 2" });
  
    await user.click(secondButton);
    expect(goTo).toHaveBeenCalledWith(2);
  });

  it("goToButton has \"current\" in class name when corresponding image is being shown", () => {
    const firstButton = screen.getByRole("button", { name: "Show image 1" });
    const secondButton = screen.getByRole("button", { name: "Show image 2" });

    expect(secondButton).not.toHaveClass(/current/i);
    expect(firstButton).toHaveClass(/current/i);
  });
});
