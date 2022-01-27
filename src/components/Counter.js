import React, {useReducer} from 'react';
import './Counter.css'


const reducer = (state, action) => {

    switch (action.type) {
        case 'Inc' :
            return {...state, count1: state.count1 + 1};

        case 'Plus' :
            return {...state, count2: state.count2 + 1};

        case 'Sum' :
            return {...state, count3: state.count3 + 1};

        case 'Dec' :
            return {...state, count1: state.count1 - 1};

        case 'Minus' :
            return {...state, count2: state.count2 - 1}

        case 'Dif' :
            return {...state, count3: state.count3 - 1};

        case 'Reset':
            return {...state, count1: 0};

        case 'Default':
            return {...state, count2: 0};

        case 'Zero':
            return {...state, count3: 0};


        default:
            throw new Error("LOL");
    }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={'HappyTreeFriends'}>
            <div className={'One'}>
                <div> Counter: {state.count1}</div>
                <button onClick={() => dispatch({type: 'Inc'})}>Inc</button>
                <button onClick={() => dispatch({type: 'Dec'})}>Dec</button>
                <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
            </div>
            <div className={'Two'}>
                <div> Counter:{state.count2}</div>
                <button onClick={() => dispatch({type: 'Plus'})}>Inc</button>
                <button onClick={() => dispatch({type: 'Minus'})}>Dec</button>
                <button onClick={() => dispatch({type: 'Default'})}>Reset</button>
            </div>
            <div className={'Three'}>
                <div>Counter: {state.count3}</div>
                <button onClick={() => dispatch({type: 'Sum'})}>Inc</button>
                <button onClick={() => dispatch({type: 'Dif'})}>Dec</button>
                <button onClick={() => dispatch({type: 'Zero'})}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;