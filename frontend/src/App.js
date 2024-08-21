import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Shop from "./Shop";
import { useState, useEffect } from "react";
import apiService from "./apiService";
import Footer from "./Footer";
import Cart from "./Cart";
import { LoginForm } from "./LoginForm";

function App() {
  const [token, setToken] = useState(apiService.getToken());
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    apiService
      .getProducts()
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Products download error", error);
      });
  }, []);

  const addToCart = (id) => {
    const selectedProduct = products.find((product) => product.id === id);

    if (!selectedProduct) {
      return;
    }

    const existingProductInCart = cartProducts.find(
      (product) => product.id === id
    );

    if (existingProductInCart) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingProductInCart = cartProducts.find(
      (product) => product.id === id
    );

    if (existingProductInCart.quantity === 1) {
      setCartProducts(cartProducts.filter((product) => product.id !== id));
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  console.log(token, ">");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/shop" /> : <Navigate to="/login" />}
          />

          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                cartProducts={cartProducts}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            }
          />

          <Route
            path="/login"
            element={<LoginForm updateToken={(token) => setToken(token)} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                onRemove={removeFromCart}
                onAdd={addToCart}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
