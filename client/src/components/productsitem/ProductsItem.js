import React from "react";
import styles from "./ProductItem.module.scss";
import { addProduct, increase } from "../../actions/productActions";
import { useDispatch } from "react-redux";

const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

const ProductItem = ({ product, cartItems }) => {
  const dispatch = useDispatch();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            className={styles.top}
            src={product.photo + "?v=" + product.id}
            alt=""
          />
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.details}>
                <h3>{product.name}</h3>
                <p>{formatNumber(product.price)}</p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cardText}>
              {isInCart(product) && (
                <button
                  onClick={() => dispatch(increase(product))}
                  className="btn btn-outline-primary btn-sm"
                >
                  Add more
                </button>
              )}

              {!isInCart(product) && (
                <button
                  onClick={() => dispatch(addProduct(product))}
                  className={styles.addbtn}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
