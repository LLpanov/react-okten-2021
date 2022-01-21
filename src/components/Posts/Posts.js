import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div className={'wrapDetails'}>

            <Link to={id.toString()} state={post}> Title:{title} </Link>


        </div>
    );
};

export default Posts;