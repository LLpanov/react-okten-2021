import React from "react";
import {NavLink} from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <div className={'Nav'}>
           <NavLink to={'cars'}>Cars</NavLink>
           <NavLink to={'users'}>Users</NavLink>
           <NavLink to={'posts'}>Posts</NavLink>
           <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};