import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const userService = {
    getAll: () => axiosService(urls.users).then(value => value.data),
    getPosts: (userId) => axiosService(`${urls.users}/${userId}/posts`).then(value => value.data)
}