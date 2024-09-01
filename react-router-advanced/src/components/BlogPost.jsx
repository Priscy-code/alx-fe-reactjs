import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost =() => {
    const {postId} = useParams();

    return(
        <div>Blog Post Content for id {postId}</div>
    )
}

export default BlogPost;