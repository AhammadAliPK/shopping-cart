import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productlist/ProductList";
import { handleLogout } from "./actions/productActions";
import { useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const onSearchItem = (evt) => {
    const searchString = evt.target.value;
    setSearchString(searchString);
  };

  const { cartItems, isUserLoggedIn } = useSelector((state) => ({
    cartItems: state.CartReducer.cartItems,
    isUserLoggedIn: state.CartReducer.isUserLoggedIn,
  }));

  useEffect(() => {
    axios.get(`http://localhost:5000/Products`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredItems([]);
    if (searchString.length > 0) {
      const filteredItems = products.filter(function (l) {
        return l.name.toLowerCase().match(searchString);
      });
      setFilteredItems(filteredItems);
    }
  }, [searchString]);

  return (
    <div className="wrapper">
      <div className="header">
        <Header
          itemCount={cartItems.length}
          isUserLoggedIn={isUserLoggedIn}
          logout={handleLogout}
          searchItem={onSearchItem}
        />
      </div>
      <div className="main">
        <ProductList
          products={filteredItems.length > 0 ? filteredItems : products}
          cartItems={cartItems}
        />
      </div>
      <div className="header">
        <Footer />
      </div>
    </div>
  );
};

export default App;
