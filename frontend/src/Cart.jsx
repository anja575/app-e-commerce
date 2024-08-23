import React, { useState } from "react";
import Product from "./Product";
import apiService from "./apiService";
import { useNavigate } from "react-router-dom";

function Cart({ cartProducts, onRemove, onAdd, token, onOrderSuccess }) {
  const navigate = useNavigate();
  const [orderMessage, setOrderMessage] = useState("");

  const calculateTotal = () => {
    return cartProducts
      .reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleBuyClick = () => {
    if (!token) {
      return;
    }

    const orderPayload = {
      date_time: new Date().toISOString(),
      total_price: calculateTotal(),
      status: "confirmed",
      email: apiService.getLoginInfo().email,
    };

    apiService
      .createOrderWithItems(orderPayload, cartProducts)
      .then(() => {
        setOrderMessage(
          `You created an order. Total cost is $${calculateTotal()}`
        );
        setTimeout(() => {
          setOrderMessage("");
          onOrderSuccess();
          navigate("/shop");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
        setOrderMessage("Error creating order");
      });
  };

  const handleLoginRedirect = () => {
    navigate("/login?redirect=cart");
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

      {orderMessage && <div className="order-message">{orderMessage}</div>}

      {!orderMessage && cartProducts.length > 0 && (
        <div className="cart-summary">
          <div className="content">
            <span className="total-amount">Total: ${calculateTotal()}</span>
            {token ? (
              <button onClick={handleBuyClick}>BUY</button>
            ) : (
              <button onClick={handleLoginRedirect}>Login to Buy</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
