import axios from "axios";

// 创建 axios 实例
console.log("VITE_APP_BASE_URL", import.meta.env.VITE_APP_BASE_URL);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL || "/", // 从 Vite 的环境变量中获取 baseURL
  timeout: 10000, // 设置超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 如果有需要，可以在此处添加 token 等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
