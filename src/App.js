import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {Form, Todos} from "./components";
import "./App.css";

const App = () => {

    const {todos} = useSelector(state => state['todo']);

    const [count, setCount] = useState({all: 0, completed:0});

    useEffect( () =>  {

      setCount({...count,all:todos.length,completed: todos.filter(item => item.status ===true).length})
  },[todos])

    return (
        <div className={'Target'}>
            <div className={'WrapCount'}>All:{count.all} Completed : {count.completed}</div>
            <Form/>
            <hr/>
            <Todos/>
        </div>
    );
}

export default App;