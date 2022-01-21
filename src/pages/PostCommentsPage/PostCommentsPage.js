import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../sevices/comments.service";
import './PostCommentsPage.css'

const PostCommentsPage = () => {
    const [comments, setComments] = useState({});
    const {id} = useParams();

    useEffect(() => {
        commentsService.getById(id).then(value => setComments({...value}))
    }, [])

    return (
        <div className={'WrapComments'}>
            {comments &&
            <div
                className={'singleComments'}>
                <p>{comments.name}</p>
                <p>asddadadasdasdasdasdadsadadasdafsfa</p>
            </div>}

        </div>
    );
}

export default PostCommentsPage;