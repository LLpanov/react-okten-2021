import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from "../page.module.css"
import {userService} from "../../sevices/users.service";

const UserPostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        userService.getPosts(id).then(value => setPosts([...value]))

    }, [id])

    return (

        <section>
            <div>
                {posts.map(post => <div className={css.UserPost} key={post.id}>

                    <p>UserID: {post.postId}</p>
                    <p>Id: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>

                </div>)}
            </div>
        </section>
    );

}
export {UserPostsPage};