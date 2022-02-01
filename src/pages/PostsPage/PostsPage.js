import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {Posts} from "../../components";
import "./PostPage.css"
import {getAllPost} from "../../store";

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPost());

    }, [])


    return (
        <div className={'TargetPost'}>

            {status === 'pending' && <h3>loading..</h3>}
            {error && <h3 style={{color: 'red'}}>backend invalid</h3>}
            {posts.map(posts => <Posts key={posts.id} posts={posts}/>)}

        </div>
    );
};

export {PostsPage};