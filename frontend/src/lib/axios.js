import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    withCredentials: true,  // by adding this field browswer will send cookies to server automatically on every single request
});

export default axiosInstance;