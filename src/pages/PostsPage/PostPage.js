import React, {useEffect, useState} from "react";
import {Outlet, Link} from "react-router-dom";

import {postService} from "../../sevices/post.service";
import css from "../page.module.css"

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        postService.getAll().then(value => setPosts([...value]));

    }, [])
    return (

        <section className={css.TargetAllPosts}>
            <div className={css.WrapPostPage}>
                {posts.map(posts => <div className={css.PostsPages} key={posts.id}>
                    <p>ID :{posts.id}</p>
                    <p>Title :{posts.title}</p>
                    <Link to={posts.id.toString()} state={{posts}}>
                        <button>Details</button>
                    </Link>

                </div>)}

            </div>
            <Outlet/>
        </section>
    );
};

export {PostPage};