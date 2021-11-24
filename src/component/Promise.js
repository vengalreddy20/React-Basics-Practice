import React,{useEffect,useState} from "react";

const Promise =()=> {
 const[futureData,setFutureData]=useState("");
  

  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) =>{setFutureData(data)})


    .catch(() => console.log("catch block called"));

  },[]) 
    
   
return (
    
   
      <div>
          {console.log(futureData)}
         {futureData.map(item =><div>{item.title}</div>)}
          
      </div>
    );
  
}
export default Promise
