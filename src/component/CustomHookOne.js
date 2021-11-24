import React from 'react'
import CustomHook from './CustomHook'

function CustomHookOne() {
 const[count,increment,decrement,reset]=CustomHook()
    return (
        <div>
            <div><h1>count={count}</h1></div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>            

        </div>
    )
}

export default CustomHookOne
