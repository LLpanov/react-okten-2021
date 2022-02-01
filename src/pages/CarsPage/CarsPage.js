import React from "react";

import {Cars, Form} from "../../components";
import "./CarsPage.css"

const CarsPage = () => {
    return (
        <>
            <div className={'WrapApp'}>
                <Form/>
                <hr/>
                <Cars/>
            </div>
        </>
    );
};

export {CarsPage};