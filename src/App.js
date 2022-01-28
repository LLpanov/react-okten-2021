import {useForm} from "react-hook-form";
import {useReducer} from "react";

import "./App.css";
import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (action.target === 'dog')
                return {...state, dogs: [...state.dogs, action.payload]};
            else {
                if (action.target === 'cat')
                    return {...state, cats: [...state.cats, action.payload]}
            }
            return {state};
        case 'Del':
            if (action.target === 'dog') {
                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};

            }

            if (action.target === 'cat')
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
            return {state};

        default: {
            throw new Error('Lol');
        }
    }


}

const App = () => {
    const {register, handleSubmit, reset} = useForm();
    const [{dogs, cats}, dispatch] = useReducer(reducer, {cats: [], dogs: []});


    const submit = ({Dog, Cat}) => {
        if (Dog) {
            dispatch({type: 'add', target: 'dog', payload: {name: Dog, id: new Date().getTime()}});
        }
        if (Cat) {
            dispatch({type: 'add', target: 'cat', payload: {name: Cat, id: new Date().getTime()}});

        }
        reset();
    }

    return (
        <div>
            <div className={'Target'}>
                <form onSubmit={handleSubmit(submit)}>
                    <label>AddDog: <input type="text" defaultValue={''} {...register('Dog')}/></label>
                    <button>save</button>
                    <label>AddCats: <input type="text" defaultValue={''} {...register('Cat')}/></label>
                    <button>save</button>
                </form>
            </div>
            <hr/>
            <div className={'animals'}>
                <div>{dogs.map(dog => <Dogs key={dog.id} dispatch={dispatch} dog={dog}/>)}</div>
                <div>{cats.map(cat => <Cats key={cat.id} dispatch={dispatch} cat={cat}/>)}</div>
            </div>
        </div>

    );
};

export default App;