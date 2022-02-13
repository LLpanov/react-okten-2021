import {axiosService} from './axios.service';

export const PaginationService = {
    getPage : (page) => axiosService.get(`/discover/movie?language=ru-RU&page=${page}`).then(value => value.data)


};