import React, { Component } from 'react'
import axios from 'axios'

export class GetData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        
        .catch(err =>{
            console.log(err)
            this.setState({error: 'error occcuring' })
        })
    }
    
    render() {
        const{posts,error}=this.state
        return (
            <div>
                {posts.map(post =><div key={post.id}>{post.title}</div>)}

                {error?<div>{error}</div> : null}

            </div>
        )
    }
}

export default GetData
