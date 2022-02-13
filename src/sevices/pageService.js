import {axiosService} from './axios.service';
import {urls} from '../config';


export const pagesService = {
    getPageByNumberWithGenre: (genre, page) => axiosService.get(urls.movie, {
        params : {
            with_genres: genre,
            page : page
        }
    }).then(value => value.data)
}