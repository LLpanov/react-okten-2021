import axios from "axios";
import {baseURL, headers, urls} from "../config";



const axiosService = axios.create({
    baseURL,
    headers
});

export const fetchData = () => {
    return axiosService.get(urls.movie);
}
