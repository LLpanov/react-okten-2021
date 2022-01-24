import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../../sevices/post.service";
import css from "../page.module.css"

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);

    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        postService.getUserComments(id).then(value => setComments([...value]));

    }, [id])
    return (
        <div className={css.WrapComments}>
            {comments.map(comment => <div className={css.Comments} key={comment.id}>
                <p>PostId: {comment.postId}</p>
                <p>Id: {comment.id} </p>
                <p>Name: {comment.name}</p>
                <p>Em@il: {comment.email}</p>
                <p>Body: {comment.body}</p>
            </div>)}
        </div>
    );
};

export {PostCommentsPage};