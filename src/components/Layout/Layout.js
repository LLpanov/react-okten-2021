import React from 'react';
import {Outlet} from "react-router-dom";

import "../Header/Header.css"
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={'Outlet'}><Outlet/></div>

        </>

    )
        ;
};

export default Layout;