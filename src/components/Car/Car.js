import React, {useEffect, useState} from "react";

import css from "../copmponents.module.css"
import {carService} from "../../sevices/carService";

const Car = () => {
    const [car,setCar ] = useState({ });

    useEffect(() => {

        carService.getImage().then(value => setCar(value))

    }, []);

    const Update = () => {
        carService.getImage().then(value => setCar(value))
    }


    return (
        <div className={css.Wrap}>
             <div className={css.item}><img src={car} alt="car"/></div>
             <button onClick={()=>{Update()}}>Update</button>
        </div>
    );
};

export {Car};