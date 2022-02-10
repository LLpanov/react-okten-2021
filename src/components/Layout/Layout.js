import React from 'react';

import {Header} from '../Header/Header';
import {Outlet} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import '../../App.scss';

const Layout = () => {
    return (
        <div className={'container'}>
            <Header/>
            <div className={'outlet'}><Outlet/></div>
            <Footer/>
        </div>
    );
};

export {Layout};