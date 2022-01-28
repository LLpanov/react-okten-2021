import React from "react";

import "./Dogs.css";

const Dogs = ({dog, dispatch}) => {
    console.log(dog)
    return (
        <>
            <div className={'WrapDogs'}>
                <p>Dog:{dog.name}</p>
                <button onClick={() => dispatch({type: 'Del', target: 'dog', payload: dog.id})}>delete</button>
            </div>

        </>
    );
};

export default Dogs;