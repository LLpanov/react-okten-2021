import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))
    }, []);

    return (
        <div className={'WrapUser'}>
            {users.map(response => <User id={response.id} name={response.name} username={response.username}
                                         email={response.email}/>)}
        </div>
    );
};

export default Users;