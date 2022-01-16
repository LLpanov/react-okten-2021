import React, {useEffect, useState} from 'react';

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";


const App = () => {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(value => {
                setUsers([...value])
                setFilterUsers([...value]);

            });

    }, [])

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.includes(data.name));
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.includes(data.username));
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.includes(data.email));
        }
        setFilterUsers(filterArr);
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users filterUsers={filterUsers}/>

        </div>
    );
};

export default App;