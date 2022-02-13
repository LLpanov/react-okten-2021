import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss'

import './Header.scss'

const Header = ({switchTheme,theme}) => {
    const ref = useRef();



    const changeSwitcher = (ref) => {
        ref.target.classList.add('fas fa-toggle-off');


    }
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className={'logo'}>Movie App</div>
            </Link>
            <div className={'user-image'}><img src="https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp" alt='A'/>
                <div className={'theme-toggle'}><i onClick={changeSwitcher}  ref={ref} className={'fas fa-toggle-on'}> </i></div>
            </div>


        </div>
    );
};
export {Header};

