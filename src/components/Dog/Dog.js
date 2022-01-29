import React, {useEffect, useState} from "react";

import css from "../copmponents.module.css";
import {dogService} from "../../sevices/dogService";

const Dog = () => {

    const [dog, setDog] = useState({});

    useEffect(() => {
        dogService.getImage().then(value => setDog(value));

    }, [])

    const Update = () => {
        dogService.getImage().then(value => setDog(value));

    }

    return (

        <div className={css.Wrap}>
            <div className={css.item}>
                <img src={dog} alt="dog"/>
            </div>
            <button onClick={() =>{Update()}}>Update</button>
        </div>

    );
};

export {Dog};