import React from "react";
import {useDispatch} from "react-redux";

import "./Car.css";
import {carToUpdate, deleteCars} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <ul className={'CarWrap'}>
            <li>Model:{model} </li>
            <li>Price: {price}</li>
            <li>Year: {year}</li>
            <button onClick={() => {
                dispatch(deleteCars({id}))
            }}>delete
            </button>
            <button onClick={() => dispatch(carToUpdate({car}))}>update</button>
        </ul>
    );
};

export {Car};