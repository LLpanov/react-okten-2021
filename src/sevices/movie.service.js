import {axiosService} from "./axios.service";
import {urls} from "../config";

export const movieService = {
    getAll: () => axiosService.get(urls.movie),
    getById: (movieId) => axiosService.get(`${urls.movieDetail}/${movieId}`),


};


