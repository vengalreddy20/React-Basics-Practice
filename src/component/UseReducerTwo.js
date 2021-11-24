import React,{useReducer} from 'react'


const initialstate={
    firstcount:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return {firstcount:state.firstcount+1}
        case 'decrement':
        return {firstcount:state.firstcount-1}
        case 'increment5':
        return {firstcount:state.firstcount+5}
        case 'decrement5':
        return {firstcount:state.firstcount-5}
    
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
            <h1>{count.firstcount}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
            <button onClick={()=>dispatch({type:'increment5'})}>increment5</button>
            <button onClick={()=>dispatch({type:'decrement5'})}>decrement5</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
            
        </div>
    )
}

export default UseReducer