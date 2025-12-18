import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Header } from "./Header";

function createMatchMedia(matches) {
  return {
    matches,
    media: "(min-width: 600px)",
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}

function mockMatchMedia(matches = false) {
  window.matchMedia.mockImplementation(() => {
    return createMatchMedia(matches);
  });
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn(),
});

describe("Header component", () => {
  beforeEach(() => mockMatchMedia(false));

  it("renders four navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });

  it("toggles navigation list visibility via menu button", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navList = screen.getByRole("list");

    await user.click(
      screen.getByRole("button", {
        name: /open navigation menu/i,
      })
    );
    expect(navList.className).toContain("navListShown");

    await user.click(
      screen.getByRole("button", {
        name: /close navigation menu/i,
      })
    );
    expect(navList.className).toContain("navListHidden");
  });

  it("closes navigation menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");
    const navList = screen.getByRole("list");

    for (let link of links) {
      await user.click(
        screen.getByRole("button", {
          name: /open navigation menu/i,
        })
      );
      expect(navList.className).toContain("navListShown");

      await user.click(link);
      expect(navList.className).toContain("navListHidden");
    }
  });

  it("attaches and cleans up matchMedia listener", () => {
    mockMatchMedia(false);
    const { unmount } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(window.matchMedia).toHaveBeenCalledWith("(min-width: 600px)");

    const lastResult =
      window.matchMedia.mock.results[window.matchMedia.mock.results.length - 1];
    const mq = lastResult && lastResult.value;
    expect(mq).toBeDefined();

    expect(mq.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );

    unmount();
    expect(mq.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });

  it("menu toggle button updates accessible name when opened and closed", async () => {
    mockMatchMedia(false);
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", {
        name: /open navigation menu/i,
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /open navigation menu/i,
      })
    );

    expect(
      screen.getByRole("button", {
        name: /close navigation menu/i,
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /close navigation menu/i,
      })
    );
    expect(
      screen.getByRole("button", {
        name: /open navigation menu/i,
      })
    ).toBeInTheDocument();
  });
});
