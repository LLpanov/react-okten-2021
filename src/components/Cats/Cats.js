import React from "react";

import "./Cats.css";

const Cats = ({cat, dispatch}) => {
    return (
        <>
            <div className={'WrapCats'}>
                <p>Cats:{cat.name}</p>
                <button onClick={() => dispatch({type: 'Del', target: 'cat', payload: cat.id})}>delete</button>
            </div>

        </>
    );
};

export default Cats;