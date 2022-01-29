import React, {useEffect, useState} from "react";

import css from "../copmponents.module.css";
import {notebookService} from "../../sevices/notebookService";

const Notebook = () => {
    const [notebook, setNotebook] = useState({});

    useEffect(() => {


        notebookService.getImage().then(value => setNotebook(value));

    }, [])

    const Update = () => {
        notebookService.getImage().then(value => setNotebook(value));

    };


    return (
        <div className={css.Wrap}>
            <div className={css.item}>
                <img src={notebook} alt="notebook"/>
            </div>
            <button onClick={() => {Update()}}>Update</button>
        </div>
    );
};

export {Notebook};