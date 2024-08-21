import axios from "axios";

class ApiService {
    constructor() {
        // Postavljanje CSRF token-a u heder svakog zahteva
        axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      }

  getProducts() {
    return axios.get("http://localhost:8000/api/products");
  }

  createOrder() {
    return axios.post('http://localhost:8000/api/orders');
  }
  
 
}

let apiService = new ApiService();

export default apiService;