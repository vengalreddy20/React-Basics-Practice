import axios from 'axios'
import React,{useState,useEffect} from 'react'

function FetchingData() {
    const[post,setPost]=useState({})
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch((err)=>{
              setLoading(false)
              setError('went something wrong!')
              setPost({})
        })
            
    },[])
    return (

        
        <div>
            {loading ? 'loading':post.title}
            {error?error : null}
            
        </div>
    )
}

export default FetchingData
