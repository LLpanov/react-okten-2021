import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
    );
};

export default Header;