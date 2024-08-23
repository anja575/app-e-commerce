import React, { useEffect, useState } from "react";
import apiService from "./apiService";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    apiService.getOrders().then((response) => {
      setOrders(response.data.data);
    });
  };

  const updateOrderStatus = (id, newStatus) => {
    apiService
      .updateOrderStatus(id, newStatus)
      .then(() => {
        fetchOrders();
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
      });
  };

  const fetchOrderItems = (orderId) => {
    apiService.getOrderDetails(orderId).then((response) => {
      console.log('Order details response:', response.data);
      
      if (Array.isArray(response.data.data)) {
        setOrderItems(response.data.data);
      } else {
        console.error('Expected data to be an array:', response.data);
        setOrderItems([]);
      }
  
      setSelectedOrder(orders.find((order) => order.id === orderId));
      setIsModalOpen(true);
    }).catch(error => {
      console.error('Error fetching order items:', error);
    });
  };
  
  

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
    setOrderItems([]);
  };

  return (
    <div className="admin-container">
      <h1>Orders</h1>

      <div className="order-grid">
        {orders?.map((order) => (
          <div
            key={order.id}
            className="order-card"
            onClick={() => fetchOrderItems(order.id)}
          >
            <h2>Order #{order.id}</h2>
            <p>
              <strong>User:</strong> {order.user.name} (ID: {order.user.id})
            </p>
            <p>
              <strong>Email:</strong> {order.user.email}
            </p>
            <p>
              <strong>Time:</strong> {order.time}
            </p>
            <p>
              <strong>Price:</strong> ${parseFloat(order.price).toFixed(2)}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <div className="status-update">
              <label htmlFor={`status-${order.id}`}>Update Status:</label>
              <select
                id={`status-${order.id}`}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                value={order.status}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="confirmed">Confirmed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedOrder && (
  <div className="modal">
    <div className="modal-content">
      <h2>Order Details - Order #{selectedOrder.id}</h2>
      <p><strong>User:</strong> {selectedOrder.user.name}</p>
      <p><strong>Email:</strong> {selectedOrder.user.email}</p>
      <p><strong>Total Price:</strong> ${parseFloat(selectedOrder.price).toFixed(2)}</p>

      {orderItems.length > 0 && (
        <>
          <h3>Order Items:</h3>
          <table className="order-items-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>${parseFloat(item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <button onClick={closeModal} className="close-button">
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Admin;
