import React from 'react';

const Post = (props) => {
    const {userId,id,title,body} = props;
    return (
        <div>
        <ul>
            <li>userID: {userId}</li>
            <li>Id: {id}</li>
            <li>Title: {title}</li>
            <li>Body: {body}</li>
        </ul>
        </div>
    );
};

export default Post;