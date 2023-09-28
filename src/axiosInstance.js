import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/dev",
  // baseURL: "http://102.37.217.58:5000/api/dev",
  withCredentials: true
});

export default axiosInstance;
