import React from "react";

import "./Posts.css"

const Posts = ({posts: {id, userId, title, body}}) => {
    return (
        <div className={'PostWrap'}>
            <p>Id: {id}</p>
            <p>UserID: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Posts};