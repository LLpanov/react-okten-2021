import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import "./Cars.css"
import {getAllCars} from "../../store";
import {Car} from "../index";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())


    }, [])

    return (
        <div className={'TargetCar'}>
            {status === 'pending' && <h2>loading..</h2>}
            {error && <h2 style={{color: 'red'}}>backend invalid</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};