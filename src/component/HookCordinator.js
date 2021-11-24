import React,{useEffect,useState} from 'react'

function HookCordinator() {
    const[x,setX]=useState(0);
    const[Y,setY]=useState(0)

    const addCordinator=(e)=>{
        console.log("cordinator called");
        setX(e.clientX)
        setY(e.clientY)
    }
    

    useEffect(() => {
        window.addEventListener('mousemove', addCordinator)
        
        return () => {
            console.log("unmount called")
            window.removeEventListener('mousemove', addCordinator)
        
        }
    }, [])
    return (
        <div>
            hook  x={x} - y={Y};
            
        </div>
    )
}

export default HookCordinator
