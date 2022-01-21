import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../sevices/comments.service";
import './PostCommentsPage.css'

const PostCommentsPage = () => {
    const [comments, setComments] = useState({});
    const {id} = useParams();

    useEffect(() => {
        commentsService.getById(id).then(value => setComments({...value}))
    }, [id])

    return (
        <div className={'WrapComments'}>
            {comments &&
            <div className={'singleComments'}>
                <p>PostID:{comments.postId}</p>
                <p>ID:{comments.id}</p>
                <p>Name:{comments.name}</p>
                <p>Email:{comments.email}</p>
                <p>Body:{comments.body}</p>

            </div>}

        </div>
    );
}

export default PostCommentsPage;