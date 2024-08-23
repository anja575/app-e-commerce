import axios from "axios";

class ApiService {
  constructor() {
    // Postavljanje CSRF token-a u heder svakog zahteva
    axios.defaults.headers.common["X-CSRF-TOKEN"] = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
  }

  login(email, password) {
    return axios.post("http://localhost:8000/api/login", {
      email: email,
      password: password,
    });
  }

  logout() {
    window.sessionStorage.clear();
  }

  setLoginInfo(isAdmin, username, email) {
    window.sessionStorage.setItem("isAdmin", isAdmin);
    window.sessionStorage.setItem("username", username);
    window.sessionStorage.setItem("email", email);
  }

  setToken(token) {
    window.sessionStorage.setItem("token", token);
  }

  getToken() {
    return window.sessionStorage.getItem("token");
  }

  getLoginInfo() {
    const isAdmin = window.sessionStorage.getItem("isAdmin");
    const username = window.sessionStorage.getItem("username");
    const email = window.sessionStorage.getItem("email");

    return { isAdmin, username, email };
  }

  getOrders() {
    return axios.get("http://localhost:8000/api/orders");
  }

  updateOrderStatus(id, newStatus) {
    return axios.put(`http://localhost:8000/api/orders/${id}`, {
      status: newStatus,
    });
  }

  getEmail() {
    return window.sessionStorage.getItem("email");
  }

  getProducts() {
    return axios.get("http://localhost:8000/api/products");
  }

  createOrder(payload) {
    return axios.post("http://localhost:8000/api/orders", payload);
  }

  createAccount(payload) {
    return axios.post("http://localhost:8000/api/register", payload);
  }

  createOrderWithItems(orderPayload, cartProducts) {
    return this.createOrder(orderPayload).then((response) => {
      const orderId = response.data.order.id;

      cartProducts.forEach((product) => {
        axios
          .post("http://localhost:8000/api/items", null, {
            params: {
              order_id: orderId,
              product_id: product.id,
              quantity: product.quantity,
              price: product.price,
            },
          })
          .catch((error) => {
            console.error(
              `Error creating order item for product ${product.id}:`,
              error
            );
          });
      });

      return response.data;
    });
  }
  getOrderDetails(orderId) {
    return axios.get(`http://localhost:8000/api/order-items/${orderId}`);
  }
}

let apiService = new ApiService();

export default apiService;
