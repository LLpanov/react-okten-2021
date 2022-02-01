import React from "react";

import "./Comments.css"

const Comments = ({comments: {postId, id, name, email, body}}) => {
    return (
        <div className={'CommentsWrap'}>
            <p>PostId:{postId} </p>
            <p>Id:{id} </p>
            <p>Name:{name} </p>
            <p>Email:{email} </p>
            <p>Body:{body} </p>
        </div>
    );
};

export {Comments};