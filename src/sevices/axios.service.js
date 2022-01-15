import axios from "axios";
import baseUrl from "../config/urls";

export const axiosInstance = axios.create({
    baseURL:baseUrl
});
