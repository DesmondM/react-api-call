import React from 'react'

const Post = ({userId, id, title, removePost}) => {
    return (
        <div>
           <h4>{userId}</h4> 
            <h1>{title}</h1> 
            <h2>{id}</h2>
            <button onClick={()=>removePost(id)}>Remove</button>
        </div>
    )
}

export default Post
