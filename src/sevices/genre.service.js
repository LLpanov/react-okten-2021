import {axiosService} from "./axios.service";
import {urls} from "../config";

export const genreService = {
    getAll: () => axiosService.get(urls.genre)



};