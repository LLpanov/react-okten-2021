import React from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from "../components.module.css"

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>

        </>
    );
};

export {Layout};