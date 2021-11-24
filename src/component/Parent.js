import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"vengalreddy"
        }
    }
    changeContent(){
        alert(`hello ${this.state.message}`)
    }
    
    render() {
        return (
            <div>
               <Child  greetHandler={()=>this.changeContent()}/> 
            </div>
        )
    }
}

export default Parent
