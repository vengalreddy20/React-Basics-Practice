import React ,{useEffect} from 'react'


function Ref() {
    const ref=React.createRef();
    useEffect(() => {
        console.log(ref)
        ref.current.focus()
       
    }, [ref])
    return (
        <div>
            <input ref={ref} />
            
        </div>
    )
}

export default Ref
