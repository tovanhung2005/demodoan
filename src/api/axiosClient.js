import axios from "axios";
import { navigation } from "../utils/navigation";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_IDENTITY,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("nexus_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data && response.data.code === 1000) {
      return response.data.result;
    }
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // KIỂM TRA: Nếu lỗi 401 xảy ra tại các API Login/Register thì KHÔNG redirect
    const isAuthRequest = originalRequest.url.includes("/auth/token") || 
                         originalRequest.url.includes("/users");

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthRequest) {
      originalRequest._retry = true;
      localStorage.removeItem("nexus_token");

      if (navigation.navigate) {
        navigation.navigate("/login");
      }
    }
    
    // Không log error ra console để tránh lộ cấu trúc API
    return Promise.reject(error);
  }
);

export default axiosClient;