import React from 'react';

import './Post.css'

const Post = ({userId, title, body}) => {
    return (
        <div className={'EnterPost'}>
            <h3>UserID :{userId}</h3>
            <h3>Title :{title}</h3>
            <h3>Body :{body}</h3>
        </div>
    );
};

export default Post;