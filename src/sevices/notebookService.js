import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const notebookService = {
    getImage: () => axiosService.get(urls.notebook).then(value => (value.request.responseURL))
}
