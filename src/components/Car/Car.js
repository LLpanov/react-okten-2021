import React from "react";

import Button from "@mui/material/Button";
import css from "../components.module.css"
import {CarService} from "../../sevices/car.service";

const Car = ({car, update, change}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await CarService.deleteByID(id);
        update({});
    }

    return (
        <ul className={css.Cars}>
            <li>Id: {id}</li>
            <li>Model: {model}</li>
            <li>Price :{price}</li>
            <li>Years :{year}</li>
            <Button variant="contained" onClick={() => change(car)}>change</Button>
            <Button variant="outlined" onClick={() => deleteCar()}>delete</Button>

        </ul>

    );
};

export {Car};