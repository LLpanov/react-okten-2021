import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../sevices/post.service";
import Posts from "../../components/Posts/Posts";
import './PostsPage.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]));
    }, [])

    return (
        <div className={"wrapPosts"}>
            <div className={'TargetPosts'}>{
                posts.map(post => < Posts key={post.id} post={post}/>)
            }</div>
            <Outlet/>


        </div>
    );
};

export default PostsPage;