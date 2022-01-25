import React, {useEffect, useState} from "react";

import css from "../components.module.css"
import {CarService} from "../../sevices/car.service";
import {Car} from "../Car/Car";

const Cars = ({newCar, update, change}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {

        CarService.getAll().then(value => setCars([...value]));

    }, [newCar])

    return (
        <div className={css.WrapCars}>
            {
                cars.map(car => <Car key={car.id} car={car} update={update} change={change}/>)
            }
        </div>
    );
};

export {Cars};