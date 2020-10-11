import React from "react";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/cart";
import Login from "./components/login/Login";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    {/* <Route exact path='/Cart' render={() => (
      window && requireAuth() ? (
        <Redirect to="/"/>
      ) : (
        <Cart />
      ))}
    /> */}
    <Route exact path="/Cart" component={Cart} />
    <Route exact path="/login" component={Login} />
  </Switch>
);
