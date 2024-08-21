import React from "react";
import Product from "./Product";
import Footer from "./Footer";
import apiService from "./apiService";

function Cart({ cartProducts, onRemove, onAdd }) {
  // Funkcija za izračunavanje ukupne vrednosti
  const calculateTotal = () => {
    return cartProducts
      .reduce((total, product) => {
        return total + product.price * product.quantity; // Pretpostavljamo da 'product.price' i 'product.quantity' postoje
      }, 0)
      .toFixed(2); // Zaokruživanje na 2 decimale
  };

  const handleBuyClick = () => {
    const payload = {
      date_time: new Date().toISOString(),
      total_price: calculateTotal(),
      status: "confirmed",
      email: apiService.getLoginInfo().email,
    };

    apiService
      .createOrder(payload)
      .then((response) => {
        console.log("Order created successfully", response.data);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  return (
    <div className="cart">
      <div className="products">
        {cartProducts.length === 0 ? (
          <div className="noProducts">
            <h1 className="noProductsInCart">No products in cart</h1>
          </div>
        ) : (
          cartProducts.map((p) => (
            <Product
              product={p}
              key={p.id}
              onRemove={onRemove}
              onAdd={onAdd}
              cart={1}
            />
          ))
        )}
      </div>
      {cartProducts.length > 0 && (
        <div className="cart-summary">
          <span className="total-amount">Total: ${calculateTotal()}</span>
          <button onClick={handleBuyClick}>BUY</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
