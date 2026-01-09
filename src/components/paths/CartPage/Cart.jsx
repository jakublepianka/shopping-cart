import styles from "./Cart.module.css";
import { useCart } from "../../../context/Cart/useCart";
import { CartItemCard } from "./CartItemCard/CartItemCard";

export const Cart = () => {
  const { cart } = useCart();

  console.log(cart);
  return (
    <>
      <h1 className={styles.cartHeading}>Cart</h1>
      <section>
        <ul>

          {cart.map((product) => (
            <CartItemCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              availableQuantity={product.availableQuantity}
              image={product.image}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
