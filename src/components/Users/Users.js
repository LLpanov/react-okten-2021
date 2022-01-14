import React, {useEffect, useState} from 'react';

import User from "../User/User"
import UserDetail from "../UserDetails/UserDetail";
import Posts from "../Posts/Posts";
import {userService} from "../../services/user.service";


const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));

    }, []);

    const getDetails = (singleUser) => {
        setUser(singleUser)
    }
    const getUserId = (id) => {
      setUserId(id)
    }

    return (
        <div className={'target'}>
            <div className={'UserWrap'}>
                {
                    users.map(value => <User key={value.id} user={value} getDeatails={getDetails}/>)
                }
            </div>

          <UserDetail user={user} getUserId={getUserId}/>


            <div className={'WrapPost'}> <Posts userId={userId}/></div>
        </div>
    );
}

export default Users;

