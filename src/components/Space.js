import React from 'react';


const Space = (props) => {
    const {name, year, pic} = props;
    return (
        <div className={'wrap'}>
            <div className={'items'}>
                <h2>Mission => {name}</h2>
                <h3>When => {year}</h3></div>
            {pic}
        </div>
    );
};

export default Space;