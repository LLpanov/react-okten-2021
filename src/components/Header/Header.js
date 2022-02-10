import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'


const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'logo'}>Movie App</div>
            </Link>
            <div className={'user-image'}><img src="https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp" alt='A'/></div>

        </div>
    );
};
export {Header};

