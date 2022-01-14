import {urls} from "../config/urls";

const getAll = () => {
    return fetch(urls.posts)
        .then(value => value.json())

}
const getById = (id) => {
    return  fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json())
}

export const postService ={
    getAll,getById
}