import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

import css from "../page.module.css"

const PostsDetailsPage = () => {
    const {state: {posts}} = useLocation();
    return (
        <div className={css.WrapPostsDetails}>
            <div className={css.PostDet}><p> Id:{posts.id}</p>
                <p> UserId:{posts.userId}</p>
                <p> Title:{posts.title}</p>
                <p> Body :{posts.body}</p>
                <Link to={'comments'} state={{posts}}>
                    <button>Comments</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsDetailsPage};