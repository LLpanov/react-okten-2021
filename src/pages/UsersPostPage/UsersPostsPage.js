import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../sevices/post.service";
import './UserPostPage.css'

const UsersPostsPage = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();
    useEffect(() => {
        postService.getById(id).then(value => setPost({...value}));
    }, [])
    return (
        <>
            <div className={'PostPage'}>
                {
                    post && <div className={'singlePosts'}>
                        <li>Id:{post.id}</li>
                        <li>UserID:{post.userId}</li>
                        <li>Tile:{post.title}</li>
                        <li>Body:{post.body}</li>
                    </div>}
            </div>
        </>
    );
};

export default UsersPostsPage;