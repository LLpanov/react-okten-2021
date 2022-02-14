import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from "../Footer/Footer";
import '../../App.scss';

const Layout = ({theme, switchTheme}) => {
    return (
        <>
        <Header theme={theme} switchTheme={switchTheme}/>
            <div className={'container'}>
                <div className={'outlet'}><Outlet/></div>
            </div>
                <Footer/>
        </>
    );
};

export {Layout};