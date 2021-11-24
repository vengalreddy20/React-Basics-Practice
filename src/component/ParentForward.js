import React, { Component } from 'react'
import Forward from './Forward'

export class ParentForward extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    clickHandle=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <Forward ref={this.inputRef} />
                <button onClick={this.clickHandle}>focus Ref</button>
            </div>
        )
    }
}

export default ParentForward
