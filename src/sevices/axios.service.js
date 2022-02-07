import axios from "axios";
import {baseURL, headers} from "../config";



export const axiosService = axios.create({
    baseURL,
    headers
});

