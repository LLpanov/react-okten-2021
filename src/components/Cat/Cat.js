import React, {useEffect, useState} from "react";

import {catService} from "../../sevices/cat.service";
import css from "../copmponents.module.css";

const Cat = () => {
    const [cat, setCat] = useState({ });
    console.log(cat)
    useEffect(() => {
        catService.getImage().then(value => setCat(value))


    }, []);
    const Update = () => {
        catService.getImage().then(value => setCat(value))
    }
    return (
        <div>
            <div className={css.Wrap}>
                <div className={css.item}>
                    {<img src={cat} alt="Cat"/>}
                </div>
                <button onClick={() => {Update()}}>Update </button>
            </div>
        </div>
    );
}

export {Cat};
