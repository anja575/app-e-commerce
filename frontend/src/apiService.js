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

  getEmail() {
    return window.sessionStorage.getItem("email");
  }

  getProducts() {
    return axios.get("http://localhost:8000/api/products");
  }

  createOrder(payload) {
    return axios.post("http://localhost:8000/api/orders", payload);
  }
}

let apiService = new ApiService();

export default apiService;
