import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const carService = {
    getImage: () => axiosService.get(urls.car).then(value => (value.request.responseURL))
};
