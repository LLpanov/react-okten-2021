import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import {userService} from "../../sevices/users.service";
import css from "../page.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))

    }, [])

    return (
        <section className={css.Users}>
            <div className={css.WrapUsersPage}>
                <div className={css.TargetUsers}>{users.map(users => <p key={users.id} className={css.UsersPage}>
                    {users.id}.
                    {users.name}
                    <Link to={users.id.toString()} state={{users}}>
                        <button>Details</button>
                    </Link>

                    <Link to={`${users.id.toString()}/albums`} >
                        <button>Albums</button>
                    </Link>
                </p>)}
                </div>
                <Outlet/>
            </div>
        </section>
    );
};

export {UsersPage};