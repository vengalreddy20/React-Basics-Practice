import React from 'react'

const Forward =React.forwardRef((props,ref)=>{
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
}

)


export default Forward
