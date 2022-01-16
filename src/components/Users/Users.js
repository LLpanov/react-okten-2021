import React from 'react';

import User from "../User/User";
import '../User/User.css'

const Users = ({filterUsers:users}) => {
    return (
        <div className={'UserWraps'}>
            {
                users.map(users => <User key={users.id} user={users}/>)
            }
        </div>
    );
};

export default Users;