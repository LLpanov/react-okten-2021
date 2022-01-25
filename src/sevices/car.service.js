import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const CarService = {
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    updateById: (id,car) => axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data),
    deleteByID: (id) => axiosService.delete(`${urls.cars}/${id}`)
}