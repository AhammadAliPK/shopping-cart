import React from "react";
import styles from "./Login.module.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/productActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMessage: "",
    };
  }

  submitHandler = (event) => {
    this.props.history.push("/");
    this.props.actions.handleLogin();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form
            onSubmit={this.submitHandler}
            noValidate
            ref="formSignUp"
            className={styles.formsignin}
          >
            <h2 className={styles.form_signin_heading}>Please Log In</h2>

            <input
              type="text"
              placeholder="admin"
              className={styles.form_control}
              name="email"
              required
            />

            <input
              type="password"
              placeholder="admin"
              name="password"
              required
              className={styles.form_control}
            />

            <button className={styles.loginbtn}>Login</button>
          </form>
          {this.state.loginMessage && (
            <span className="wrong-cred-text">{this.state.loginMessage} </span>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.CartReducer.cartItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
