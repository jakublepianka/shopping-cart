import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { ReviewsSection } from "./ReviewsSection";

describe("ReviewsSection component", () => {
  const reviewsFixture = [
    {
      rating: 3,
      comment: "Would not recommend!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Aubrey Gutierrez",
      reviewerEmail: "aubrey.gutierrez@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Would buy again!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Carter Rivera",
      reviewerEmail: "carter.rivera@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Fast shipping!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Max Russell",
      reviewerEmail: "max.russell@x.dummyjson.com",
    },
  ];
  it("Shows reviews", () => {
    render(<ReviewsSection reviews={reviewsFixture} />);
    const reviews = screen.getAllByRole("listitem");
    expect(reviews).toHaveLength(3);
  });

  it("Informs of lack of reviews", () => {
    render(<ReviewsSection reviews={[]} />);
    const emptyInfo = screen.getByRole("heading", {
      level: 3,
      name: "No reviews yet...",
    });
    expect(emptyInfo).toBeInTheDocument();
  });

  it("Shows review publication date in correct format", () => {
    render(<ReviewsSection reviews={[reviewsFixture[0]]} />);
    const reviewDate = screen.getByText("30.4.2025");
    expect(reviewDate).toBeInTheDocument();
  });

  it("Shows 1 horizontal separator less than the number of reviews", () => {
    render(<ReviewsSection reviews={reviewsFixture} />);
    const rules = screen.queryAllByRole("separator", {
      orientation: "horizontal",
    });
    expect(rules).toHaveLength(reviewsFixture.length - 1);
  });
});
