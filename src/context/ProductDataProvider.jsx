import { useState, useEffect } from "react";
import { ProductDataContext } from "./ProductDataContext";

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/products/category/mobile-accessories")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        if (error.name !== "AbortError") console.error(error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  );
};