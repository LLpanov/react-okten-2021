import React from 'react';

import "./singlePosts.css"
import {Link} from "react-router-dom";

const SinglePost = ({post}) => {
    const {id, userId, title, body} = post;


    return (
        <>

            <ul className={"WrapSinglePost"}>
                <li>ID :{id}</li>
                <li>UserID :{userId}</li>
                <li>Title: {title}</li>
                <li>Body :{body}</li>
                <Link to={'comments'} state={{id}}>
                    <button>Comments</button>
                </Link>
            </ul>

        </>
    );
};

export default SinglePost;