import React from "react";

import "./Users.css";

const Users = ({users: {id, name, username, email}}) => {

    return (
        <div className={'UsersWrap'}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>UserName: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export {Users};