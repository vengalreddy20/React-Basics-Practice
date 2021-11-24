import React,{useState,useMemo} from 'react'

function UseMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne=()=>{
        let i=0;
        while(i<400000) i++
        setCountOne(countOne+1)
    }
    const incrementTwo=()=>{
        setCountTwo(countTwo+1)
    }
    
   const isEven=useMemo(()=>{
    let i=0;
    while(i<400000000) i++
    return countOne %2 ===0},[countOne])

    return (
        <div>
            <div>
                {countOne}--- <button onClick={incrementOne}>incrementOne</button>
                <span>{isEven ? 'even' :'odd'}</span>
            </div>
            <div>
              {countTwo}--- <button onClick={incrementTwo}>incrementTwo</button>
              
            </div>
          
         
            
        </div>
    )
}

export default UseMemo
