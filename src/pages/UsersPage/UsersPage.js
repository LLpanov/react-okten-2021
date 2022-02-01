import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {Users} from "../../components";
import "./UsersPage.css"

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['usersReducer']);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());

    }, [])


    return (
        <div className={'TargetUsers'}>
            {status === 'pending' && <h2>loading..</h2>}
            {error && <h2 style={{color: 'red'}}>backend invalid</h2>}
            {users.map(users => <Users key={users.id} users={users}/>)}

        </div>
    );
};

export {UsersPage};