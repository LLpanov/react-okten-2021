import axiosPlaceholderService from "./axios.service";
import {urls} from "../config/urls";

export const placeholderService = {
    getAllUsers: () => axiosPlaceholderService.get(urls.users).then(value => value.data),
    getAllPosts: () => axiosPlaceholderService.get(urls.posts).then(value => value.data),
    getAllComments: () => axiosPlaceholderService.get(urls.comments).then(value => value.data)
};


