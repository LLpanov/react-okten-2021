import React, {useState} from 'react';
import User from "../User/User";

const Users = ({users}) => {



    return (
        <div>
            {
                users.map(users => <User key={users.id} user={users} />)

            }
        </div>
    );
};

export default Users;