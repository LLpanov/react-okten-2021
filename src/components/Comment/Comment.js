import React from 'react';


const Comment = (props) => {
    const {postId,id,name,email,body} = props;
    return (

       <ul>
           <li>PostiD: {postId}</li>
           <li>ID: {id}</li>
           <li>Name: {name}</li>
           <li>Post: {email}</li>
           <li>Body: {body}</li>
       </ul>

    );
};

export default Comment;