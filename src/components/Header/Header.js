import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Wrap}>
            <h4>MovieDB</h4>
            <NavLink to={'/'}>Movie</NavLink>
            <NavLink to={'genre'}>Genre</NavLink>
            <form><input type="text" placeholder={'search...'}/></form>
        </div>
    );
};

export {Header};