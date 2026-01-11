import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const mockUseProducts = vi.fn();
vi.mock("../../../context/Products/useProducts.js", () => ({
  useProducts: () => mockUseProducts(),
}));

import { Shop } from "./Shop.jsx";

describe("Shop component", () => {
  const emptyProducts = { products: [] };
  const productsFixture = {
    products: [
      {
        id: 99,
        title: "Amazon Echo Plus",
        description: "amazon echo description",
        price: 99.99,
        rating: 4.99,
        stock: 61,
        thumbnail: "#",
      },
      {
        id: 100,
        title: "Apple Airpods",
        description: "airpods description",
        price: 129.99,
        rating: 4.15,
        stock: 67,
        thumbnail: "#",
      },
    ],
  };

  it("Shows card skeletons while there are no products", () => {
    mockUseProducts.mockReturnValue(emptyProducts);
    render(<Shop />);
    const cardsSkeleton = screen.queryAllByRole("listitem", { hidden: true });

    expect(cardsSkeleton.length).toBeGreaterThan(0);
  });

  it("Shows product cards when products are fetched", () => {
    mockUseProducts.mockReturnValue(productsFixture);
    render(<Shop />);

    const productCards = screen.queryAllByRole("listitem");
    expect(productCards).toHaveLength(2);
  });
});
