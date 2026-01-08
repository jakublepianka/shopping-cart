import { useState } from "react";
import { useProducts } from "../../../context/Products/useProducts.js";
import { ProductCard } from "./ProductCard/ProductCard.jsx";
import styles from "./Shop.module.css";
import { ProductModal } from "./ProductModal/ProductModal.jsx";

export const Shop = () => {
  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <h1 className={styles.shopHeading}>Shop</h1>
      <section className={styles.productListSection}>
        <ul className={styles.productList}>
          {console.log(products)}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={() => setSelectedProduct(product)}
            />
          ))}
        </ul>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};
