import React from 'react'
import CustomHook from './CustomHook'

function CustomHookTwo() {
 const[count,increment,decrement,reset]=CustomHook(10)
    return (
        <div>
            <div><h1>count={count}</h1></div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>            

        </div>
    )
}

export default CustomHookTwo