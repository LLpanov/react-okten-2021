import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
        </div>
    );
};

export default User;