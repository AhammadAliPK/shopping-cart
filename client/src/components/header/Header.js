import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { CartIcon, Logout } from "../../icons";

const Header = ({ itemCount, isUserLoggedIn, logout, searchItem }) => {
  return (
    <header className={styles.flex}>
      <div>
        <div>
          <h1>ECOM-APP</h1>
        </div>
      </div>

      <div className={styles.seachtext}>
        <input
          type="text"
          style={{
            width: "100%",
            height: "30px",
          }}
          onChange={searchItem}
          placeholder="Search product"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "90px",
        }}
      >
        <Link to="/">Store</Link>
        {isUserLoggedIn ? (
          <div
            style={{
              float: "right",
              width: "30px",
              height: "30px ",
            }}
          >
            <span>
              <Link to="/cart">
                <CartIcon /> Cart {itemCount}{" "}
              </Link>
            </span>

            <span>
              <Link to="/">
                <Logout />
                <span onClick={logout}>Logout</span>{" "}
              </Link>
            </span>
          </div>
        ) : (
          <span
            style={{
              float: "right",
              width: "30px",
              height: "30px ",
            }}
          >
            <div
              style={{
                float: "right",
                width: "30px",
                height: "30px ",
              }}
            >
              <span>
                <Link to="/login">
                  <CartIcon />
                  Login
                </Link>
              </span>
            </div>
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
