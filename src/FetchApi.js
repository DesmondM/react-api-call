import React, {useState, useEffect} from 'react'
import Loading from './Loading';
import Posts from './Posts';
const url = 'https://jsonplaceholder.typicode.com/posts/';

const FetchApi = (props) => {
     const [posts, setPosts] = useState([])
     const [loading, setLoading] = useState(false)
    
    const removePost = (id)=>{
        const newPosts = posts.filter((post)=>post.id!==id);
        setPosts(newPosts);

    };

    const fetchPost = async ()=>{
        setLoading(true)
        
        try{
            const response = await fetch(url);
            const posts = await response.json();

            console.log(posts)
            setPosts(posts);
            setLoading(false);
        }catch (error){
            setLoading(false);
            console.log(error)
        };

    }

     useEffect(()=>{
            fetchPost();
        }, []);
    
     /* const apiGet =()=>{
        fetch(url)
        .then((response)=>response.json())  // returns as a promise that resolves with parsing body data text as json
        .then((json)=>{
            console.log(json);
            setPosts(json);
        });
    }; */

    const apiGet2 = async ()=>{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
         setPosts(json);
    }
    
    if(loading){
        return (
        <div>
            <Loading/>
           
        </div>
    );
    }

if(posts.length===0){
    return(
        <div>
            <h2>No More Posts Left...</h2>
            <button onClick={fetchPost}> Refresh</button>
        </div>
    )
}

 return (
        <div>
            <Posts posts ={posts} removePost= {removePost}/>
            {/*  <div>{JSON.stringify(posts)}</div> */} 
        </div>
    );
    }
   /*  return (
        <div>
            My Api <br/>
            <button onClick={apiGet}>{props.children}</button>
            <button onClick={apiGet2}>Async Version</button>
            <div>{JSON.stringify(posts)}</div>
        </div>
    )
}
 */
export default FetchApi
