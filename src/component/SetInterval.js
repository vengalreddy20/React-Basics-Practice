import React,{useEffect,useState} from 'react'

function SetInterval() {
    const [count, setCount] = useState(0);
    const interval=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const improve=setInterval(interval,1000)
        return ()=>{
            clearInterval(improve)
        }

    },[count])

    return (
        <div>
           <h1> {count}</h1>
            
        </div>
    )
}

export default SetInterval
