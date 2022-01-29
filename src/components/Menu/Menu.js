import React from "react";

import "./Menu.css"
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={'TargetMenu'}>
            <NavLink to='/car'><button>Car</button></NavLink>
            <NavLink to='/cat'><button>Cat</button></NavLink>
            <NavLink to='/dog'><button>Dog</button></NavLink>
            <NavLink to='/girl'><button>Girl</button></NavLink>
            <NavLink to='/notebook'><button>Notebook</button></NavLink>

        </div>
    );
};

export {Menu} ;