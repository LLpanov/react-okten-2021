import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const catService = {
    getImage: () => axiosService.get(urls.cat).then(value => (value.request.responseURL))

};
