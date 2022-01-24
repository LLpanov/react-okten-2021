import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const albumsService = {
    getAll: () => axiosService(urls.albums).then(value => value.data),
    getUserAlbums:(id)=> axiosService(`${urls.users}/${id}/albums`).then( value => value.data),
    getUserPhoto: (id) => axiosService(`${urls.albums}/${id}/photos`).then(value => value.data)
}