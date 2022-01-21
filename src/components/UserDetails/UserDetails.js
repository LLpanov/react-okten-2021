import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../sevices/user.service";
import SingleUsers from "../singleUsers/singleUsers";

const UserDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        userService.geByID(id).then(value => setUser({...value}))

    }, [id])


    return (
        <div className={'TargetUsers'}>

            {user && (<SingleUsers key={user.id} users={user}/>)}
            <Outlet/>
        </div>
    );
};

export default UserDetails;