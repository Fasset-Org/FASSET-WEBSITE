import axios from "axios";

const BASE_URL = "102.37.217.58:5000/api/dev";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials : true,
});



export default axiosInstance;