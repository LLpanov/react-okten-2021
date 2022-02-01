import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Comments} from "../../components";
import {getAllComment} from "../../store";
import "./CommentsPage.css"


const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComment())

    }, []);


    return (
        <div className={'TargetComments'}>
            {status === 'pending' && <h3>loading..</h3>}
            {error && <h3 style={{color: 'red'}}>backend invalid</h3>}
            {comments.map(comments => <Comments key={comments.id} comments={comments}/>)}
        </div>
    );
};

export {CommentsPage};