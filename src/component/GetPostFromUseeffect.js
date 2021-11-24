import axios from 'axios';
import React,{useEffect,useState} from 'react'

function GetPostFromUseeffect() {
    const[post,setPost]=useState([]);
    const[id,setId]=useState(1);
    const[fromButton,setFromButton]=useState(1);
    const changeHandler=()=>{
        setFromButton(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)})
        .catch(err=>console.log(err))
    },[fromButton])
    return (
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={changeHandler}>fetch data</button>
            <h2>{post.title}</h2>
            
        </div>
    )
}

export default GetPostFromUseeffect
