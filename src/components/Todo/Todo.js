import React from "react";
import {useDispatch} from "react-redux";

import {changeStatus, del} from "../../store";
import "./Todo.css"


const Todo = ({todo: {id, name, status}}) => {

    const dispatch = useDispatch();

    return (
        <div className={'WrapTodo'}>
            <input type="checkbox" value={status} onChange={()=>{dispatch(changeStatus(id))}}/>
            <p className={status?'Cross':''}>{name}</p>
            <button onClick={()=>{dispatch(del(id))}}>delete</button>
        </div>
    );
};

export {Todo};