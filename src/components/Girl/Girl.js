import React, {useEffect, useState} from "react";

import css from "../copmponents.module.css";
import {girlService} from "../../sevices/girlService";

const Girl = () => {
    const [girl, setGirl] = useState({});

    useEffect(() => {
        girlService.getImage().then(value => setGirl(value));

    }, [])

    const Update = () => {
        girlService.getImage().then(value => setGirl(value));

    }

    return (
        <div className={css.Wrap}>
            <div className={css.item}>
                <img src={girl} alt="Girl"/>
            </div>
            <button onClick={()=> {Update()}}>Update</button>
        </div>
    );
};

export {Girl};