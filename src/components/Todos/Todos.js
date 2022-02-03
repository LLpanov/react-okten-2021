import React from "react";
import {useSelector} from "react-redux";

import "./Todos.css";
import {Todo} from "../Todo/Todo";

const Todos = () => {

    const {todos} = useSelector(state => state['todo']);

    return (
        <div className={'WrapTodos'}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            <hr/>
        </div>
    );
};

export {Todos};