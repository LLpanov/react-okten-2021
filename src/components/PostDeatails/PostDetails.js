import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../sevices/post.service";
import SinglePost from "../singlePosts/singlePost";
import "./PostDetail.css"

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    const {state} = useLocation();
    useEffect(() => {
        if (state) {
            setPost({...state})
            return
        }
        postService.getById(id).then(value => setPost({...value}))

    }, [id])

    return (
        <div className={'TargetComments'}>

            {post && (<SinglePost key={post.id} post={post}/>)}

            <Outlet/>

        </div>

    );
};

export default PostDetails;