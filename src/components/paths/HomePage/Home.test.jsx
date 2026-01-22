import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
const mockUseProducts = vi.fn();
vi.mock("../../../context/Products/useProducts", () => ({
  useProducts: () => mockUseProducts(),
}));

import { Home } from "./Home";
import { MemoryRouter } from "react-router";

describe("Home component", () => {
  const emptyProducts = {
    products: [],
  };
  const productsFixture = {
    products: [
      {
        rating: 4.2,
        thumbnail: "1",
      },
      {
        rating: 4.5,
        thumbnail: "2",
      },
      {
        rating: 4.8,
        thumbnail: "3",
      },
    ],
  };
  it("Renders component correctly with no products available", () => {
    mockUseProducts.mockReturnValue(emptyProducts);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /^accessories that keep up/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("Renders router link correctly", () => {
    mockUseProducts.mockReturnValue(productsFixture);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "Shop Now !" });
    expect(link).toBeInTheDocument();
  });

  it("Passes only highest rated products' images to carousel", () => {
    mockUseProducts.mockReturnValue(productsFixture);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const images = screen.getAllByRole("img");
    for (let image of images) {
      expect(image).not.toHaveAttribute("src", "1");
      expect(image.getAttribute("src")).toMatch(/[23]/);
    }
  });
});
