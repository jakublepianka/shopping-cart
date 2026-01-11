import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const mockUseProducts = vi.fn();
vi.mock("../../../context/Products/useProducts.js", () => ({
  useProducts: () => mockUseProducts(),
}));

import { Shop } from "./Shop.jsx";
import userEvent from "@testing-library/user-event";

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
    const { products } = productsFixture;
    mockUseProducts.mockReturnValue({products});
    render(<Shop />);

    const productCardOne = screen.getByRole("button", {
      name: `${products[0].title}, $${products[0].price}`,
    });
    const productCardTwo = screen.getByRole("button", {
      name: `${products[1].title}, $${products[1].price}`,
    });

    expect(productCardOne).toBeInTheDocument();
    expect(productCardTwo).toBeInTheDocument();
  });

  it("Shows ProductModal on ProductCard click", async () => {
    const { products } = productsFixture;
    mockUseProducts.mockReturnValue({products});
    const user = userEvent.setup();
    render(<Shop />);

    const productCard = screen.getByRole("button", {
      name: `${products[0].title}, $${products[0].price}`,
    });

    await user.click(productCard);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
