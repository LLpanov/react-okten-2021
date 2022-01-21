import React from 'react';
import {Link} from "react-router-dom";

import './singleUsers.css'

const SingleUsers = ({users}) => {
    const {id, name, username, email} = users;
    return (
        <>
            <ul className={"WrapSingleUser"}>
                <li>ID :{id}</li>
                <li>Name :{name}</li>
                <li>Username: {username}</li>
                <li>Email:{email}</li>
                <Link to={'posts'} state={{id}}>
                    <button>Posts</button>
                </Link>
            </ul>
        </>
    );

};

export default SingleUsers;