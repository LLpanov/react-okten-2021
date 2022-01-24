import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

import css from "../page.module.css"

const UserDetailsPage = () => {
    const {state: {users}} = useLocation();

    return (

        <div className={css.SingleUsers}>
            <div className={css.User}><p> Id: {users.id}</p>
                <p> UserName: {users.username}</p>
                <p> Name: {users.name}</p>
                <p> Email: {users.email}</p>
                <Link to={'posts'} state={{users}}><button>Posts</button></Link></div>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};