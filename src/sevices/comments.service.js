import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const commentsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`).then(value => value.data)

}