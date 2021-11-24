import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    post:{},
    error:''
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCHING_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
            case 'FETCHING_ERROR':
            return{
                loading:false,
                post:{},
                error:'went something wrong'

            }
            default:
                return state
    }

}



function FetchingDataUsingUseReducer() {
    const[state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response=>{
           dispatch({type:'FETCHING_SUCCESS', payload: response.data})
        })
        .catch(()=>{
            dispatch({type:'FETCHING_ERROR'})
              
        })
            
    },[])
 
    return (
        <div>
             {state.loading ? 'loading':state.post.title}
            {state.error ? state.error : null}
            
            
        </div>
    )
}

export default FetchingDataUsingUseReducer
