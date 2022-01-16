import React from 'react';
import {useForm} from "react-hook-form";

import './Form.css'

const Form = ({getFilter}) => {
    const {
        register, handleSubmit
    } = useForm();


    return (
        <div className={'formWrap'}>
            <form>

                <label>
                    Name :
                    <input type="text" defaultValue={''} {...register('name')}/>
                </label>

                <label>
                    Username :
                    <input type="text" defaultValue={''} {...register('username')}/>
                </label>

                <label>
                    Email :
                    <input type="text" defaultValue={''} {...register('email')}/>
                </label>

                <button onClick={handleSubmit(getFilter)}>Find</button>

            </form>
        </div>
    );
};


export default Form;