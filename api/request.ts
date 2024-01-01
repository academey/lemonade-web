import axios, {type AxiosRequestConfig, type AxiosResponse} from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    withCredentials: false
});

export default axiosInstance;