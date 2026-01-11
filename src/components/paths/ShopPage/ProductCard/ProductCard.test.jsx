import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard.jsx";

describe("ProductCard component", () => {
  const productFixture = {
    id: 99,
    title: "Amazon Echo Plus",
    description: "amazon echo description",
    price: 99.99,
    rating: 4.99,
    stock: 61,
    thumbnail: "#",
  };

  it("Shows product card's image", () => {
    render(<ProductCard product={productFixture} />);

    const image = screen.getByRole("img", { name: productFixture.title });

    expect(image).toBeInTheDocument();
  });

  it("Shows ProductCardOverlay", () => {
    render(<ProductCard product={productFixture} />);

    const heading = screen.getByRole("heading", { name: productFixture.title });
    const priceLabel = screen.getByText(`$ ${productFixture.price}`);
    const addToCartButton = screen.getByRole("button", {
      name: `Add ${productFixture.title} to cart`,
    });

    expect(heading).toBeInTheDocument();
    expect(priceLabel).toBeInTheDocument();
    expect(addToCartButton).toBeInTheDocument();
  });
});
