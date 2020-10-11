import React from "react";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/productActions";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./CartProducts.module.scss";

const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  render() {
    const { clearCart, handleCheckout } = this.props.actions;
    const { total, itemCount, checkout } = this.props;

    return (
      <div title="Cart">
        <Header
          itemCount={itemCount}
          isUserLoggedIn={this.props.isUserLoggedIn}
          logout={this.props.actions.handleLogout}
        />
        <div>
          <div>
            <div className={styles.cardItem}>
              {this.props.cartItems.length > 0 ? (
                <CartProducts
                  actions={this.props.actions}
                  cartItems={this.props.cartItems}
                />
              ) : (
                !checkout && (
                  <div className={styles.cardTextAlignCenter}>
                    Your cart is empty
                  </div>
                )
              )}

              {checkout && (
                <div className="p-3 text-center text-success">
                  <p>Checkout successfull</p>
                  <Link to="/" className="btn btn-outline-success btn-sm">
                    <span onClick={clearCart}>BUY MORE </span>
                  </Link>
                </div>
              )}
            </div>
            {this.props.cartItems.length > 0 && (
              <div className={styles.cardItem}>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <p className="mb-1">Total Items : </p>
                  <h4 className=" mb-3 txt-right">{itemCount}</h4>
                </div>
                <div className={styles.cartTotalPrice}>
                  <p>Payment :</p>
                  <h3>{formatNumber(total)}</h3>
                </div>
                <hr />
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <button
                    type="button"
                    className={styles.btncheckout}
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                  <button
                    style={{
                      marginLeft: "5px",
                    }}
                    type="button"
                    className={styles.btncancel}
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.CartReducer.cartItems,
    total: state.CartReducer.total,
    itemCount: state.CartReducer.itemCount,
    checkout: state.CartReducer.checkout,
    isUserLoggedIn: state.CartReducer.isUserLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
