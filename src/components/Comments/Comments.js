import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";


const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response =>setComments(response))
    }, [])
    return (
        <div className={'WrapComment'}>
            {comments.map(response => <Comment postId={response.postId} id={response.id}
            name={response.name} email={response.email} body={response.body}/>)}
        </div>
    );
};

export default Comments;