import { useProducts } from "../../../context/useProducts";
import { ProductCard } from "./ShopComponents/ProductCard/ProductCard.jsx";
import styles from "./Shop.module.css";

export const Shop = () => {
  const { products } = useProducts();
  return (
    <>
      <h1 className={styles.shopHeading}>Shop</h1>
      <section >
        <ul className={styles.productList}>
          {console.log(products)}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
};
