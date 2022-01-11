import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response))
    }, []);
    return (
        <div className={'WrapPost'}>
            {posts.map(response => <Post userId={response.userId} id={response.id}
            title={response.title} body={response.body}/>)}
        </div>
    );
};

export default Posts;