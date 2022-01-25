import React, {useEffect} from "react";

import css from "../components.module.css"
import {useForm} from "react-hook-form";
import {CarService} from "../../sevices/car.service";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";


const Form = ({update, carChange: {id, model, price, year}}) => {
    const {register, handleSubmit, setValue} = useForm();

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)

    }, [id]);
    const push = async (car) => {
        try {
            let newCar
            if (id) {
                newCar = await CarService.updateById(id, car);
            } else {

                newCar = await CarService.create(car);
            }
            update(newCar);
        } catch (error) {

            console.log(error.response.data);
        }

    }

    return (
        <div className={css.WrapForms}>
            <form>
                <label>Model<input type="text" defaultValue={''} {...register('model')}/> </label>
                <label>Price<input type="text" defaultValue={''} {...register('price')}/> </label>
                <label>Year <input type="text" defaultValue={''} {...register('year')}/> </label>
                <Button variant="contained" onClick={handleSubmit(push)} endIcon={<SendIcon />}>Send</Button>
            </form>


        </div>
    );
};

export {Form};