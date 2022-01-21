import React from 'react';
import {Link} from "react-router-dom";

import './Users.css'
const Users = ({user}) => {
    const {id, name} = user;

    return (
        <div className={'Users'}>
            <Link to={id.toString()} state={user}> Name:{name}</Link>
        </div>
    );
};

export default Users;