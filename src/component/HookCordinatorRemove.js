import React,{useState} from 'react'
import HookCordinator from './HookCordinator'

function HookCordinatorRemove() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Delete Toggle </button>
            {display && <HookCordinator />}
            
        </div>
    )
}

export default HookCordinatorRemove
