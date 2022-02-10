import {axiosService} from "./axios.service";
import {urls} from "../config";

export const movieService = {
    getAll: () => axiosService.get(urls.movie).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movieById}/${id}`).then(value => value.data)

};


