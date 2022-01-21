import React, {useEffect, useState} from 'react';

import {userService} from "../../sevices/user.service";
import Users from "../../components/Users/Users";
import './UsersPage.css'
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'WrapUsers'}>
            <div className={'UsersTarget'}>
                {
                    users.map(user => <Users key={user.id} user={user}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default UsersPage;