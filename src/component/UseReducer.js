import React,{useReducer} from 'react'


const initialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
        return state+1
        case 'decrement':
        return state-1
    
        case 'reset':
        return initialstate
        case 'default':
            return state
    
    
    }

}

function UseReducer() {
 const[count,dispatch]=useReducer(reducer,initialstate)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
            
        </div>
    )
}

export default UseReducer
