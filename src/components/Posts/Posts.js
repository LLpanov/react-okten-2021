import React, {useEffect, useState} from 'react';

import Post from "./Post";
import {postService} from "../../services/posts.service";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getById(userId)
            .then(value => setPosts(value))
    }, [userId])

    return (
        <>


            {
                posts.map(value => <Post key={value.id} userId={value.userId} title={value.title} body={value.body}/>)
            }

        </>
    );
};

export default Posts;