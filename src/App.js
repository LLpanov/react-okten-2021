import React, {useEffect, useState} from 'react';

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filterUsers, setfilerUsers] = useState([]);


    useEffect(()=>{
        userService.getAll().then(value => {
            setUsers([...value],setfilerUsers([...value]))
        });



    },[])




    const getFilter = (data) => {
        let filterArray = [...users];

        if (data.name){
            filterArray =filterArray.filter(users => users.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username){
            filterArray =filterArray.filter(users => users.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email){
            filterArray =filterArray.filter(users => users.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setfilerUsers(filterArray)

    };

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filterUsers}/>

        </div>
    );
};

export default App;