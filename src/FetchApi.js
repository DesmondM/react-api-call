import React, {useState} from 'react'

const FetchApi = (props) => {
     const [data, setData] = useState([])
    const apiGet =()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response)=>response.json())  // returns as a promise that resolves with parsing body data text as json
        .then((json)=>{
            console.log(json);
            setData(json);
        });
    };

    const apiGet2 = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const json = await response.json();
        console.log(json);
    }
    
    return (
        <div>
            My Api <br/>
            <button onClick={apiGet}>{props.children}</button>
            <button onClick={apiGet2}>Async Version</button>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default FetchApi
