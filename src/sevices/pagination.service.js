import {axiosService} from "./axios.service";

export const PaginationService = {
    getPage: (page) => axiosService.get(`/discover/movie?page=${page}`).then(value => value.data)

};