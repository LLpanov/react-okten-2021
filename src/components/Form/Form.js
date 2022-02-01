import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {createCar, UpdateByID} from "../../store";
import {carValidator} from "../../validators/car.validator";

const Form = () => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });
    const {carForUpdate} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();


    const Submit = (data) => {
        if (carForUpdate?.id) {
            dispatch(UpdateByID({id: carForUpdate.id, car: data}))
            reset()

        } else {

            dispatch(createCar({data}));
            reset();
        }
    };


    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);

        }


    }, [carForUpdate]);

    return (
        <div className={'error'}>
            <form onSubmit={handleSubmit(Submit)}>
                <label>Model: <input type="text"  {...register('model')} /></label>
                {errors.model && <span>{errors.model.message}</span>}
                <label>Price: <input type="text"  {...register('price')} /></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>Year: <input type="text"  {...register('year')} /></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{carForUpdate?.id ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
};

export {Form};