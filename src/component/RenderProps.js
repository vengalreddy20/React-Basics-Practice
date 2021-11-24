import React, { Component } from 'react'

export class RenderProps extends Component {
    render() {
        return (
            <div>
                {this.props.name()}
            </div>
        )
    }
}

export default RenderProps
