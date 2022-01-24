import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const postService = {

    getAll: () => axiosService(urls.posts).then(value => value.data),
    getById: (id) => axiosService(`${urls.posts}/${id}`).then(value => value.data),
    getUserComments: (postId) => axiosService(`${urls.posts}/${postId}/comments`).then(value => value.data)

}