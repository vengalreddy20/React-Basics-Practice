import axios from 'axios'
import React, { Component } from 'react'

export class PostData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:"",
             password:""
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{console.log(response)})
        .catch(err=>{console.log(err)})
    }
    
    render() {
        return (
            <div>
                <div>
                    <input type="text" name="userId" value={this.userId} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type="password" name="password" value={this.password}  onChange={this.changeHandler} />
                </div>
                <button onClick={this.onSubmit}>submit</button>
                
            </div>
        )
    }
}

export default PostData
