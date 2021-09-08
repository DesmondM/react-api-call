import React from 'react'
import Post from './Post'

const Posts = ({posts, removePost}) => {
    return (
        <>
         <h1>Posts....</h1>
         {posts.map((post)=>{
             return <Post key ={post.id} {...post} removePost={removePost} ></Post>
         })}
        </>
    )
}

export default Posts
