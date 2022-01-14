import React from 'react';

import './User.css'


const User = ({user, getDeatails}) => {
    return (

        <div  className={'EnterUsers'}>
            <h3>{user.name}</h3>
            <button onClick={() => getDeatails(user)}>info</button>


        </div>
    );
};

export default User;

