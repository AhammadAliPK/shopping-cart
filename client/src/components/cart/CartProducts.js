import React from "react";

import CartItem from "./CartItem";
import styles from "./CartProducts.module.scss";

const CartProducts = ({ cartItems, actions }) => {
  return (
    <div className={styles.cardContainer}>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} actions={actions} />
      ))}
    </div>
  );
};

export default CartProducts;
