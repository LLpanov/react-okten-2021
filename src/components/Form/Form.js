import React from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import "./Form.css";
import {addTodo} from "../../store";

const Form = () => {
    const {register, handleSubmit, reset,} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTodo({todo: data.todo}));
        reset();
    }

    return (
        <form className={'WrapFrom'} onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'todo'} defaultValue={''} {...register('todo')} />
            <button>save</button>
        </form>
    );
};

export {Form};