import React from 'react';

import './User.css'

const User = ({user}) => {
    return (
        <div className={'userWrap'}>
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>

            </ul>
        </div>
    );
};

export default User;