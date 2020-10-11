import React from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../productsitem/ProductsItem";

const ProductList = ({ products, cartItems }) => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className={styles.headerCont}>
          <div className={styles.products}>{products.length} Products</div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
