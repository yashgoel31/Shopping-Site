import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.request.use((config) => {

  if (!config.url.includes("/auth/login")) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
