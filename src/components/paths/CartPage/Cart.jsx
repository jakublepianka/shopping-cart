import styles from "./Cart.module.css";
import { useCart } from "../../../context/Cart/useCart";
import { CartItemCard } from "./CartItemCard/CartItemCard";
import { CartSummary } from "./CartSummary/CartSummary";
import { Link } from "react-router";

export const Cart = () => {
  const {
    cart,
    deleteFromCart,
    incrementCartItem,
    decrementCartItem,
    setCartItemQuantity,
    sumQuantity,
    sumPrice,
  } = useCart();

  return (
    <>
      <h1 className={styles.cartHeading}>Cart</h1>
      <section className={styles.cartListSection}>
        {cart.length ? (
          <ul className={styles.cartList}>
            {cart.map((product) => (
              <CartItemCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                cartQuantity={product.quantity}
                availableQuantity={product.availableQuantity}
                image={product.image}
                onDelete={() => deleteFromCart(product.id)}
                onIncrement={() => incrementCartItem(product.id)}
                onDecrement={() => decrementCartItem(product.id)}
                onQuantityChange={(value) =>
                  setCartItemQuantity(product.id, value)
                }
              />
            ))}
            <CartSummary quantity={sumQuantity} price={sumPrice} />
          </ul>
        ) : (
          <div className={styles.emptyCart}>
            <h2>Nothing in your cart yet!</h2>
            <Link to="/shop" className={styles.shopLink}>
              Go Shopping!
            </Link>
          </div>
        )}
      </section>
    </>
  );
};
