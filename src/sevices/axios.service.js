import axios from "axios";

import {baseUrl, placeholderUrl} from "../config/urls";

const axiosService = axios.create({
    baseURL: baseUrl
});

const axiosPlaceholderService = axios.create({
    baseURL: placeholderUrl
})

export {axiosService}

export default axiosPlaceholderService

