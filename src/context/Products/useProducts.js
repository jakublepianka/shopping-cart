import { useContext } from "react";
import { ProductDataContext } from "./ProductDataContext";

export const useProducts = () => {
  const products = useContext(ProductDataContext)
  if (!products) {
    throw new Error("ProductDataContext is null")
  }
  return products;
};