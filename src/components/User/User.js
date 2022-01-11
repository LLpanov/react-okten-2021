import React from 'react';



const User = (props) => {
    const {id, name, username, email} = props;
    return (
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Username: {username}</li>
                <li>Post :{email}</li>
            </ul>

    );
};

export default User;