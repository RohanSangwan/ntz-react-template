import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

// Response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if(error.response && error.response.status && error.response.status == 401){
        localStorage.removeItem('token')
        window.location.reload()
    }
  }
);

export default axiosInstance;
