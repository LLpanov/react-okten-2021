import React from "react";
import {Outlet} from "react-router-dom";

import {Menu} from "../Menu/Menu";

const Layout = () => {
    return (
        <>
            <Menu/>
            <div><Outlet/></div>
        </>
    );
};

export {Layout};