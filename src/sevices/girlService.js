import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const girlService = {
    getImage: () => axiosService.get(urls.girl).then(value => (value.request.responseURL))
};
