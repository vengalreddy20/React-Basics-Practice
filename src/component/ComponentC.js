import React, { Component } from 'react'

import { UserConsumer } from './Context'

export class ComponentC extends Component {
    render() {
        return (
            
              <UserConsumer>
                  {username =>{
                     return <div>hello,{username}</div>
                  }}
              </UserConsumer>

        )
    }
}

export default ComponentC
