import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const dogService = {
    getImage: () => axiosService.get(urls.dog).then(value => (value.request.responseURL))
};
