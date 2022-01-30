import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, reset, handleSubmit} = useForm();

    return (
        <div>
            <form onClick={handleSubmit}>
                <label>Model<input type="text" defaultValue={''} {...register('price')} /></label>
                <label>Price<input type="text" defaultValue={''} {...register('model')} /></label>
                <label>Year<input type="text" defaultValue={''} {...register('year')} /></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};