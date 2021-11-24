
import React from 'react';
import {useState} from 'react';

function Forms(props) {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
     const onSubmit =()=>{
         console.log(
             {email,password});
     }
    return (
        <div>
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter email"/>
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="enter password" />
            <button onClick={onSubmit}>submit</button>
            
        </div>
    )
}

export default Forms

