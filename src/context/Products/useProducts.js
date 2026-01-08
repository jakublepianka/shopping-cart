import { useContext } from "react";
import { ProductDataContext } from "./ProductDataContext";

export const useProducts = () => {
  const context = useContext(ProductDataContext)
  if (!context) {
    throw new Error("ProductDataContext is null")
  }
  return context;
};